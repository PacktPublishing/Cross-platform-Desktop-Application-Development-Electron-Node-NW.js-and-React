module ExampleReusableTypes {
  ////function addOgTags( meta: { title: string, description: string } ): string {
  //  return `
  //    <meta property="og:title" content="${meta.title}" />
  //    <meta property="og:description" content="${meta.description}" />
  //  `
  //}

  //function addOgTags( meta: { title: string, description?: string } ): string {
  //  return `
  //    <meta property="og:title" content="${meta.title}" />
  //    <meta property="og:description" content="${meta.description || ""}" />
  //  `
  //}

  //type TMeta = { title: string, description?: string };
  //
  //function addOgTags( meta: TMeta ): string {
  //  return `
  //    <meta property="og:title" content="${meta.title}" />
  //    <meta property="og:description" content="${meta.description || ""}" />
  //  `
  //}


  interface IMeta {
    title: string;
    description?: string;
  }

  function addOgTags( meta: IMeta ): string {
    return `
      <meta property="og:title" content="${meta.title}" />
      <meta property="og:description" content="${meta.description || ""}" />
    `
  }
  let res = addOgTags({ title: "title" });
  console.log( res );
}