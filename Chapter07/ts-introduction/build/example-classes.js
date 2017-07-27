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
var ExampleClasses;
(function (ExampleClasses) {
    class Starship {
        constructor(speed = 0) {
            this.speed = speed;
        }
    }
    class LightFreighter extends Starship {
        speedUp(increment) {
            this.speed = this.speed + increment;
        }
    }
    let millenniumFalcon = new LightFreighter();
    millenniumFalcon.speedUp(100);
})(ExampleClasses || (ExampleClasses = {}));
//# sourceMappingURL=example-classes.js.map