$("#nav ul li a[href^='#']").on("click",function(e){e.preventDefault(),$("html, body").animate({scrollTop:$(this.hash).offset().top},300,function(){window.location.hash=this.hash})}),function($){"use strict";function e(e){var i=this,t,a,n,s=$([]),o=$([]),l,r,c,d,p,h,u,f=$([]),g=$([]),v=[],m=[],y=[],w=[],C,k,b,T,x=0,S=300,_=300,A,I,D,N,O=!1,P,z={spacing:0,wave:!0,waveTimeout:300,modifier:"",slideShowSpeed:1e4,cellFadeInSpeed:200,noCategoryName:"kaikki kuvat",disableSliderOnClick:!1,load:function(e){e()},onCellClick:function(e){}},F={windowResize:function(){X()},bodyClick:function(e){0===$(e.target).closest(".galereya-cats").length&&o.removeClass("open")},categoriesListClick:function(e){var i=$(e.target),t=e.target.nodeName;"SPAN"===t&&(i=i.parent()),i.is(":first-child")||V(i.find("span").text()),o.toggleClass("open")},cellClick:function(e){i.options.disableSliderOnClick||Y(parseInt(this.getAttribute("data-visibleIndex"),10)),i.options.onCellClick(e)},sliderNextClick:function(e){ie("next")},sliderPrevClick:function(e){ie("prev")},sliderCloseClick:function(){Z()},sliderPlayClick:function(){P?se():ne()},bodyKeyDown:function(e){O&&(37!==e.which&&39!==e.which||e.preventDefault())},bodyKeyUp:function(e){if(O)switch(e.which){case 27:Z();break;case 37:d.click();break;case 39:c.click()}}},K=function(){i.addClass("galereya").addClass(i.options.modifier),Q(function(){R(),X(),U(),i.options.wave&&L()&&J(),oe()})},L=function(){var e=document.createElement("div").style,i="transition"in e||"WebkitTransition"in e||"MozTransition"in e||"msTransition"in e||"OTransition"in e;return i},M=function(e){var i=e.css("transitionDuration")||e.css("webkitTransitionDuration")||e.css("mozTransitionDuration")||e.css("oTransitionDuration")||e.css("msTransitionDuration")||0;return i=1e3*parseFloat(i)},j=function(){S=s.width(),_=s.height(),x=Math.floor((i.width()-10)/(S+i.options.spacing)),1>x&&(x=1),b=x*S+(x-1)*i.options.spacing,T=Math.ceil(n.length/x)*_},W=function(e){var t=$(document.createElement("img")).attr("src",e);return i.append(t),n=n.add(t),t},E=function(e,i){var t=e.addClass("galereya-cell-img").wrap('<div class="galereya-cell" data-index="'+s.length+'"></div>').parent().append('<div class="galereya-cell-desc">                                <div class="galereya-cell-desc-title">'+i.title+'</div>                                <div class="galereya-cell-desc-text">'+i.description+"</div>                            </div>").append('<div class="galereya-cell-overlay" />');return t.click(F.cellClick),s=s.add(t),a.append(t),t},H=function(e){var i={lowsrc:e.lowsrc||"",fullsrc:e.fullsrc||"",title:e.title||"",description:e.description||"",category:e.category||""};return i.category&&(i.category=i.category.toLowerCase(),-1===$.inArray(i.category,m)&&m.push(i.category)),v.push(i),i},Q=function(e){var t;n=i.find("img").each(function(e,i){t={lowsrc:i.getAttribute("src")||"",fullsrc:i.getAttribute("data-fullsrc")||"",title:i.getAttribute("title")||"",description:i.getAttribute("data-desc")||"",category:i.getAttribute("data-category")||""},H(t)}),i.options.load(function(i){if(i&&i.length)for(var t=0,a=i.length,n,s;a>t;t++)n=H(i[t]),W(n.lowsrc);e()})},R=function(){if(m.length>0){o=$('<ul class="galereya-cats" />'),t=$('<div class="galereya-top" />'),i.prepend(t.html(o)),o.append('<li class="galereya-cats-item"><span>'+i.options.noCategoryName+"</span></li>");for(var e=0;e<m.length;e++)o.append('<li class="galereya-cats-item"><span>'+m[e]+"</span></li>")}var f,g,y,w="";n.wrapAll('<div class="galereya-grid" />').each(function(e,i){f=$(i),g=v[e].title,y=v[e].description,w=g||y?"":' style="display: none"',f.addClass("galereya-cell-img").wrap('<div class="galereya-cell" data-index="'+e+'"></div>').parent().append('<div class="galereya-cell-desc"'+w+'>                                <div class="galereya-cell-desc-title">'+g+'</div>                                <div class="galereya-cell-desc-text">'+y+"</div>                            </div>").append('<div class="galereya-cell-overlay" />')}),s=i.find(".galereya-cell"),a=i.find(".galereya-grid"),l=$('<div class="galereya-slider" />'),r=$('<div class="galereya-slider-container" />'),c=$('<div class="galereya-slider-nav right" />'),d=$('<div class="galereya-slider-nav left" />'),p=$('<div class="galereya-slider-desc" />'),h=$('<div class="galereya-slider-close" />'),u=$('<div class="galereya-slider-play" />'),l.addClass(i.options.modifier).append(r).append(c).append(d).append(p).append(p).append(h).append(u),$(document.body).append(l),i.show()},U=function(e,t){if(e=e||0,!(e>=n.length)){if(clearTimeout(I),t&&v[e].category!==t)return void setTimeout(function(){U(++e,t)},0);var a=n[e],s=function(){O?$(this).parent().show():$(this).parent().fadeIn(i.options.cellFadeInSpeed,"linear"),I=setTimeout(function(){U(++e,t)},i.options.cellFadeInSpeed/2)};a.complete?s.call(a):$(a).attr("src",a.src).load(s),B(e)}},B=function(e){var i=s[e],t;q(i,y.length),t=y.push(i)-1,$(i).addClass("visible").attr("data-visibleIndex",t)},q=function(e,t){var n,s,o,l;l=t%x,n=l*S+i.options.spacing*l,t>=x?(o=y[t-x],s=o.offsetTop+o.offsetHeight+i.options.spacing):s=0;var r=s+e.offsetHeight;r>T&&(T=r,a.height(T+a[0].offsetTop)),e.style.top=s+"px",e.style.left=n+"px"},G=function(){y=[],T=0,s.stop(!0,!0).fadeOut(200).removeClass("visible")},J=function(e){e=e||0,e>=s.length&&(e=0);var t=$(s[e]);t.addClass("wave"),setTimeout(function(){t.removeClass("wave"),J(++e)},i.options.waveTimeout)},V=function(e){N=e,o.empty().prepend('<li class="galereya-cats-item"><span>'+e+"</span></li>"),G(),e===i.options.noCategoryName?U(0):(o.append('<li class="galereya-cats-item"><span>'+i.options.noCategoryName+"</span></li>"),U(0,e));for(var t=0,a=m.length,n;a>t;t++)n=m[t],n!==e&&o.append('<li class="galereya-cats-item"><span>'+n+"</span></li>")},X=function(){j(),0===g.length&&(g=f.find(".galereya-slide-img")),g.css("margin-top",($(window).height()-g.height())/2),a.width(b),T=0;for(var e=0,i=y.length;i>e;e++)q(y[e],e)},Y=function(e){if(O)return void setTimeout(function(){Y(e)},50);se(),r.empty(),D=e;var i=M(l),t=function(){C=$("html").css("overflow"),k=$("body").css("overflow"),A=$(window).scrollTop(),$("html, body").css("overflow","hidden")};l.show(0,function(){l.addClass("opened"),L()?setTimeout(t,i+50):t()}),O=!0,ie(),ae()},Z=function(){if(O){$("html").css("overflow",C),$("body").css("overflow",k),$(window).scrollTop(A);var e=M(l),i=function(){se(),w=[],r.empty(),l.hide(),O=!1};l.removeClass("opened"),L()?setTimeout(i,e+50):i()}},ee=function(e){clearInterval(P);var i=y[e],t=parseInt(i.getAttribute("data-index"),10),a,n;return a=$('<div class="galereya-slider-slide" />').html('<div class="galereya-slide-loader"></div>'),n=$('<img class="galereya-slide-img" src="'+v[t].fullsrc+'" alt="'+v[t].title+'" />').load(function(){a.html(n),n.css("margin-top",($(window).height()-n.height())/2),P&&ne()}),a.on("swiperight",F.sliderPrevClick),a.on("swipeleft",F.sliderNextClick),a},ie=function(e){e=e||"next",P&&(se(),ne());var i,t=e.toLowerCase(),a,n,s=y.length;if("next"===t){if(0===w.length)i=D,t="";else if(i=D+1,i>=s)return;a=w[i],a||(a=ee(i),a.addClass(t),r.append(a),w[i]=a),te(a,"current"),te(f,"prev")}else if("prev"===t){if(0!==w.length&&(t=""),i=D-1,0>i)return;a=w[i],a||(a=ee(i),a.addClass(t),r.prepend(a),w[i]=a),te(a,"current"),te(f,"next")}D=i,f=a,n=y[D].getAttribute("data-index"),p.empty().html('<div class="galereya-slider-desc-title">'+v[n].title+" </div>"+v[n].description),p.toggle(Boolean(v[n].title||v[n].description)),g=a.find(".galereya-slide-img"),g.css("margin-top",($(window).height()-g.height())/2),ae()},te=function(e,i){setTimeout(function(){e.removeClass("prev").removeClass("next").removeClass("current").addClass(i)},50)},ae=function(){var e=y.length;D>=e-1?(se(),u.hide(),c.hide()):(u.show(),c.show()),0>=D?d.hide():d.show()},ne=function(){u.addClass("pause"),P=setInterval(function(){c.click()},i.options.slideShowSpeed)},se=function(){u.removeClass("pause"),clearInterval(P),P=null},oe=function(){$(window).bind("resize",F.windowResize),$(document.body).click(F.bodyClick).keydown(F.bodyKeyDown).keyup(F.bodyKeyUp),o.click(F.categoriesListClick),s.click(F.cellClick),c.click(F.sliderNextClick),d.click(F.sliderPrevClick),h.click(F.sliderCloseClick),u.click(F.sliderPlayClick)};return this.options=$.extend({},z,e),this.openSlider=Y,this.closeSlider=Z,this.changeCategory=V,this.startSlideShow=ne,this.stopSlideShow=se,this.nextSlide=function(){c.click()},this.prevSlide=function(){d.click()},this.loadMore=function(e){if(e&&e.length){for(var i=0,t=s.length,a=t,n=e.length,o,l;n>i;i++,a++)o=H(e[i]),l=W(o.lowsrc),E(l,o);U(t,N)}},K(),this.length>1&&this.each(function(){$(this).galereya(e)}),this}$.fn.galereya=e}(jQuery),$("#gal1").galereya(),$(function(){var e=$(".grid").masonry({itemSelector:".grid-item",columnWidth:220,fitWidth:!0});$(".material-card").materialCard(),$(".material-card").on("shown.material-card hidden.material-card",function(i){e.masonry()})}),!function(e){var i=function(i,t){this.options=t,this.card=e(i),this.button=e(i).children(".mc-btn-action"),this.icon=e(i).children(".mc-btn-action").children("i"),this.card_activator=t.card_activator,this.timing=this.getTransitionTiming();var a=this;"click"==a.card_activator?(this.icon.hasClass(this.options.icon_open)||this.icon.attr("class",this.icon.attr("class").replace(/\bfa-.*\b/g,"")).addClass(this.options.icon_open),this.button.on("click",function(){a.toggle()})):this.button.hide(),"hover"==a.card_activator&&(this.card.on("mouseenter",function(){a.open()}),this.card.on("mouseleave",function(){a.close()}))};i.defaults={icon_close:"fa-arrow-left",icon_open:"fa-bars",icon_spin:"fa-spin-fast",card_activator:"click"},i.prototype.toggle=function(){return this.icon.addClass(this.options.icon_spin),this.isOpen()?this.close():this.open()},i.prototype.getTransitionTiming=function(){var i=0;return this.card.find("*").each(function(){t(e(this).css("transition-duration"))+t(e(this).css("transition-delay"))>i&&(i=t(e(this).css("transition-duration"))+t(e(this).css("transition-delay")))}),i},i.prototype.close=function(){var e=this;this.card.trigger("hide.material-card"),this.card.removeClass("mc-active"),window.setTimeout(function(){e.icon.removeClass(e.options.icon_spin).removeClass(e.options.icon_close).addClass(e.options.icon_open),e.card.trigger("hidden.material-card")},this.timing)},i.prototype.open=function(){var e=this;this.card.trigger("show.material-card"),this.card.addClass("mc-active"),window.setTimeout(function(){e.icon.removeClass(e.options.icon_spin).removeClass(e.options.icon_open).addClass(e.options.icon_close),e.card.trigger("shown.material-card")},this.timing)},i.prototype.isOpen=function(){return this.card.hasClass("mc-active")};var t=function(e){var i,t,a,n=e.match(/^([\d\.]+)(\w+)$/);if(n.length<=1)return e;switch(i=n[1],t=n[2]){case"ms":a=1;break;case"s":a=1e3}return i*a},a=function(t){return this.each(function(){var a=e(this),n=a.data("material-card"),s=e.extend({},i.defaults,"object"==typeof t&&t);n||a.data("material-card",n=new i(this,s)),"string"==typeof t&&n[t]()})};e.fn.materialCard=a}(jQuery);