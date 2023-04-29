export function checkLanguage() {
  if (!localStorage.getItem("language")) {
    let language = "ru";
    localStorage.setItem("language", "ru");
    return language;
  } else {
    let language = localStorage.getItem("language");
    return language;
  }
}
