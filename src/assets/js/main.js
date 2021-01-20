'use script';
import Swiper, {Navigation, Pagination} from 'swiper';
import Readmore from "readmore-js";
import GLightbox from 'glightbox';

Swiper.use([Navigation, Pagination]);

window.addEventListener('DOMContentLoaded', () => {

    let swiperArticles = new Swiper('.info-block__wrapper', {
        slidesPerView: 1,
        loop: false,
        spaceBetween: 100,
        observer: true,
        observeParents: true,
        pagination: {
            el: '.info-block__pagination',
            clickable: true,
        },
    });

});