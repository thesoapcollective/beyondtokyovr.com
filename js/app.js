var $body;
var isTouch = false;

$(document).ready(function() {
  $body = $('body');
  checkForTouch();
  setupProjectImages();
});

var checkForTouch = function() {
  isTouch = 'ontouchstart' in window || 'onmsgesturechange' in window;
  if (isTouch) {
    $body.addClass('is-touch');
  }
};

var setupProjectImages = function() {
  $('.gallery-item img').unveil(100);
  if (!isTouch) {
    $('.gallery-item a').magnificPopup({
      type: 'image',
      gallery: { enabled: true },
      zoom: { enabled: true },
    });
  }
};
