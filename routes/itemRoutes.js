import Router from '@koa/router';
import {AddItem,editItem,viewItems} from '../module/itemModel.js'

const itemRou = new Router({

    prefix :'/item'
});

itemRou.post('/',(ctx)=>{

    let item = ctx.request.body;
    item = AddItem(item);
    ctx.set('content-Type','Application.json');
    ctx.response.status = 201; 
    ctx.body = item;

});

itemRou.get('/items',(ctx)=>{

   ctx.body = viewItems();
   ctx.set('content-type','application.json')
   ctx.response.status = 200;

})

itemRou.put('/:id',(ctx)=>{ 

    const id = ctx.params.id;
    const data = ctx.request.body;
    ctx.body =  editItem(id,data);
    ctx.set('Content-Type','application.json')
    ctx.status = 200;
})

export default itemRou;