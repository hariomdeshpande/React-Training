import './App.css';
import Navbar  from './Components/Navbar';
import CakeList from './Components/CakeList';
import {BrowserRouter,Route} from "react-router-dom";
import {Switch} from "react-router";
import Pagenotfound from './Components/Pagenotfound';
import Home from './Components/Home';
import CakeDetails from './Components/CakeDetails';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { useState } from 'react';
import Cart from './Components/Cart';
import Search from './Components/Search';





function App() {
  var [isuserloggedin,setUserlogin] = useState(localStorage.token?true:false)
  function loggedin(){
     setUserlogin(true)
  }
 
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Switch>
        <Route exact path="/" component={Home} />  
        <Route exact path="/cakeList" component={CakeList} />
        <Route exact path="/login"><Login loggedin={loggedin} /></Route>
        <Route exact path="/Signup" component={Signup}/> 
        <Route path="/search" exact component={Search}/>
        <Route exact path="/cake/:parametername" component ={CakeDetails} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/**" component={Pagenotfound}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
