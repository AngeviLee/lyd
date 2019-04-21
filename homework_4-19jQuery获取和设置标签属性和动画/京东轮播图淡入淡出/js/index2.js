// 设置索引
var index = 0;
// 找到最大图片的索引
var maxIndex = $('.slider ul li').length - 1;

$('.arrow-left').click(function() {
    $('.slider ul li ').eq(index).fadeOut();

    if(index >0 ) {
        index--;
    }else {
        index = maxIndex;
    }

    $('.slider ul li').eq(index).fadeIn();
});

$('.arrow-right').click(function() {
    $('.slider ul li').eq(index).fadeOut();

    if(index<maxIndex) {
        index++;
    }else {
        index = 0;
    }

    $('.slider ul li').eq(index).fadeIn();
});