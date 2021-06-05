"use strict";
function a(x) {
    return function (y) {
        return x.price - (y * x.price) / 100;
    };
}
var item = {
    name: "Avocado",
    type: "Fruit",
    catagory: "Food",
    price: 200,
};
var b = a(item)(10);
console.log(b);
