$(function(){

	$(".InfoList input").click(function(){
		$("#notice").show();
		return false;
	});
	$("#notice").click( function(){
		return false;
	});
	$(document).click( function(){
		$("#notice").hide();
		$("#error").show();
	});
});

var index=2
