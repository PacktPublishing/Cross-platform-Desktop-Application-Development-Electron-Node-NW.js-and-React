module ExampleIndexableTypes {
  interface DataMap {
    [ key: string ]: any;
  }

  const map: DataMap = { foo: "foo", bar: "bar" };
  console.log( map );


  interface StringArray {
    [ index: number ]: string;
  }

  const arr: StringArray = [ "one", "two", "tree" ];
  console.log( arr );
}