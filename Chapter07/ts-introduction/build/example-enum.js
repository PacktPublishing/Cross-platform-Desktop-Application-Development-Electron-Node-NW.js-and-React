var ExampleEnum;
(function (ExampleEnum) {
    function setStatus(status) {
        // ...
    }
    setStatus(0 /* NEEDS_PATCH */);
    // setStatus( "READY" );
    // error TS2345: Argument of type '"NEEDS_PATCHpp"' is not assignable to parameter of type 'STATUS'.
})(ExampleEnum || (ExampleEnum = {}));
//# sourceMappingURL=example-enum.js.map