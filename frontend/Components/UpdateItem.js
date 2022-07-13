import React, {useState, useEffect}  from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function UpdateItem() {

  const history = useHistory();

    const [iid, setIid] = useState();
    const [itemName, setItemName] = useState();
    const [price, setItemPrice] = useState();
    const [quantity, setQuantity] = useState();
    const [description,  setDescription] = useState();

 useEffect(()=>{

        setIid(localStorage.getItem('ID'));
        setItemName(localStorage.getItem('itemName'));
        setItemPrice(localStorage.getItem('price'));
        setQuantity(localStorage.getItem('quantity'));
        setDescription(localStorage.getItem('description'));

    },[])

    function submitData(e) {

        e.preventDefault();

        const updateItem = {

            iid,
            itemName,
            price,
            quantity,
            description

        }


             axios.put(`http://localhost:5000/item/${iid}`,updateItem).then(()=>{

                alert("Item Update successfully");
                history.push('/inventory');

            }).catch((err)=>{

                alert(err);
            })


        

    }

  return (
    <div>


  
        <center>
                <form onSubmit={submitData} >

                     <div className='mb-3 mt-5' >
                        <label> Item Name</label>
                        <input type="text"  style={{width:"300px"}} className="form-control"
                              value={itemName}
                              onChange={e=>{

                                   setItemName(e.target.value);

                               }}

                        />

                    </div>
                    <div className="mb-3 ml-10">
                       <label> Item price</label>
                        <input type="number"  style={{width:"300px"}} className="form-control" 
                               value={price}
                               onChange={e=>{

                                   setItemPrice(e.target.value);

                               }}
                        />
                    </div>

                     <div className="mb-3 ml-10">
                       <label> Item Quantity</label>
                        <input type="number"  style={{width:"300px"}} className="form-control" 
                               value={quantity}
                               onChange={e=>{

                                   setQuantity(e.target.value);

                               }}
                        />
                    </div>

                     <div className="mb-3 ml-10">
                        <label >Item Description</label>
                        <textarea className="form-control" style={{width:"300px"}} rows="3"
                               value={description}
                               onChange={e=>{

                                   setDescription(e.target.value);

                               }}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary"  >Update Item</button>
                </form>


                <br/><br/><br/><br/><br/>
                <button className ="btn btn-success "><a href="/viewitems" style={{textDecoration:'none', color :'white' }}>view Items </a> </button>

            </center>
      

    </div>
  )
}
