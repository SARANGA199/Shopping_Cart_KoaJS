import React, {useState,useEffect} from "react";
import axios from 'axios';

export default  function ViewItems() {

    const[request,setRequest] = useState([]);

    useEffect(()=>{

        const promise =   axios.get("http://localhost:5000/item/items").then((res)=>{
            setRequest(res.data);
        }).catch((err)=>{
            alert(err.message);
        })


    },[])


    const setData = (data) => {



        let { id,itemName, price,quantity,description} = data;

        localStorage.setItem('ID', id);
        localStorage.setItem('itemName', itemName);
        localStorage.setItem('price', price);
        localStorage.setItem('quantity', quantity);
        localStorage.setItem('description', description);


    }

    function addToCart(data){

   
          axios.post('http://localhost:5000/cart/',data).then((res)=>{

            if(res.status = 201){
                alert("Item Added to Cart Successfully"); 
               

            }

        }).catch((err)=>{

            alert(err);
        });
    }

    
    function addToWishList(data){

   
          axios.post('http://localhost:5000/wishlist/',data).then((res)=>{

            if(res.status = 201){
                alert("Item Added to Wishlist Successfully"); 
               

            }

        }).catch((err)=>{

            alert(err);
        });


        
    }

    return(

        <div>



            <div class="d-flex justify-content-around">

                    {request.map((data,index)=>(

                    <div className="card mt-5" style={{width:" 25rem"}}>
  
                    <div className="card-body ">
                      <div key={index}></div>  
                      <h5 className="card-title">{data.itemName}</h5>
                      <h6 className="card-text">{data.price}</h6>
                      <p className="card-text">{data.description}.</p>
                       <a className="btn btn-success" onClick={() => addToCart(data)}>Add To Cart</a>
                       <a className="btn btn-warning ms-5" onClick={() => addToWishList(data)}>Add To Wishlist</a>
                    </div>
            </div>

                       
                    ))}


            </div>
           
               <button className ="btn btn-success "><a href="/viewcart" style={{textDecoration:'none', color :'white' }}>view cart </a> </button>
                 <button className ="btn btn-success ms-5"><a href="/wishlist" style={{textDecoration:'none', color :'white' }}>view wishlist </a> </button>
        </div>
    )

}