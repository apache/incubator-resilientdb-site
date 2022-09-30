/// <reference path='lib/ofi.js' />
/// <reference path='lib/jarallax.js' />
/// <reference path='lib/jarallax-video.js' />
/// <reference path='lib/lazyload.js' />
/// <reference path='lib/aos.js' />
/// <reference path='lib/slick.js' />
/// <reference path='lib/jquery.countTo.js' />
/// <reference path='lib/masonry.pkgd.js' />
/// <reference path='lib/jquery.fancybox.js' />
/// <reference path='lib/countdown.js' />
/// <reference path='lib/Chart.js' />
/// <reference path='lib/TimeCircles.js' />
/// <reference path='lib/jquery.nice-select.js' />

(function($) {

	/*-- Strict mode enabled --*/
	'use strict';

	var $window   = $(window),
		nHtmlNode = document.documentElement,
		nBodyNode = document.body || document.getElementsByTagName('body')[0],

		jBodyNode = $(nBodyNode);

	var requestAnimationFrame = window.requestAnimationFrame ||
								window.mozRequestAnimationFrame ||
								window.webkitRequestAnimationFrame ||
								window.msRequestAnimationFrame||
								function (callback) {
									setTimeout(callback, 1000 / 60);
								};

	/* LazyLoad
	================================================== */
	var myLazyLoad = new LazyLoad({
		elements_selector: ".lazy",
		data_src: 'src',
		data_srcset: 'srcset',
		threshold: 500,
		callback_enter: function (element) {

		},
		callback_load: function (element) {
			element.removeAttribute('data-src')

			var oTimeout = setTimeout(function ()
			{
				clearTimeout(oTimeout);

				AOS.refresh();
			}, 500);
		},
		callback_set: function (element) {
			
		},
		callback_error: function(element) {
			element.src = "https://placeholdit.imgix.net/~text?txtsize=21&txt=Image%20not%20load&w=200&h=200";
		}
	});

	/* scroll animate
	================================================== */
	AOS.init({
		offset: 120,
		delay: 100,
		duration: 450, // or 200, 250, 300, 350.....
		easing: 'ease-in-out-quad',
		once: true,
		disable: 'mobile'
	});

	/* top bar
	================================================== */
	function _top_bar ()
	{
		var nHeader      = document.getElementById('top-bar'),
			nMenuToggler = document.getElementById('top-bar__navigation-toggler'),
			nMenu        = document.getElementById('top-bar__navigation'),

			jHeader      = $(nHeader),
			jMenuToggler = $(nMenuToggler),
			jMenu        = $(nMenu),

			jLink        = jMenu.find('li a'),
			jSubmenu     = jMenu.find('.submenu'),

			jAfterHeader;

		if ( jSubmenu.length > 0 )
		{
			jSubmenu.parent('li').addClass('has-submenu');
		};

		jAfterHeader = $('#start-screen');

		if ( jAfterHeader.length === 0 )
		{
			jAfterHeader = $('#intro');
		};

		jLink.on('touchend click', function (e) {

			var $this = $(this),
				$parent = $this.parent();

			if ($this.hasClass("external-link"))
			{
				return;
			}

			if ( jMenuToggler.is(':visible') && $this.next(jSubmenu).length )
			{
				if ( $this.next().is(':visible') )
				{
					$parent.removeClass('drop_active');
					$this.next().slideUp('fast');

				} else {

					$this.closest('ul').find('li').removeClass('drop_active');
					$this.closest('ul').find('.submenu').slideUp('fast');
					$parent.addClass('drop_active');
					$this.next().slideDown('fast');
				};

				return false;
			};

			if (jHeader.hasClass('is-expanded')){
				jMenuToggler.click();
			}

			$("#top-bar__navigation li").removeClass('active');
			$(this.parentElement).addClass('active');

			// Make sure this.hash has a value before overriding default behavior
			if (this.hash !== "") {
				// Prevent default anchor click behavior
				event.preventDefault();

				// Store hash
				var hash = this.hash;

				// Using jQuery's animate() method to add smooth page scroll
				// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
				var stop = $(hash).offset().top;

				$('body,html').animate({
					scrollTop: stop
				}, 1200, function(){

					// Add hash (#) to URL when done scrolling (default click behavior)
					window.location.hash = hash;
				});
			}  // End if
		});

		jMenuToggler.on('touchend click', function (e) {
			e.preventDefault();

			var $this = $(this);

			$this.toggleClass('is-active');
			jHeader.toggleClass('is-expanded');

			if ($window.scrollTop() === 0){
				if (jHeader.hasClass('is-expanded')){
					jHeader.addClass('is-fixed');
					jHeader.addClass('is-visible');
				}
				else{
					jHeader.removeClass('is-fixed');
					jHeader.removeClass('is-visible');
				}
			}

			if ( $this.hasClass('is-active') )
			{
				nHtmlNode.style.overflow = 'hidden';
			}
			else
			{
				nHtmlNode.style.overflow = '';
			}

			return false;
		});

		$window.smartresize(function() {

			if ( window.innerWidth >= 991 )
			{
				jHeader.removeClass('is-expanded');
				jMenuToggler.removeClass('is-active');
				jSubmenu.removeAttr('style');
				nHtmlNode.style.overflow = '';
			}
		});

		$window.on('scroll', { previousTop: 0 }, function() {
			var currentTop = $window.scrollTop();

			if ( !jHeader.hasClass('is-expanded') )
			{
				//check if user is scrolling up
				if ( currentTop < this.previousTop ) {
					//if scrolling up...
					if ( currentTop > 0 && jHeader.hasClass('is-fixed') )
					{
						jHeader.addClass('is-visible');
					}
					else
					{
						jHeader.removeClass('is-visible is-fixed');

						if ( jHeader.hasClass('top-bar--light') && jHeader.hasClass('top-bar--dark') )
						{
							jHeader.removeClass('top-bar--dark');
						}
					}
				} else {
					//if scrolling down...
					jHeader.removeClass('is-visible');

					if ( currentTop > 200 && !jHeader.hasClass('is-fixed') )
					{
						jHeader.addClass('is-fixed top-bar--dark');
					}
				}
				this.previousTop = currentTop;
			}
		});
	};

	/* choose lang
	================================================== */
	function _choose_lang ()
	{
		var nChooseLang = document.getElementById('top-bar__choose-lang'),
			jChooseLang = $(nChooseLang);

		if ( jChooseLang.length > 0 ) {

			var curImage = jChooseLang.find('.img--active'),
				list     = jChooseLang.find('.list'),
				listItem = list.children('li');

			jChooseLang.on('click', 'i', function () {
				list.slideToggle();

				jChooseLang.toggleClass('is-active')
			})

			listItem.on('click', function (e) {
				e.preventDefault();

				var activeSrc  = curImage.attr('src'),

					$this = $(this),
					img = $this.children('img'),
					src = img.attr('src');

				curImage.attr('src', src);

				img.attr('src', activeSrc);

				list.delay(300).slideUp(function () {
					jChooseLang.removeClass('is-active')
				});

				return false;
			});
		};
	};

	/* intro slider
	================================================== */
	function _intro_slider ()
	{
		var slider = $('.start-screen__slider');

		if ( slider.length > 0 )
		{
			slider.slick({
				autoplay: true,
				autoplaySpeed: 3000,
				adaptiveHeight: true,
				speed: 1000,
				mobileFirst: true,
				slidesToShow: 1,
				dots: true,
				arrows: false,
				prevArrow: '<i class="fontello-left-open slick-prev"></i>',
				nextArrow: '<i class="fontello-right-open slick-next"></i>',
			});
		};
	};

	/* posts slider
	================================================== */
	function _posts_slider ()
	{
		var pSlider = $('.posts--slider');

		if ( pSlider.length > 0 )
		{
			pSlider.slick({
				autoplay: true,
				autoplaySpeed: 3000,
				adaptiveHeight: true,
				speed: 800,
				mobileFirst: true,
				slidesToShow: 1,
				dots: true,
				arrows: false,
				prevArrow: '<i class="fontello-left-open slick-prev"></i>',
				nextArrow: '<i class="fontello-right-open slick-next"></i>',
				responsive: [
					{
						breakpoint: 560,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 2
						},
					},
					{
						breakpoint: 1700,
						settings: {
							slidesToShow: 5,
							slidesToScroll: 2
						},
					}
				]
			});
		};
	};

	/* testimonial
	================================================== */
	function _testimonial ()
	{
		var tSlider = $('.testimonial--slider');

		if ( tSlider.length > 0 )
		{
			tSlider.slick({
				autoplay: true,
				autoplaySpeed: 3000,
				adaptiveHeight: true,
				speed: 800,
				dots: true,
				arrows: false,
				prevArrow: '<i class="fontello-left-open slick-prev"></i>',
				nextArrow: '<i class="fontello-right-open slick-next"></i>'
			});
		};
	};

	/* review
	================================================== */
	function _review ()
	{
		var rSlider = $('.review--slider');

		if ( rSlider.length > 0 )
		{
			rSlider.slick({
				autoplay: true,
				autoplaySpeed: 3000,
				adaptiveHeight: true,
				speed: 800,
				mobileFirst: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows: false,
				prevArrow: '<i class="fontello-left-open slick-prev"></i>',
				nextArrow: '<i class="fontello-right-open slick-next"></i>',
				responsive: [
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					}
				]
			});
		};
	};

	/* word rotating
	================================================== */
	function _word_rotating ()
	{
		var wSlider = $('.word-rotating--slider');

		if ( wSlider.length > 0 )
		{
			wSlider.slick({
				autoplay: true,
				autoplaySpeed: 3000,
				adaptiveHeight: true,
				speed: 800,
				dots: true,
				arrows: false,
				prevArrow: '<i class="fontello-left-open slick-prev"></i>',
				nextArrow: '<i class="fontello-right-open slick-next"></i>'
			});
		};
	};

	/* screenshots slider
	================================================== */
	function _screenshots_slider ()
	{
		var sSlider = $('.screenshots--slider');

		if ( sSlider.length > 0 )
		{
			sSlider.slick({
				autoplay: true,
				autoplaySpeed: 3000,
				adaptiveHeight: true,
				speed: 800,
				mobileFirst: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows: false,
				prevArrow: '<i class="fontello-left-open slick-prev"></i>',
				nextArrow: '<i class="fontello-right-open slick-next"></i>',
				responsive: [
					{
						breakpoint: 560,
						settings: {
							centerMode: true,
							centerPadding: '15%',
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 1700,
						settings: {
							centerMode: true,
							centerPadding: '10%',
							slidesToShow: 2,
							slidesToScroll: 2
						},
					}
				]
			});
		};
	};

	/* feature slider
	================================================== */
	function _feature_slider ()
	{
		var fSlider = $('.feature--slider');

		if ( fSlider.length > 0 )
		{
			fSlider.slick({
				autoplay: true,
				autoplaySpeed: 3000,
				adaptiveHeight: true,
				speed: 800,
				mobileFirst: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows: false,
				prevArrow: '<i class="fontello-left-open slick-prev"></i>',
				nextArrow: '<i class="fontello-right-open slick-next"></i>',
				responsive: [
					// {
					// 	breakpoint: 560,
					// 	settings: {
					// 		centerMode: true,
					// 		centerPadding: '20%',
					// 	}
					// },
					// {
					// 	breakpoint: 767,
					// 	settings: {
					// 		centerMode: false,
					// 		centerPadding: '0',
					// 		slidesToShow: 2
					// 	}
					// },
					// {
					// 	breakpoint: 1500,
					// 	settings: {
					// 		slidesToShow: 3
					// 	},
					// }
				]
			});
		};
	};

	/* projects slider
	================================================== */
	function _projects_slider ()
	{
		var pSlider = $('.projects--slider');

		if ( pSlider.length > 0 )
		{
			pSlider.slick({
				autoplay: true,
				autoplaySpeed: 3000,
				adaptiveHeight: true,
				speed: 800,
				mobileFirst: true,
				slidesToShow: 1,
				dots: true,
				arrows: false,
				prevArrow: '<i class="fontello-left-open slick-prev"></i>',
				nextArrow: '<i class="fontello-right-open slick-next"></i>',
				responsive: [
					{
						breakpoint: 560,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1
						}
					}
				]
			});
		};
	};

	/* posts slider
	================================================== */
	function _events_slider ()
	{
		var pSlider = $('.events--slider');

		if ( pSlider.length > 0 )
		{
			pSlider.slick({
				autoplay: true,
				autoplaySpeed: 3000,
				adaptiveHeight: true,
				speed: 800,
				mobileFirst: true,
				slidesToShow: 1,
				dots: true,
				arrows: false,
				prevArrow: '<i class="fontello-left-open slick-prev"></i>',
				nextArrow: '<i class="fontello-right-open slick-next"></i>',
				responsive: [
					{
						breakpoint: 560,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 2
						},
					},
					{
						breakpoint: 1700,
						settings: {
							slidesToShow: 5,
							slidesToScroll: 2
						},
					}
				]
			});
		};
	};

	/* lightbox
	================================================== */
	function _fancybox ()
	{
		var galleryElement = $("a[data-fancybox]");

		if ( galleryElement.length > 0 )
		{
			$("[data-fancybox]").fancybox({
				buttons : [
					'slideShow',
					'fullScreen',
					'thumbs',
					// 'share',
					//'download',
					//'zoom',
					'close'
				],
				loop : true,
				protect: true,
				wheel : false,
				transitionEffect : "tube",
				fixedContentPos: !1, // new
			});
		}
	};

	/* accordion
	================================================== */
	function _accordion ()
	{
		var oAccordion = $('.accordion-container');

		if ( oAccordion.length > 0 ) {

			var oAccItem    = oAccordion.find('.accordion-item'),
				oAccTrigger = oAccordion.find('.accordion-toggler');

			oAccordion.each(function () {
				$(this).find('.accordion-item:eq(0)').addClass('active');
			});

			oAccTrigger.on('click', function (j) {
				j.preventDefault();

				var $this = $(this),
					parent = $this.parent(),
					dropDown = $this.next('article');

				parent.toggleClass('active').siblings(oAccItem).removeClass('active').find('article').not(dropDown).slideUp();

				dropDown.stop(false, true).slideToggle();

				return false;
			});
		};
	};

	/* tabs
	================================================== */
	function _tabs ()
	{
		var oTab = $('.tab-container');

		if ( oTab.length > 0 ) {

			var oTabTrigger = oTab.find('nav a');

			oTab.each(function () {

				$(this)
					.find('nav a:eq(0)').addClass('active').end()
					.find('.tab-content__item:eq(0)').addClass('is-visible');
			});

			oTabTrigger.on('click', function (g) {
				g.preventDefault();

				var $this = $(this),
					index = $this.index(),
					parent = $this.closest('.tab-container');

				$this.addClass('active').siblings(oTabTrigger).removeClass('active');

				parent
					.find('.tab-content__item.is-visible').removeClass('is-visible').end()
					.find('.tab-content__item:eq(' + index + ')').addClass('is-visible');

				return false;
			});
		};
	};

	/* scrollTo
	================================================== */
	function _scrollTo ()
	{
		var Link = $('a[href*="#"]').not('[href="#"]').not('[href="#0"]');

		Link.on('touchend click', function (e) {
			$this = $(this),
			_offset = 135;

			if ( location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname )
			{
				var target = $(this.hash);

				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

				if ( target.length )
				{
					$('html,body').stop().animate({
						scrollTop: target.offset().top - _offset
					}, 1000);
				}

				return false;
			};
		});
	};

	/* scroll to top
	================================================== */
	function _scrollTop ()
	{
		var	nBtnToTopWrap = document.getElementById('btn-to-top-wrap'),
			jBtnToTopWrap = $(nBtnToTopWrap);

		if ( jBtnToTopWrap.length > 0 )
		{
			var nBtnToTop = document.getElementById('btn-to-top'),
				jBtnToTop = $(nBtnToTop);

			jBtnToTop.on('click', function (e) {
				e.preventDefault();

				$('body,html').stop().animate({ scrollTop: 0 } , 1500);

				return false;
			});

			$window.on('scroll', function(e) {
				var currentTop = $window.scrollTop();

				if ( currentTop > jBtnToTop.data('visible-offset') )
				{
					if ( jBtnToTopWrap.is(":hidden") )
					{
						jBtnToTopWrap.fadeIn();
					};

				}
				else
				{
					if ( jBtnToTopWrap.is(":visible") )
					{
						jBtnToTopWrap.fadeOut();
					};
				};
			});
		};
	};

	/* parallax
	================================================== */
	function _parallax ()
	{
		if ( device.desktop() )
		{
			var el = document.querySelectorAll('.jarallax');

			jarallax(el, {
				type: 'scroll', // scroll, scale, opacity, scroll-opacity, scale-opacity
				zIndex: -20,
				onScroll: function(calculations) {
					// console.log(calculations);
				},
				// elementInViewport: $(this),
				onInit: function() {

				},
				onDestroy: function() {

				},
				onCoverImage: function() {

				}
			});
		};
	};

	/* counters
	================================================== */
	function _counters ()
	{
		var counter = $('.js-count');
		var counter_slo = $('.js-count-slo');

		function _countInit() {
			counter.each(function() {
				var $this = $(this);

				if( $this.is_on_screen() && !$this.hasClass('animate') )
				{
					$this
						.addClass('animate')
						.countTo({
							from: 0,
							speed: 2000,
							refreshInterval: 100
						});
				};
			});

			counter_slo.each(function() {
				var $this = $(this);

				if( $this.is_on_screen() && !$this.hasClass('animate') )
				{
					$this
						.addClass('animate')
						.countTo({
							from: 0,
							speed: 3000,
							refreshInterval: 100
						});
				};
			});
		};

		if ( counter.length > 0 )
		{
			_countInit();

			$window.on('scroll', function(e) {

				// _countInit();

				if( requestAnimationFrame ) {
					requestAnimationFrame(function(){
						_countInit();
					});
				} else {
					_countInit();
				}
			});
		};
	};

	/* google map
	================================================== */
	function _g_map ()
	{
		var maps = $('.g_map');

		if ( maps.length > 0 )
		{
			var apiKey = maps.attr('data-api-key');

			// console.log(apiKey)

			$.getScript('http://maps.google.com/maps/api/js?key='+ apiKey +' &sensor=false', function( data, textStatus, jqxhr ) {

				maps.each(function() {
					var current_map = $(this);
					var latlng = new google.maps.LatLng(current_map.attr('data-longitude'), current_map.attr('data-latitude'));
					var point = current_map.attr('data-marker');

					var myOptions = {
						zoom: 14,
						center: latlng,
						mapTypeId: google.maps.MapTypeId.ROADMAP,
						mapTypeControl: false,
						scrollwheel: false,
						draggable: true,
						panControl: false,
						zoomControl: false,
						disableDefaultUI: true
					};

					var stylez = [
						{
							featureType: "all",
							elementType: "all",
							stylers: [
								{ saturation: -100 } // <-- THIS
							]
						}
					];

					var map = new google.maps.Map(current_map[0], myOptions);

					var mapType = new google.maps.StyledMapType(stylez, { name:"Grayscale" });
					map.mapTypes.set('Grayscale', mapType);
					map.setMapTypeId('Grayscale');

					var marker = new google.maps.Marker({
						map: map,
						icon: {
							size: new google.maps.Size(62,74),
							origin: new google.maps.Point(0,0),
							anchor: new google.maps.Point(0,75),
							url: point
						},
						position: latlng
					});

					google.maps.event.addDomListener(window, "resize", function() {
						var center = map.getCenter();
						google.maps.event.trigger(map, "resize");
						map.setCenter(center);
					});
				});
			});
		};
	};

	/* contact form
	================================================== */
	function _contact_form ()
	{
		var jForm = $('.js-contact-form');

		if ( jForm.length > 0 )
		{
			jForm.each(function () {
				var $this =$(this);

				$this.on('submit', function() {
					var $this = $(this),
						str = $this.serialize(),
						note = $this.find('.form__note');

					$.ajax({
						type: "POST",
						url: "send_mail/contact_process.php",
						data: str,
						success: function(msg) {

							var result = '<span style="color: green"><br/>Your message has been sent. Thank you!</span>';

							note.html(result);

							$this.get(0).reset();

							setTimeout(function() { note.html('') }, 3000);
						},
						error: function(err) {
							var result = '<span style="color: red"><br/>Your message not sent! Error: "'+err.responseJSON.message+'"</span>';

							note.html(result);
						},
						complete: function() {
						}
					});

					return false;
				});
			});
		};
	};

	/* object-fit polyfill
	================================================== */
	function _objectFit ()
	{
		objectFitImages();
	};

	/* custom select
	================================================== */
	function _custom_select ()
	{
		if ( $('.js-select').length > 0 )
		{
			$('.js-select').niceSelect();
		};
	};

	$(document).ready(function() {

		/* top bar
		================================================== */
		_top_bar();

		/* choose lang
		================================================== */
		_choose_lang();

		/* intro_ slider
		================================================== */
		_intro_slider();

		/* posts slider
		================================================== */
		_posts_slider();

		/* testimonial
		================================================== */
		_testimonial();

		/* review
		================================================== */
		_review();

		/* word rotating
		================================================== */
		_word_rotating();

		/* screenshots slider
		================================================== */
		_screenshots_slider();

		/* feature slider
		================================================== */
		_feature_slider();

		/* projects slider
		================================================== */
		_projects_slider();

		/* posts slider
		================================================== */
		_events_slider();

		/* lightbox
		================================================== */
		_fancybox();

		/* accordion
		================================================== */
		_accordion();

		/* tabs
		================================================== */
		_tabs();

		/* scrollTo
		================================================== */
		_scrollTo();

		/* scroll to top
		================================================== */
		_scrollTop();

		/* parallax
		================================================== */
		_parallax();

		/* counters
		================================================== */
		_counters();

		/* object-fit polyfill
		================================================== */
		_objectFit();

		/* contact form
		================================================== */
		_contact_form();

		/* custom select
		================================================== */
		_custom_select();
	});

	$window.on('load', function () {

		var jMasonry = $('.js-masonry');

		if ( jMasonry.length > 0 )
		{
			jMasonry.masonry('layout')
		}

		/* google map
		================================================== */
		_g_map();
	});

	$.fn.is_on_screen = function () {
		var viewport = {
			top: $window.scrollTop(),
			left: $window.scrollLeft()
		};
		viewport.right = viewport.left + $window.width();
		viewport.bottom = viewport.top + $window.height();

		var bounds = this.offset();
		bounds.right = bounds.left + this.outerWidth();
		bounds.bottom = bounds.top + this.outerHeight();

		return ( !( viewport.right < bounds.left ||
					viewport.left > bounds.right ||
					viewport.bottom < bounds.top ||
					viewport.top > bounds.bottom
				));
	};

	/* smartresize
	================================================== */
	(function($,sr){

		// debouncing function from John Hann
		// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
		var debounce = function (func, threshold, execAsap) {
			var timeout;

			return function debounced () {
				var obj = this, args = arguments;
				function delayed () {
						if (!execAsap)
								func.apply(obj, args);
						timeout = null;
				};

				if (timeout)
						clearTimeout(timeout);
				else if (execAsap)
						func.apply(obj, args);

				timeout = setTimeout(delayed, threshold || 100);
			};
		}
		// smartresize 
		jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };
	})(jQuery,'smartresize');




}(jQuery));