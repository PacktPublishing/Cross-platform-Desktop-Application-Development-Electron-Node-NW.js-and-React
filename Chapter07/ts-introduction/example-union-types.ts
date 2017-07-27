module ExampleUnionTypes{

  interface Anakin {
    useLightSaber: () => void;
    useForce: () => void;
  }
  interface Padmé {
    leaderSkills: string[];
    useGun: () => void;
  }
  type Luke = Anakin & Padmé;

  interface PlainObj {
    [ key: string ]: string;
  }
  interface JQuery {
  }

  function jQuery( input: string | Node | Node[] | PlainObj | JQuery ): JQuery {
    let output: JQuery = {}
    // ...
    return output;
  }

}