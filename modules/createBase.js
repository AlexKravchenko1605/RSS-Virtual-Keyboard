import { getOS } from "./getOS.js";
import { data } from "./data.js";

export function createBase() {
  const container = document.createElement("section");
  const claviatura_wrapper = document.createElement("div");
  const first_line = document.createElement("div");
  const second_line = document.createElement("div");
  const third_line = document.createElement("div");
  const fourth_line = document.createElement("div");
  const fifth_line = document.createElement("div");
  const textarea = document.createElement("textarea");
  const infoOSLine = document.createElement("p");
  const changeLanguageLine = document.createElement("p");

  first_line.classList.add("row");
  second_line.classList.add("row");
  third_line.classList.add("row");
  fourth_line.classList.add("row");
  fifth_line.classList.add("row");

  container.classList.add("container");
  claviatura_wrapper.classList.add("claviatura_wrapper");

  textarea.classList.add("textarea");
  textarea.setAttribute("rows", "5");
  textarea.setAttribute("cols", "50");
  textarea.setAttribute("id", "textarea");

  infoOSLine.className = "info";
  infoOSLine.innerHTML = `Клавиатура создана в операционной системе ${getOS()}`;

  changeLanguageLine.className = "info";
  changeLanguageLine.innerHTML = `Для переключения языка используйте комбинацию клавиш: левыe ctrl + alt`;

  claviatura_wrapper.append(first_line);
  claviatura_wrapper.append(second_line);
  claviatura_wrapper.append(third_line);
  claviatura_wrapper.append(fourth_line);
  claviatura_wrapper.append(fifth_line);

  container.append(textarea);
  container.append(claviatura_wrapper);
  container.append(infoOSLine);
  container.append(changeLanguageLine);
  document.body.prepend(container);

  function fillKeyboardLines(line, container) {
    for (let key in line) {
      const button = document.createElement("button");
      button.className = `key ${key} `;
      if (typeof line[key] === "object") {
        button.innerHTML = `
          <div class="ru-variant">
            <span class="caseDown">${line[key].ru.caseDown}</span>
            <span class="caseUp hidden">${line[key].ru.caseUp}</span>
            <span class="shiftOn hidden">${line[key].ru.shiftOn}</span>
            <span class="cpsOn hidden">${line[key].ru.capsOn}</span>
          </div>
          <div class="en-variant ">
            <span class="caseDown">${line[key].en.caseDown}</span>
            <span class="caseUp hidden">${line[key].en.caseUp}</span>
            <span class="shiftOn hidden">${line[key].en.shiftOn}</span>
            <span class="cpsOn hidden">${line[key].en.capsOn}</span>
          </div>`;
      }
      container.append(button);
    }
  }
  fillKeyboardLines(data.firstLine, first_line);
  fillKeyboardLines(data.secondLine, second_line);
  fillKeyboardLines(data.thirdLine, third_line);
  fillKeyboardLines(data.fourthLine, fourth_line);
  fillKeyboardLines(data.fifthLine, fifth_line);
}
