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


 	$(".eventli").mouseover(function(){
 		$(this).find("button").animate({"opacity":"1"},300);
 		$(this).find("button").css("transform","scale(1)");
 		$(".mengban").animate({"opacity":"0"},300);
 		
 	});

 	$(".eventli").mouseleave(function(){
 		$(this).find("button").animate({"opacity":"0"},300);
 		$(this).find("button").css("transform","scale(0.25)");
 		$(".mengban").animate({"opacity":"0.7"},300);
 		
 		
 	});

 	$("input,textarea").focus(function(){
 		$(this).css("border","2px solid rgb(222, 103, 95)");
 		$(this).removeClass("bg")
 	});
 	$("input,textarea").blur(function(){
 		$(this).css("border","");
 		$(this).addClass("bg")
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