$(function(){
	// alert("s");
	showFlash();
	timerHandle= setInterval( "showFlash()",3000);

	showTime();

	

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
 		$(this).find(".pink").animate({"opacity":"1"},0);
 		$(this).find(".word1").animate({"opacity":"1"},0);
 		$(this).find(".word2").animate({"opacity":"1"},1000);
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

 	$(".inputtxt input ,textarea").focus(function(){
 		$(this).css("border","2px solid rgb(222, 103, 95)");
 		$(this).removeClass("bg")
 	});
 	$(".inputtxt input,textarea").blur(function(){
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



function showTime(){
	var curTime=new Date();
	var year=curTime.getYear();
	var month=curTime.getMonth();
	var day=curTime.getDate();
	var hour=curTime.getHours();
	var minute=curTime.getMinutes();
	var second=curTime.getSeconds();
	if(year<900)
	{
		year=year+1900;
	}
	year=2015-year;
	month=month+1;
	month=6-month;
	day=25-day;
	hour=16-hour;
	minute=13-minute;
	second=38-second;

	year=year*365*24*60*60;
	month=month*30*24*60*60;
	day=day*24*60*60;
	hour=hour*60*60;
	minute=minute*60;
	time=year+month+day+hour+minute+second;
	time=time-1;
	var second=Math.floor(time%60);
	var minute=Math.floor((time/60)%60);
	var hour=Math.floor((time/3600)%60);
	var day=Math.floor((time/(3600*24))%7);
	var week=Math.floor(time/(3600*24*7));
	
	w1=Math.floor(week/10);
	w2=Math.floor(week%10);
	d1=Math.floor(day/10);
	d2=Math.floor(day%10);
	h1=Math.floor(hour/10);
	h2=Math.floor(hour%10);
	m1=Math.floor(minute/10);
	m2=Math.floor(minute%10);
	s1=Math.floor(second/10);
	s2=Math.floor(second%10);

	$("#w1").html(w1);
	$("#w2").html(w2);
	$("#d1").html(d1);
	$("#d2").html(d2);
	$("#h1").html(h1);
	$("#h2").html(h2);
	$("#m1").html(m1);
	$("#m2").html(m2);
	$("#s1").html(s1);
	$("#s2").html(s2);
	setTimeout('showTime('+time+')',1000);
}
