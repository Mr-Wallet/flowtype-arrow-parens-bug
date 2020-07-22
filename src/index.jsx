// @flow
type O = {|
  m<A>(func: (A) => A): (A) => A;
|};

const o: O = {
  m: (func) => func
};

function gen<T>(a: T) {}

const arrowGeneric = () => o.m<T>((x) => x);

const selectPassthrough = (OptionComponent: React.ComponentType<any>) => {
  const SelectPassthrough = (props: { data?: any }) => {
    const data: Object = props.data ? props.data : {};

    return (
      <SelectOptionComponent {...props}>
        <OptionComponent {...data} />
      </SelectOptionComponent>
    );
  };

  return SelectPassthrough;
}

const makeSelectPassthrough = <T>(aThing: T) => o.m<string>(selectPassthrough);
