$('#menu>li>a').mouseover(function() {
    $(this).next().stop().slideDown();
});

$('#menu>li>a').mouseout(function() {
    $(this).next().stop().slideUp();
});