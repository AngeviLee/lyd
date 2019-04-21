// 给代表主菜单的li注册鼠标进入事件
$('li').mouseenter(function () { 
  // 设置当前的li的样式为突出显示-增加类名active
  // 其他兄弟元素恢复默认样式-移除类名active
  $(this).addClass('active').siblings().removeClass('active');
  // 获取当前li的索引
  var index = $(this).index();
  // 根据获取获取对应的详细菜单项，设置为显示-增加类名active。其他同级的设置为隐藏-移除类名active
  $('.item').eq(index).addClass('active').siblings().removeClass('active');
});

// 给侧边栏容器注册鼠标离开事件
// 注意：要使用mouseleave,不要使用mouseout，因为冒泡会影响效果
$('.slide').mouseleave(function () { 
  console.log('111')
  // 恢复所有li的样式
  $('li').removeClass('active');
  // 隐藏所有详细菜单项
  $('.item').removeClass('active');
});