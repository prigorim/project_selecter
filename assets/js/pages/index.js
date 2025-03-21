//region functions
function containerSelectUpdate() {
    let select = [
        "reviews",

    ];

    select.forEach(function (item) {
        $(".selecter").append(`<div class="selecter-select unselect"><span>` + item + `</span></div>`);
    });

    $("#container").append(select);
}

//region listiners
$(".selecter").on("click", ".selecter-select", function () {
    let select = [
        { value: "./reviews.html", label: "reviews" },
    ];
    let label = $(this).find("span").html();
    select.forEach(function (item) {
        console.log(label, ' = ', item.label);
        item.label === label ? window.open(item.value, '_self') : null;
    });
});

$(document).ready(function () {
    containerSelectUpdate();
});