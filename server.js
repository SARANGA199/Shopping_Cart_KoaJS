import koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors  from '@koa/cors';

import userRou from './routes/userRoutes.js';
import itemRou from './routes/itemRoutes.js';
import cartRou from './routes/cartRoutes.js';
import wishRou from './routes/wishListRoutes.js';
import purchaseRou from './routes/purchaseRoutes.js';
import promoRou from './routes/promotionRoutes.js';

const app = new koa();
app.use(cors());
app.use(bodyParser());

app.use(userRou.routes()).use(userRou.allowedMethods());
app.use(itemRou.routes()).use(itemRou.allowedMethods());
app.use(cartRou.routes()).use(cartRou.allowedMethods()); 
app.use(wishRou.routes()).use(wishRou.allowedMethods());
app.use(purchaseRou.routes()).use(purchaseRou.allowedMethods());
app.use(promoRou.routes()).use(promoRou.allowedMethods());


const PORT = 5000;

app.listen(PORT,()=>{

    console.log(`Server is up and running on ${PORT}`);
})
  
