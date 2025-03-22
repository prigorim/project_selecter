var select = [
    { value: "./reviews.html", label: "reviews" },
    { value: "./marketplace.html", label: "marketplace" },
    { value: "./utils.html", label: "utils" },
    { value: "./docs.html", label: "docs" },
]

//region functions
function containerSelectUpdate() {
    select.forEach(function (item) {
        $(".selecter").append(`<div class="selecter-select unselect"><span>` + item.label + `</span></div>`);
    });
}

//region listiners
$(".selecter").on("click", ".selecter-select", function () {
    let label = $(this).find("span").html();
    select.forEach(function (item) {
        console.log(label, ' = ', item.label);
        item.label === label ? window.open(item.value, '_self') : null;
    });
});

$(document).ready(function () {
    containerSelectUpdate();
});