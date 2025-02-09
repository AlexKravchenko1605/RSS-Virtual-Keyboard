export function getOS() {
  if (navigator.appVersion.indexOf("Windows") >= 0) return "Windows";
  if (navigator.appVersion.indexOf("Linux") >= 0) return "Linux";
}
