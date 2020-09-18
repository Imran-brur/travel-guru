import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../travel-guru-master/Logo.png'


const Navbar = () => {
    return (
    <div>
      <div style={{padding: '15px'}}>
   <nav class="navbar navbar-expand-lg navbar-light ">
    <img style={{width:'140px'}} src={logo} alt=""/>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
  <div style={{paddingLeft:'550px'}} class="navbar-nav mr-auto">
      <a class="nav-link" href="">Home</a>
      <a class="nav-link" href="">Destination</a>
       <a class="nav-link" href="">Blog</a>
       <a class="nav-link" href="">Contact</a>
       <button className="btn btn-warning"><Link to="/login">LogIn</Link></button>     
     </div>
  </div>
</nav>
    </div>
    </div>
    );
};

export default Navbar;