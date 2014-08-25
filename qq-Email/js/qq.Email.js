$(function(){

$(".emailSearch").click(function(){

	$(".xiala").css("background-position","-75px -4px");
});
$(".tubiao").click(function(){

	$(".tubiaoContent").show();
});


  $(".tubiao").click(function(){
    $(".tubiaoContent").show();     
    return false;//关键是这里，阻止冒泡
    });
  $(".tubiaoContent").click(function(){
    return false;
    });
  $(document).click(function(){
    $(".tubiaoContent").hide();
    });
// 星标邮件
$(".fg").click(function(){

  
   $(this).parent().find(".fg1").show();
});
$(".fg1").click(function(){

   $(this).parent().find(".fg1").hide();
});



// $("input[type='checkbox']").prop("checked");
// $("input[type='checkbox']").prop("disabled", false);
// $("input[type='checkbox']").prop("checked", true);
  
  $("#ch1").click(function(){
  var ifo=$(this).attr("isch");
  if(ifo=="no"){
     $(".choice").each(function(){
        $(this).prop("checked",true);
      });
   $(this).attr("isch","yes");
  }
  else{
    $(".choice").each(function(){
      $(this).prop("checked",false);
    });
    $(this).attr("isch","no");
  }
});

 
  $(".dele").click(function(){
    $(".choice").each(function(){
      if($(this).is(':checked')==true){
        $(this).parent().parent().parent().hide();
        $(this).parent().parent().parent().attr("isshow","no");
        var deleid=$(this).parent().parent().parent().attr("deleid");
       
      }
    });
  });


  
 

  $(".yishanchu").click(function(){

    $("#xinContent").hide();
     yishanchu();
    
  });
  $(".shoujianxiang").click(function(){
    $("#xinContent").show();
  });

 

});



function yishanchu(){
 
  
 


    var shanchuUl ='';
        shanchuUl +=' <div  iscunzai="yes" >';
        shanchuUl +='  <div class="xinAreaLi" isshow="no">';
        shanchuUl +='    <li class="liA"><a><input type="checkbox" class="choice" name="1"/></a></li>';
        shanchuUl +='    <li class="liB"><a class="xinxi"></a></li>';
        shanchuUl +='    <li class="liC"><a class=""> </a></li>';
        shanchuUl +='    <li class="liD"><a class=""> </a></li>';
        shanchuUl +='    <li class="liE" id="dj"><a class="">8月8日</a><a href="#" class="fg"></a>';
        shanchuUl +='       <a href="#" class="fg1"></a>';
        shanchuUl +='    </li>  ';
        shanchuUl +='   </div> ';
        shanchuUl +='  </div> ';
          
        
        $(".xinArea").append(shanchuUl);


    
}




