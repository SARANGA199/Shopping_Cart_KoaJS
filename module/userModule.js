import {v4 as uuidv4 } from 'uuid';
const user = new Map();


export const register = ({name,username,password,type}) =>{
      
     const userDetail = {id:uuidv4(),name,username,password,type,date:new Date()}
     user.set(userDetail.id,userDetail);
     return userDetail;

}

export const viewCustomer = (id)=>{

     
    const userDetail = user.get(id)

     if(!userDetail){
        throw new Error("ID is not found");
    }

    return userDetail;

}


export const AllCustomer = () =>{

    return [...user.values()]

}

