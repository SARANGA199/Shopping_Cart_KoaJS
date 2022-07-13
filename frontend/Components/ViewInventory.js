import React, {useState,useEffect} from "react";
import axios from 'axios';

export default  function ViewInventory() {

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



    return(

        <div>



            <div class="d-flex justify-content-around">

                    {request.map((data,index)=>(

                        <div className="card mt-5" style={{width:" 18rem"}}>
  
                    <div class="card-body ">
                      <div key={index}></div>  
                      <h5 className="card-title">{data.itemName}</h5>
                      <h5 className="card-text">{data.price}</h5>
                      <h5 className="card-text">{data.quantity}</h5>
                      <p className="card-text">{data.description}.</p>
                       <a href="/updateItem" className="btn btn-primary" onClick={() => setData(data)}>Update Item</a>
                    </div>
            </div>

                       
                    ))}


            </div>
             <button className ="btn btn-success "><a href="/viewcart" style={{textDecoration:'none', color :'white' }}>view cart </a> </button>
        </div>
    )

}