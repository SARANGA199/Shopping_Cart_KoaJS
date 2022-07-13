import Router from "@koa/router";
import { AddPurchase } from "../module/purchaseModel.js";

const purchaseRou = new Router({

    prefix : '/purchase'
})


purchaseRou.post('/',(ctx)=>{

    let purch = ctx.request.body;
    purch = AddPurchase(purch);
    ctx.set('content-Type','Application.json');
    ctx.response.status = 201;
    ctx.body = purch;

})

export default purchaseRou;