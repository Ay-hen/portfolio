const KEY = "portfolioIntroCompleted";

export function isIntroCompleted(): boolean {
  if (typeof window === "undefined") return true;
  return window.localStorage.getItem(KEY) === "true";
}

export function markIntroCompleted() {
  window.localStorage.setItem(KEY, "true");
}
