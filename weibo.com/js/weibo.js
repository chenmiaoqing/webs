
$(function(){

	$(".topMainLeft1All").hover(function(){

			$(this).find(".topMainLeft1Title").addClass("topMainLeft1Title3");
			$(this).find(".topMainLeft1Content").show();
		},function(){
			$(this).find(".topMainLeft1Title").removeClass("topMainLeft1Title3");
			$(this).find(".topMainLeft1Content").hide();
		});




	
	$(".personA").hover(function(){

			$(this).find(".personAA").addClass("personAAS");
			$(this).find(".topMainRight1All2Content").show();
		},function(){
			$(this).find(".personAA").removeClass("personAAS");
			$(this).find(".topMainRight1All2Content").hide();
		});

	
});




