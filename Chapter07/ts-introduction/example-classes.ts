//module ExampleClasses {
//class LightFreighter implements Starship {
//  speed: number = 0;
//  speedUp( increment: number ): void {
//    this.speed = this.speed + increment;
//  }
//}
//interface Starship {
//  speedUp( increment: number ): void;
//}
//
//let millenniumFalcon = new LightFreighter();
//millenniumFalcon.speedUp( 100 );
//}
//module Example3 {
//class LightFreighter implements Starship {
//  private speed: number = 0;
//  public speedUp( increment: number ): void {
//    this.speed = this.speed + increment;
//  }
//}
//  interface Starship {
//    speedUp( increment: number ): void;
//  }
//
//  let millenniumFalcon = new LightFreighter();
//  millenniumFalcon.speedUp( 100 );
//}

module ExampleClasses {


abstract class Starship {
  constructor( protected speed: number = 0 ) {

  }
  abstract speedUp( increment: number ): void;
}

class LightFreighter extends Starship {

  public speedUp( increment: number ): void {
    this.speed = this.speed + increment;
  }
}


 let millenniumFalcon = new LightFreighter();
  millenniumFalcon.speedUp( 100 );
}