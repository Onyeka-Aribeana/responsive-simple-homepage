const logo = document.querySelector(".header__logo");
const sun = document.querySelector(".nav__theme-sun");
const moon = document.querySelector(".nav__theme-moon");
const themeCheckbox = document.querySelector(".nav__theme-checkbox");

const light = "#F2F9FE";
const dark = "#223344";

const changeFillColor = function (icon, from, to) {
  const fills = icon.contentDocument.querySelectorAll(`[fill='${from}']`);
  const strokes = icon.contentDocument.querySelectorAll(`[stroke='${from}']`);

  Array.from(fills)
    .concat(Array.from(strokes))
    .forEach((element) => {
      element.setAttribute("fill", to);
      element.setAttribute("stroke", to);
    });
};

changeFillColor(moon, dark, light);

const toggleDarkMode = function (darkModeEnabled) {
  document.body.classList.toggle("dark", darkModeEnabled);
  changeFillColor(
    sun,
    darkModeEnabled ? dark : light,
    darkModeEnabled ? light : dark
  );
  changeFillColor(
    moon,
    darkModeEnabled ? light : dark,
    darkModeEnabled ? dark : light
  );
  changeFillColor(
    logo,
    darkModeEnabled ? dark : light,
    darkModeEnabled ? light : dark
  );
};

themeCheckbox.addEventListener("change", function (e) {
  toggleDarkMode(e.target.checked);
});

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  themeCheckbox.checked = true;
  toggleDarkMode(true);
}
