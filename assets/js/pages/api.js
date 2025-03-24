// $(".navi").on("click auxclick", "a", function (e) {
//     e.preventDefault();
//     var href = $(this).attr("href");
//     console.log(href, $(href).offset().top);
//     $(".content_area").animate({scrollTop: $(href).offset().top - 38},'300');

// });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const destination = document.querySelector(this.getAttribute('href'));
        if (destination) {
            destination.scrollIntoView({ behavior: 'smooth' });
        }
    });
});