import { checkLanguage } from "./checkLanguage.js";

export function mouseDownEvents(event, claviatura_wrapper) {
  event.preventDefault();

  const language = checkLanguage();

  const button = event.target.closest("button");

  if (!button) return;

  if (button.classList[1] === "CapsLock") {
    button.classList.toggle("non_shadow");
    button.classList.toggle("active");
  } else {
    button.classList.add("non_shadow", "active");
  }

  if (
    (button.classList[1] === "ShiftLeft" ||
      button.classList[1] === "ShiftRight") &&
    claviatura_wrapper.querySelector(".CapsLock").classList.length === 2
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
  // button press handling
  switch (button.classList[1]) {
    case "Backspace":
      if (
        textarea.selectionStart > 0 &&
        textarea.selectionStart < textarea.value.length
      ) {
        let start = textarea.selectionStart;
        let end = textarea.selectionEnd;
        textarea.value =
          textarea.value.slice(0, textarea.selectionStart - 1) +
          textarea.value.slice(textarea.selectionStart, textarea.value.length);
        textarea.selectionStart = start - 1;
        textarea.selectionEnd = end - 1;
      } else if (textarea.value.lenght === 0) {
        textarea.value = textarea.value;
      } else if (textarea.selectionStart === 0) {
        textarea.value = textarea.value;
      } else {
        textarea.value = textarea.value.slice(0, -1);
      }
      break;
    case "Ctrl":
      textarea.value = textarea.value;
      break;
    case "Alt":
      textarea.value = textarea.value;
      break;
    case "Delete":
      if (
        textarea.selectionStart >= 0 &&
        textarea.selectionStart <= textarea.value.length - 1
      ) {
        let start = textarea.selectionStart;
        let end = textarea.selectionEnd;
        textarea.value =
          textarea.value.slice(0, textarea.selectionStart) +
          textarea.value.slice(
            textarea.selectionStart + 1,
            textarea.value.length
          );
        textarea.selectionStart = start;
        textarea.selectionEnd = end;
      } else {
        textarea.value = textarea.value;
      }
      break;
    case "Tab":
      if (
        textarea.selectionStart >= 0 &&
        textarea.selectionStart <= textarea.value.length - 1
      ) {
        const start = textarea.selectionStart;

        textarea.value =
          textarea.value.slice(0, textarea.selectionStart) +
          "    " +
          textarea.value.slice(textarea.selectionStart, textarea.value.length);
        textarea.selectionStart = start + 4;
        textarea.selectionEnd = start + 4;
      } else {
        textarea.value = `${textarea.value}    `;
      }
      break;

    case "ShiftLeft":
      textarea.value = textarea.value;
      break;
    case "ShiftRight":
      textarea.value = textarea.value;
      break;
    case "ControlLeft":
      textarea.value = textarea.value;
      break;
    case "ControlRight":
      textarea.value = textarea.value;
      break;
    case "AltRight":
      textarea.value = textarea.value;
      break;
    case "AltLeft":
      textarea.value = textarea.value;
      break;
    case "CapsLock":
      textarea.value = textarea.value;
      break;
    case "Space":
      textarea.value = `${textarea.value} `;
      break;
    case "Enter":
      textarea.value = textarea.value + "\n";
      break;
    case "MetaLeft":
      textarea.value = textarea.value;
      break;
    default:
      if (
        textarea.selectionStart > 0 &&
        textarea.selectionStart < textarea.value.length
      ) {
        let start = textarea.selectionStart;
        let end = textarea.selectionEnd;
        textarea.value =
          textarea.value.slice(0, textarea.selectionStart) +
          String(button.innerText) +
          textarea.value.slice(textarea.selectionStart, textarea.value.length);
        textarea.selectionStart = start + 1;
        textarea.selectionEnd = end + 1;
      } else {
        textarea.value += String(button.innerText);
      }
      break;
  }
}
