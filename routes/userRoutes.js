import Router from '@koa/router';
import {register,viewCustomer,AllCustomer} from '../module/userModule.js';

const userRou = new Router({

  prefix : '/user'

});


userRou.post('/', (ctx)=>{

   let user = ctx.request.body;
   user =  register(user);
   ctx.set('content-type','application.json')
   ctx.response.status = 201;
   ctx.body= user;
 
})

userRou.get('/users',(ctx)=>{

   ctx.body = AllCustomer();
   ctx.set('content-type','application.json')
   ctx.response.status = 200;

})

userRou.get('/users/:id',(ctx)=>{

   const id = ctx.params.id;
   ctx.body = viewCustomer(id);
   ctx.set('content-type','application.json')
   ctx.response.status = 200;

})

export default  userRou;