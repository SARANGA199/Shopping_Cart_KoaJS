
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CreateProfile from './Components/CreateProfile';
import AddItems from './Components/AddItems';
import ViewItems from './Components/ViewItems';
import UpdateItem from './Components/UpdateItem';
import ViewCart from './Components/ViewCart';
import ViewWishList from './Components/ViewWishList';
import ViewCustomers from './Components/ViewCustomers';
import ViewInventory from './Components/ViewInventory';
import AddPromotion from './Components/AddPromotion';
import ViewPromotion from './Components/ViewPromotion';

export default function App() {
  return (
    
     <Router>
            <Switch>
                <Route exact path="/" > <CreateProfile/></Route>
                <Route path="/viewCustomer"><ViewCustomers/></Route>
                <Route path="/addItems"><AddItems/></Route>
                <Route path="/viewitems"><ViewItems/></Route>
                <Route path="/updateItem"><UpdateItem/></Route>
                <Route path="/viewcart"><ViewCart/></Route>
                 <Route path="/inventory"><ViewInventory/></Route>
                 <Route path="/wishlist"><ViewWishList/></Route>
                 <Route path="/addPromo"><AddPromotion/></Route>
                 <Route path="/viewPromo"><ViewPromotion/></Route>

                 
                 
                
            </Switch>
        </Router>

  );
}
