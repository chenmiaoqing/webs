$function(){
	alert("I am an alert box!!");

	$(".menuLi").hover(function(){
		$(this).find(".menuTitle")css({"background-color":"#333",
						"color":"#fff",
						"border-top-left-radius":"3px",
						"border-top-right-radius":"3px"
	});
		$(this).find(".menuTitle").next().show();
	},function(){

		$(this).find(".menuTitle")css({"background-color":"",
						"color":"",
						"border":"0px"
	});
		$(this).find(".menuTitle").next().hide();
	});

	$(".submenuA").hover(function(){
		$(this).css("background-color","#e5e5e5");

	},function(){
		$(this).css("background-color","");
	});
};