/* global $ */
import loadCarousel from '../../scripts/delayed.js';

export default async function decorate(block) {
  await loadCarousel();
  $(block).slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
}
