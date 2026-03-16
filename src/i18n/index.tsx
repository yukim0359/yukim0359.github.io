import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export type Locale = "ja" | "en";

export interface SiteTexts {
  header: {
    title: string;
    nav: {
      home: string;
      about: string;
      research: string;
      works: string;
      skills: string;
      bio: string;
    };
    languageToggleLabel: string;
  };
}

export const jaTexts: SiteTexts = {
  header: {
    title: "Yuki Maeda",
    nav: {
      home: "Home",
      about: "About",
      research: "Research",
      works: "Works",
      skills: "Skills",
      bio: "Biography",
    },
    languageToggleLabel: "English",
  },
};

export const enTexts: SiteTexts = {
  header: {
    title: "Yuki Maeda",
    nav: {
      home: "Home",
      about: "About",
      research: "Research",
      works: "Works",
      skills: "Skills",
      bio: "Biography",
    },
    languageToggleLabel: "日本語",
  },
};

interface I18nContextValue {
  locale: Locale;
  texts: SiteTexts;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("ja");

  const texts = locale === "ja" ? jaTexts : enTexts;

  return (
    <I18nContext.Provider value={{ locale, texts, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
};
