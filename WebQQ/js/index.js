$(function(){


	$(".FAF01").click(function(){
		$(".FAFLi").removeClass("FAFChangeColor FAFLiLeft");
		$(this).addClass(" FAFChangeColor FAFLiLeft")
		$(".FriendA").hide();
		$("#huihua").show();
	});
	$(".FAF02").click(function(){
		$(".FAFLi").removeClass("FAFChangeColor FAFLiLeft");
		$(this).addClass(" FAFChangeColor FAFLiLeft")
		$(".FriendA").hide();
		$("#lianxiren").show();
	});
	$(".FAF03").click(function(){
		$(".FAFLi").removeClass("FAFChangeColor FAFLiLeft");
		$(this).addClass(" FAFChangeColor FAFLiLeft")
		$(".FriendA").hide();
		$("#faxian").show();
	});
	$(".FAF04").click(function(){
		$(".FAFLi").removeClass("FAFChangeColor FAFLiLeft");
		$(this).addClass(" FAFChangeColor FAFLiLeft")
		$(".FriendA").hide();
		$("#shezhi").show();
	});






	$(".LXRfriend").click(function(){
		$(".LXRChatKindLi").removeClass("LXRChatKindSpe");
		$(this).addClass(" LXRChatKindSpe")
		$(".LXRList").hide();
		$("#LXRFriendContent").show();
	});
	$(".LXRqun").click(function(){
		$(".LXRChatKindLi").removeClass("LXRChatKindSpe");
		$(this).addClass(" LXRChatKindSpe")
		$(".LXRList").hide();
		$("#LXRGroupContent").show();
	});
	$(".LXRtalk").click(function(){
		$(".LXRChatKindLi").removeClass("LXRChatKindSpe");
		$(this).addClass(" LXRChatKindSpe")
		$(".LXRList").hide();
		$("#LXRTalkContent").show();
	});






	$(".LXRLiA").click(function(){
		var isshow = $(this).parent().find(".LXRLiDes").attr("isshow");

		if(isshow=="no"){
			$(this).parent().find(".LXRLiDes").show();
			$(this).parent().find(".LXRLiDes").attr("isshow","yes");
			$(this).parent().find(".LXRLiPic").css("background-image",'url("css/images/open_arrow_fire.png")');
		}
		else{
			$(this).parent().find(".LXRLiDes").hide();
			$(this).parent().find(".LXRLiDes").attr("isshow","no");
			$(this).parent().find(".LXRLiPic").css("background-image",'url("css/images/open_arrow.png")');
		}
	});









	$(".onlineState").click(function(){

		var isshow =$(".OSList").attr("isshow");

		if(isshow=="no"){
			$(".OSList").show();
			$(".OSList").attr("isshow","yes");

		}else{
			$(".OSList").hide();
			$(".OSList").attr("isshow","no");
		}
	});










	$("#PCRight").click(function(){
			showPicChange();
			
	});

	$("#PCLeft").click(function(){
			showPicChangeS();
			
	});


	chathtml();


});







var index=2;
function showPicChange(){
	
	$("body").css("background-image",'url("images/'+index+'.jpg")');
	index++;
	if( index==6)
	{
		index=1;
	}
}

var indexS=5;
function showPicChangeS(){
	
	$("body").css("background-image",'url("images/'+indexS+'.jpg")');
	indexS--;
	if( indexS==0)
	{
		indexS=5;
	}
}





function chathtml(){


	$(".chatA").click(function(){
		var talkid = $(this).attr("talkid");
		var cAname = $(this).attr("cafName");

		var isappear =$(this).attr("isappear");
		if (isappear=="yes"){
			$("#"+talkid).show();
			$(".TalkArea").css("z-index","10");
			$("#"+talkid).css("z-index","12");


			return;
		}


	



var chathtmlA = '';


			chathtmlA +='				<div id="'+ talkid +'"  class="TalkArea">                                   ';
			chathtmlA +='					<div class="TalkTop">';
			chathtmlA +='						<div class="TTTap" href="#">';
			chathtmlA +='							<a href="#"></a>';
			chathtmlA +='						</div>';
			chathtmlA +='						<span class="TTName">'+ cAname +'</span>';
			chathtmlA +='						<a class="TTClose" href="#">关闭</a>';
			chathtmlA +='					</div>';
			chathtmlA +='					<div class="TalkContent">';
			chathtmlA +='						<ul class="TCTap" isshow="false">';
			chathtmlA +='							<li class="TCTapLi">';
			chathtmlA +='								<a class="TCTPic t01"></a>';
			chathtmlA +='								<a class="TCTWord">群成员</a>';
			chathtmlA +='							</li>';
			chathtmlA +='							<li class="TCTapLi">';
			chathtmlA +='								<a class="TCTPic t02"></a>';
			chathtmlA +='								<a class="TCTWord">群资料</a>';
			chathtmlA +='							</li>';
			chathtmlA +='							<li class="TCTapLi">';
			chathtmlA +='								<a class="TCTPic t03"></a>';
			chathtmlA +='								<a class="TCTWord">聊天记录</a>';
			chathtmlA +='							</li>';
			chathtmlA +='						</ul>';
								
			chathtmlA +='						<div class="TalkBottomArea">';

			chathtmlA +='							<!-- 聊天内容区域 -->';

			chathtmlA +='							<div class="TalkDesContent">';
			chathtmlA +='							</div>';
			chathtmlA +='							<!-- 聊天内容区域 end-->';
			chathtmlA +='							<!-- 聊天框底部 -->';
			chathtmlA +='							<div class="TalkBottom">';
			chathtmlA +='								<div class="TBFace">';
			chathtmlA +='									<a class="TBFacePic"></a>';
			chathtmlA +='								</div>';
			chathtmlA +='								<input  class="TBInput" value=""></input>';
			chathtmlA +='								<button class="TBBtn">';
			chathtmlA +='									<span>发送</span>';
			chathtmlA +='								</button>';
			chathtmlA +='							</div>';
			chathtmlA +='							<!-- 聊天框底部 end -->';
			chathtmlA +='						</div>';
			chathtmlA +='					</div>';
			chathtmlA +='				</div>';



	

		$("#chatAllArea").append(chathtmlA);
		$(this).attr("isappear","yes");
		$(".TalkArea").css("z-index","10");
		$("#"+talkid).css("z-index","12");

		$(".TTClose").click(function(){
			$("#"+talkid).hide();
		});
		//拖动
		$("#"+talkid).draggable({ 
			handle: ".TalkTop" ,
			containment: "parent"
		});
		
		
	});

}


			