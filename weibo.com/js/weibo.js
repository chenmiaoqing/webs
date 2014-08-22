
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
		$(this).css("border","1px solid #ffb941");
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
		$(this).css("border","");
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


	//随着滚动条变化LeftAll2 remenhuati固定
	$(window).scroll(function(){

		var scrolls = $(this).scrollTop();
		// alert(scrolls);
		if(scrolls>600  & scrolls<3800){
			$("#LeftAll2").css({"position":"fixed","top":"0px"});
		}else{
			$("#LeftAll2").css("position","");
		}
	});

	$(window).scroll(function(){

		var scrolls = $(this).scrollTop();
		// alert(scrolls);
		if(scrolls>1300 & scrolls<3600){
			$("#remenhuati").css({"position":"fixed","top":"60px"});
		}else{
			$("#remenhuati").css("position","");
		}
	});
	

	//日期选择器
	$(".inputbox1").datepicker({
		minDate: -30,
		maxDate: 0
	});
	
	//点击三角出现下拉菜单
	$(".sanjiao").click(function(){
		$("#weiboTitleC").show();
		$("#weiboTitleList,#weiboTitleB").hide();
		//$("#weiboTitleB").hide();
	});
	//点击关闭菜单关闭
	$("#close").click(function(){
		$("#weiboTitleC").hide();
		$("#weiboTitleList,#weiboTitleB").show();
		//$("#weiboTitleB").show();
	});


	$(".open").click(function(){
		$(this).parent().find(".hide").show();
		$(this).hide();
	});
	$(".shouqi").click(function(){
		$(".hide").hide();
		$(".open").show();
	});


	$(".fengexian").hover(function(){
		$(".guanli").show();
	},function(){
		$(".guanli").hide();
	});


	$(".topMainRight1All2Content li").hover(function(){
		
		$(this).css("background-color","#f2f2f2");
	},function(){
		$(this).css("background-color","");
	});

	$(window).scroll(function(){
		//alert("a");
		var scrolls=$(this).scrollTop();
		if(scrolls>5){
			$("#Top").show();
		}else{
			$("#Top").hide();
		}
	});

	$("#Top").hover(function(){
		$("#Top span em").css("background-position","-100px -100px");
	},function(){
		$("#Top span em").css("background-position","-75px -100px");
	});


	// $(".replyed dl").hover(function(){
	// 	$(this).find(".hover").css("opacity","1");
	// },function(){
	// 	$(this).find(".hover").css("opacity","0");
	// });

	// $(".pinglun").click(function(){
	// 	var isshow=$(this).attr("isshow");
	// 	if(isshow=="no"){
	// 		$(this).parent().parent().next(".reply").show();
	// 		$(this).attr("isshow","yes");
	// 	}else{
	// 		$(this).parent().parent().next(".reply").hide();
	// 		$(this).attr("isshow","no");
	// 	}	
	// });

	$(document).on("click",".huifu",function(){
		replySon($(this));
	});
	$(document).on("click",".replyBRight",function(){
		tijiao($(this));
	});


	reply();

	
	

});


