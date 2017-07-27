var ExampleReusableTypes;
(function (ExampleReusableTypes) {
    ////function addOgTags( meta: { title: string, description: string } ): string {
    //  return `
    //    <meta property="og:title" content="${meta.title}" />
    //    <meta property="og:description" content="${meta.description}" />
    //  `
    //}
    function addOgTags(meta) {
        return `
      <meta property="og:title" content="${meta.title}" />
      <meta property="og:description" content="${meta.description || ""}" />
    `;
    }
    let res = addOgTags({ title: "title" });
    console.log(res);
})(ExampleReusableTypes || (ExampleReusableTypes = {}));
//# sourceMappingURL=example-reusable-types.js.map