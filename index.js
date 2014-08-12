$(function(){
	$( ".btn").hover(function(){
		$(this).css({
			"background-color":"#f1f1f1",
			"box-shadow":"1px 1px 10px #666"
		});
	 },function(){
		$(this).css({
			"background-color":"",
			"box-shadow":""
		});
	});

	//显示时间
	
	setInterval('showDigit()',1000);
	

});



function showDigit(ct){

	var ct =new Date();
	var year =ct.getYear();
	var month =ct.getMonth();
	var date =ct.getDate();
	var hour =ct.getHours();
	var mi =ct.getMinutes();
	var s =ct.getSeconds();
	
	if(year<314)
		year=1900+year;
	var y1=Math.floor(year/1000);
	var y2=Math.floor((year%1000)/100);
	var y3=Math.floor((year%100)/10);
	var y4=year%10;
	$("#y1").css("background-position","0px -"+y1*30+"px");
	$("#y2").css("background-position","0px -"+y2*30+"px");
	$("#y3").css("background-position","0px -"+y3*30+"px");
	$("#y4").css("background-position","0px -"+y4*30+"px");

	var m1=Math.floor(month/10);
	var m2=Math.floor(month%10)+1;
	$("#m1").css("background-position","0px -"+m1*30+"px");
	$("#m2").css("background-position","0px -"+m2*30+"px");

	var d1=Math.floor(date/10);
	var d2=Math.floor(date%10);
	$("#d1").css("background-position","0px -"+d1*30+"px");
	$("#d2").css("background-position","0px -"+d2*30+"px");

	var h1=Math.floor(hour/10);
	var h2=Math.floor(hour%10);
	$("#h1").css("background-position","0px -"+h1*30+"px");
	$("#h2").css("background-position","0px -"+h2*30+"px");

	var mi1=Math.floor(mi/10);
	var mi2=Math.floor(mi%10);
	$("#mi1").css("background-position","0px -"+mi1*30+"px");
	$("#mi2").css("background-position","0px -"+mi2*30+"px");

	var s1=Math.floor(s/10);
	var s2=Math.floor(s%10);
	$("#s1").css("background-position","0px -"+s1*30+"px");
	$("#s2").css("background-position","0px -"+s2*30+"px");

}