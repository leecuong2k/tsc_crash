// Generics

type numArr = Array<number>;
type strArr = Array<string>;

const last = (arr: Array<number>) => arr[arr.length - 1];

const _l1 = last([1, 2, 3]);

const lastT = <T>(arr: Array<T>): T => arr[arr.length - 1];

const _l2 = lastT([1, 2, 3]);

const _l3 = lastT(["1", "2", "3"]);

const _l4 = lastT<boolean>([true, false, false, true, false]);


const makeT = <T>(x: T[]) => x;

const _m1 = makeT([1]);

const func = (x: number): void => {
  console.log(x);
}

func(10);

const demoArr: Array<strArr> = [];

demoArr.push(['Lee']);


const makeArrXY = <X, Y>(x: X, y: Y) => [x, y];

const m1 = makeArrXY<string, number>("Lee", 124);
console.log(m1);

const m2 = makeArrXY(false, 123);
console.log(m2);

const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => [x, y];

const m3 = makeTuple(false, 123);
console.log({ m3 });
