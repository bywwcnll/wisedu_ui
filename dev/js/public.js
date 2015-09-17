

//加载动画方法
function wisProgress(flag){
    if(flag){
        var left = ($(window).width()-100)/2;
        var top = ($(window).height()-100)/2;
        $("#wisProgressC").remove();
        $("body").append('<div id="wisProgressC" style="position:fixed;height:100%;width:100%;top:0;left:0;"><div class="wisProgress" style="top: '+top+'px; left: '+left+'px;position: fixed;width: 100px;height: 100px;text-align: center;line-height: 100px;background-color: rgba(0,0,0,0.8);border-radius: 15px;"><i class="fa fa-spinner fa-pulse" style="color: #fff;font-size: 36px;"></i></div></div>');
    }else{
        $("#wisProgressC").remove();
    }
}

$(function(){
  //新闻公告列表样式设置
  $(".wis-tabs>li").css("width", (100/$(".wis-tabs>li").length)+"%");
  if($(".wis-tabs").length>0){
    $(".wis-tabs").html($(".wis-tabs").html().replace(/\s{2}</g, "<").replace(/>\s{2}/g, ">"));//消除inline-block间的间隔
  }
});

