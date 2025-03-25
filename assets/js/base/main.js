//region variables
var theme = "light";

//region functions
function getLocalStorageTheme() {
  const theme = localStorage.getItem("themeFarmHelper");
  return theme || "light";
}

function updateFooter() {
  let info = [
    { label: "Developer", content: "Чернышев Евгений" },
    { label: "Company", content: "ФАРМЭКОНОМ" },
    { label: "Version", content: "3.7" },
    { label: "Date update", content: "25.03.2025" },
  ];

  info.forEach(function (item) {
    $(".footer").append(`<div class="footer-element"><span>` + item.label + `</span><span>:</span><span>` + item.content + `</span></div>`);
  });
}

function themeSwitcher() {
  $("body").toggleClass("dark");
  $(".header").toggleClass("dark");
  $(".header-title").toggleClass("dark");
  $(".header-theme-switcher").toggleClass("dark");
  $(".footer").toggleClass("dark");
  $(".selecter-select").toggleClass("dark");
  $(".copy-text").toggleClass("dark");
  $(".navi").toggleClass("dark");
  $(".navi").find("a").toggleClass("dark");
}

//region listiners
$(".header-theme").on("click", function () {
  themeSwitcher();
  theme != "dark" ? localStorage.setItem("themeFarmHelper", "dark") : localStorage.setItem("themeFarmHelper", "light");
});

$(".header-logo").on("click contextmenu auxclick ", function (e) {
  switch (e.which) {
    case 1:
      window.open("./index.html", "_self");
      break;
    case 2:
      window.open("./index.html", "_blank");
      break;
  }
});

$(".header-title").on("click", function () {
  $(".footer").slideToggle("fast");
});

//region ready
$(document).ready(function () {
  updateFooter()
  theme = getLocalStorageTheme();
  theme === "dark" ? themeSwitcher() : null;
});
