var select = [
    { value: "https://developer.huawei.com/consumer/ru/service/josp/agc/index.html#/myApp/106832257/v1646299582344226048", label: "AppGallery" },
    { value: "https://appstoreconnect.apple.com/apps/1478551285/distribution/ios", label: "App Store" },
    { value: "https://global.developer.mi.com/distribute/app/list", label: "GetApps" },
    { value: "https://play.google.com/console/u/1/developers/7994947562696594600/app/4973903313446474675/app-dashboard?timespan=thirtyDays", label: "PlayMarket" },
    { value: "https://seller.samsungapps.com/content/common/summaryContentList.as", label: "Samsung Store" },
    { value: "https://console.rustore.ru/apps/2063570438", label: "RuStore" },

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