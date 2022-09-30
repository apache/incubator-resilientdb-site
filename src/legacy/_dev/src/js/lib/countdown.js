(function ( $ ) {
	function pad(n) {
	    return (n < 10) ? ("0" + n) : n;
	}

	$.fn.showclock = function() {
	    
	    var currentDate=new Date();
	    var fieldDate=$(this).data('date').split('-');
	    var futureDate=new Date(fieldDate[0],fieldDate[1]-1,fieldDate[2]);
	    var seconds=futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

	    if(seconds<=0 || isNaN(seconds)){
	    	this.hide();
	    	return this;
	    }

	    var days=Math.floor(seconds/86400);
	    seconds=seconds%86400;
	    
	    var hours=Math.floor(seconds/3600);
	    seconds=seconds%3600;

	    var minutes=Math.floor(seconds/60);
	    seconds=Math.floor(seconds%60);
	    
	    var html="";

	    if(days!=0){
		    html+="<div class='countdown-container days'>"
		    	html+="<span class='countdown-value days-top'>"+pad(days)+"</span>";
		    	html+="<span class='countdown-heading days-bottom'>Days</span>";
		    html+="</div>";
		}

	    html+="<div class='countdown-container hours'>"
	    	html+="<span class='countdown-value hours-top'>"+pad(hours)+"</span>";
	    	html+="<span class='countdown-heading hours-bottom'>Hours</span>";
	    html+="</div>";

	    html+="<div class='countdown-container minutes'>"
	    	html+="<span class='countdown-value minutes-top'>"+pad(minutes)+"</span>";
	    	html+="<span class='countdown-heading minutes-bottom'>Minutes</span>";
	    html+="</div>";

	    html+="<div class='countdown-container seconds'>"
	    	html+="<span class='countdown-value seconds-top'>"+pad(seconds)+"</span>";
	    	html+="<span class='countdown-heading seconds-bottom'>Seconds</span>";
	    html+="</div>";

	    this.html(html);
	};

	$.fn.countdown = function() {
		var el=$(this);
		el.showclock();
		setInterval(function(){
			el.showclock();	
		},1000);
	}

}(jQuery));

jQuery(document).ready(function(){
	if(jQuery(".js-countdown").length>0)
		jQuery(".js-countdown").countdown();
});