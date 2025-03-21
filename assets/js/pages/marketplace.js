var select = [
    { value: "https://consumer.huawei.com/ru/mobileservices/appgallery/", label: "AppGallery" },
    { value: "https://developer.apple.com/", label: "App Store" },
    { value: "https://global.app.mi.com/", label: "GetApps" },
    { value: "https://play.google.com/console/", label: "PlayMarket" },
    { value: "https://galaxystore.ru/", label: "Samsung Store" },
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