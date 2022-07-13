import React, {useState,useEffect} from "react";
import axios from 'axios';

export default function ViewCart() {

    const[request,setRequest] = useState([]);
    const[total,setTotal] = useState();
    

     useEffect(()=>{

        const promise =   axios.get("http://localhost:5000/cart/").then((res)=>{
            setRequest(res.data);
           
        }).catch((err)=>{
            alert(err.message);
        })


    },[])  

        
     let items = request.length;

      const sum = request.map((data)=> Number(data.price.replace("$",""))).reduce((prev,curr)=>prev+curr,0);

    //   console.log(sum);
    //   console.log(items);
         
     
     function Purchase(){

   
          const data = {

            items,
            sum
          }

          axios.post('http://localhost:5000/purchase/',data).then((res)=>{

            if(res.status = 201){
                alert("Purchase is Completed"); 
            }

        }).catch((err)=>{

            alert(err);
        });

          axios.delete('http://localhost:5000/cart/').then((res)=>{

            if(res.status = 204){

               window.location.reload(false);
               

            }

        }).catch((err)=>{

            alert(err);
        });
    }
    

 

  return (

    <div>

        <div className = "container">

                <table className="table" style={{backgroundColor:"white"}}>

                    <thead>
                    <tr>
                        <th scope="col">Cart Number</th>
                        <th scope="col">Item name</th>
                        <th scope="col">Item Price</th>
                      
                    
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

                           

                           
                        </tr>
                    ))}


                    </tbody>

                </table>
            </div>
          
        
        <center>

             <div className="card mt-5" style={{width:" 25rem"}} />
  
                    <div class="card-body border " style={{width:"400px"}}>
                      <div><h3 className="mb-3 mt-3"><u>Total BILL</u></h3></div> 
                      <hr style={{width:"380px"}} /> 
                      <h5 className="card-text ml-0">Number Of Items : {items}</h5>
                      <h5 className="card-title ml-0">Total Bill To Pay :Rs. {sum}.00</h5>
                       <center className="mb-3 mt-3"><a className="btn btn-warning ml-3" onClick={() => Purchase()} >Purchase</a></center>
            </div>
       

        
        </center>
    </div>
  )
}
