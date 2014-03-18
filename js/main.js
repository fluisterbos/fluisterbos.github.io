(function ($){
  /* wait for the page to be loaded */
  $(function(){
    /* Enable the toggle effect 
    --------------------------------------------------------- */
    var $tgl = $("#nav_menu_toggle")
      , $hideToRight = $(".hide-right")
      , $hideToTop =  $(".hide-top")
      , $hideToFade =  $(".hide-fade")
      , animopts = {duration: 400, queue: false}
    ;
    function completeOpts( fn) {
      fn = fn || function(){};
      var cmpl = {complete: fn}
      ;
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
        var on = true
        ;
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


    /* Scale the height of content to the available space
    --------------------------------------------------------- */
    var $content = $('#content')
      , $window  = $(window)
      , $header  = $('#header')
      , $footer  = $('#footer')
      , margin   = 85
    ;

    function resize(){
      var newHeight = $window.height() - $header.height() - $footer.height() - margin;
      ;
      //$content.css({'max-height': newHeight +"px"});
      $content.css({'height': newHeight +"px"});
    };
    $window.on('resize', resize);
    $window.resize();


    /* Enable the custom scrollbar
    --------------------------------------------------------- */
    $content.mCustomScrollbar(); 


    /* Enable the background-slide-show
    --------------------------------------------------------- */
    var $body = $('body')
      , bgset = $body.data('bg')
    ;
    if (bgset && bgset.length) { // if slides are defined
      var slides = []
      ;
      $(bgset).each(function(){
        slides.push({image: this});
      });
      $.supersized({ slideshow: 1, vertical_center : 1, fit_portrait: 0, fit_landscape: 0, slides : slides });
    }

  });
})(jQuery);
