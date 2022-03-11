import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const { currentUser } = useSelector((state) => state.user);
   return(
   <Router>
     <Routes>
     <Route path="/" element={currentUser ? <Home /> : <  Navigate to = "/register" />}/>
     <Route path = '/login'element = { currentUser ? < Navigate to = "/" /> : < Login /> }/>
        <Route path = '/register'element = { currentUser ? < Navigate to = "/" /> : < Register /> }/> 
     </Routes>
   </Router>
   ) 
}

export default App;
