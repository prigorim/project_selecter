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
  $(".copy-text").toggleClass("dark");
}

//region listiners
$(".header-theme").on("click", function () {
  themeSwitcher();
  theme != "dark" ? localStorage.setItem("themeFarmHelper", "dark") : localStorage.setItem("themeFarmHelper", "light");
});

$(".header-logo").on("click", function () {
  window.open("./index.html", "_self");
});

//region ready
$(document).ready(function () {
  theme = getLocalStorageTheme();
  theme === "dark" ? themeSwitcher() : null;
});
