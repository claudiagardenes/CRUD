import React from "react";
import { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";


function Usuarios() {
  //hooks
  const [data, setData] = useState([]);
  const navegar = useNavigate()
  useEffect(() => {
    obtenerUsuarios();
  }, []);

  const obtenerUsuarios = async () => {
    const usuarios = (await axios.get("http://localhost:9000/api/users")).data;
    console.log(usuarios);
    setData(usuarios);
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
        {data.map((item) => {
          return (
            <div className="card" key={item._id+1}>
              <div className="row" key={item._id+2}>
                <div key={item._id} className="col-sm-6 offset-3">
                 
                  <p>Nombre: {item.nombre}</p>
                  <p>Apellido: {item.apellido}</p>
                  <p>email: {item.email}</p>
                <Link to={`/editarusuario/${item._id}`}><li className="btn btn-success">Editar Usuario</li></Link>
                <button className="btn btn-danger" onClick={()=>{borrarUsuario(item._id)}}>Borrar</button>
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