import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LottieControl from './Components/Preloader/Preloader';
import Home from './Pages/Home/Home';
import Category from './Components/Category/Category';


function App() {
  return (
    <div className="App">
      <Router>

  <Route exact path="/"><Signup/></Route>
        
    
      
      <Route path="/login"><Login/></Route>
      <Route path="/home"><Home/></Route>
      <Route path="/category"><Category/></Route>

      </Router>
     
    </div>
  );
}

export default App;
