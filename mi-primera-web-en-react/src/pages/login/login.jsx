import React, { useState } from 'react';
import { login } from '../../api/authApi';
import { guardarToken } from '../../auth/auth';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  async function ingresar(e) {
    e.preventDefault();
    try{
        const respuesta = await login(formData.username, formData.password);
        guardarToken(respuesta.token);
        navigate("/");
    }catch{
        console.log("Error al iniciar sesion.");
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-4">Iniciar Sesión</h3>
        
        <form onSubmit={ingresar}>
          {/* Campo de Usuario */}
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="username">Usuario</label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              placeholder="Ingresa tu usuario"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          {/* Campo de Contraseña */}
          <div className="form-group mb-4">
            <label className="form-label" htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Ingresa tu contraseña"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Botón de Envío */}
          <button type="submit" className="btn btn-primary w-100">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}