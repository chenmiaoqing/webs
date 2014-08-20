 $(function(){

 	addressInit('cmbProvince', 'cmbCity', 'cmbArea', '北京', '', '东城区');


	$(".y_scroll li").mouseover(function(){
	$(this).css("background-color","#ccc");

	});
	$(".y_scroll li").mouseout(function(){
		$(this).css("background-color","");

	});

	$(".aa").click(function(){
		$("#menula").show();
		return false;
	});
	$(document).click(function(){
		$("#menula").hide();
		
		
	});
	
		

	


	$(".y_scroll li").click(function(){

		var isshow=$(this).attr("isshow")
		if (isshow=="no"){
		$(".y_scroll em").css("opacity","0");	
		$(this).find("em").css("opacity","1");
		$(this).attr("isshow","yes");
		if(isshow=="yes"){
			$("em").css("opacity","0");
		}
		
		
		}
		else{

			$(this).find("em").css("opacity","0");
			$(this).attr("isshow","no");
			if(isshow=="no"){
			$("em").css("opacity","1");
		   }
		}
		

	});
	$(".y_scroll li").click(function(){
		$("#menula").hide();
		

	});
	






 	$(".y_scroll li").click(function(){
 		
 		index1=$(this).attr("Pic");
 		//alert(index1);
 		var b =8-(index1-1)*26;
 		//alert(b);
 		 //$(this).parent().parent().prev().css({"background-position-x":"4px"},{"background-position-y":b+"px"});

 		 $(this).parent().parent().prev().css("background-position",'4px '+b+'px');

 		//changePic();
 	});
 	
 	shownotice();
 	showBlock();
 	
	$(".btn").click(function(){ 
		showImage();
	});



	$(".submitS").mouseover(function(){ 
		$(this).addClass("submit");
		$(".submitS em").css("color","#fff");
	});
	$(".submitS").mouseout(function(){ 
		$(this).removeClass("submit");
		$(".submitS em").css("color","");
	});
	
 });


 function shownotice(){
 	
 	
 	 $(".inputbox").focus(function(){
 	 	$(this).css("border","1px solid #ffb941");
 	 	var index=$(this).attr("num")
 	 	$("#notice"+index).show();
 	 	$(".error").hide();
 	 	//return false;
	 });
 	 $("#notice").click( function(){
 	 	return false;
 	 });
 	  $(".inputbox").blur(function(){
 	  	$(this).css("border","");
 	  	var index=$(this).attr("num");
 	 	
 	 	$(".notice").hide();
 	 	 var a = $(this).val();
 	 	 //alert(a);
 	 	 if( a == "")
 	 	 {
 	 	 	$("#error"+index).show();
 	 	 }
 	});
 	 


		
		
		

 }

 function showBlock(){
 	$(".person").click(function(){
 		$(".public").css("border-bottom","");
 		$(".show").hide();
 		$(".hide").show();
 		$(".person").css("border-bottom","3px solid #ffa00a");
 	});
 	$(".public").click(function(){
 		$(".person").css("border-bottom","");
 		$(".hide").hide();
 		$(".show").show();
 		$(".public").css("border-bottom","3px solid #ffa00a");
 	});
 }

var index=2;
function showImage(){
		$("#Images").css("backgroundImage",'url("css/images/pincode ('+index+').jpg")');
		
		index++;						   
		if( index==6){
			index=1;
		}
		
	

};


// var index1;
// function changePic(){

// 	//var index1=$(".y_scroll li").attr("Pic");
// 		//$(".guojia a").css("background-position",'4px,8-("'+index1+'"-1)*26px');
												
	

// }
