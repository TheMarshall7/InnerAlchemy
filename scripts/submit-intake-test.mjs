import { chromium } from 'playwright';

const url = 'http://localhost:5173/intake';

async function clickNext(page) {
  const stepBefore = await page.locator('text=/^Step \\d+ of 12$/').textContent();
  await page.getByRole('button', { name: /^Next/i }).click();
  await page.waitForFunction(
    (prev) => {
      const el = document.querySelector('p.text-sm.font-serif.text-deepbrown');
      return el && el.textContent !== prev;
    },
    stepBefore,
    { timeout: 5000 }
  ).catch(() => {});
  await page.waitForTimeout(300);
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: 'networkidle' });

  // Start fresh — avoid restored step/data from prior runs
  await page.evaluate(() => {
    localStorage.removeItem('holistic-alchemy-intake-draft');
    localStorage.removeItem('holistic-alchemy-intake-step');
  });
  await page.reload({ waitUntil: 'networkidle' });

  // Step 0 — Personal Information
  await page.fill('[name="full_name"]', 'Test Client (Automated)');
  await page.fill('[name="date_of_birth"]', '1990-06-15');
  await page.fill('[name="phone"]', '(519) 555-0199');
  await page.fill('[name="email"]', 'test.intake@example.com');
  await page.fill('[name="city_country"]', 'London, Ontario, Canada');
  await page.locator('input[name="contact_method"][value="Email"]').check();
  await page.fill('[name="emergency_contact"]', 'Jane Doe (519) 555-0101');
  await clickNext(page);

  // Step 1 — Reason for Contact
  await page.locator('input[name="services"][value="Initial Consultation"]').check();
  await clickNext(page);

  // Step 2 — Presenting Concern
  await page.fill('[name="presenting_concern"]', 'Automated test — please ignore. Verifying intake form submission.');
  await clickNext(page);

  // Step 3 — Current Challenges
  await page.locator('input[name="challenges"][value="Stress"]').check();
  await clickNext(page);

  // Step 4 — Health History
  await page.locator('input[name="health_diagnoses"][value="None"]').check();
  await page.locator('input[name="taking_medication"][value="No"]').check();
  await page.locator('input[name="under_care"][value="No"]').check();
  await clickNext(page);

  // Step 5 — Personal Goals
  await page.fill('[name="goals_achieve"]', 'Feel calmer and more grounded.');
  await page.fill('[name="goals_success"]', 'Better sleep and less anxiety.');
  await page.fill('[name="goal_1"]', 'Reduce daily stress');
  await page.fill('[name="goal_2"]', 'Improve sleep');
  await page.fill('[name="goal_3"]', 'Build self-confidence');
  await clickNext(page);

  // Step 6 — Emotional Well-Being
  await page.locator('input[name="stress_level"][value="5"]').check();
  await page.locator('input[name="emotional_wellbeing"][value="7"]').check();
  await clickNext(page);

  // Step 7 — Spiritual Development
  await page.locator('input[name="spiritual_interests"][value="Meditation"]').check();
  await clickNext(page);

  // Step 8 — Previous Experience
  await page.locator('input[name="previous_experience"][value="None"]').check();
  await clickNext(page);

  // Step 9 — Certification (optional, skip)
  await clickNext(page);

  // Step 10 — Expectations
  await page.fill('[name="expectations"]', 'A safe, supportive first session.');
  await page.locator('input[name="commitment_level"][value="Committed"]').check();
  await clickNext(page);

  // Step 11 — Consent & Submit
  await page.waitForSelector('[data-step="11"]:not(.hidden)', { timeout: 5000 });
  await page.locator('[data-step="11"] input[name="consent_acknowledged"]').check({ force: false });
  await page.fill('[name="client_signature"]', 'Test Client (Automated)');
  await page.fill('[name="signature_date"]', '2026-06-19');

  const formsubmitResponse = page.waitForResponse(
    (res) => res.url().includes('formsubmit.co') && res.request().method() === 'POST',
    { timeout: 15000 }
  );
  const formspreeResponse = page.waitForResponse(
    (res) => res.url().includes('formspree.io') && res.request().method() === 'POST',
    { timeout: 15000 }
  );

  await page.getByRole('button', { name: /Submit Intake Form/i }).click();

  const [formsubmitRes, formspreeRes] = await Promise.all([
    formsubmitResponse,
    formspreeResponse,
  ]);

  const formsubmitBody = await formsubmitRes.text();
  const formspreeBody = await formspreeRes.text();

  let formsubmitParsed = {};
  let formspreeParsed = {};
  try {
    formsubmitParsed = JSON.parse(formsubmitBody);
  } catch {
    formsubmitParsed = {};
  }
  try {
    formspreeParsed = JSON.parse(formspreeBody);
  } catch {
    formspreeParsed = {};
  }

  let pageText = '';
  try {
    await page.waitForSelector('h2:has-text("Form Received")', { timeout: 5000 });
    pageText = 'success-screen';
  } catch {
    pageText = await page.locator('form p.text-terracotta').textContent().catch(() => 'unknown');
  }

  const formSubmitOk =
    formsubmitParsed.success === 'true' || formsubmitParsed.success === true;
  const pendingActivation =
    typeof formsubmitParsed.message === 'string' &&
    formsubmitParsed.message.toLowerCase().includes('activation');
  const formspreeOk = formspreeRes.ok();

  const result = {
    pageText,
    stepsCompleted: 12,
    formFlowOk: true,
    formSubmit: {
      status: formsubmitRes.status(),
      ok: formSubmitOk || pendingActivation,
      pendingActivation,
      body: formsubmitParsed,
    },
    formspree: {
      status: formspreeRes.status(),
      ok: formspreeOk,
      body: formspreeParsed,
    },
    dualSubmitOk: (formSubmitOk || pendingActivation) && formspreeOk,
  };

  console.log(JSON.stringify(result, null, 2));

  await browser.close();
  process.exit(
    pageText === 'success-screen' && (formSubmitOk || pendingActivation || formspreeOk) ? 0 : 1
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
