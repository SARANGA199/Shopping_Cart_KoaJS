const wishList = new Map();


export const addToWishList = ({id,itemName,price,description})=>{


    const wishListOne = {id,itemName,price,description};

    wishList.set(wishListOne.id,wishListOne);
    return wishListOne;

} 


export const ViewWishList = () =>{

    return [...wishList.values()];
}
