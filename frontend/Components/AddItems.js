import axios from 'axios';
import React from 'react'
import {useState} from 'react'
import { useHistory } from "react-router-dom";

export default function AddItems() {


     const history = useHistory();
    
    const [itemName, setItemName] = useState();
    const [price, setPrice] = useState();
     const [quantity, setQuantity] = useState();
    const [description,  setDescription] = useState();

    function submitData(e){

     

        e.preventDefault();

        const data = {

            itemName,
            price,
            quantity,
            description
        }

        axios.post('http://localhost:5000/item/',data).then((res)=>{

            if(res.status = 201){
                alert("Item Added Successfully");
                history.push('/inventory');
               

            }

        }).catch((err)=>{

            alert(err);
        });
    }


  return (
    <div>

        <center>
            <h2 className='mb-5 mt-5'>Add Item</h2>
            <div className='border' style={{width:"350px",height:"550px"}}   >
                <form onSubmit={submitData}  >

                     <div className='mb-3 mt-5 ' >
                        <label> Item Name</label>
                        <input type="text"  style={{width:"300px"}} className="form-control"
                               onChange={e=>{

                                   setItemName(e.target.value);

                               }}

                        />

                    </div>
                    <div className="mb-3 ml-10">
                       <label> Item price</label>
                        <input type="number"  style={{width:"300px"}} className="form-control" 
                               onChange={e=>{

                                   setPrice(e.target.value);

                               }}
                        />
                    </div>

                      <div className="mb-3 ml-10">
                       <label> Item Quantity</label>
                        <input type="number"  style={{width:"300px"}} className="form-control" 
                               onChange={e=>{

                                   setQuantity(e.target.value);

                               }}
                        />
                    </div>

                     <div className="mb-3 ml-10">
                        <label >Item Description</label>
                        <textarea className="form-control" style={{width:"300px"}} rows="3"
                               onChange={e=>{

                                   setDescription(e.target.value);

                               }}
                        />
                    </div>

                    <button type="submit" className="btn btn-success"  >Add Item</button>
                </form>


            </div>
               <button className ="btn btn-success ml-10 mt-5 "><a href="/viewCustomer" style={{textDecoration:'none', color :'white' }}>View Customers</a> </button>

                <button className ="btn btn-success ml-10 mt-5 ms-5 "><a href="/addPromo" style={{textDecoration:'none', color :'white' }}>AddPromotion</a> </button>

            </center>

    </div>
  )
}
