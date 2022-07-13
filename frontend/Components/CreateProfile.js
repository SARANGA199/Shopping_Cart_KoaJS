import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

export default function CreateProfile() {

     const history = useHistory();

   const[name,setName] = useState();
   const[username,setUsername] = useState();
   const[password,setPassword] = useState();
   const[conPassword,setConPassword] = useState();
   const[type,setType] = useState();

   function addUser(e){

      e.preventDefault();

      if(conPassword != password){

          alert("Password mismatch !!!");
          return;
      }

      const userDetails = {
          
        name,
        username,
        password,
        type
         
      }

      axios.post('http://localhost:5000/user/',userDetails).then((res)=>{

            if(res.status = 201){

                alert("User profile created successfully");

                 if(type == 'Customer'){

                     history.push('/viewitems');

                 }else if(type == 'Trader'){

                     history.push('/addItems');

                 }

               
               

            }

        }).catch((err)=>{

            alert(err);
        });
   }


  return (

    <div>
      
        <center>

           <h2 className='mb-5 mt-5'>Create Profile</h2>
            <div className='border'  style={{width:"500px" , height:"600px"} }>

                <form onSubmit={addUser} >

                    <div className='mb-3 mt-5' >
                        <label> NAME</label>
                        <input type="text"  style={{width:"350px"}} className="form-control"
                               onChange={e=>{

                                   setName(e.target.value);

                               }}

                        />

                    </div>
                    <div className="mb-3 ml-10">
                       <label> UserName</label>
                        <input type="text"  style={{width:"350px"}} className="form-control" 
                               onChange={e=>{

                                   setUsername(e.target.value);

                               }}
                        />
                    </div>

                     <div className="mb-3 ml-10">
                       <label> Password</label>
                        <input type="password"  style={{width:"350px"}} className="form-control" 
                               onChange={e=>{

                                   setPassword(e.target.value);

                               }}
                        />
                    </div>

                     <div className="mb-3 ml-10">
                       <label> Confirm Password </label>
                        <input type="password"  style={{width:"350px"}} className="form-control" 
                               onChange={e=>{

                                   setConPassword(e.target.value);

                               }}
                        />
                    </div>
                     
                     <div className='mb-5'>
                     <label htmlFor="category" className="form-label">
                         USERS 
                        </label>
                        <select
                        className="form-select"
                        style={{width:"350px"}}
                        name="user type"
                        onChange={e=>{
                  
                            setType(e.target.value);
                
                         }}
                        
                         >
                            <option selected>select user type</option>
                            <option value={"Customer"}>Customer</option>
                            <option value={"Trader"}>Trader</option>
                         
                           
                            </select>
                        </div>


                    <button type="submit" className="btn btn-success"  >Create Profile</button>
                </form>
             </div>

            
            </center>

    </div>
  )
}

