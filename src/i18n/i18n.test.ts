import { describe, expect, it } from 'vitest';
import {
  DEFAULT_LANGUAGE,
  createTranslator,
  formatDate,
  formatNumber,
  getLanguageDirection,
  isSupportedLanguage,
} from './i18n';

describe('localization foundation', () => {
  it('supports English and Arabic with Arabic as the default', () => {
    expect(DEFAULT_LANGUAGE).toBe('ar');
    expect(isSupportedLanguage('en')).toBe(true);
    expect(isSupportedLanguage('ar')).toBe(true);
    expect(isSupportedLanguage('fr')).toBe(false);
  });

  it('maps Arabic to RTL and English to LTR', () => {
    expect(getLanguageDirection('ar')).toBe('rtl');
    expect(getLanguageDirection('en')).toBe('ltr');
  });

  it('falls back to Arabic and then to the key', () => {
    const translate = createTranslator({
      en: { greeting: 'Hello', shared: 'English value' },
      ar: { greeting: 'مرحبا' },
    }, 'ar');

    expect(translate('greeting')).toBe('مرحبا');
    expect(translate('shared')).toBe('shared');
    expect(translate('missing')).toBe('missing');
  });

  it('keeps numeric output in Latin digits for Arabic', () => {
    expect(formatNumber(12345, 'ar')).toMatch(/[0-9]/);
    expect(formatDate('2026-11-07', 'ar')).toMatch(/[0-9]/);
  });
});
