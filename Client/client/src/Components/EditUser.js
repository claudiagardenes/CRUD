import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";



function EditUser(){
    const params= useParams()
    const [nombre,setNombre] = useState('');
    const [apellido,setApellido] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] =useState('');
    const navegar = useNavigate()
    useEffect(()=>{
        
       axios.put('http://localhost:9000/api/editar' + params.id).then(res=>{
                let dataUser = res.data
            
            console.log('Data del usuario',dataUser.data.nombre)
            setNombre(dataUser.data.nombre)
            setApellido(dataUser.data.apellido)
            setEmail(dataUser.data.email)
            setPassword(dataUser.data.password)
        })
    },[])

        function editarUsuario(){
             const userUpdate={
                 nombre:nombre,
                 apellido:apellido,
                 email:email,
                 password:password,
        }
        axios.put('http://localhost:9000//api/editar/' + params.id,userUpdate).then(res=>{
            console.log(res.data)
            alert('usuario actualizado con éxito!')
            navegar("/")
        })
    }


    return(
        <div className="container">
            <div className="row">
            
                <h2 className="mt-4"> Editar a {nombre} </h2>            

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

                    <button onClick={editarUsuario} className="btn btn-success"> Editar Usuario</button>

                </div>
            </div>
        </div>
    )
}

export default EditUser;