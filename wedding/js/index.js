$(function(){

	showFlash();
	timerHandle= setInterval( "showFlash()",3000);

 	$("#heart").click(function(){
 		//alert("a");

		var isshow = $("#menu").attr("isshow");

		if(isshow=="no"){
			$("#menumain").animate({ "left":"1090px"},0);
			
			$("#menu").attr("isshow","yes");
			
		}
		else{
			$("#menumain").animate({ "left":"1290px"},0);
			
			$("#menu").attr("isshow","no");
			
		}
	});


});



var timerHandle;
var currentindex=1;
function showFlash(){
	 $(".opacity").css("opacity","0");
	 $(".opacity"+currentindex).css("opacity","1");
	 
						
	currentindex++;
	if(currentindex==4){
		currentindex=1;
	}
}