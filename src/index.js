// @flow
type O = {|
  m<A>(func: (A) => A): (A) => A;
|};

const o: O = {
  m: (func) => func
};

function gen<T>(a: T) {}

const arrowGeneric = <T>(m.o<string>((x) => x), b: T): T => b;
