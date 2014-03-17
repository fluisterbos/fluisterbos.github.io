(function ($){
  /* wait for the page to be loaded */
  $(function(){
    /* Enable the toggle effect 
    --------------------------------------------------------- */
    var $tgl = $("#nav_menu_toggle");
    var $hideToRight = $(".hide-right");
    var $hideToTop =  $(".hide-top");
    var $hideToFade =  $(".hide-fade");
    var animopts = {duration: 400, queue: false};
    function completeOpts( fn) {
      fn = fn || function(){};
      var cmpl = {complete: fn};
      return $.extend(cmpl, animopts);
    }


    if ($tgl) { // if a tgl is found
      var completeHide = completeOpts( function() {
          $(this).css('display', 'none');
      });

      function hideElements () {
        $tgl.rotate({animateTo:-90});
        $hideToRight.animate({width: "toggle"}, completeHide);
        $hideToTop.slideUp( completeHide);
        $hideToFade.fadeOut( completeHide);
      }

      function showElements () {
        $tgl.rotate({animateTo:0});
        $hideToRight.animate({width: "toggle"}, completeOpts( function() {  
          $(this).css('display', 'block');
          $(this).css('width', 'none');
        }));
        $hideToTop.slideDown( completeOpts( function() {
          $(this).css('display', 'block');
          $(this).css('height', 'none');
        }));
        $hideToFade.fadeIn( completeOpts( function() {
          $(this).css('display', 'block');
          $(this).css('opacity', '1');
        }));
      }

      function alternate(fnOn, fnOff) {
        var on = true;
        return function() {
          if (on) { fnOn(); } else { fnOff(); }
          on = !on;
        }
      }

      alternate.on = true;

      //$tgl.on('click', alternate(hideElements, showElements));
      $tgl.on('mouseenter', hideElements);
      $tgl.on('mouseout', showElements);

    }


    /* Enable the background-slide-show
    --------------------------------------------------------- */
    var $body = $('body');
    var bgset = $body.data('bg');
    if (bgset && bgset.length) { // if slides are defined
      var slides = [];
      $(bgset).each(function(){
        //$('<img/>')[0].src = this; // preloads the image without adding it to the page 
        slides.push({image: this});
      });
      $.supersized({ slideshow: 1, vertical_center : 1, fit_portrait: 0, fit_landscape: 0, slides : slides });
    }


  });
})(jQuery);
