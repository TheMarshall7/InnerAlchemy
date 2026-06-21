import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { submitForm } from '../utils/formSubmit';
import {
  getSavedIntakeStep,
  saveIntakeStep,
  useIntakeFormDraft,
} from '../hooks/useIntakeFormDraft';
import {
  FormSection,
  TextField,
  TextArea,
  CheckboxGroup,
  RadioGroup,
  ScaleField,
} from '../components/intake/FormFields';

const SERVICES = [
  'Initial Consultation',
  'Hypnotherapy Session',
  '5-PATH® Hypnotherapy',
  'Access Bars®',
  'MTVSS Body Process®',
  'Emotional Trauma Release Session',
  'Brain Capacity Activation',
  'Energetic Facelift®',
  'Manifestation Energy Activation',
  'Inner Alchemy Transformation Coaching',
  'Meditation Session',
  'Breathwork Session',
  'Somatic Movement / Somatic Dance',
  'Spiritual Mentoring',
  'Course Certification Training',
];

const CHALLENGES = [
  'Anxiety', 'Stress', 'Panic Attacks', 'Depression', 'Low Self-Esteem', 'Lack of Confidence',
  'Fear / Phobias', 'Trauma', 'PTSD', 'Grief or Loss', 'Anger', 'Guilt', 'Shame',
  'Relationship Challenges', 'Divorce / Separation', 'Family Conflict', 'Addiction', 'Smoking',
  'Emotional Eating', 'Weight Issues', 'Sleep Difficulties', 'Insomnia', 'Chronic Pain', 'Fatigue',
  'Burnout', 'Spiritual Crisis', 'Lack of Purpose', 'Financial Stress', 'Business/Career Challenges',
  'Sexual Issues',
];

const HEALTH_DIAGNOSES = [
  'Anxiety Disorder', 'Depression', 'Bipolar Disorder', 'PTSD', 'OCD', 'ADHD',
  'Schizophrenia', 'Personality Disorder', 'Other Mental Health Condition', 'None',
];

const SPIRITUAL_INTERESTS = [
  'Shadow Work', 'Inner Child Healing', 'Emotional Healing', 'Meditation', 'Breathwork',
  'Mindfulness', 'Spiritual Awakening', 'Energy Awareness', 'Conscious Relationships',
  'Self-Love', 'Manifestation', 'Purpose & Meaning', 'Chakra Balancing',
];

const PREVIOUS_EXPERIENCE = [
  'Hypnotherapy', 'Meditation', 'Coaching', 'Counseling', 'Energy Healing',
  'Access Consciousness®', 'Breathwork', 'Somatic Therapy', 'None',
];

const CONTACT_METHODS = ['Phone', 'WhatsApp', 'Email', 'Zoom'];
const COMMITMENT_LEVELS = ['Not Sure', 'Somewhat Committed', 'Committed', 'Fully Committed'];

const STEPS = [
  { id: 'personal', title: 'Personal Information', short: 'About You' },
  { id: 'reason', title: 'Reason for Contact', short: 'Services' },
  { id: 'concern', title: 'Presenting Concern', short: 'Your Story' },
  { id: 'challenges', title: 'Current Challenges', short: 'Challenges' },
  { id: 'health', title: 'Health History', short: 'Health' },
  { id: 'goals', title: 'Personal Goals', short: 'Goals' },
  { id: 'wellbeing', title: 'Emotional Well-Being', short: 'Well-Being' },
  { id: 'spiritual', title: 'Inner Alchemy & Spiritual Development', short: 'Spiritual' },
  { id: 'experience', title: 'Previous Experience', short: 'Experience' },
  { id: 'certification', title: 'Certification Applicants', short: 'Training' },
  { id: 'expectations', title: 'Expectations', short: 'Expectations' },
  { id: 'consent', title: 'Consent & Acknowledgment', short: 'Consent' },
];

const ProgressBar = ({ current, total, label }) => {
  const percent = Math.round(((current + 1) / total) * 100);

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-3 text-[10px] uppercase tracking-widest text-earth/70">
        <span>Step {current + 1} of {total}</span>
        <span>{percent}% complete</span>
      </div>
      <div className="h-1.5 bg-deepbrown/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-terracotta rounded-full"
          initial={false}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
      <p className="mt-3 text-sm font-serif text-deepbrown">{label}</p>
    </div>
  );
};

