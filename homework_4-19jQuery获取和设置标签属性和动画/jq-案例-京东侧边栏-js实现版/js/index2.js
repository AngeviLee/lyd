$('.left ul li').mouseenter(function() {
    $(this).addClass('active').siblings().removeClass('active');
    var index = $(this).index();
    $('.right .item').eq(index).addClass('active').siblings().removeClass('active');
});

$('.slide').mouseleave(function() {
    $('li').removeClass('active');
    $('.right .item').removeClass('active');
});