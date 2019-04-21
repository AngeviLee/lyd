// 功能1：点击右侧按钮实现下一项轮播
// 功能2：点击左侧按钮实现上一项轮播
// 功能3：点击小点实现轮播切换
// 功能4：自动轮播
// 功能5：鼠标进入离开轮播区，停止或重新启动自动轮播


// 定义一个变量，表示当前显示的是哪一项，默认从0开始
var index = 0; 
// 【功能1】
// 给右侧按钮注册点击事件
$('.arrow-right').click(function () { 
  // 更新索引
  index++;
  // 判断索引是否超出范围
  if (index >= $('li').length) {
    index = 0;
  }
  // 找到下一项轮播项→淡入显示，其他兄弟→淡出隐藏
  $('li').eq(index).fadeIn(500).siblings().fadeOut(500);
  // 更新小点
  $('.controls a').eq(index).addClass('active').siblings().removeClass('active');
});