interface IItem {
  name: string;
  type: string;
  catagory: string;
  price: number;
}

function a(x: IItem) {
  return function (y: number) {
    let copy: IItem = { ...x };
    copy.price = x.price - (y * x.price) / 100;
    return copy;
  };
}

let item: IItem = {
  name: "Avocado",
  type: "Fruit",
  catagory: "Food",
  price: 200,
};

let b = a(item)(10);
console.log(b.price);
