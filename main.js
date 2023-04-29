import { getDataKeyPress } from "./modules/getDataKeyPress.js";
import { checkLanguage } from "./modules/checkLanguage.js";
import { keysUpEvents } from "./modules/keysUpEvents.js";
import { keysDownEvents } from "./modules/keysDownEvents.js";
import { mouseDownEvents } from "./modules/mouseDownEvets.js";
import { mouseUpEvents } from "./modules/mouseUpEvents.js";
import { createBase } from "./modules/createBase.js";

createBase();

const claviatura_wrapper = document.querySelector(".claviatura_wrapper");
const ru_variant = document.querySelectorAll(".ru-variant");
const en_variant = document.querySelectorAll(".en-variant");
const textarea = document.querySelector(".textarea");
const classListLengthMIN = 2;
const classListLengthMAX = 4;

const language = checkLanguage();

if (language === "ru") {
  ru_variant.forEach((el) => el.classList.remove("hidden"));
  en_variant.forEach((el) => el.classList.add("hidden"));
} else {
  en_variant.forEach((el) => el.classList.remove("hidden"));
  ru_variant.forEach((el) => el.classList.add("hidden"));
}

//keypress events
document.addEventListener("keyup", (event) => {
  keysUpEvents(event, claviatura_wrapper, en_variant, ru_variant);
});
document.addEventListener("keydown", (event) => {
  getDataKeyPress(event, textarea, claviatura_wrapper);
});

document.addEventListener("keydown", (event) => {
  keysDownEvents(event, claviatura_wrapper, en_variant, ru_variant);
});

// click events
claviatura_wrapper.addEventListener("mousedown", (event) => {
  mouseDownEvents(event, claviatura_wrapper);
});
claviatura_wrapper.addEventListener("mouseup", (event) => {
  mouseUpEvents(
    event,
    claviatura_wrapper,
    classListLengthMIN,
    classListLengthMAX,
    ru_variant,
    en_variant
  );
});
