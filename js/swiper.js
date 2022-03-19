var mySwiper = new Swiper('.swiper-container',{
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction' },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            640: {
                slidesPerView: 4,
                spaceBetween: 40
            } } });