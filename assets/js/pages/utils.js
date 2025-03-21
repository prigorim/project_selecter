var select = [
    { value: "https://expo.dev/", label: "Expo" },
    { value: "https://developer.apple.com/", label: "AppMetrica" },
    { value: "https://firebase.google.com/", label: "Firebase" },
    { value: "https://habr.com/ru/articles/464261/", label: "API" },
    { value: "https://www.zabbix.com/ru", label: "Zabbix" },
    { value: "https://mail.google.com/", label: "Mail" },
]

function containerSelectUpdate() {
    let baseIconUrl = "https://s2.googleusercontent.com/s2/favicons?domain_url=";
    select.forEach(function (item) {
        let iconUrl = baseIconUrl + item.value;
        $(".selecter").append(`<div class="selecter-select unselect"><img title="` + item.label + `" src="` + iconUrl + `" alt="` + item.label + `" /><span>` + item.label + `</span></div>`);
    });
}

//region listiners
$(".selecter").on("click", ".selecter-select", function () {
    let label = $(this).find("span").html();
    select.forEach(function (item) {
        console.log(label, ' = ', item.label);
        item.label === label ? window.open(item.value, '_blank') : null;
    });
});

$(document).ready(function () {
    containerSelectUpdate();
});