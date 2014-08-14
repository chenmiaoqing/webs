 $(function(){


 	shownotice();
 	showBlock();
 	
	$(".btn").click(function(){ 
		showImage();
	});
	
 });


 function shownotice(){
 	
 	
 	 $(".inputbox").focus(function(){
 	 var index=$(this).attr("num")
 	 	$("#notice"+index).show();
 	 	$(".error").hide();
 	 	//return false;
	 });
 	 // $("#notice").click( function(){
 	 // 	return false;
 	 // });
 	  $(".inputbox").blur( function(){
 	  	var index=$(this).attr("num")
 	 	
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
