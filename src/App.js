import React, { Component } from 'react'
import './App.css'
import Nav from './Navbar/Nav';
import Home from './Component/Home';
import Login from './Component/Login';
import Terms from './Component/Terms';
import About from './Component/About';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
 class App extends Component {
  render() {
    return (
      <div>
       
      <div><Router>
       
    <ul>  
      <li><Link to="">  Home  </Link></li>
      <li><Link to="/Login">  singhup </Link></li>
      <li> <Link to="/About  ">  Login  </Link></li>
      <li> <Link to="/Terms ">  Terms  </Link> </li>
      </ul>  
      <span> <h2 className="logo">logo</h2></span>
     <Routes>
      <Route path="/" element={<Home />}/>
    <Route path="/login"element={<Login/>}/>
    <Route path="/about"element={<About/>}/>
    <Route path='/terms' element={<Terms/>} /> 
    </Routes>
      </Router>



<Nav/>

      </div>
      </div>
    )
  }
}
export default App;