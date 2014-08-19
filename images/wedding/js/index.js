$(function(){
	// alert("s");
	showFlash();
	timerHandle= setInterval( "showFlash()",3000);



	// showTime();

	

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

 	$(".photoContent").mouseover(function(){
 		$(this).find(".pink").animate({"opacity":"1"},500);
 		$(this).find(".word1").animate({"opacity":"1"},500);
 		$(this).find(".word2").animate({"opacity":"1"},800);
 	});

 	$(".photoContent").mouseleave(function(){
 		$(this).find(".word2").animate({"opacity":"0"},0);
 		$(this).find(".word1").animate({"opacity":"0"},0);
 		$(this).find(".pink").animate({"opacity":"0"},0);
 		
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



// function showTime(){
// 	var curTime=new Date();
// 	var year=curTime.getYear();
// 	var month=curTime.getMonth();
// 	var day=	

// }