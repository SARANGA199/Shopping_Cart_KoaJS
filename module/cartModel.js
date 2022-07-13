const cart = new Map();


export const addToCart = ({id,itemName,price,quantity,description})=>{


    const cartOne = {id,itemName,price,quantity,description};

    cart.set(cartOne.id,cartOne);
    return cartOne;

} 


export const ViewCart = () =>{

    return [...cart.values()];
}


export const clearCart= () =>{

    cart.clear();
}