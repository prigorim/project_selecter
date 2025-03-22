var select = [
    { value: "https://expo.dev/", label: "Expo" },
    { value: "https://developer.apple.com/", label: "AppMetrica" },
    { value: "https://firebase.google.com/", label: "Firebase" },
    { value: "https://habr.com/ru/articles/464261/", label: "API" },
    { value: "https://www.zabbix.com/ru", label: "Zabbix" },
    { value: "https://mail.google.com/", label: "Mail" },
    { value: "https://planfix.ru/", label: "Planfix" },
]

function containerSelectUpdate() {
    let baseIconUrl = "https://s2.googleusercontent.com/s2/favicons?domain_url=";
    select.forEach(function (item) {
        let iconUrl = baseIconUrl + item.value;
        $(".selecter").append(`<div class="selecter-select unselect"><img title="` + item.label + `" src="` + iconUrl + `" alt="` + item.label + `" /><span>` + item.label + `</span></div>`);
    });
}

//region listiners
$(".selecter").on("click auxclick", ".selecter-select", function (e) {
    let label = $(this).find("span").html();
    select.forEach(function (item) {
        switch (e.which) {
            case 1:
                item.label === label ? window.open(item.value, '_self') : null;
                break;
            case 2:
                item.label === label ? window.open(item.value, '_blank') : null;
                break;
        }
    });
});

$(document).ready(function () {
    containerSelectUpdate();
});