var index = 0;
// 右边按钮小功能
$('.arrow-right').click(function () {
    index++;
    if (index >= $('li').length) {
        index = 0;
    }
    $('li').eq(index).fadeIn().siblings().fadeOut();
    $('.controls a').eq(index).addClass('active').siblings().removeClass('active');
});
// 左边按钮功能
$('.arrow-left').click(function () {
    index--;
    if (index < 0) {
        index = $('li').length;
    }
    $('li').eq(index).fadeIn().siblings().fadeOut();
    $('.controls a').eq(index).addClass('active').siblings().removeClass('active');
});
// 小点点功能
$('.controls a').click(function () {
    var index1 = $(this).index();
    $('li').eq(index1).fadeIn().siblings().fadeOut();
    $(this).addClass('active').siblings().removeClass('active');
});
// 当鼠标悬停时，停止动画
$('.slider').mouseover(function() {
    clearInterval(timer);
});
// 当鼠标离开时，开启动画
$('.slider').mouseleave(function() {
    autoPlay();
});
// 自动轮播
var timer;
function autoPlay() {
    timer = setInterval(function () {
        $('.arrow-right').click();
    }, 2000);
}

autoPlay();
