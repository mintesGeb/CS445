let a = {
  fname: "umur",
};
let copyA = { ...a };
copyA.fname = "Asaad";
a = { ...copyA };
console.log(a);
