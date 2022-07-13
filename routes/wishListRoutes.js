import Router from "@koa/router";

import { addToWishList,ViewWishList } from "../module/wishListModule.js";



const wishRou = new Router({

    prefix : '/wishlist'
})


wishRou.post('/',(ctx)=>{

    let wish = ctx.request.body;
    wish = addToWishList(wish);
    ctx.set('content-Type','Application.json');
    ctx.response.status = 201;
    ctx.body = wish;

})

wishRou.get('/',(ctx)=>{

    ctx.body = ViewWishList();
    ctx.set('content-type','application.json')
    ctx.response.status = 200;

})


export default wishRou;