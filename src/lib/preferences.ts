export type Lang = "en" | "pt";
export type ThemeMode = "light" | "dark";

const LANG_KEY = "tac-lang";
const THEME_KEY = "tac-theme";

function readStorage(key: string) {
  if (typeof window === "undefined") return null;
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // ignore storage restriction
  }
}

export function readInitialLang(): Lang {
  return readStorage(LANG_KEY) === "pt" ? "pt" : "en";
}

export function applyLang(lang: Lang) {
  if (typeof document === "undefined") return;
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  document.title =
    lang === "pt"
      ? "Thiago Amado Costa — Currículo"
      : "Thiago Amado Costa — Curriculum Vitae";
  writeStorage(LANG_KEY, lang);
}

export function readInitialTheme(): ThemeMode {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function applyTheme(mode: ThemeMode) {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("dark", mode === "dark");
  document.documentElement.setAttribute("data-theme", mode);
  writeStorage(THEME_KEY, mode);
}
