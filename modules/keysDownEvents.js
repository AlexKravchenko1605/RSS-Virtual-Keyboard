import { checkLanguage } from "./checkLanguage.js";

export function keysDownEvents(
  event,
  claviatura_wrapper,
  en_variant,
  ru_variant
) {
  event.preventDefault();

  const language = checkLanguage();
  // some visual style
  claviatura_wrapper
    .querySelector(`.${event.code}`)
    .classList.add("non_shadow", "active");
  claviatura_wrapper.querySelector(`.${event.code}`).classList.add("font-16px");

  if (
    event.shiftKey === true &&
    (event.code !== "ShiftRight" || event.code !== "ShiftLeft")
  ) {
    if (language === "ru") {
      ru_variant.forEach((el) => {
        el.children[0].classList.add("hidden");
        el.children[2].classList.remove("hidden");
      });
    } else {
      en_variant.forEach((el) => {
        el.children[0].classList.add("hidden");
        el.children[2].classList.remove("hidden");
      });
    }
  }

  if (event.shiftKey === true) {
    if (language === "ru") {
      ru_variant.forEach((el) => {
        el.children[0].classList.add("hidden");
        el.children[2].classList.remove("hidden");
      });
    } else {
      en_variant.forEach((el) => {
        el.children[0].classList.add("hidden");
        el.children[2].classList.remove("hidden");
      });
    }
  }
  //  change language
  if (event.ctrlKey && event.altKey) {
    event.preventDefault();
    if (String(checkLanguage()) === "ru") {
      ru_variant.forEach((el) => el.classList.add("hidden"));
      en_variant.forEach((el) => el.classList.remove("hidden"));
      localStorage.setItem("language", "en");
    } else {
      en_variant.forEach((el) => el.classList.add("hidden"));
      ru_variant.forEach((el) => el.classList.remove("hidden"));
      localStorage.setItem("language", "ru");
    }
  }
}
