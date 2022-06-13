const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

function start() {
    let swiperWrapper = $('.swiper-wrapper')
    let swiperSlide

    let imgList = [
        'url(./img/1.jpg)',
        'url(./img/2.jpg)',
        'url(./img/3.jpg)',
        'url(./img/4.jpg)',
        'url(./img/5.jpg)',
        'url(./img/6.jpg)',
        'url(./img/7.jpg)',
        'url(./img/8.jpg)',
        'url(./img/9.jpg)',
        'url(./img/10.jpg)',
    ]

    for (var i = 0; i < 10; i++) {
        swiperSlide = document.createElement('div')
        swiperSlide.classList.add('swiper-slide')
        swiperWrapper.appendChild(swiperSlide)
    }
    
    let swiperSlide_Item = $$('.swiper-slide')
    swiperSlide_Item.forEach((item, index) => {
        swiperSlide_Item[index].style.backgroundImage = imgList[index]
    })

    function appearText() {
        let first = $('.first')
        let second = $('.second')
        let slider = $('.swiper')

        setTimeout(() => {
            first.style.opacity = '1'
            setTimeout(() => {
                second.style.opacity = '1'
                setTimeout(() => {
                    slider.style.opacity = '1'
                    slider.style.pointerEvents = 'all'
                }, 2000)
            }, 2000)
        }, 2000)
    }
    appearText()
}
start()
