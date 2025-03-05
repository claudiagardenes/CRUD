

import { Link } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Contactanos from "./Contacto";



function Navigation() {
  return (
    <div>
    <nav>
      <ul>
      <li>
        <Link to="/">Home</Link>
        </li>
      
        
        <li>
          <Link to="/agregarusuario">Register</Link>

        </li>
     
     
        
      </ul>
    </nav>
   
    </div>
  );
}

export default Navigation;

