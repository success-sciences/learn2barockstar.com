!function(a){"use strict";skel.breakpoints({xlarge:"(max-width: 1680px)",large:"(max-width: 1280px)",medium:"(max-width: 980px)",small:"(max-width: 736px)",xsmall:"(max-width: 480px)"}),a(function(){var o=a(window),e=a("body"),n=a("#header"),i=a("#banner");e.addClass("is-loading"),o.on("load",function(){window.setTimeout(function(){e.removeClass("is-loading")},100)}),a("form").placeholder(),skel.on("+medium -medium",function(){a.prioritize(".important\\28 medium\\29",skel.breakpoint("medium").active)}),skel.vars.IEVersion<9&&n.removeClass("alt"),0<i.length&&n.hasClass("alt")&&(o.on("resize",function(){o.trigger("scroll")}),i.scrollex({bottom:n.outerHeight(),terminate:function(){n.removeClass("alt")},enter:function(){n.addClass("alt")},leave:function(){n.removeClass("alt")}}));var t=a("#menu");t._locked=!1,t._lock=function(){return!t._locked&&(t._locked=!0,window.setTimeout(function(){t._locked=!1},350),!0)},t._show=function(){t._lock()&&e.addClass("is-menu-visible")},t._hide=function(){t._lock()&&e.removeClass("is-menu-visible")},t._toggle=function(){t._lock()&&e.toggleClass("is-menu-visible")},t.appendTo(e).on("click",function(o){o.stopPropagation(),t._hide()}).find(".inner").on("click",".close",function(o){o.preventDefault(),o.stopPropagation(),o.stopImmediatePropagation(),t._hide()}).on("click",function(o){o.stopPropagation()}).on("click","a",function(o){var e=a(this).attr("href");o.preventDefault(),o.stopPropagation(),t._hide(),window.setTimeout(function(){window.location.href=e},350)}),e.on("click",'a[href="#menu"]',function(o){o.stopPropagation(),o.preventDefault(),t._toggle()}).on("keydown",function(o){27==o.keyCode&&t._hide()})})}(jQuery);