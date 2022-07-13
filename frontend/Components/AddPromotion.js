import axios from 'axios';
import React from 'react'
import {useState} from 'react'
import { useHistory } from "react-router-dom";

export default function AddPromotion() {


     const history = useHistory();
    
    const [promoName, setPromoName] = useState();
    const [Description,  setDescription] = useState();

    function submitData(e){

     

        e.preventDefault();

        const data = {

            promoName,
            Description
        }

        axios.post('http://localhost:5000/promo/',data).then((res)=>{

            if(res.status = 201){
                alert("Promotion Added Successfully");
                history.push('/viewPromo');
               

            }

        }).catch((err)=>{

            alert(err);
        });
    }


  return (
    <div>

        <center>
            <h2 className='mb-5 mt-5'>Add Promotion</h2>
            <div className='border' style={{width:"350px",height:"550px"}}   >
                <form onSubmit={submitData}  >

                     <div className='mb-3 mt-5 ' >
                        <label> Item Name</label>
                        <input type="text"  style={{width:"300px"}} className="form-control"
                               onChange={e=>{

                                   setPromoName(e.target.value);

                               }}

                        />

                    </div>
                   

                     <div className="mb-3 ml-10">
                        <label >promotion Description</label>
                        <textarea className="form-control" style={{width:"300px"}} rows="3"
                               onChange={e=>{

                                   setDescription(e.target.value);

                               }}
                        />
                    </div>

                    <button type="submit" className="btn btn-success"  >Add promotion</button>
                </form>


            </div>
               

            </center>

    </div>
  )
}
