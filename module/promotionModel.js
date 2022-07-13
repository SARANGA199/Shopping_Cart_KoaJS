import {v4 as uuidv4} from 'uuid';
const promotion = new Map();



export const addPromotion = ({promoName,Description}) =>{
   
    const promo = {id:uuidv4(),promoName,Description}

    promotion.set(promo.id,promo);

    return promo;

}


export const viewPromotion = () =>{

    return [...promotion.values()];
}