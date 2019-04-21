var index = 0;
// 右侧按钮功能
$('.arrow-right').click(function() {
    index++;
    if(index>=$('li').length) {
        index = 0;
    }
    $('li').eq(index).fadeIn().siblings().fadeOut();
    $('.controls a').eq(index).addClass('active').siblings().removeClass('active');
});
// 左侧按钮功能
$('.arrow-left').click(function() {
    index--;
    if(index<0) {
        index = $('li').length-1;
    }
    $('li').eq(index).fadeIn().siblings().fadeOut();
    $('.controls a').eq(index).addClass('active').siblings().removeClass('active');
});
// 小点点轮播功能
$('.controls a').click(function() {
    var index1 = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('li').eq(index1).fadeIn().siblings().fadeOut();
});
// 当鼠标进入时候暂停自动播放
$('.slider').mouseenter(function() {
    clearInterval(timer)   ;
});
// 当鼠标离开时开启自动播放
$('.slider').mouseleave(function() {
    autoPlay();
});
// 自动轮播
var timer;
function autoPlay() {
    timer = setInterval(function() {
        $('.arrow-right').click();
    },2000);
}
autoPlay();