function reply(){

	

	$(".pinglun").click(function(){
		var talkid=$(this).attr("talkid");
		var isshow=$(this).attr("isshow");	
		if(isshow=="no"){
			
			// $(this).parent().parent().next(".reply").show();
			var isshown=$("#"+talkid).attr("iscunzai");
		
			if(isshown!=null)
			{
				
				$("#"+talkid).show();

				$(".replyed dl").hover(function(){
					//alert("a");
					$(this).find(".hover").css("opacity","1");
				},function(){
					$(this).find(".hover").css("opacity","0");
				});

			}
			else
			{
				var replyA='';
		
				replyA +=' <div id="'+ talkid +'" iscunzai="yes"  class="reply">';
				replyA +=' 		<div>';
				replyA +='			<!-- 评论框 -->';
				replyA +='			<textarea class="textarea" id="sp_1"></textarea>';
				replyA +='			<ul>';
				replyA +='				<li class="replyBLeft">';
				replyA +='					<span></span>';
				replyA +='					<a><input type="checkbox">同时转发到我的微博</a>';
				replyA +='				</li>';
				replyA +='				<li class="replyBRight">';
				replyA +='					<a><span>';
				replyA +='						<em>评论</em>';
				replyA +='					</span></a>';
				replyA +='				</li>';
				replyA +='			</ul>';
				replyA +='			<!-- 已有的评论列表 -->';
				replyA +='			<div class="replyed">';
				replyA +='				<dl>';
				replyA +='					<dt><a><img src="images/UserHeadImages/3.jpg" class="replyImg"></a></dt>';
				replyA +='					<dd>';
				replyA +='						<a>-春天藥丸-</a>：…… (11分钟前)';
				replyA +='						<div class="info">';
				replyA +='							<span>';
				replyA +='								<em class="hover"><a>举报</a><span>|</span></em>';
				replyA +='								<a><i></i></a>';
				replyA +='								<span>|</span>';
				replyA +='								<a class="huifu" isshow="no" talkSonid="son1">回复</a>';
				replyA +='							</span>';
				replyA +='						 </div>  ';
				replyA +='						 <div class="replySonContent" id="replySonContentson1">'
				replyA +='						</div>'
				replyA +='					</dd>';
				replyA +='				</dl>';
				replyA +='				<dl>';
				replyA +='					<dt><a><img src="images/UserHeadImages/3.jpg" class="replyImg"></a></dt>';
				replyA +='					<dd>';
				replyA +='						<a>-春天藥丸-</a>：…… (11分钟前)';
				replyA +='						<div class="info">';
				replyA +='							<span>';
				replyA +='								<em class="hover"><a>举报</a><span>|</span></em>';
				replyA +='								<a><i></i></a>';
				replyA +='								<span>|</span>';
				replyA +='								<a class="huifu" isshow="no" talkSonid="son2">回复</a>';
				replyA +='							</span>';
				replyA +='						</div>   ';
				replyA +='						 <div class="replySonContent" id="replySonContentson2">'
				replyA +='						</div>'
				replyA +='					</dd>';
				replyA +='				</dl>';
				replyA +='			</div>';
				replyA +='		</div>';
				replyA +='	</div>';


				$("#replyContent"+talkid).append(replyA);
				$(".replyed dl").hover(function(){
					//alert("b");
					$(this).find(".hover").css("opacity","1");
				},function(){
					$(this).find(".hover").css("opacity","0");
				});
			}
			
			
			

		$(this).attr("isshow","yes");

	}


		else{
			// $(this).parent().parent().next(".reply").hide();
			$("#"+talkid).hide();
			$(this).attr("isshow","no");
		}	

	});


}

function tijiao(t){
		var replyContentHtml ="";
		var sp_1=document.getElementById("sp_1");
		var MyWords=sp_1.value;
		//alert(MyWords);
		
		replyContentHtml +='				<dl>';
		replyContentHtml +='					<dt><a><img src="images/UserHeadImages/4.jpg" class="replyImg"></a></dt>';
		replyContentHtml +='					<dd>';
		replyContentHtml +='						<a>茉香半糖</a>：'+ MyWords+' ';
		replyContentHtml +='						<div class="info">';
		replyContentHtml +='							<span>';
		replyContentHtml +='								<em class="hover"><a>举报</a><span>|</span></em>';
		replyContentHtml +='								<a><i></i></a>';
		replyContentHtml +='								<span>|</span>';
		replyContentHtml +='								<a class="huifu" isshow="no" talkSonid="son1">回复</a>';
		replyContentHtml +='							</span>';
		replyContentHtml +='						 </div>  ';
		replyContentHtml +='						 <div class="replySonContent" id="replySonContentson1">'
		replyContentHtml +='						</div>'
		replyContentHtml +='					</dd>';
		replyContentHtml +='				</dl>';
		//alert(replyContentHtml);

		
		 $(".replyed").append(replyContentHtml);
		
}

function replySon(e){
	
			var talkSonid=e.attr("talkSonid");
			var isshow=e.attr("isshow");
			if(isshow=="no"){
				
				
				var isshown=e.attr("iscunzai");

				if(isshown!=null){
					$("#"+talkSonid).show();
				}
				else
				{ 
					var replySonA='';
					 replySonA	+='<div class="replySon" id="'+ talkSonid +'"  iscunzai="yes">';
					 replySonA	+='		<div>';
					 replySonA	+='	 		<textarea class="textarea"></textarea>';
					 replySonA	+='			<ul>';
					 replySonA	+='				<li class="replySonBLeft">';
					 replySonA	+='					<span></span>';
					 replySonA	+='					<a><input type="checkbox">同时转发到我的微博</a>';
					 replySonA	+='				</li>';
					 replySonA	+='				<li class="replySonBRight">';
					 replySonA	+='					<a><span>';
					 replySonA	+='						<em>评论</em>';
					 replySonA	+='						</span></a>';
					 replySonA	+='				</li>';
					 replySonA	+='			</ul>';
					 replySonA	+='		</div>';
					 replySonA	+='</div>   ';
					
					 $("#replySonContent"+talkSonid).append(replySonA);



				}
				e.attr("isshow","yes");
			}else{
				$("#"+talkSonid).hide();
				e.attr("isshow","no");
			}
		


	}