const IntakeForm = () => {
  const formRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { restored, clearDraft } = useIntakeFormDraft(formRef, !submitted);

  useEffect(() => {
    setCurrentStep(getSavedIntakeStep());
  }, []);

  useEffect(() => {
    if (!submitted) {
      saveIntakeStep(currentStep);
    }
  }, [currentStep, submitted]);

  const validateStep = (stepIndex) => {
    const form = formRef.current;
    if (!form) return true;

    const stepEl = form.querySelector(`[data-step="${stepIndex}"]`);
    if (!stepEl) return true;

    const fields = stepEl.querySelectorAll('input, textarea, select');
    for (const field of fields) {
      if (!field.checkValidity()) return false;
    }
    return true;
  };

  const validateCurrentStep = () => {
    if (validateStep(currentStep)) return true;

    const form = formRef.current;
    const stepEl = form?.querySelector(`[data-step="${currentStep}"]`);
    const fields = stepEl?.querySelectorAll('input, textarea, select') ?? [];

    for (const field of fields) {
      if (!field.checkValidity()) {
        field.reportValidity();
        return false;
      }
    }
    return false;
  };

  const validateAllSteps = () => {
    for (let i = 0; i < STEPS.length; i++) {
      if (!validateStep(i)) {
        setCurrentStep(i);
        requestAnimationFrame(() => {
          const form = formRef.current;
          const stepEl = form?.querySelector(`[data-step="${i}"]`);
          const fields = stepEl?.querySelectorAll('input, textarea, select') ?? [];
          for (const field of fields) {
            if (!field.checkValidity()) {
              field.reportValidity();
              break;
            }
          }
        });
        return false;
      }
    }
    return true;
  };

  const goNext = () => {
    if (!validateCurrentStep()) return;
    setCurrentStep((s) => Math.min(s + 1, STEPS.length - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    setCurrentStep((s) => Math.max(s - 1, 0));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!validateAllSteps()) return;

    const form = formRef.current;
    if (!form) return;

    setLoading(true);
    setError('');

    try {
      const result = await submitForm(form);

      if (result.ok) {
        clearDraft();
        setSubmitted(true);
        return;
      }

      setError(result.error);
    } catch {
      setError('Unable to submit your form. Please try again or email nefnefa1968@gmail.com directly.');
    } finally {
      setLoading(false);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const isLastStep = currentStep === STEPS.length - 1;

  return (
    <div className="w-full min-h-screen bg-sand relative z-10 selection:bg-rust selection:text-sand">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-terracotta/5 rounded-full blur-[120px] hidden md:block"></div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-32 pb-20 relative z-10">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-8 md:mb-10 text-center">
          <span className="text-ochre tracking-[0.3em] text-[10px] uppercase font-semibold mb-4 block">Before Your Session</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-deepbrown mb-4 leading-tight">
            Client Intake & <span className="italic text-terracotta">Consent Form</span>
          </h1>
          <p className="text-earth font-light text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            One section at a time — take your time. Your progress is saved automatically.
          </p>
        </motion.div>

        {!submitted ? (
          <>
            {restored && (
              <div className="mb-6 rounded-2xl border border-terracotta/20 bg-terracotta/5 px-5 py-4 text-center">
                <p className="text-sm text-deepbrown font-light">
                  Welcome back — your answers have been restored.
                </p>
              </div>
            )}

            <motion.form
              ref={formRef}
              noValidate
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onSubmit={(e) => e.preventDefault()}
              className="glass-panel bg-white/60 p-6 sm:p-10 md:p-14 rounded-[32px] md:rounded-[48px] border border-white shadow-2xl"
            >
              <input type="hidden" name="_subject" value="New Client Intake & Consent Form — Holistic Alchemy" />

              <ProgressBar
                current={currentStep}
                total={STEPS.length}
                label={STEPS[currentStep].title}
              />

              <motion.div
                initial={false}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                  {/* Step 0: Personal Information */}
                  <div data-step="0" className={currentStep === 0 ? 'block' : 'hidden'}>
                    <FormSection title="Personal Information">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <TextField label="Full Name" name="full_name" required className="sm:col-span-2" />
                        <TextField label="Date of Birth" name="date_of_birth" type="date" required />
                        <TextField label="Phone Number" name="phone" type="tel" required />
                        <TextField label="Email Address" name="email" type="email" required className="sm:col-span-2" />
                        <TextField label="City / Country" name="city_country" required className="sm:col-span-2" />
                      </div>
                      <div className="mt-8">
                        <CheckboxGroup legend="Preferred Method of Contact" name="contact_method" options={CONTACT_METHODS} columns="grid-cols-2 sm:grid-cols-4" />
                      </div>
                      <div className="mt-6">
                        <TextField label="Emergency Contact Name & Number" name="emergency_contact" required className="sm:col-span-2" />
                      </div>
                    </FormSection>
                  </div>

                  {/* Step 1: Reason for Contact */}
                  <div data-step="1" className={currentStep === 1 ? 'block' : 'hidden'}>
                    <FormSection title="Reason for Contact">
                      <CheckboxGroup legend="What service are you interested in?" name="services" options={SERVICES} />
                      <div className="mt-6">
                        <TextField label="Other Service (if applicable)" name="service_other" placeholder="Please specify" />
                      </div>
                    </FormSection>
                  </div>

                  {/* Step 2: Presenting Concern */}
                  <div data-step="2" className={currentStep === 2 ? 'block' : 'hidden'}>
                    <FormSection title="Presenting Concern">
                      <TextArea label="What is your main reason for seeking support today?" name="presenting_concern" required rows={5} />
                    </FormSection>
                  </div>

                  {/* Step 3: Current Challenges */}
                  <div data-step="3" className={currentStep === 3 ? 'block' : 'hidden'}>
                    <FormSection title="Current Challenges">
                      <CheckboxGroup legend="Please check any concerns that currently apply:" name="challenges" options={CHALLENGES} />
                      <div className="mt-6">
                        <TextField label="Other Challenge" name="challenge_other" placeholder="Please specify" />
                      </div>
                    </FormSection>
                  </div>

                  {/* Step 4: Health History */}
                  <div data-step="4" className={currentStep === 4 ? 'block' : 'hidden'}>
                    <FormSection title="Health History">
                      <CheckboxGroup legend="Have you ever been diagnosed with any of the following?" name="health_diagnoses" options={HEALTH_DIAGNOSES} />
                      <div className="mt-6 space-y-6">
                        <TextArea label="If yes, please explain" name="health_diagnoses_explain" rows={2} />
                        <RadioGroup legend="Are you currently taking medication?" name="taking_medication" options={['Yes', 'No']} required />
                        <TextArea label="If yes, please list medications" name="medications_list" rows={2} />
                        <RadioGroup legend="Are you currently under the care of a physician, psychologist, psychiatrist, therapist, or other healthcare professional?" name="under_care" options={['Yes', 'No']} required />
                        <TextArea label="If yes, please explain" name="under_care_explain" rows={2} />
                      </div>
                    </FormSection>
                  </div>

                  {/* Step 5: Personal Goals */}
                  <div data-step="5" className={currentStep === 5 ? 'block' : 'hidden'}>
                    <FormSection title="Personal Goals">
                      <div className="space-y-6">
                        <TextArea label="What would you like to achieve through our work together?" name="goals_achieve" required rows={3} />
                        <TextArea label="If this session is successful, what changes would you notice in your life?" name="goals_success" required rows={3} />
                        <TextField label="Top Goal 1" name="goal_1" required />
                        <TextField label="Top Goal 2" name="goal_2" required />
                        <TextField label="Top Goal 3" name="goal_3" required />
                      </div>
                    </FormSection>
                  </div>

                  {/* Step 6: Emotional Well-Being */}
                  <div data-step="6" className={currentStep === 6 ? 'block' : 'hidden'}>
                    <FormSection title="Emotional Well-Being Assessment">
                      <div className="space-y-8">
                        <ScaleField label="How would you rate your current stress level?" name="stress_level" lowLabel="Low (1)" highLabel="High (10)" />
                        <ScaleField label="How would you rate your current emotional well-being?" name="emotional_wellbeing" lowLabel="Poor (1)" highLabel="Excellent (10)" />
                      </div>
                    </FormSection>
                  </div>

                  {/* Step 7: Spiritual Development */}
                  <div data-step="7" className={currentStep === 7 ? 'block' : 'hidden'}>
                    <FormSection title="Inner Alchemy & Spiritual Development">
                      <CheckboxGroup legend="Are you interested in exploring any of the following?" name="spiritual_interests" options={SPIRITUAL_INTERESTS} />
                      <div className="mt-6">
                        <TextField label="Other Interest" name="spiritual_other" placeholder="Please specify" />
                      </div>
                    </FormSection>
                  </div>

                  {/* Step 8: Previous Experience */}
                  <div data-step="8" className={currentStep === 8 ? 'block' : 'hidden'}>
                    <FormSection title="Previous Experience">
                      <CheckboxGroup legend="Have you previously experienced any of the following?" name="previous_experience" options={PREVIOUS_EXPERIENCE} />
                      <div className="mt-6">
                        <TextArea label="Please describe your experience" name="previous_experience_details" rows={3} />
                      </div>
                    </FormSection>
                  </div>

                  {/* Step 9: Certification */}
                  <div data-step="9" className={currentStep === 9 ? 'block' : 'hidden'}>
                    <FormSection title="Course Certification Applicants Only">
                      <p className="text-sm text-earth/70 font-light mb-6 italic">Skip or leave blank if you are not applying for certification training.</p>
                      <div className="space-y-6">
                        <TextField label="Which training are you interested in?" name="cert_training" />
                        <TextArea label="What is your professional background?" name="cert_background" rows={2} />
                        <TextArea label="What do you hope to gain from the training?" name="cert_hopes" rows={2} />
                        <RadioGroup legend="Do you plan to use these skills professionally?" name="cert_professional" options={['Yes', 'No']} />
                      </div>
                    </FormSection>
                  </div>

                  {/* Step 10: Expectations */}
                  <div data-step="10" className={currentStep === 10 ? 'block' : 'hidden'}>
                    <FormSection title="Expectations">
                      <div className="space-y-6">
                        <TextArea label="What are your expectations for this session?" name="expectations" required rows={3} />
                        <RadioGroup legend="How committed are you to your personal transformation?" name="commitment_level" options={COMMITMENT_LEVELS} required />
                      </div>
                    </FormSection>
                  </div>

                  {/* Step 11: Consent */}
                  <div data-step="11" className={currentStep === 11 ? 'block' : 'hidden'}>
                    <FormSection title="Consent & Acknowledgment">
                      <div className="bg-dust/40 border border-deepbrown/10 rounded-2xl p-6 md:p-8 mb-6">
                        <p className="text-sm text-earth font-light leading-relaxed">
                          I understand that coaching, meditation, hypnotherapy, energy work, Access Consciousness processes, and Inner Alchemy sessions are complementary wellness services and are not intended to diagnose, treat, cure, or prevent any medical or psychological condition.
                        </p>
                        <p className="text-sm text-earth font-light leading-relaxed mt-4">
                          I understand that results vary from person to person and that I am responsible for my own choices, actions, and outcomes. I understand that I may stop the session at any time.
                        </p>
                      </div>
                      <label className="flex items-start gap-3 text-sm text-deepbrown font-light cursor-pointer mb-8">
                        <input type="checkbox" name="consent_acknowledged" value="Yes" required className="mt-1 accent-terracotta shrink-0" />
                        <span>I have read and understood the above statement.</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <TextField label="Client Signature (type full name)" name="client_signature" required placeholder="Your full legal name" />
                        <TextField label="Date" name="signature_date" type="date" required />
                      </div>
                    </FormSection>
                  </div>
                </motion.div>

              {/* Hidden practitioner fields — still submitted, optional */}
              <div className="hidden" aria-hidden="true">
                <TextField label="Session Type" name="practitioner_session_type" />
                <TextArea label="Key Goals" name="practitioner_key_goals" rows={2} />
                <TextArea label="Recommended Plan" name="practitioner_recommended_plan" rows={2} />
                <TextField label="Follow-Up Date" name="practitioner_follow_up_date" type="date" />
              </div>

              {error && <p className="text-sm text-terracotta font-light leading-relaxed mt-6">{error}</p>}

              <div className="flex flex-col-reverse sm:flex-row justify-between items-stretch sm:items-center gap-4 mt-10 pt-8 border-t border-deepbrown/10">
                <button
                  type="button"
                  onClick={goBack}
                  disabled={currentStep === 0}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 text-xs tracking-widest uppercase text-earth hover:text-deepbrown transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ArrowLeft size={14} /> Back
                </button>

                {isLastStep ? (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={loading}
                    className="btn-primary flex-1 sm:flex-none sm:min-w-[200px] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Submitting...' : 'Submit Intake Form'}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={goNext}
                    className="btn-primary inline-flex items-center justify-center gap-2 flex-1 sm:flex-none sm:min-w-[160px]"
                  >
                    Next <ArrowRight size={14} />
                  </button>
                )}
              </div>
            </motion.form>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-panel bg-white/60 p-10 md:p-16 rounded-[32px] md:rounded-[48px] border border-white shadow-2xl text-center"
          >
            <div className="w-20 h-20 bg-dust rounded-full flex items-center justify-center mx-auto mb-8 border border-white">
              <svg className="w-8 h-8 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-deepbrown mb-4">Form Received</h2>
            <p className="text-earth font-light leading-relaxed mb-8 max-w-md mx-auto">
              Thank you for completing your intake form. We will review your responses before your session and reach out if anything else is needed.
            </p>
            <Link to="/" className="btn-secondary inline-block">Return to Sanctuary</Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default IntakeForm;
