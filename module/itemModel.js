import {v4 as uuidv4} from 'uuid'
const items = new Map();

export const AddItem = ({itemName,price,quantity,description} )=>{
   
    const item = {id:uuidv4(),itemName,price,quantity,description,date:new Date()};
    items.set(item.id,item);
    return item;

}


export const editItem = (id,{itemName,price,quantity,description})=>{


    if(!items.has(id)){  

        throw new Error("ID is not found");
    }

    const item = {id,itemName,price,quantity,description,date:new Date()}
    items.set(item.id,item);

    return item;

}

export const viewItems = () =>{

    return [...items.values()];
}