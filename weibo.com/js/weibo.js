
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
	$(document).on("click",".pinglun",function(){
			reply($(this));
	});

	//弹出回复的回复框
	$(document).on("click",".huifu",function(){
		replySon($(this));
	});
	//评论
	$(document).on("click",".replyBRight",function(){
		tijiao($(this));
		
	});

	//评论的评论
	$(document).on("click",".replySonBRight",function(){
		tijiaoson($(this));
	});

	


	//点赞
	$(document).on("click",".dianzan",function(){

		//$(".dianzan").click(function(){

		var iszan=$(this).attr("iszan");
		//alert(iszan);
		if(iszan=="no"){

			var zanNum=$(this).find(".zanNum").html();
			//alert(zanNum);
			zanNum++;
			$(this).find(".zanNum").html(zanNum);
			$(this).find(".dianzan,i").css("background-position","-100px 0");
			$(this).attr("iszan","yes");
		}else{
			var zanNum=$(this).find(".zanNum").html();
			//alert(zanNum);
			zanNum--;
			$(this).children(".zanNum").html(zanNum);
			$(this).find(".dianzan,i").css("background-position","-75px 0");
			$(this).attr("iszan","no");
		}
	//});
	});
	

	//转发
	$(document).on("click",".zhuanfaA",function(){
		zhuanfa($(this));
	});
	
	//转发关闭
	$(document).on("click",".guanbi",function(){
		$("#zhuanfa").hide();
		$(".bg").hide();

	});

	//转发到
	$(document).on("click","#zhuanfaBtn",function(){
		zhuanfadao($(this));
	});
	
	//发微博
	faweibo();

});


//发微博
function faweibo(){

	$("#replyRR").click(function(){
		//alert("a");
		var inputT=document.getElementById("inputT");
		var Myweibo=inputT.value;
		//alert(Myweibo);

		var MyweiboContent ="";
			MyweiboContent +='<div class="RightL4">';
			MyweiboContent +='	<div class="RightL4Content">';
			MyweiboContent +='		<div class="RightL4CLeft">';
			MyweiboContent +='			<img src="images/UserHeadImages/4.jpg">';
			MyweiboContent +='		</div>';
			MyweiboContent +='		<div class="RightL4CRight">';
			MyweiboContent +='			<div class="Name">';
			MyweiboContent +='				<a href="#">茉香半糖</a>';
			MyweiboContent +='			</div>';
			MyweiboContent +='			<div class="txt">';
			MyweiboContent +='				<a href="#">'+Myweibo+'</a>';
			MyweiboContent +='			</div>';
			MyweiboContent +='			<ul class="wbPic">';
			MyweiboContent +='			</ul>';
			MyweiboContent +='			<div id="RightCRB">';
			MyweiboContent +='				<div class="RightCRBLeft">';
			MyweiboContent +='					<a href="#">30秒前</a>';
			MyweiboContent +='					<span>来自</span>';
			MyweiboContent +='					<a href="#">iphone客户端</a>';
			MyweiboContent +='				</div>';
			MyweiboContent +='				<div class="RightCRBRight">';
			MyweiboContent +='					<a class="dianzan" iszan="no">';
			MyweiboContent +='						<i></i>(<em class="zanNum">52</em>)';
			MyweiboContent +='					</a>';
			MyweiboContent +='					<span>|</span>';
			MyweiboContent +='					<a class="zhuanfaA">转发(145)</a>';
			MyweiboContent +='					<span>|</span>';
			MyweiboContent +='					<a href="#">收藏</a>';
			MyweiboContent +='					<span>|</span>';
			MyweiboContent +='					<a class="pinglun" talkid="reply1" isshow="no">评论(90)</a>';
			MyweiboContent +='				</div>';
			MyweiboContent +='			</div>';
			MyweiboContent +='			<div id="replyContentreply1" class="replyContent">';
			MyweiboContent +='			</div>';
			MyweiboContent +='		</div>';
			MyweiboContent +='	</div>';
			MyweiboContent +='</div>';


			$(".zhengwen").prepend(MyweiboContent);

			$(this).parent().parent().parent().find("#inputT").attr("value"," ");
	});

}


//弹出回复的框
function reply(r){

	

	// $(".pinglun").click(function(){
		var talkid=r.attr("talkid");
		var isshow=r.attr("isshow");	
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
				replyA +='						<a class="peple">-春天藥丸-</a>：…… (11分钟前)';
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
				replyA +='						<a  class="peple">鼻息肉</a>：…… (11分钟前)';
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
					r.find(".hover").css("opacity","1");
				},function(){
					r.find(".hover").css("opacity","0");
				});
			}
			
			
			

		r.attr("isshow","yes");

	}


		else{
			// $(this).parent().parent().next(".reply").hide();
			$("#"+talkid).hide();
			r.attr("isshow","no");
		}	

	// });


}

