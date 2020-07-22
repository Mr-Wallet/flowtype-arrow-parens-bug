// @flow
type O = {|
  m<A>(func: (A) => A): (A) => A;
|};

const o: O = {
  m: (func) => func
};

function gen<T>(a: T) {}

const arrowGeneric = () => o.m<T>((x) => x);
