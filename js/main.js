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
        document.addEventListener('scroll', function(){
            if (window.scrollY < 100){
                document.getElementsByClassName('mobile')[0].classList.remove('background')

            } else {
                document.getElementsByClassName('mobile')[0].classList.add('background')
            }
        })
        document.getElementsByClassName('swiper-pagination')[0].classList.remove('d-none')
        // $(".swiper-pagination").removeClass('d-none')
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

    let filter_brands = new Swiper('.filters_brands', {
        freeMode: true,
        slidesPerView: "auto",
        direction: "vertical",
        scrollbar: {
            el: '.filters_scrollbar',
            dragSize: 96,
            draggable: true,
        },
    })
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

    let menu = document.getElementsByClassName('menu')[0]
    let menuShow = document.getElementsByClassName('header-wrapper')[0]
    let bg = false
    menu.addEventListener('click', function (){
        if (bg){
            document.getElementsByClassName('mobile')[0].style.backgroundColor = ""
        } else {
            document.getElementsByClassName('mobile')[0].style.backgroundColor = "transparent"
        }
        menuShow.classList.toggle('active')
        bg = !bg
    })

    /*Страница каталога с фильтром*/
    let ranger = $(".js-range-slider").ionRangeSlider({
        postfix: "₽",
        hide_from_to: true,
        onStart: function (data) {
            // fired then range slider is ready
            document.getElementsByClassName('irs-min')[0].textContent = data.from_pretty + "₽"
            document.getElementsByClassName('irs-max')[0].textContent = data.to_pretty + "₽"
        },
        onChange: function (data) {
            console.log(data)
            document.getElementsByClassName('irs-min')[0].textContent = data.from_pretty + "₽"
            document.getElementsByClassName('irs-max')[0].textContent = data.to_pretty + "₽"
        },
        onFinish: function (data) {
            document.getElementsByClassName('irs-min')[0].textContent = data.from_pretty + "₽"
            document.getElementsByClassName('irs-max')[0].textContent = data.to_pretty + "₽"
        },
        onUpdate: function (data) {
            document.getElementsByClassName('irs-min')[0].textContent = data.from_pretty + "₽"
            document.getElementsByClassName('irs-max')[0].textContent = data.to_pretty + "₽"
        }
    });

    let a = document.getElementsByClassName('filters_title');
    for(let i = 0; i < a.length; i++){
        a[i].addEventListener("click", function(){
            let id = this.getAttribute("data-drop");
            this.classList.toggle('active')
            document.getElementById(id).classList.toggle('active')
        });
    }

})
