jQuery(document).ready(function($){$(".owl-carousel").owlCarousel();var t=$("#nav-toggle"),o=$("#nav-menu");t.click(function(){$(this).toggleClass("is-active"),o.toggleClass("is-active")}),$(".modal-button").click(function(){var t=$(this).data("target");$("html").addClass("is-clipped"),$(t).addClass("is-active")}),$(".modal-background, .modal-close").click(function(){$("html").removeClass("is-clipped"),$(this).parent().removeClass("is-active")}),$(".modal-card-head .delete, .modal-card-foot .button").click(function(){$("html").removeClass("is-clipped"),$("#modal-ter").removeClass("is-active")}),$(".highlight").each(function(){var t=$(this),o='<button class="copy">Copy</button>',n='<button class="expand">Expand</button>';t.append('<button class="copy">Copy</button>'),t.find("pre code").innerHeight()>600&&t.append('<button class="expand">Expand</button>')}),$(".highlight .copy, .highlight .expand").hover(function(){$(this).parent().css("box-shadow","0 0 0 1px #ed6c63")},function(){$(this).parent().css("box-shadow","none")}),$(".highlight .expand").click(function(){$(this).parent().children("pre").css("max-height","none")})}),$("#yondrscroll").click(function(){$("html, body").animate({scrollTop:$("#yondrcontent").offset().top},600)}),(new WOW).init(),$(window).scroll(function(){var t=$("#par-one").height(),o=$(window).height(),n=1250,a=t-o+1250;$(window).scrollTop()>=a&&$("#par-one").addClass("animated fadeIn")}),$("a").click(function(){return $("html, body").animate({scrollTop:$($(this).attr("href")).offset().top-64},500),!1});