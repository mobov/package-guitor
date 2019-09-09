"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const Router = require("koa-router");
const fs = require("fs");
const path = require("path");
const serve = require("koa-static");
const config_1 = require("./config");
const { port, ip, staticPath } = config_1.default;
const app = new Koa();
const router = new Router();
router.get('/*', async (ctx) => {
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./dist/index.html');
});
app.use(serve(path.join(__dirname, staticPath)));
app.use(router.routes());
app.on('error', err => {
    console.log(err);
});
app.listen(port, ip, () => {
    console.log(`Server running on port ${config_1.default.port}`);
});
