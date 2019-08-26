function Bullet(image, left, top, size,amount) {
    this.image = image;
    this.left = left;
    this.top = top;
    this.size = size; // basic
    this.amount = [];
// khai bao trien khai anh
    this.getBullet = function () {
//dat thuoc tinh anh bao gom width, height, style....
        return "<img width='" + this.size + "' height='" + this.size + "' src='" + this.image + "' style='top: " + this.top + "px; left: " + this.left + "px; position: absolute'/>"
    };
    this.moveRight = function () {
        this.left += 100;
    }
    this.moveDown = function () {
        this.top += 100;
    }
};
// Khởi tạo Bullet
let bulletK = new Bullet("fireBallTest.jpg", 0, 0, 25);
// tao function cho ban' //a 65. crtl: 17
function shoot() {
    if (bulletK.left < window.innerWidth - bulletK.size && bulletK.top == 0) {
        bulletK.moveRight();
    }
    document.getElementById("bullet").innerHTML = bulletK.getBullet();
    setTimeout(shoot, 150);
};
function hit() {

};

