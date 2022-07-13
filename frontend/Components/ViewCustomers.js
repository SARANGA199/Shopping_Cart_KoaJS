import React, {useState,useEffect} from "react";
import axios from 'axios';

export default function ViewCustomers() {

    const[request,setRequest] = useState([]);
    

     useEffect(()=>{

        axios.get("http://localhost:5000/user/users").then((res)=>{
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
                   
                         <th scope="col">Customer  ID</th>
                        <th scope="col">Customer name</th>
                        <th scope="col">Customer userName</th>
                       
                    </tr>
                    </thead>
                    <tbody>
                    {request.map((data,index)=>(

        
                        <tr key={index}>
                         
                           

                               {data.type==="Customer" ?  <td> {data.id}</td>: ""}

                               {data.type==="Customer" ?  <td> {data.name}</td>: ""}

                               {data.type==="Customer" ?  <td> {data.username}</td>: ""}

                           
                        </tr>
                    ))}


                    </tbody>

                </table>
            </div>

        <button className ="btn btn-success ml-10 mt-5 "><a href="/addItems" style={{textDecoration:'none', color :'white' }}>View Items</a> </button>
      
    </div>
  )
}
