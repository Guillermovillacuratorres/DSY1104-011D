import React, { useEffect, useState } from 'react';
import { agregarAuto, eliminarAuto, obtenerVehiculos } from '../../api/vehiculoApi';
import { obtenerCategorias } from '../../api/categoriaApi';
import App_navbar from '../../components/navbar/navbar';
import { useNavigate } from 'react-router-dom';

export default function GestionVehiculos() {

    const navigate = useNavigate();

  // Lista de vehículos
  const [vehiculos, setVehiculos] = useState([]);
  const [categorias, setCategorias] = useState([]);


  
  // UN useState INDIVIDUAL PARA CADA INPUT
  const [marca, setMarca] = useState('');
  const [color, setColor] = useState('');
  const [idCategoria, setIdCategoria] = useState('1'); // Por defecto la primera categoría

  useEffect(() => {
    obtenerVehiculos()
    .then(setVehiculos)
    .catch((error) => console.log(error.message)
    )
  }, []) ;

  useEffect(() => {
    obtenerCategorias()
    .then(setCategorias)
    .catch((error) => console.log(error.message))
  },[]);



  async function guardar() {
    if (marca.length == 0) {
        console.log("La marca no debe estar vacia.");
        return;
    }

    const auto = {
        marca:marca.trim(),
        color:color.trim(),
        categoria: {idCategoria: Number(idCategoria)}
    }

    try {
        await agregarAuto(auto);
        console.log("Auto agregado");
        
    } catch (error) {
        console.log("Error en la solicitud.");
        
    }

  }

  async function deleteCar(auto) {
    console.log("OBJETO COMPLETO  ----> ", auto);
    try {
        eliminarAuto(auto);
        console.log("Auto eliminado");
        
    } catch (error) {
        console.log("Error en la solicitud.");
    }
    
  }


  function editar(id){
    navigate("editar/" + id);
  }


  return (
    <>
    <App_navbar/>
    <div className="container my-5">
      <h2 className="text-center mb-4">Gestión de Vehículos</h2>
      
      <div className="row g-4">
        {/* Formulario */}
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              <h5 className="card-title mb-0">Agregar Vehículo</h5>
            </div>
            <div className="card-body">
              <form onSubmit={guardar}>
                
                <div className="mb-3">
                  <label htmlFor="marca" className="form-label">Marca</label>
                  <input
                    type="text"
                    className="form-control"
                    id="marca"
                    value={marca}
                    onChange={(e) => setMarca(e.target.value)}
                    placeholder="Ej. Kia, Toyota"
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="color" className="form-label">Color</label>
                  <input
                    type="text"
                    className="form-control"
                    id="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    placeholder="Ej. Verde, Rojo"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="categoria" className="form-label">Categoría</label>
                  <select
                    className="form-select"
                    id="categoria"
                    value={idCategoria}
                    onChange={(e) => setIdCategoria(e.target.value)}
                  >
                    {categorias.map((c) => (
                      <option key={c.idCategoria} value={c.idCategoria}>
                        {c.nombreCategoria}
                      </option>
                    ))}
                  </select>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Guardar Vehículo
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Tabla de la Lista */}
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-header bg-dark text-white">
              <h5 className="card-title mb-0">Lista de Vehículos</h5>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover table-striped mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>ID</th>
                      <th>Marca</th>
                      <th>Color</th>
                      <th>Categoría</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vehiculos.length === 0 ? (
                      <tr>
                        <td colSpan="4" className="text-center py-4 text-muted">
                          No hay vehículos registrados.
                        </td>
                      </tr>
                    ) : (
                      vehiculos.map((v) => (
                        <tr key={v.idVehiculo}>
                          <td>{v.idVehiculo}</td>
                          <td className="text-capitalize">{v.marca}</td>
                          <td className="text-capitalize">{v.color}</td>
                          <td>
                            <span className="badge bg-secondary text-capitalize">
                              {v.categoria?.nombreCategoria}
                            </span>
                          </td>
                          <td>
                            <button onClick={() => editar(v.idVehiculo)}  className='btn btn-warning'>Editar</button>
                            <button onClick={() => deleteCar(v.idVehiculo)} className='btn btn-danger ms-3'>Eliminar</button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
