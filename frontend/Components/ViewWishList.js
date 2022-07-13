import React, {useState,useEffect} from "react";
import axios from 'axios';

export default function ViewWishList() {

    const[request,setRequest] = useState([]);
    

     useEffect(()=>{

        const promise =   axios.get("http://localhost:5000/wishlist/").then((res)=>{
            setRequest(res.data);
            
        }).catch((err)=>{
            alert(err.message);
        })


    },[])

  return (

    <div>
        
            <div className = "container">

                <table className="table" style={{backgroundColor:"white"}}>

                    <thead>
                    <tr>
                        <th scope="col">*</th>
                        <th scope="col">Item name</th>
                        <th scope="col">Item Price</th>
                        <th scope="col">Item Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {request.map((data,index)=>(

                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>

                                {data.itemName}

                            </td>
                            <td>

                                {data.price}

                            </td>

                              <td>

                                {data.description}

                            </td>

                           
                        </tr>
                    ))}


                    </tbody>

                </table>
            </div>

        <button className ="btn btn-success ml-10 mt-5 "><a href="/viewitems" style={{textDecoration:'none', color :'white' }}>View Items</a> </button>
      
    </div>
  )
}
