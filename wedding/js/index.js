$(function(){

	showFlash();
	timerHandle= setInterval( "showFlash()",2000);
});



var timerHandle;
var currentindex=2;
function showFlash(){
	
	$("#flash li").css("background-image",'url("images/flash/slider-'+currentindex+'.jpg")');
									
	currentindex++;
	if(currentindex==4){
		currentindex=1;
	}
}