function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function copy() {
    if (document.getElementById('area').value != '') {
        document.getElementById("area").select();
        document.execCommand("copy");
        $("#copy").fadeIn(
            "slow",
            function () {
                $("#copy").fadeOut("slow");
            }
        );
    }
}

function create() {
    // Шапка позитивного отзыва
    const headPos = [
        "Благодарим",
        "Благодарим Вас",
        "Спасибо",
        "Спасибо Вам",
        "Спасибо Вам большое",
        "Большое спасибо",
        "Большое спасибо Вам"
    ];
    // Тело позитивного отзыва
    const bodyPos = [
        ", что оценили",
        ". Вы помогаете нам становиться лучше",
        ", что нашли время и возможность оценить нас",
        ". Мы рады, что Вы с нами",
        " за приятный отзыв",
        ", что пользуетесь сервисом Интернет-аптека ФАРМЭКОНОМ",
        ", что смогли уделить время для отзыва о нашей работе",
        ", очень приятно получать обратную связь",
    ];
    // Подвал позитивного отзыва
    const footPos = [
        ". Мы учтем эту информацию в своей работе по техническому улучшению мобильного приложения Аптека ФАРМЭКОНОМ",
        ", рады были вам помочь",
    ];

    // Шапка негативного отзыва
    const headNeg = [
        "Большое спасибо за обратную связь. ",
        "Здравствуйте, благодарим Вас, что нашли время оставить отзыв. ",
        "Благодарим за отзыв. ",
    ];
    // Тело негативного отзыва
    const bodyNeg = [
        "Мы работаем над улучшением приложения. ",
        "Приносим Вам извинения за причиненные неудобства. ",
        "Приносим Вам свои извинения. ",
    ];
    // Подвал негативного отзыва
    const footNeg = [
        "Свяжитесь, пожалуйста, с нами по адресу: help@pharmgarant.ru, или телефону 8800-20-10-250",
        "Вы можете обратиться к нам по адресу help@pharmgarant.ru, или телефону 8800-20-10-250",
    ];

    // Получение длин всех массивов частей отзыва
    const headPosLength = headPos.length;
    const bodyPosLength = bodyPos.length;
    const footPosLength = footPos.length;
    const headNegLength = headNeg.length;
    const bodyNegLength = bodyNeg.length;
    const footNegLength = footNeg.length;

    // Проверка чекбоксов на негатив и наличие подвала
    const negative = document.getElementById("negative").checked;
    const ender = document.getElementById("ender").checked;

    let review = "";

    // Создание случайного отзыва
    if (negative) {
        review = review.concat(headNeg[getRandomInt(headNegLength)], bodyNeg[getRandomInt(bodyNegLength)]);
        if (ender) {
            review = review.concat(footNeg[getRandomInt(footNegLength)]);
        }
    } else {
        review = review.concat(headPos[getRandomInt(headPosLength)], bodyPos[getRandomInt(bodyPosLength)]);
        if (ender) {
            review = review.concat(footPos[getRandomInt(footPosLength)]);
        }
    }
    document.getElementById('area').value = review;
}

$(".container-footer-copy").on("click", function () {
    copy();
});

$(".container-footer-button").on("click", function () {
    create();
});