import React from "react";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function UserForm(){
    //Hooks
    const [nombre,setNombre] = useState('');
    const [apellido,setApellido] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] =useState('');
    const navegar = useNavigate()
    function agregarUsuario(){
        const Usuario = {
            nombre:nombre,
            apellido:apellido,
            email:email,
            password:password
         
        }
        axios.post('http://localhost:9000/api/register', Usuario)
        .then(res=> console.log(res.data))
        .then(err=>console.log(err))
        alert('Usuario agregado a la DB')
        navegar(0)
    }

    return(
        <div className="container">
            <div className="row">
            
                <h2 className="mt-4"> Agregar usuario </h2>            

            </div>
            <div className="row">
                <div className="col-sm-6 offset-3">
                    <div className="mb-3">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" className="form-control" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="apellido">Apellido</label>
                        <input type="text" className="form-control" value={apellido} onChange={(e)=>setApellido(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="text" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                   

                    <button onClick={agregarUsuario} className="btn btn-success"> Agregar Usuario</button>

                </div>
            </div>
        </div>
    )
}

export default UserForm;