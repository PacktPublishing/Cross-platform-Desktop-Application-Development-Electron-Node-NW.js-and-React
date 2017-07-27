module ExampleOverloading {

  interface CreateButton {
    ( tagName: "button" ): HTMLButtonElement;
    ( tagName: "a" ): HTMLAnchorElement;
  }

}