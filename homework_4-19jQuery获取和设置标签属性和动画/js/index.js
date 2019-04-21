// 1. 获取一组a元素
var links = document.getElementsByTagName('a');
// 2. 获取id为photo的img元素
var photo = document.getElementById('photo');
// 3. 获取p元素
var des = document.getElementById('des');

// 4. 给一组a注册onclick事件
for (var i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    // 4.1 获取当前点击的a的href属性值设置给id为photo的img是src属性
    photo.src =  this.href;
    // 4.2 获取当前点击的a的title属性值 设置给p的innerText
    des.innerText = this.title;
    // 4.3 取消默认行为
    return false;
  };
}
