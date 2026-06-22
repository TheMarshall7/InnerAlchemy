import { FORMSUBMIT_ENDPOINT, FORMSPREE_ENDPOINT } from '../constants/links';

const toFormData = (formOrFormData) =>
  formOrFormData instanceof FormData ? formOrFormData : new FormData(formOrFormData);

export const formDataToObject = (formData) => {
  const obj = {};

  for (const [key, value] of formData.entries()) {
    if (obj[key] !== undefined) {
      obj[key] = Array.isArray(obj[key]) ? [...obj[key], value] : [obj[key], value];
    } else {
      obj[key] = value;
    }
  }

  for (const key of Object.keys(obj)) {
    if (Array.isArray(obj[key])) {
      obj[key] = obj[key].join(', ');
    }
  }

  return obj;
};

export const submitToFormSubmit = async (formOrFormData) => {
  const formData = toFormData(formOrFormData);

  const body = {
    _captcha: 'false',
    ...formDataToObject(formData),
  };

  const response = await fetch(FORMSUBMIT_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  });

  const data = await response.json().catch(() => ({}));

  const pendingActivation =
    typeof data.message === 'string' &&
    data.message.toLowerCase().includes('activation');

  if (data.success === 'true' || data.success === true || pendingActivation) {
    return { ok: true, data, pendingActivation, provider: 'formsubmit' };
  }

  return {
    ok: false,
    error: data.message || data.error || 'FormSubmit submission failed.',
    data,
    provider: 'formsubmit',
  };
};

export const submitToFormspree = async (formOrFormData) => {
  const formData = toFormData(formOrFormData);

  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    body: formData,
    headers: { Accept: 'application/json' },
  });

  const data = await response.json().catch(() => ({}));

  if (response.ok) {
    return { ok: true, data, provider: 'formspree' };
  }

  return {
    ok: false,
    error: data.error || 'Formspree submission failed.',
    data,
    provider: 'formspree',
  };
};

export const submitForm = async (formOrFormData) => {
  const formData = toFormData(formOrFormData);

  const [formSubmitResult, formspreeResult] = await Promise.all([
    submitToFormSubmit(formData).catch((err) => ({
      ok: false,
      error: err.message || 'FormSubmit request failed.',
      provider: 'formsubmit',
    })),
    submitToFormspree(formData).catch((err) => ({
      ok: false,
      error: err.message || 'Formspree request failed.',
      provider: 'formspree',
    })),
  ]);

  if (formSubmitResult.ok || formspreeResult.ok) {
    return {
      ok: true,
      formSubmit: formSubmitResult,
      formspree: formspreeResult,
      partial: formSubmitResult.ok !== formspreeResult.ok,
    };
  }

  return {
    ok: false,
    error:
      formspreeResult.error ||
      formSubmitResult.error ||
      'Something went wrong. Please try again or email nefa1968@gmail.com directly.',
    formSubmit: formSubmitResult,
    formspree: formspreeResult,
  };
};
