import Router from "@koa/router";
import { addPromotion ,viewPromotion} from "../module/promotionModel.js";


const promoRou = new Router({

    prefix : '/promo'
});


promoRou.post('/',(ctx)=>{

    let promo = ctx.request.body;
    promo = addPromotion(promo);
    ctx.set('content-Type','Application.json');
    ctx.response.status = 201;
    ctx.body = promo;


})

promoRou.get('/',(ctx)=>{

    ctx.body = viewPromotion();
    ctx.set('content-type','application.json')
    ctx.response.status = 200;
})

export default promoRou;