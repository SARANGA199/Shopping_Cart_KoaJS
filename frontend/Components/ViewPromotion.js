import React, {useState,useEffect} from "react";
import axios from 'axios';

export default function viewPromotion() {

    const[request,setRequest] = useState([]);
    

     useEffect(()=>{

        const promise =   axios.get("http://localhost:5000/promo/").then((res)=>{
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
                        <th scope="col">Promotion name</th>
                        <th scope="col">Promotion Description</th>
                       
                    </tr>
                    </thead>
                    <tbody>
                    {request.map((data,index)=>(

                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>

                                {data.promoName}

                            </td>
                            <td>

                                {data.Description}

                            </td>


                           
                        </tr>
                    ))}


                    </tbody>

                </table>
            </div>


      
    </div>
  )
}
