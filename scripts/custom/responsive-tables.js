/* ========================================================================
 * Arrow Framework: responsive-tables.js v1.0.0
 * http://usmlrs1278.arrow.com/framework/javascript-base/#rtables
 * ======================================================================== */

+function ($) {
  'use strict'
  
  // RTABLE CLASS DEFINITION
  // ===============================

  var RTable = function (element, options) {
    this.options     = $.extend({}, RTable.DEFAULTS, options)
    this.$element    = $(element)
    
    this.breakpoint  = this.options.breakpoint
    this.innerTable  = this.$element.find('.table:first-child')
    this.switched    = false
    
    this.init()
    
  }

  RTable.VERSION  = '1.0.0'

  RTable.DEFAULTS = {
    breakpoint: 768
  }
  
  RTable.prototype.init = function() {
    this.$element.addClass('js')
    this.switched = ($(window).width() < this.breakpoint) ? true : false;
    this.update()
    var that = this
    $(window).bind('resize', function(){ that.trackWidth() })
  }
  
  RTable.prototype.trackWidth = function() {
    if($(window).width() < this.breakpoint && !this.switched) {
      this.switched = !this.switched
      this.update()
    } else if($(window).width() > this.breakpoint && this.switched) {
      this.switched = !this.switched
      this.update()
    }
  }
  
  RTable.prototype.update = function() {
    (this.switched) ? this.split() : this.unsplit()
  }
  
  RTable.prototype.split = function() {
    var cp = this.innerTable.clone()
    this.innerTable.wrap('<div class="table-wrapper" />')
    cp.find('td:not(:first-child), th:not(:first-child)').css('display', 'none')
    this.innerTable.closest('.table-wrapper').append(cp)
    cp.wrap('<div class="pinned" />')
    this.innerTable.wrap('<div class="scrollable" />')
  }
  
  RTable.prototype.unsplit = function() {
    this.innerTable.closest('.table-wrapper').find('.pinned').remove()
    this.innerTable.unwrap().unwrap()
  }
  
  // RTABLE PLUGIN DEFINITION
  // ===============================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.rtable')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.rtable', (data = new RTable(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.rtable

  $.fn.rtable             = Plugin
  $.fn.rtable.Constructor = RTable


  // RTABLE NO CONFLICT
  // =========================

  $.fn.rtable.noConflict = function () {
    $.fn.rtable = old
    return this
  }


  // RTABLE DATA-API
  // =========================

  $(window).on('load', function () {
    $('[data-spy="rtable"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      Plugin.call($spy, data)
    })
  })
  
}(jQuery);