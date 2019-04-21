var a = document.getElementsByTagName('a');
var photo = document.getElementById('photo');
var pid = document.getElementById('pid');

for (var i=0; i<a.length; i++) {
    a[i].onclick = function () {
        // photo.src = a[i].src;
        photo.src = this.href;
        // pid.innerText = a[i].title;
        pid.innerText = this.title;
        
        return false;
    };
}