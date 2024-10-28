"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
(0, src_1.getPosts)({ id: 2 }).then((res) => {
    console.log(res);
});
