
$(function(){

	$(".Img").hover(function(){
	
		$(this).find(".hide").show();

	},function(){
				$(this).find(".hide").hide();
	});
});