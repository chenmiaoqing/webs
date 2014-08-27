
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

	//弹出回复框
	reply();
	//弹出回复的回复框
	$(document).on("click",".huifu",function(){
		replySon($(this));
	});
	//在回复框中提交评论
	$(document).on("click",".replyBRight",function(){
		tijiao($(this));
	});

	$(document).on("click",".replySonBRight",function(){
		tijiaoson($(this));
	});
	

	faweibo();

	//点赞
	$(".dianzan").click(function(){
		alert("a");
		var iszan=$(this).attr("iszan");
		//alert(iszan);
		if(iszan=="no"){

			var zanNum=$(this).find(".zanNum").html();
			//alert(zanNum);
			zanNum++;
			$(this).find(".zanNum").html(zanNum);
			$(".dianzan i").css("background-position","-100px 0");
			$(this).attr("iszan","yes");
		}else{
			var zanNum=$(this).find(".zanNum").html();
			//alert(zanNum);
			zanNum--;
			$(this).find(".zanNum").html(zanNum);
			$(".dianzan i").css("background-position","-75px 0");
			$(this).attr("iszan","no");
		}
	});

	//转发
	zhuanfa();

});

//弹出回复框
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
				replyA +='						<a>鼻息肉</a>：哈哈 (11分钟前)';
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

//回复的内容出现在已回复的内容中
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
		 $(".replyed dl").hover(function(){
					//alert("b");
					$(this).find(".hover").css("opacity","1");
				},function(){
					$(this).find(".hover").css("opacity","0");
				});
		
}

//弹出回复的回复框
function replySon(e){
	
			var talkSonid=e.attr("talkSonid");
			var isshow=e.attr("isshow");
			if(isshow=="no"){
				
				//$("#"+talkSonid).empty();
				
				var isshown=e.attr("iscunzai");

				if(isshown!=null){
					$("#"+talkSonid).show();

				}
				else
				{ 
					var replySonA='';
					 replySonA	+='<div class="replySon" id="'+ talkSonid +'"  iscunzai="yes">';
					 replySonA	+='		<div>';
					 replySonA	+='	 		<textarea class="textarea" id="sp_2"></textarea>';
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
				e.parent().parent().next().find("#"+talkSonid).hide();
				e.attr("isshow","no");
			}
		
}

//转发内容出现在列表中
function zhuanfa(){
	
	$(".zhuanfaA").click(function(){
			$(".bg").show();

	
	var zhuanfaHTML='';
	
	zhuanfaHTML	+='<div class="zhuanfa">';
	zhuanfaHTML	+='	<div class="zhuanfatitle"><span>转发微博</span>';
	zhuanfaHTML	+='		<a class="guanbi"></a>';
	zhuanfaHTML	+='	</div>';
	zhuanfaHTML	+='	<div class="zhuanfatitle1">';
	zhuanfaHTML	+='		<ul>';
	zhuanfaHTML	+='			<li>转发到</li>';
	zhuanfaHTML	+='			<li><a>我的微博</a></li>';
	zhuanfaHTML	+='			<li><a>朋友圈</a></li>';
	zhuanfaHTML	+='			<li><a>私信</a></li>';
	zhuanfaHTML	+='		</ul>';
	zhuanfaHTML	+='	</div>';
	zhuanfaHTML +='	<div class="zhuanfatitiel3">';
	zhuanfaHTML +='		<div class="zftitle31">';
	zhuanfaHTML +='			<a>@万达电影生活</a>:#新片抢鲜#哈利波特系列电影虽已完结，但魔法...';
	zhuanfaHTML +='		</div>';
	zhuanfaHTML +='		<div class="reply " id="zhuanfakuang">';
	zhuanfaHTML +='			<div>	';
	zhuanfaHTML +='				<div>';
	zhuanfaHTML +='					<textarea></textarea>';
	zhuanfaHTML +='				</div>';
	zhuanfaHTML +='				<ul>';
	zhuanfaHTML +='					<li class="replyBLeft">';
	zhuanfaHTML +='						<span></span>';
	zhuanfaHTML +='						<a><input type="checkbox">同时评论给</a><a class="beizhuanfaderen">万达电影生活</a>';
	zhuanfaHTML +='					</li>';
	zhuanfaHTML +='					<li class="replyBRight">';
	zhuanfaHTML +='						<a><span>';
	zhuanfaHTML +='							<em>转发</em>';
	zhuanfaHTML +='							</span></a>';
	zhuanfaHTML +='					</li>';
	zhuanfaHTML +='				</ul>';
	zhuanfaHTML +='			</div>';
	zhuanfaHTML +='	 	</div>';
	zhuanfaHTML +='</div>';


		$(".bg").append(zhuanfaHTML);


	});
}


//回复的回复出现在已回复的内容中
function tijiaoson(tt){
	//alert("tt");
		var replysonContentHtml ="";
		var sp_2=document.getElementById("sp_2");
		var MyWords=sp_2.value;
		//alert(MyWords);
		
		replysonContentHtml +='				<dl>';
		replysonContentHtml +='					<dt><a><img src="images/UserHeadImages/4.jpg" class="replyImg"></a></dt>';
		replysonContentHtml +='					<dd>';
		replysonContentHtml +='						<a>茉香半糖</a>回复<a>@-春天藥丸-</a>：'+ MyWords+' ';
		replysonContentHtml +='						<div class="info">';
		replysonContentHtml +='							<span>';
		replysonContentHtml +='								<em class="hover"><a>举报</a><span>|</span></em>';
		replysonContentHtml +='								<a><i></i></a>';
		replysonContentHtml +='								<span>|</span>';
		replysonContentHtml +='								<a class="huifu" isshow="no" talkSonid="son1">回复</a>';
		replysonContentHtml +='							</span>';
		replysonContentHtml +='						 </div>  ';
		replysonContentHtml +='						 <div class="replySonContent" id="replySonContentson1">'
		replysonContentHtml +='						</div>'
		replysonContentHtml +='					</dd>';
		replysonContentHtml +='				</dl>';
		//alert(replysonContentHtml);

		
		 $(".replyed").append(replysonContentHtml);
		 $(".replySonContent").hide();

		 $(".replyed dl").hover(function(){
					$(this).find(".hover").css("opacity","1");
				},function(){
					$(this).find(".hover").css("opacity","0");
				});
		
}
