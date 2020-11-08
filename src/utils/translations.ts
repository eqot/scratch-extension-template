import formatMessage from 'format-message';

const SUPPORTED_LOCALES = ['en', 'ja', 'ja-Hira'];

class Translations {
  initialize(defaultLocale?: string, runtime?: any): void {
    formatMessage.setup({
      locale: defaultLocale || window.navigator.language || 'en',
      translations: SUPPORTED_LOCALES.reduce(
        (acc, locale) =>
          Object.assign(acc, { [locale]: require(`../translations/${locale}.json`) }),
        {}
      ),
    });

    if (runtime) {
      runtime.on('LOCALE_CHANGED', (locale: string) => this.setLocale(locale));
    }
  }

  setLocale(locale: string): void {
    if (locale !== formatMessage.setup().locale) {
      formatMessage.setup({ locale });
    }
  }

  label(id: string): string {
    return formatMessage(id);
  }
}

const translations = new Translations();

export { translations };
