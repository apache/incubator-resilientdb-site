$(function() {
	$(document).ready(function() {

		// hide preloader start
        setTimeout(function(){
            $('.preloader').fadeOut();
		}, 500);
		// hide preloader end

		// notification start
		$('.notification').each(function(){
			var icon = $(this).find('.notification__icon');
			var dropdown = $(this).find('.notification__list');

			icon.click(function(e){
				e.stopPropagation();
				if(dropdown.hasClass("active")==1){
					dropdown.removeClass("active").slideUp();
				} else {
					dropdown.addClass("active").slideDown();
				}
				$('.user-menu').removeClass("active").slideUp();
			});

		});
		// notification end

		// user menu hide show start
		$(".user").each(function(){

			var avatar = $(this).find('.user__avatar');
			var dropdown = $(this).find('.user-menu');

			avatar.click(function(e){
				e.stopPropagation();
				if(dropdown.hasClass("active")==1){
					dropdown.removeClass("active").slideUp();
				} else {
					dropdown.addClass("active").slideDown();
				}
				$('.notification__list').removeClass("active").slideUp();
			});

		});
		// user menu hide show end

		// hide elements on document click start
		// $(document).click(function() {
		// 	$('.notification__list').removeClass("active").slideUp();
		// 	$('.user-menu').removeClass("active").slideUp();
		// });
		// hide elements on document click end

		// popup init start
		$('.popup-link').magnificPopup({
            type: 'inline',
            fixedContentPos: false,
            fixedBgPos: true,
            overflowY: 'auto',
            closeBtnInside: true,
            preloader: false,
            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-slide-bottom',
          });
		// popup init end

		// open close sidebar start
		$('.btn-menu').click(function(){

			$('.sidebar').toggleClass("open");
			$('.header').toggleClass('move-right');

		});

		$('.sidebar__close-btn').click(function(){
			$('.sidebar').removeClass('open');
		});
		// open close sidebar end

		// transactions show hide details start
		$('.transaction').each(function(){

			var thisElement = $(this);
			var header = $(this).find('.transaction__header');
			var hideBlock = $(this).find('.transaction__body');

			header.click(function(){
				if(thisElement.hasClass('open')){
					thisElement.removeClass('open');
					hideBlock.slideUp();
				} else {
					$('.transaction').removeClass('open');
					$('.transaction__body').slideUp();
					thisElement.addClass('open');
					hideBlock.slideDown();
				}
			});

		});
		// transactions show hide details end

		
		// calendar start
		$('.datepicker-here').data({inline: false});
		$('.datepicker-here.inline-datepicker').data({inline: true});

		$('.form-control').datepicker({
			language: "ru",
			todayHighlight: true,
			format: "dd/mm"
		});

		// calendar start

		// tooltip start
		$('.tooltip').each(function(){
			var thisElement = $(this);
			var text = $(this).children('.tooltip__text');

			thisElement.hover(function(e){
				e.stopPropagation();
				$(this).addClass("active");
				text.stop().fadeIn();
			}, function(){
				$(this).removeClass("active");
				text.stop().fadeOut();
			});
		});
		// tooptip end

		// line chart start
		var ctx = $("#line-chart");
		var lineChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			datasets: [
			{
				label: "2015",
				data: [10,8,6,5,12,8,16,17,6,7,6,10],
				lineTension: 0,
				borderColor: '#557ef8',
				backgroundColor: 'rgba(85, 126, 248, 0.5)',
				pointBorderColor: '#e0e0e0',
				pointBackgroundColor: '#fff',
			}
			]
		},
		options: {
			legend: {
				display: false
			}
		}
		});
		// line chart end

		// settings tabs start
		$('.settings__tabs-item').click( function() {
	
            var tabID = $(this).attr('data-tab');
            
            $(this).addClass('active').siblings().removeClass('active');
            
            $('#tab-'+tabID).addClass('active').siblings().removeClass('active');
        });
		// settings tabs end

		// custom select start
		$('select').customSelect();
		// custom select end

		// support tabs start
		$('.support__tabs-item').click( function() {
	
            var tabID = $(this).attr('data-tab');
            
            $(this).addClass('active').siblings().removeClass('active');
            
            $('#tab-'+tabID).addClass('active').siblings().removeClass('active');
        });
		// support tabs end

		// accordion start
		$('.accordion__item').each(function(){

			var title = $(this).find('.accordion__title');
			var body = $(this).find('.accordion__body');

			title.click(function(){
				if($(this).hasClass('open')) {
					$('.accordion__title').removeClass('open');
					body.slideUp();
				} else {
					$('.accordion__title').removeClass('open');
					$(this).addClass('open');
					$('.accordion__body').slideUp();
					body.slideDown();
				}
			});

		});
		// accordion end


		// edit btn start
		$('.save-payment__item').each(function(){

			var ItemBtn = $(this).find('.edit');
			var ItemBody = $(this).find('.save-payment__body');

			ItemBtn.click(function(){
				if($(this).hasClass('open')) {
					ItemBody.slideUp();
					$(this).removeClass('open').html('Edit');
				} else {
					$(this).addClass('open').html('Close');
					ItemBody.slideDown();
				}
			});

		});
		// edit btn end

	});
});
