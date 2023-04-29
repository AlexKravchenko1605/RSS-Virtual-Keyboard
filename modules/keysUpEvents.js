import { checkLanguage } from "./checkLanguage.js";

export function keysUpEvents(
  event,
  claviatura_wrapper,
  en_variant,
  ru_variant
) {
  event.preventDefault();

  const language = checkLanguage();
  if (event.code !== "CapsLock") {
    claviatura_wrapper
      .querySelector(`.${event.code}`)
      .classList.remove("non_shadow", "active");
    claviatura_wrapper.querySelector(`.${event.code}`).classList.add("remove");
  }

  claviatura_wrapper
    .querySelector(`.${event.code}`)
    .classList.remove("font-16px");

  if (
    event.shiftKey === true &&
    (event.code !== "ShiftRight" || event.code !== "ShiftLeft")
  ) {
    const language = checkLanguage();
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
    setTimeout(() => {
      claviatura_wrapper
        .querySelector(`.${event.code}`)
        .classList.remove("remove");
    }, 200);
    return;
  }
  if (event.shiftKey !== true) {
    const language = checkLanguage();
    if (language === "ru") {
      ru_variant.forEach((el) => {
        el.children[0].classList.remove("hidden");
        el.children[2].classList.add("hidden");
      });
    } else {
      en_variant.forEach((el) => {
        el.children[0].classList.remove("hidden");
        el.children[2].classList.add("hidden");
      });
    }
  }

  // CapsLock "active"
  if (event.getModifierState("CapsLock")) {
    if (language === "ru") {
      ru_variant.forEach((el) => {
        el.children[0].classList.add("hidden");
        el.children[3].classList.remove("hidden");
      });
    } else {
      en_variant.forEach((el) => {
        el.children[0].classList.add("hidden");
        el.children[3].classList.remove("hidden");
      });
    }
  } else {
    claviatura_wrapper
      .querySelector(`.${event.code}`)
      .classList.remove("active", "non_shadow");
    if (language === "ru") {
      ru_variant.forEach((el) => {
        el.children[0].classList.remove("hidden");
        el.children[3].classList.add("hidden");
      });
    } else {
      en_variant.forEach((el) => {
        el.children[0].classList.remove("hidden");
        el.children[3].classList.add("hidden");
      });
    }
  }

  setTimeout(() => {
    claviatura_wrapper
      .querySelector(`.${event.code}`)
      .classList.remove("remove");
  }, 200);
}
