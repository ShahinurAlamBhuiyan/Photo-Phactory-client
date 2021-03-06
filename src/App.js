import './App.css';
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import Deals from './components/Deals/Deals';
import Orders from './components/Orders/Orders';
import CheckOut from './components/CheckOut/CheckOut';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ManagePhoto from './components/Admin/ManagePhoto';
import AddPhoto from './components/Admin/AddPhoto';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <div className='container App'>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <Route path="/deals">
              <Deals />
            </Route>
            <PrivateRoute path="/managePhoto">
              <ManagePhoto />
            </PrivateRoute>
            <PrivateRoute path="/addPhoto">
              <AddPhoto />
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Orders />
            </PrivateRoute>
            <PrivateRoute path="/checkout/:id">
              <CheckOut />
            </PrivateRoute>
          </Switch>
        </Router >
      </UserContext.Provider>
    </div>
  );
}

export default App;
