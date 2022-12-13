// Generics
var last = function (arr) { return arr[arr.length - 1]; };
var _l1 = last([1, 2, 3]);
var lastT = function (arr) { return arr[arr.length - 1]; };
var _l2 = lastT([1, 2, 3]);
var _l3 = lastT(["1", "2", "3"]);
var _l4 = lastT([true, false, false, true, false]);
var makeT = function (x) { return x; };
var _m1 = makeT([1]);
var func = function (x) {
    console.log(x);
};
func(10);
var demoArr = [];
demoArr.push(['Lee']);
var makeArrXY = function (x, y) { return [x, y]; };
var m1 = makeArrXY("Lee", 124);
console.log(m1);
var m2 = makeArrXY(false, 123);
console.log(m2);
var makeTuple = function (x, y) { return [x, y]; };
var m3 = makeTuple(false, 123);
console.log(m3);
