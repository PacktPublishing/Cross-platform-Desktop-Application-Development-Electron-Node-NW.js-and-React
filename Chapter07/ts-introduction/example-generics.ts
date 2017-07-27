module ExampleGenerics {

interface DataMap<T> {
  [ key: string ]: T;
}

const numberMap: DataMap<number> = { foo: 1, bar: 2 },
      stringMap: DataMap<string> = { foo: "foo", bar: "bar" };
}