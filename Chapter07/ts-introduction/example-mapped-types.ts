module ExampleMappedTypes {

  interface RGB {
      readonly red: number;
      readonly green: number;
      readonly blue: number;
  }

  let green: RGB = { red: 1, green: 128, blue: 0 };
  const redOfGreen: number = green.red;
  // green.red = 1;
}