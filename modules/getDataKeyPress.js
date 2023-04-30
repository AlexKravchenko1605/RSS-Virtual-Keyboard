export function getDataKeyPress(event, textarea, claviatura_wrapper) {
  const letter = claviatura_wrapper.querySelector(`.${event.code}`).innerText;

  switch (event.code) {
    case "Backspace":
      if (
        textarea.selectionStart > 0 &&
        textarea.selectionStart < textarea.value.length
      ) {
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
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
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
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
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        textarea.value =
          textarea.value.slice(0, textarea.selectionStart) +
          String(letter) +
          textarea.value.slice(textarea.selectionStart, textarea.value.length);
        textarea.selectionStart = start + 1;
        textarea.selectionEnd = end + 1;
      } else {
        textarea.value += String(letter);
      }
      break;
  }
}
