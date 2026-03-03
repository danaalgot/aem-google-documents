// add delayed functionality here
export default function loadCarousel() {
  return new Promise((resolve, reject) => {
    if (typeof window.$ !== 'undefined' && typeof window.$.fn.slick !== 'undefined') {
      resolve(window.$);
      return;
    }

    const loadJquery = document.createElement('script');
    loadJquery.setAttribute('type', 'text/javascript');
    loadJquery.src = 'https://code.jquery.com/jquery-3.5.1.min.js';

    loadJquery.onerror = () => reject(new Error('Failed to load jQuery'));

    loadJquery.onload = () => {
      const loadAccessibleSlick = document.createElement('script');
      loadAccessibleSlick.setAttribute('type', 'text/javascript');
      loadAccessibleSlick.src = '//cdn.jsdelivr.net/npm/@accessible360/accessible-slick@1.0.1/slick/slick.min.js';

      loadAccessibleSlick.onload = () => {
        if (typeof window.$ !== 'undefined' && typeof window.$.fn.slick !== 'undefined') {
          resolve(window.$);
        } else {
          reject(new Error('Accessible Slick not available after load'));
        }
      };

      loadAccessibleSlick.onerror = () => reject(new Error('Failed to load Accessible Slick'));

      document.body.append(loadAccessibleSlick);
    };

    document.body.append(loadJquery);
  });
}
