import { checkLanguage } from "./checkLanguage.js";

export function mouseUpEvents(
  event,
  claviatura_wrapper,
  classListLengthMIN,
  classListLengthMAX,
  ru_variant,
  en_variant
) {
  event.preventDefault();
  const language = checkLanguage();
  const button = event.target.closest("button");
  if (!button) return;
  if (language === "ru") {
    if (
      button.classList[1] === "CapsLock" &&
      button.classList.length > classListLengthMIN
    ) {
      console.log(event);
      ru_variant.forEach((el) => {
        el.children[0].classList.add("hidden");
        el.children[3].classList.remove("hidden");
      });
    }
    if (
      button.classList[1] === "CapsLock" &&
      button.classList.length < classListLengthMAX
    ) {
      ru_variant.forEach((el) => {
        el.children[0].classList.remove("hidden");
        el.children[3].classList.add("hidden");
      });
    }
  }
  if (language === "en") {
    if (
      button.classList[1] === "CapsLock" &&
      button.classList.length > classListLengthMIN
    ) {
      en_variant.forEach((el) => {
        el.children[0].classList.add("hidden");
        el.children[3].classList.remove("hidden");
      });
    }
    if (
      button.classList[1] === "CapsLock" &&
      button.classList.length < classListLengthMAX
    ) {
      en_variant.forEach((el) => {
        el.children[0].classList.remove("hidden");
        el.children[3].classList.add("hidden");
      });
    }
  }

  if (button.classList[1] !== "CapsLock") {
    button.classList.remove("non_shadow", "active");
    button.classList.add("remove");
  }

  if (
    button.innerText === "Shift" &&
    claviatura_wrapper.querySelector(".CapsLock").classList.length === 2
  ) {
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

  setTimeout(() => {
    button.classList.remove("remove");
  }, 200);
}
