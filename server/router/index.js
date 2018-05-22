import report_error_type from '../utils/report_error_type';
const router = require('koa-router')();
const db = require('../db/index.js');

router.post('/api/report', async(ctx, next) => {
    let args = ctx.request.body;
    args.forEach(item=>{
        item.ip = ctx.ip;
        item.type = report_error_type[item.type-1];
    });
    let res = await db.insertReportData(args);
    ctx.body = JSON.stringify({ code: 0, data: null });
});
router.get('/api/query', async(ctx, next) => {
    let res = await db.queryReportData();
    ctx.body = JSON.stringify({ code: 0, data: res });
});

module.exports = router;
