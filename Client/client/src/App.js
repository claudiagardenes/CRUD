
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './Components/Login';
import Navigation from './Components/Navigation';
import Register from './Components/Register';
import UserForm from './Components/UserForm';
import EditUser from './Components/EditUser';
import Usuarios from './Components/Usuarios';





function App() {
  return (
    <Router>
      <Navigation/>

      <Routes>
       
        <Route path="/" element={<Usuarios />}></Route>
        <Route path="/agregarusuario" element={<UserForm />}></Route>
        <Route path="/editarusuario/:id" element={<EditUser />}></Route>
       
      </Routes>   
    </Router>
  );
}

export default App;