//提交回复的内容
function tijiao(t){
		var replyContentHtml ="";
		var sp_1=document.getElementById("sp_1");
		var MyWords=sp_1.value;
		//alert(MyWords);
		
		replyContentHtml +='				<dl>';
		replyContentHtml +='					<dt><a><img src="images/UserHeadImages/4.jpg" class="replyImg"></a></dt>';
		replyContentHtml +='					<dd>';
		replyContentHtml +='						<a  class="peple">茉香半糖</a>：'+ MyWords+' ';
		replyContentHtml +='						<div class="info">';
		replyContentHtml +='							<span>';
		replyContentHtml +='								<em class="hover"><a>举报</a><span>|</span></em>';
		replyContentHtml +='								<a><i></i></a>';
		replyContentHtml +='								<span>|</span>';
		replyContentHtml +='								<a class="huifu" isshow="no" talkSonid="son3">回复</a>';
		replyContentHtml +='							</span>';
		replyContentHtml +='						 </div>  ';
		replyContentHtml +='						 <div class="replySonContent" id="replySonContentson3">'
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
		t.parent().parent().find(".textarea").attr("value"," ");
		
}

//弹出回复的回复的框
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


//提交回复的回复的内容
function tijiaoson(tt){
	//alert("tt");
		var replysonContentHtml ="";
		var sp_2=document.getElementById("sp_2");
		var MyWords=sp_2.value;

		var huifuderen=tt.parent().parent().parent().parent().parent().parent().find(".peple").html();
		//alert(MyWords);
		
		replysonContentHtml +='				<dl>';
		replysonContentHtml +='					<dt><a><img src="images/UserHeadImages/4.jpg" class="replyImg"></a></dt>';
		replysonContentHtml +='					<dd>';
		replysonContentHtml +='						<a>茉香半糖</a>回复<a>'+huifuderen+'</a>：'+ MyWords+' ';
		replysonContentHtml +='						<div class="info">';
		replysonContentHtml +='							<span>';
		replysonContentHtml +='								<em class="hover"><a>举报</a><span>|</span></em>';
		replysonContentHtml +='								<a><i></i></a>';
		replysonContentHtml +='								<span>|</span>';
		replysonContentHtml +='								<a class="huifu" isshow="no" talkSonid="son3">回复</a>';
		replysonContentHtml +='							</span>';
		replysonContentHtml +='						 </div>  ';
		replysonContentHtml +='						 <div class="replySonContent" id="replySonContentson3">'
		replysonContentHtml +='						</div>'
		replysonContentHtml +='					</dd>';
		replysonContentHtml +='				</dl>';
		//alert(replysonContentHtml);

		
		 $(".replyed").append(replysonContentHtml);
		$(".replySon").hide();
		tt.parent().parent().parent().parent().prev().find(".huifu").attr("isshow","no");

		 $(".replyed dl").hover(function(){
					$(this).find(".hover").css("opacity","1");
				},function(){
					$(this).find(".hover").css("opacity","0");
				});
		tt.parent().parent().find(".textarea").attr("value"," ");
}


//弹出转发框
function zhuanfa(z){
	
	
		$(".bg").show();

			var zhuanfaderen=z.parent().parent().parent().find(".Name a").html();
			
			//alert(zhuanfaderen);

			var zhuanfadeneirong=z.parent().parent().parent().find(".txt a").html();

			//alert(zhuanfadeneirong);

			var zhuanfaHTML='';
				zhuanfaHTML	+='<div id="zhuanfa">';
				zhuanfaHTML	+='	<div class="zhuanfatitle"><span>转发微博</span>';
				zhuanfaHTML	+='		<a class="guanbi"></a>';
				zhuanfaHTML	+='	</div>';
				zhuanfaHTML	+='	<div class="zhuanfatitle1">';
				zhuanfaHTML	+='		<ul>';
				zhuanfaHTML	+='			<li id="zftitle11">转发到</li>';
				zhuanfaHTML	+='			<li id="zftitle12"><a>我的微博</a></li>';
				zhuanfaHTML	+='			<li id="zftitle13"><a>朋友圈</a></li>';
				zhuanfaHTML	+='			<li id="zftitle14"><a>私信</a></li>';
				zhuanfaHTML	+='		</ul>';
				zhuanfaHTML	+='	</div>';
				zhuanfaHTML +='	<div class="zhuanfatitiel3">';
				zhuanfaHTML +='		<div class="zftitle31">';
				zhuanfaHTML +='			<a>@'+zhuanfaderen+'</a>:'+zhuanfadeneirong+'';
				zhuanfaHTML +='		</div>';
				zhuanfaHTML +='		<div class="reply " id="zhuanfakuang">';
				zhuanfaHTML +='			<div>	';
				zhuanfaHTML +='				<div>';
				zhuanfaHTML +='					<textarea id="zfdehua"></textarea>';
				zhuanfaHTML +='				</div>';
				zhuanfaHTML +='				<ul>';
				zhuanfaHTML +='					<li class="replyBLeft">';
				zhuanfaHTML +='						<span></span>';
				zhuanfaHTML +='						<a><input type="checkbox">同时评论给</a><a class="beizhuanfaderen">'+zhuanfaderen+'</a>';
				zhuanfaHTML +='					</li>';
				zhuanfaHTML +='					<li id="zhuanfaBtn">';
				zhuanfaHTML +='						<a><span>';
				zhuanfaHTML +='							<em>转发</em>';
				zhuanfaHTML +='							</span></a>';
				zhuanfaHTML +='					</li>';
				zhuanfaHTML +='				</ul>';
				zhuanfaHTML +='			</div>';
				zhuanfaHTML +='	 	</div>';
				zhuanfaHTML +='</div>';


		$(".bg").append(zhuanfaHTML);	
}

