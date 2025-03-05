

import { useState, useEffect } from "react";

import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  });

  const [usuarios, setUsuarios] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        // PUT request to update user
        await axios.put(
          `http://localhost:9000/api/register/${editId}`,
          formData
        );
        alert("Usuario actualizado exitosamente");
      } else {
        // POST request to create user
        await axios.post("http://localhost:9000/api/register", formData);
        alert("Usuario creado exitosamente");
      }
      resetForm();
      fetchUsuarios(); // Refresh the user list
    } catch (error) {
      console.error("Error al guardar el usuario", error);
    }
  };

  const fetchUsuarios = async () => {
    try {
      const response = await axios.get("http://localhost:9000/api/register");
      setUsuarios(response.data);
      console.log("response");
    } catch (error) {
      console.error("Error al obtener usuarios", error);
    }
  };

  const handleEdit = (usuario) => {
    setFormData(usuario);
    setEditId(usuario._id); // Set the ID for updating
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:9000/api/register/${id}`);
      alert("Usuario eliminado exitosamente");
      fetchUsuarios(); // Refresh the user list
    } catch (error) {
      console.error("Error al eliminar el usuario", error);
    }
  };

  const resetForm = () => {
    setFormData({ nombre: "", apellido: "", email: "", password: "" });
    setEditId(null);
  };

  useEffect(() => {
    fetchUsuarios(); // Fetch users on component mount
  }, []);

  // Estilos en línea
  const styles = {
    container: {
      backgroundColor: "#0070f3", // Color azul para el formulario
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      maxWidth: "400px",
      margin: "0 auto",
      color: "#fff",
    },
    form: {
      display: "flex",
      flexDirection: "column",
    },
    input: {
      margin: "10px 0",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      backgroundColor: "#fff", // Color blanco para los campos
      fontSize: "16px",
    },
    button: {
      padding: "10px",
      backgroundColor: "#0056b3", // Color del botón
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "16px",
      margin: "5px 0",
    },
    buttonHover: {
      backgroundColor: "#004494", // Color del botón al pasar el ratón
    },
    title: {
      color: "#fff", // Color del título de la lista de usuarios
    },
    list: {
      listStyleType: "none", // Sin puntos en la lista
      padding: 0,
    },
    listItem: {
      margin: "10px 0",
      color: "#fff", // Color del texto de la lista
    },
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={formData.apellido}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          {editId ? "Actualizar" : "Enviar"}
        </button>
      </form>

      <h2 style={styles.title}>Lista de Usuarios</h2>
      <ul style={styles.list}>
        {Array.isArray(usuarios) &&
          usuarios.map((usuario) => (
            <li key={usuario._id} style={styles.listItem}>
              {usuario.nombre} {usuario.apellido} - {usuario.email}
              <button onClick={() => handleEdit(usuario)} style={styles.button}>
                Editar
              </button>
              <button
                onClick={() => handleDelete(usuario._id)}
                style={styles.button}
              >
                Eliminar
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Register;


