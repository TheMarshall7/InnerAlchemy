import { FORMSUBMIT_ENDPOINT } from '../constants/links';

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
  const formData =
    formOrFormData instanceof FormData ? formOrFormData : new FormData(formOrFormData);

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
    return { ok: true, data, pendingActivation };
  }

  return {
    ok: false,
    error: data.message || data.error || 'Something went wrong. Please try again.',
    data,
  };
};