//转发到正文
function zhuanfadao(zz){

	
	$(".bg").hide();

	var zfdehua=document.getElementById("zfdehua")
	var zfMyweibo=zfdehua.value;
	alert(zfMyweibo);
	var zfMyweiboContent ="";
			zfMyweiboContent +='<div class="RightL4">';
			zfMyweiboContent +='	<div class="RightL4Content">';
			zfMyweiboContent +='		<div class="RightL4CLeft">';
			zfMyweiboContent +='			<img src="images/UserHeadImages/4.jpg">';
			zfMyweiboContent +='		</div>';
			zfMyweiboContent +='		<div class="RightL4CRight">';
			zfMyweiboContent +='			<div class="Name">';
			zfMyweiboContent +='				<a href="#">茉香半糖</a>';
			zfMyweiboContent +='			</div>';
			zfMyweiboContent +='			<div class="txt">';
			zfMyweiboContent +='				<a href="#">'+zfMyweibo+'</a>';//alert("a");
			zfMyweiboContent +='			</div>';
			zfMyweiboContent +='';
			zfMyweiboContent +='';
			zfMyweiboContent +='';
			zfMyweiboContent +='';
			zfMyweiboContent +='';
			zfMyweiboContent +='';
			zfMyweiboContent +='';
			zfMyweiboContent +='';
			zfMyweiboContent +='';
			zfMyweiboContent +='';
			zfMyweiboContent +='';
			zfMyweiboContent +='';
			zfMyweiboContent +='';
			zfMyweiboContent +='';
			zfMyweiboContent +='';
			zfMyweiboContent +='';
			zfMyweiboContent +='';
			zfMyweiboContent +='';
			zfMyweiboContent +='';
			zfMyweiboContent +='';
			zfMyweiboContent +='';
			zfMyweiboContent +='			<div id="RightCRB">';
			zfMyweiboContent +='				<div class="RightCRBLeft">';
			zfMyweiboContent +='					<a href="#">30秒前</a>';
			zfMyweiboContent +='					<span>来自</span>';
			zfMyweiboContent +='					<a href="#">iphone客户端</a>';
			zfMyweiboContent +='				</div>';
			zfMyweiboContent +='				<div class="RightCRBRight">';
			zfMyweiboContent +='					<a class="dianzan" iszan="no">';
			zfMyweiboContent +='					<a class="dianzan" iszan="no">';
			zfMyweiboContent +='						<i></i>(<em class="zanNum">52</em>)';
			zfMyweiboContent +='					</a>';
			zfMyweiboContent +='					<span>|</span>';
			zfMyweiboContent +='					<a class="zhuanfaA">转发(145)</a>';
			zfMyweiboContent +='					<span>|</span>';
			zfMyweiboContent +='					<a href="#">收藏</a>';
			zfMyweiboContent +='					<span>|</span>';
			zfMyweiboContent +='					<a class="pinglun" talkid="reply1" isshow="no">评论(90)</a>';
			zfMyweiboContent +='				</div>';
			zfMyweiboContent +='			</div>';
			zfMyweiboContent +='			<div id="replyContentreply1" class="replyContent">';
			zfMyweiboContent +='			</div>';
			zfMyweiboContent +='		</div>';
			zfMyweiboContent +='	</div>';
			zfMyweiboContent +='</div>';


			$(".zhengwen").prepend(zfMyweiboContent);

}
