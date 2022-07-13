import Router from "@koa/router";
import { addToCart, ViewCart ,clearCart} from "../module/cartModel.js";


const cartRou = new Router({

    prefix : '/cart'
})


cartRou.post('/',(ctx)=>{

    let cart = ctx.request.body;
    cart = addToCart(cart);
    ctx.set('content-Type','Application.json');
    ctx.response.status = 201;
    ctx.body = cart;

})

cartRou.get('/',(ctx)=>{

    ctx.body = ViewCart();
    ctx.set('content-type','application.json')
    ctx.response.status = 200;

})

cartRou.delete('/',(ctx)=>{

    ctx.body = clearCart();
    ctx.set('content-type','application.json')
    ctx.response.status = 204;
})

export default cartRou;