$(document).ready(function () {
    let width = $("body").width();
    let height = $("body").height();
    if (width > 990) {
        $("#sticker").sticky({
            topSpacing: 0,
            center: true,
            zIndex: 990,
            getWidthFrom: "body"
        });
        $('#sticker').on('sticky-start', function () {
            $(this).css('padding', '30px 0')
        });
        $('#sticker').on('sticky-end', function () {
            $(this).css('padding', '50px 0')
        });

        const catalog = new Swiper('.catalog-slides', {
            freeMode: true,
            slidesPerView: 5,
            // pagination: {
            //     el: '.swiper-pagination',
            // },
            scrollbar: {
                el: '.swiper-scrollbar',
                dragSize: 215,
                draggable: true,
            },
        });

    }

    let swiper = new Swiper('.slides', {

        loop: false,
        speed: 1200,
        parallax: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                speed: 700
            },
            990: {
                speed: 1200
            }
        }
    })
    if (width < 990) {
        $(".swiper-pagination").removeClass('d-none')
        $(".actual .item_img").each(function (index, e){
            let img = $(e).find('img')
            $(e).css('background-image', "url("+img.attr('src')+")")
            img.remove()
        })
        // $(".footer-two-container a.wrap").contents().unwrap().wrap('<div class="chlen">')
        $(".footer-two-container").prepend(`<div class="d w-50"></div>`)
        $(".footer-two-container .d").append($("a.wrap"))
        const howWork = new Swiper('.how_work-padding', {
            autoplay: true,
            // freeMode: true,
        });
    } else {
        $(".swiper-scrollbar").removeClass('d-none')
    }


    const trends = new Swiper('.trends', {
        freeMode: true,
        slidesPerView: 5,
        spaceBetween: 20,
        scrollbar: {
            el: '.swiper-scrollbar',
            dragSize: 147,
            draggable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 2.2,
                spaceBetween: 5,
            },
            540: {
                slidesPerView: 5,
                spaceBetween: 5,
            },
            990: {
                slidesPerView: 5.3,
                spaceBetween: 20,
            }
        }
    });

})
