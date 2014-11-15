/* ========================================================================
 * Arrow Megamenu v1.0.0
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Megamenu = function (element, options) {
    this.options       = $.extend({}, Megamenu.DEFAULTS, options)
    this.$element      = $(element)
    this.$sidenav      = $(this.$element.find('.sidenav'))
    this.$sidenavClone = $(this.$sidenav.clone());
    this.$toggle       = $(this.$element.find('.navbar-toggle'))

    this.init()
  }

  Megamenu.VERSION  = '1.0.0'

  Megamenu.DEFAULTS = {
    target:             'body',
    transitionClass:    'offcanvas-menu-in',
    transitionComplete: 'offcanvas-menu-finished'
  }
  
  // Get transition support
  var transSupport = (function getTransitionSupport() {
    var el = document.createElement('bs'),
             transEndEventNames = {
                WebkitTransition : 'webkitTransitionEnd',
                MozTransition    : 'transitionend',
                OTransition      : 'oTransitionEnd otransitionend',
                transition       : 'transitionend'
              },
              ts = []

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        ts.push(transEndEventNames[name])
      }
    }
    ts = ts.join();
    return ts.replace(',', " ")
  }());
  
  Megamenu.prototype.init = function() {
    var that = this; 
    this.$sidenavClone.addClass('offcanvas-clone').appendTo('body')
    
    this.$toggle.on('click', function(e) {
      e.preventDefault()
      if(transSupport == '') {
        $('body').toggleClass('offcanvas-menu-in')  // for IE8
      } else {
        if($('body').hasClass('offcanvas-menu-in')) {
          $('body').removeClass('offcanvas-menu-finished')
          setTimeout(function() {
            $('body').removeClass('offcanvas-menu-in').one(transSupport, function(){
              that.$sidenavClone.removeClass('in')
            });
          }, 20)
        } else {
          that.$sidenavClone.addClass('in')
          $('body').addClass('offcanvas-menu-in').one(transSupport, function(){
            $('body').addClass('offcanvas-menu-finished')
          });
        }
      }
    });
    
    // Resize handler
    $(window).on('resize', function(){
      $('body').removeClass('offcanvas-menu-finished')
      setTimeout(function(){
        $('body').removeClass('offcanvas-menu-in')
        that.$sidenavClone.find('.open').removeClass('open')
        that.$element.find('.open').removeClass('open')
      }, 50);
    });
    
  }


  // MEGAMENU PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.megamenu')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.megamenu', (data = new Megamenu(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.megamenu

  $.fn.megamenu             = Plugin
  $.fn.megamenu.Constructor = Megamenu


  // MEGAMENU NO CONFLICT
  // =================

  $.fn.megamenu.noConflict = function () {
    $.fn.megamenu = old
    return this
  }


  // MEGAMENU DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="megamenu"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy)
    })
  })

}(jQuery);