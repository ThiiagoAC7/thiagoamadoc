import * as React from "react";

export type Lang = "en" | "pt";

const STORAGE_KEY = "tac-lang";

export function readInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "pt") return saved;
  } catch {
    // ignore storage restriction
  }
  return "en";
}

export function applyLang(lang: Lang) {
  if (typeof document === "undefined") return;
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  document.title =
    lang === "pt"
      ? "Thiago Amado Costa — Currículo"
      : "Thiago Amado Costa — Curriculum Vitae";
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // ignore storage restriction
  }
}

const LangContext = React.createContext<Lang>("en");

export function LangProvider({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>;
}

export function useLang(): Lang {
  return React.useContext(LangContext);
}
