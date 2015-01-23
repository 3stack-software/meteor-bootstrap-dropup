"use strict";

var MIN_MENU_BOTTOM_MARGIN = 100;
var RECOMPUTE_MAX_INTERVAL = 100;

function computeDropUpPositions() {
  var windowHeight = $(window).height();
  // we don't know if more have been added/removed from the page, so lets just re-query each time
  $(".btn-group-dropup").each(function() {
    var dropDownMenuHeight, rect;
    rect = this.getBoundingClientRect();
    if (rect.top > windowHeight) {
      return;
    }
    dropDownMenuHeight = $(this).data('menu');
    if (dropDownMenuHeight == null) {
      dropDownMenuHeight = $(this).children('.dropdown-menu').height();
    }
    $(this).toggleClass("dropup", ((windowHeight - rect.bottom) < (dropDownMenuHeight + MIN_MENU_BOTTOM_MARGIN)) && (rect.top > dropDownMenuHeight));
  });
}

$(window).bind({
  "resize scroll touchstart touchmove mousewheel": _.debounce(computeDropUpPositions, RECOMPUTE_MAX_INTERVAL),
  "load": computeDropUpPositions
});
