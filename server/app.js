require('babel-register')({
    "presets": [
        ["env",{"targets":{"node": 'current'}}]
    ]
})
const Koa =  require('koa');
const koabody = require('koa-body');
const app = new Koa();
const router = require('./router');

app.use(koabody({}));
app.use(router.routes());
app.listen(30085);
