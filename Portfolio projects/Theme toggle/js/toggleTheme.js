export function themeToggleEvent() {
  let toggler = document.getElementById("theme-toggler");
  return toggler.addEventListener("change", (event) => {
    if (event.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else document.documentElement.setAttribute("data-theme", "light");
  });
}
