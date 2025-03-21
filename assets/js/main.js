//region variables
var theme = "light";

//region functions
function getLocalStorageTheme() {
  const theme = localStorage.getItem("themeFarmHelper");
  return theme || "light";
}

function themeSwitcher() {
  $("body").toggleClass("dark");
  $(".header").toggleClass("dark");
  $(".header-title").toggleClass("dark");
  $(".header-theme-switcher").toggleClass("dark");
  $(".footer").toggleClass("dark");
  $(".selecter-select").toggleClass("dark");
}

//region listiners
$(".header-theme").on("click", function () {
  themeSwitcher();
  theme != "dark" ? localStorage.setItem("themeFarmHelper", "dark") : localStorage.setItem("themeFarmHelper", "light");
});

//region ready
$(document).ready(function () {
  theme = getLocalStorageTheme();
  containerSelectUpdate();
  theme === "dark" ? themeSwitcher() : null;
});
