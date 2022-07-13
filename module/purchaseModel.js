const purchase  = new Map();
import {v4 as uuidv4 } from 'uuid';

export const AddPurchase = ({numOfItem ,totalPrice})=>{


    const purchaseOne = {id:uuidv4(),numOfItem,totalPrice};

    purchase.set(purchaseOne.id,purchaseOne);
    return purchaseOne;

} 