$(function(){
	$(".content4Inner a").hover(function(){
		$(this).find("img").css({"margin-top":"0px","opacity":"0"});
		$(this).find(".hovertop,.hoverleft").css({"opacity":"1","-webkit-transform":"scale(1,1)"});
		$(this).find(".hover h2").css("margin-top","20px");
		$(this).find(".hover p").css("opacity","1");
	},function(){
		$(this).find("img").css({"margin-top":"-20px","opacity":"1"});
		$(this).find(".hovertop,.hoverleft").css({"opacity":"0","-webkit-transform":"scale(0,1)"});
		$(this).find(".hover h2").css("margin-top","0");
		$(this).find(".hover p").css("opacity","0");
	});

	ShowFlash();
	timerHandle= setInterval( "ShowFlash()",1000);

	$(".prev").click(function(){
		clearInterval(timerHandle);
		ShowPrev();
		//setTimeout( "ShowFlash()",5000);
	timerHandle= setInterval( "ShowFlash()",1000);
	});
	$(".next").click(function(){
		//alert("a");
		clearInterval(timerHandle);
		showNext();
		//setTimeout( "ShowFlash()",5000);
		timerHandle= setInterval( "ShowFlash()",1000);
	});
});

var timerHandle;
var index=0;
var curindex=1;
function ShowFlash(){
	
				
				if(index<4){
					
					var b=-190*index;
					$(".content5Inner ul").animate({"margin-left":''+b+'px'},5000);
					index++;
					}
					else{

						var a=-190*(index-2*curindex);
						//alert(a);
						$(".content5Inner ul").animate({"margin-left":''+a+'px'},5000);
						index++;
						curindex++;
						if(curindex>3){
							index=0;
							curindex=1;
						}
				}
}

var index1=1;
function ShowPrev(){
	var c=-190*index1;
	$(".content5Inner ul").stop(true,false).animate({"margin-left":''+c+'px'},1000);
	index1++;
	if(index1>=3){
		index1=3;
	}

}


function showNext(){

	var d=-190*index1+190;
	$(".content5Inner ul").stop(true,false).animate({"margin-left":''+d+'px'},1000);
	index1--;
	if(index1<=1){
		index1=1;
	}
}