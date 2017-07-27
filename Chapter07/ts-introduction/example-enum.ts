module ExampleEnum {

  const enum Status {
      NEEDS_PATCH,
      UP_TO_DATE,
      NOT_INSTALLED
  }

  function setStatus( status: Status ) {
    // ...
  }

  setStatus( Status.NEEDS_PATCH );
  // setStatus( "READY" );
  // error TS2345: Argument of type '"NEEDS_PATCHpp"' is not assignable to parameter of type 'STATUS'.
}