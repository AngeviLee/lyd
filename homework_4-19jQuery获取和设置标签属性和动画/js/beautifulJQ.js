// webapi 方法
// 获取所有a 
// var links = document.querySelectorAll('a');
// // 获取显示大图片的img标签
// var img = document.querySelector('#photo');
// // 获取p
// var p = document.querySelector('#des');
// // 循环遍历，为a注册onmouseover事件
// for(var i=0; i<links.length; i++) {
//     links[i].onmouseover = function() {
//         img.src = this.href;
//         p.innerText = this.title;
//         return false;
//     };
// }

// jQuery方法
// $('#imagegallery  a').mouseover(function() {
//     var links = $(this).attr('href');
//     var title = $(this).attr('title');
//     $('#photo').attr('src', links);
//     $('#des').text(title);
//     return false;
// });
$('a').mouseover(function() {
    var links = $(this).attr('href');
    var title = $(this).attr('title');

    $('#photo').attr('src',links);
    $('#des').text(title);
});
