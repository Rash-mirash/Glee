$(function() {
  $('.slider__inner').slick({
    dots: true,
    arrows: false
  });

  mixitup('.product__content');
  mixitup('.desing__content');

  $(document).ready(function () {
    $('.product__content').mixItUp({
      selectors: {
        filter: '.filter-1'
      }
    });

    $('.desing__content').mixItUp({
      selectors: {
        filter: '.filter-2'
      }
    });
  });

});