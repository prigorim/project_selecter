var select = [
    { value: "https://expo.dev/accounts/pharmeconom/projects/pharmprod/builds", label: "Expo" },
    { value: "https://appmetrica.yandex.ru/overview?period=today&group=dekaminute&currency=rub&accuracy=medium&appId=4280308", label: "AppMetrica" },
    { value: "https://console.firebase.google.com/u/1/project/pharmeconom-mobile-app/settings/general/ios:ru.pharmeconom.app?pli=1", label: "Firebase" },
    { value: "https://habr.com/ru/articles/464261/", label: "API" },
    { value: "http://10.0.5.15/zabbix.php?action=charts.view&filter_hostids%5B%5D=11804&filter_set=1", label: "Zabbix" },
    { value: "https://mail.google.com/mail/u/1/#inbox", label: "Mail" },
    { value: "https://pharmeconom.planfix.ru/?action=tasks&filter=:in", label: "Planfix" },
    { value: "https://gitlab.com/users/pharmgarant.ru/projects", label: "GitLAB" },
    { value: "https://github.com/prigorim?tab=repositories", label: "GitHUB" },
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