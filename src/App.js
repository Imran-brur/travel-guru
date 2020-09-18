import React, { createContext, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BookingForm from './components/BookingFrom/BookingFrom';
import LoginForm from './components/LoginForm/LoginForm';
import Hotel from './components/Hotels/Hotel';
import PrivetRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/PrivateRoute/NotFound/NotFound';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
      <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
     <Navbar></Navbar>
     <Switch>
       <Route path="/home">
       <div className='cart'> <Home></Home></div>
       </Route>
       <Route exact path="/">
        <Home></Home>
       </Route>
       <Route path="/bookingForm/:placeKey">
       <BookingForm></BookingForm>
       </Route>
       <Route path="/login">
         <LoginForm></LoginForm>
       </Route>
      <PrivetRoute path="/hotel">
        <Hotel></Hotel>
      </PrivetRoute>
      <Route path="*">
        <NotFound></NotFound>
      </Route>
     </Switch>
   </Router>
   </UserContext.Provider>
  );
}

export default App;
