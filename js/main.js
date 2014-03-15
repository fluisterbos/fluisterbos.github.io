(function ($){
  var $tgl = $("#nav_menu_toggle");
  var $hideToRight = $(".hide-right");
  var $hideToTop =  $(".hide-top");
  var $hideToFade =  $(".hide-fade");
  var animopts = {duration: 400, queue: false};
  if ($tgl) {
    function hideElements () {
      $tgl.rotate({animateTo:-90});
      $hideToRight.animate({width: "toggle"},animopts);
      $hideToTop.slideUp(animopts);
      $hideToFade.fadeOut(animopts);
    }

    function showElements () {
      $tgl.rotate({animateTo:0});
      $hideToRight.animate({width: "toggle"},animopts);
      $hideToTop.slideDown(animopts);
      $hideToFade.fadeIn(animopts);
    }

    function alternate(fnOn, fnOff) {
      var on = true;
      return function() {
        if (on) { fnOn(); } else { fnOff(); }
        on = !on;
      }
    }

    alternate.on = true;


    $(function(){
      $tgl.on('click', alternate(hideElements, showElements));
    });
  }
})(jQuery);
