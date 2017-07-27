var ExampleStringLiteralTypes;
(function (ExampleStringLiteralTypes) {
    function setStatus(status) {
        // ...
    }
    setStatus("NEEDS_PATCH");
    // setStatus( "READY" );
    // error TS2345: Argument of type '"NEEDS_PATCHpp"' is not assignable to parameter of type 'STATUS'.
})(ExampleStringLiteralTypes || (ExampleStringLiteralTypes = {}));
//# sourceMappingURL=example-string-literal-types.js.map