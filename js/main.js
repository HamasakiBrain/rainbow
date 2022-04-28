$(document).ready(function () {
    $("#sticker").sticky({
        topSpacing: 0,
        center: true,
        zIndex: 990,
        getWidthFrom: "body"
    });
    $('#sticker').on('sticky-start', function() { $(this).css('padding', '30px 0') });
    $('#sticker').on('sticky-end', function() { $(this).css('padding', '50px 0') });
    let swiper = new Swiper('.slides', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
    const catalog = new Swiper('.catalog-slides', {
        freeMode: true,
        slidesPerView: 5,
        pagination: {
            el: '.swiper-pagination',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            dragSize: 215
        },
    });
    const trends = new Swiper('.trends', {
        freeMode: true,
        slidesPerView: 5,
        spaceBetween: 20,
        scrollbar: {
            el: '.swiper-scrollbar',
            dragSize: 147
        },
    });

})
