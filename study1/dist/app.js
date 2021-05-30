"use strict";
// function add(a: number, b: number): number {
//   return a + b;
// }
var University = /** @class */ (function () {
  function University(name, dept) {
    this.name = name;
    this.dept = dept;
  }
  University.prototype.graduation = function (year) {
    console.log(this.dept + " " + year);
  };
  return University;
})();
var miu = new University("MIU", "CS");
miu.graduation(2019);
var rec = {
  width: 5,
  length: 2,
};
rec.calcArea = function () {
  return this.width * this.length;
};
console.log(rec.calcArea());
