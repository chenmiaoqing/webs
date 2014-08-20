
$(function(){
	//晃倒微博logo上会出现一个小房子
	$("#Logo").hover(function(){
		$("#Logo a").css("opacity","1");
	},function(){
		$("#Logo a").css("opacity","0");
	});

	//晃倒菜单栏出现下拉菜单
	$(".topMainLeft1All").hover(function(){

			$(this).find(".topMainLeft1Title").addClass("topMainLeft1Title3");
			$(this).find(".topMainLeft1Content").show();
		},function(){
			$(this).find(".topMainLeft1Title").removeClass("topMainLeft1Title3");
			$(this).find(".topMainLeft1Content").hide();
		});




	
	$(".personA").hover(function(){

			$(this).find(".personAA").addClass("personAAS");
			$(this).find(".topMainRight1All2Content").show();
		},function(){
			$(this).find(".personAA").removeClass("personAAS");
			$(this).find(".topMainRight1All2Content").hide();
		});


	//点击input边框变色背景图片变
	$("input").focus(function(){
		$("#soso").css("border","1px solid #ffb941");
		$("#weiboTitleBLeft").css("border","1px solid #ffb941");
		$("#soso a").css("background-position","-475px -3px");
		
		$("input").mouseout(function(){
			//alert("a");
			$("#soso").css("background-color","#fff")
			$("#soso a").css("background-position","-499px -3px");
		});
		$("input").mouseover(function(){
			
			$("#soso").css("background-color","#fff")
			$("#soso a").css("background-position","-475px -3px");
		});
	});

	$("input").blur(function(){
		$("#soso").css("border","");
		$("#weiboTitleBLeft").css("border","");
		$("#soso a").css("background-position","-449px -3px");

		
	});



	
	//发表微博点击时边框变色
	$("#input").click(function(){
		//alert("a");
		$(this).css("border","1px solid #ffb941");
		$("#arrow").css("background-image","url('css/images/icon.png')");
		$("#arrow").css("background-position","-475px -51px");
		return false;//防止冒泡
	});
	$(document).click(function(){
		$("#input").css("border","");
		$("#arrow").css("background-image","url('css/images/all_iconbtn.png')");
		$("#arrow").css("background-position","-475px 0px");
	});


	//随着滚动条变化LeftAll2固定
	$(window).srcoll(function(){
		var scrolls=$(this).scrollTop();
		if(scrolls>45){
			$("#LeftAll2").css("position","fixed");
		}
	});
	
});




