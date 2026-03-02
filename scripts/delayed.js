// add delayed functionality here
export default function loadCarousel() {

  // ------------------------------------------------
  // Loading libraries for Accessible Slick carousel
  // ------------------------------------------------
  return new Promise((resolve, reject) => {
    // Check if JQuery and Accessible Slick are already loaded
    if (typeof window.$ !== 'undefined' && typeof window.$.fn.slick !== 'undefined') {
      resolve(window.$);
      return;
    }

    // ========== Load JQuery ========== //
    const loadJquery = document.createElement('script');
    loadJquery.setAttribute('type', 'text/javascript');
    loadJquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js';

    loadJquery.onload = () => {
      // Give it a moment for Jquery to be available
      setTimeout(() => {
        if (typeof window.$ !== 'undefined') {
          resolve(window.$);
        } else {
          reject(new Error('Jquery not found on window after CDN load'));
        }
      }, 100);
    };

    loadJquery.onerror = () => {
      reject(new Error('Failed to load Jquery script'));
    };

    document.head.append(loadJquery);

    // ========== Load Accessible Slick ========== //
    const loadAccessibleSlick = document.createElement('script');
    loadAccessibleSlick.setAttribute('type', 'text/javascript');
    loadAccessibleSlick.src = '//cdn.jsdelivr.net/npm/@accessible360/accessible-slick@1.0.1/slick/slick.min.js';

    loadAccessibleSlick.onload = () => {
      // Give it a moment for Accessible Slick to be available
      setTimeout(() => {
        if (typeof window.$.fn.slick !== 'undefined') {
          resolve(window.$.fn.slick);
        } else {
          reject(new Error('Accessible Slick not found on window after CDN load'));
        }
      }, 100);
    };

    loadAccessibleSlick.onerror = () => {
      reject(new Error('Failed to load Jquery script'));
    };

    document.head.append(loadAccessibleSlick);
  });
}