"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="./feedme" />
const http = require("http");
var FeedMe = require("feedme");
http.get('http://www.npr.org/rss/rss.php?id=1001', (res) => {
    const parser = new FeedMe(true);
    parser.on("title", (title) => {
        console.log(title);
    });
    res.pipe(parser);
});
//# sourceMappingURL=example.js.map