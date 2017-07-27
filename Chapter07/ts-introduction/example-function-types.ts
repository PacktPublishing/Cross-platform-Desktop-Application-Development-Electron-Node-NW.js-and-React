module ExampleFunctionTypes {
  interface Switcher {
    (toggle: boolean): void;
  }

  const showModal:Switcher = ( toggle ) => {
    console.log( toggle );
  }

  showModal( true );
}

 