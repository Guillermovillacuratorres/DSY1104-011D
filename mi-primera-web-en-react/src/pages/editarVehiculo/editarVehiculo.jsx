import { useEffect, useState } from "react";
import { obtenerCategorias } from "../../api/categoriaApi";
import { useNavigate, useParams } from "react-router-dom";
import { actualizarAuto, buscarAuto } from "../../api/vehiculoApi";
import App_navbar from "../../components/navbar/navbar";

function EditarVehiculo() {

    const navigate = useNavigate();

    const {id} = useParams();

    const [categorias, setCategorias] = useState([]);

      const [marca, setMarca] = useState('');
      const [color, setColor] = useState('');
      const [idCategoria, setIdCategoria] = useState('1'); // Por defecto la primera categoría
    

        useEffect(() => {
          obtenerCategorias()
          .then(setCategorias)
          .catch((error) => console.log(error.message));


            buscarAuto(id)
            .then((auto) => {
                setColor(auto.color);
                setMarca(auto.marca);
                setIdCategoria(String(auto.categoria?.idCategoria ?? ""))
            })


        },[id]);



    async function editar() {
        const auto = {
            marca: marca,
            color: color,
            categoria: {idCategoria: Number(idCategoria)}
        }
        try{
            console.log("ID CATEGORIA --> ", idCategoria);
            
            console.log("ID --> ", id);
            console.log("OBJ --> ", auto);

            await actualizarAuto(id,auto);

            navigate("/vehiculos")
        }catch{
            console.log("Error en la solicitud.");
        }
    }


return(
    <>
    <App_navbar/>
    <div className="container my-5">
      <h2 className="text-center mb-4">Gestión de Vehículos</h2>
      
      <div className="row g-4">
        {/* Formulario */}
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              <h5 className="card-title mb-0">Actualizar Vehículo</h5>
            </div>
            <div className="card-body">
      
                
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

                <button onClick={editar} className="btn btn-primary w-100">
                  Editar Vehículo
                </button>
          
            </div>
          </div>
        </div>

      </div>
    </div>
    </>
    )
}

export default EditarVehiculo;