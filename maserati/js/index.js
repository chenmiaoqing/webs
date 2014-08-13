$(function(){
		//alert("a");
		$(".flashcontrol").click(function(){
		currentindex=$(this).attr("picIndex");
		showFlashImage();
		showWords();
		showBorder();
	});
		$(".flash").hover(function(){

		clearInterval(timerHandle);
	},function(){

		timerHandle= setInterval( "showFlashImage()",2000);
	});
	

	timerHandle= setInterval( "showFlashImage()",2000);

	timer=setInterval("showWords()",1000);

	timer1=setInterval("showBorder()",10);

	$(".menuRightR").click(function(){
			$(".hide").show();
		});
	$(".close").click(function(){
			$(".hide").hide();
		});
	$(window).scroll(function(){
		var scrolls=$(this).scrollTop();
		if( scrolls>0){
			$(".hide").hide();
		}
		
	});


	$(".soso").click(function(){
		var b =$(".hide2").attr("a");
		if( b=="hide")
			{
				$(".hide2").show();
				$(".hide2").attr("a","show");
			}
		if( b =="show")
			{
				$(".hide2").hide();
				$(".hide2").attr("a","hide");
			}
	});

	$(window).scroll(function(){
		var scrolls=$(this).scrollTop();
		if( scrolls>0){
			if($(".hide2").attr("a")=="show")
			{
				$(".hide2").hide();
			}
			$(".hide2").attr("a","hide");
		}
		
	});
	

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


var timer;
var index=1;
function showWords(){
	
	$(".nocurrent").css("opacity","0");
	$(".nocurrent"+index).css("opacity","1");

	index++;
	if( index==9){

		index=1;
	}
	

}

var timer1;
var indexborder=1;
var x=0;
function showBorder(){
	
	if(x<190){
		x++;
		$("#border"+indexborder).css("width",x+"px");
	}
	else{

		$("#border"+indexborder).css("width","0");
		x=0;
		indexborder++;
		if(indexborder==6){
			indexborder=1;
		}
	}

	
	
	
}





