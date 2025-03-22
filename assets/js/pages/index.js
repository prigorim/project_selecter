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