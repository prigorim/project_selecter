var select = [
    { value: "https://expo.dev/", label: "Push" },
    { value: "https://docs.google.com/document/d/1KWBKb3A6GbkhVhCWYeFjs2kEPy6Xd-kWWUs-0txQXCw/edit?tab=t.0", label: "Tech Work" },
    { value: "https://docs.google.com/document/d/1jsr0AD8wGAWRHWMpBFpoZ9DI5qR6iz-JDw7vxeKSr7k/edit?tab=t.0", label: "Reviews" },
    { value: "https://docs.google.com/document/d/1iTOtnph0ne16nLtGJ56hlIX0BWdEUyghMVGd0Ie_sCs/edit?tab=t.0", label: "Mobile app publication" },
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