import loadCarousel from '../../scripts/delayed.js';

loadCarousel().then(() => {
  $('.carousel').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
}); 