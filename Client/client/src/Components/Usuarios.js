import React from "react";
import { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";


function Usuarios() {
  //hooks
  const [usuarios, setUsuarios] = useState([]);
  const navegar = useNavigate()
  useEffect(() => {
    obtenerUsuarios();
  }, []);

  const obtenerUsuarios = async () => {
    const usuarios = (await axios.get("http://localhost:9000/api/users")).data;
    console.log(usuarios);
    setUsuarios(usuarios);
  };

  function borrarUsuario(id){
      axios.delete('http://localhost:9000/api/borrar/' + id).then(res=>{
        console.log(res.data)
        alert('usuario borrado')
        navegar(0)
      }).catch(err=>console.log(err))
  }

  //renderizando la info
  return (
    <div className="container">
      <h2> Usuarios </h2>
      <div>
        {usuarios.map((usuario) => {
          return (
            <div className="card" key={usuario._id+1}>
              <div className="row" key={usuario._id+2}>
                <div key={usuario._id} className="col-sm-6 offset-3">
                 
                  <p>Nombre: {usuario.nombre}</p>
                  <p>Apellido: {usuario.apellido}</p>
                  <p>email: {usuario.email}</p>
                <Link to={`/editarusuario/${usuario._id}`}><li className="btn btn-success">Editar Usuario</li></Link>
                <button className="btn btn-danger" onClick={()=>{borrarUsuario(usuario._id)}}>Borrar</button>
                <hr className="mt-4"></hr>
                </div>
              </div>
            </div>
            
          );
        })}
      </div>
    
    </div>
  );
}

export default Usuarios;