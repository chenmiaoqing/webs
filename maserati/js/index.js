$(function(){
		$(".flashcontrol").click(function(){
		currentindex=$(this).attr("picIndex");
		showFlashImage();
	});
		$(".flash").hover(function(){

		clearInterval(timerHandle);
	},function(){

		timerHandle= setInterval( "showFlashImage()",2000);
	});
	timerHandle= setInterval( "showFlashImage()",2000);

});

var timerHandle;
var currentindex=2;
function showFlashImage(){


	//取出当前点击的小控制块所对于的图片地址
	var currentImage=$("#controlli"+currentindex).attr("imgurl");
	$(".flash").css("background-image",'url("'+currentImage+'")');

	currentindex++;
	if(currentindex==6){
		currentindex=1;
	}

}



