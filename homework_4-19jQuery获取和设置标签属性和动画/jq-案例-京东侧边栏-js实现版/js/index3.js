$('li').mouseenter(function() {
    var index = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.right .item').eq(index).addClass('active').siblings().removeClass('active');
});