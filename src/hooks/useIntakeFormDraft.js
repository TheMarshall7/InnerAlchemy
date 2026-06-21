import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'holistic-alchemy-intake-draft';
const STEP_STORAGE_KEY = 'holistic-alchemy-intake-step';

const isFieldElement = (el) =>
  el instanceof HTMLInputElement ||
  el instanceof HTMLTextAreaElement ||
  el instanceof HTMLSelectElement;

export const saveIntakeFormDraft = (form) => {
  if (!form) return;

  const data = {};

  for (const el of form.elements) {
    if (!isFieldElement(el) || !el.name || el.name.startsWith('_')) continue;

    if (el.type === 'checkbox') {
      if (!data[el.name]) data[el.name] = [];
      if (el.checked) data[el.name].push(el.value);
      continue;
    }

    if (el.type === 'radio') {
      if (el.checked) data[el.name] = el.value;
      continue;
    }

    if (el.type === 'submit' || el.type === 'button') continue;

    data[el.name] = el.value;
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const restoreIntakeFormDraft = (form) => {
  if (!form) return false;

  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return false;

  try {
    const data = JSON.parse(raw);

    for (const el of form.elements) {
      if (!isFieldElement(el) || !el.name || el.name.startsWith('_')) continue;

      if (el.type === 'checkbox') {
        const values = data[el.name];
        el.checked = Array.isArray(values) && values.includes(el.value);
        continue;
      }

      if (el.type === 'radio') {
        el.checked = data[el.name] === el.value;
        continue;
      }

      if (el.type === 'submit' || el.type === 'button') continue;

      if (data[el.name] !== undefined) {
        el.value = data[el.name];
      }
    }

    return true;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return false;
  }
};

export const clearIntakeFormDraft = () => {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(STEP_STORAGE_KEY);
};

export const getSavedIntakeStep = () => {
  const saved = localStorage.getItem(STEP_STORAGE_KEY);
  if (saved === null) return 0;
  const step = Number(saved);
  return Number.isFinite(step) && step >= 0 ? step : 0;
};

export const saveIntakeStep = (step) => {
  localStorage.setItem(STEP_STORAGE_KEY, String(step));
};

export const useIntakeFormDraft = (formRef, enabled = true) => {
  const [restored, setRestored] = useState(false);
  const [lastSaved, setLastSaved] = useState(null);

  const clearDraft = useCallback(() => {
    clearIntakeFormDraft();
    setRestored(false);
    setLastSaved(null);
  }, []);

  useEffect(() => {
    const form = formRef.current;
    if (!form || !enabled) return;

    if (restoreIntakeFormDraft(form)) {
      setRestored(true);
    }

    let timeoutId;

    const scheduleSave = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        saveIntakeFormDraft(form);
        setLastSaved(Date.now());
      }, 400);
    };

    const saveNow = () => saveIntakeFormDraft(form);

    form.addEventListener('input', scheduleSave);
    form.addEventListener('change', scheduleSave);
    window.addEventListener('pagehide', saveNow);

    return () => {
      clearTimeout(timeoutId);
      form.removeEventListener('input', scheduleSave);
      form.removeEventListener('change', scheduleSave);
      window.removeEventListener('pagehide', saveNow);
      saveNow();
    };
  }, [formRef, enabled]);

  return { restored, lastSaved, clearDraft };
};
