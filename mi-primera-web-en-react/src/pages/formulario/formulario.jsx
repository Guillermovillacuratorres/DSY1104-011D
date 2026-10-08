import { useState } from "react";
import App_navbar from "../../components/navbar/navbar";
import App_alert from "../../components/alerts/alert";

function Formulario() {

    const [txtnombre, setTxtnombre] = useState("");
    const [txtEdad,setTxtEdad] = useState(0);

    const [mostrarAlerta, setMostrarAlerta] = useState(false);
    const [mensajeAlerta, setMensajeAlerta] = useState("");

    const [tipoAlerta, setTipoAlerta] = useState("");



    function validarTexto(valor, nombre) {
        if (valor.trim().length == 0) {
            //alert("El " + nombre  + " no debe estar vacio.");            
            setMensajeAlerta("El " + nombre  + " no debe estar vacio.");
            setTipoAlerta("danger");
            setMostrarAlerta(true);
            return false;
        }else{
            return true;
        }
    }


    function validarNumero(valor, nombre) {
        if (valor < 0 || valor == 0 ) {
            //alert("La " + nombre + " no debe ser menor o igual a cero.");
            setMensajeAlerta("La " + nombre + " no debe ser menor o igual a cero.");
            setTipoAlerta("success");
            setMostrarAlerta(true);
            return false;
        }else{
            return true;
        }
    }


    function guardar() {
        if (validarTexto(txtnombre,"nombre") == false) {
            return;
        }else if(validarNumero(txtEdad,"edad") == false){
            return;
        }
        else{
            console.log("GUARDANDO!!!");
        }
    }


    return(
        <>
        <App_navbar/>
        <App_alert mostrarAlert={mostrarAlerta} cerrarAlert={() => setMostrarAlerta(false)} variant={tipoAlerta} msgAlert={mensajeAlerta}/>
            <div className="row mt-3 mx-3">

                <div className="col-12">
                    <h1>Formulario</h1>
                </div>

                <div className="col-6">
                    <label htmlFor="txtNombre">Nombre:</label>
                    <input onChange={(e) => setTxtnombre(e.target.value)} className="form-control" id="txtNombre" type="text" />
                </div>

                <div className="col-6">
                    <label htmlFor="txtEdad">Edad:</label>
                    <input onChange={(e) => setTxtEdad(e.target.value)} id="txtEdad" className="form-control" type="number" />
                </div>

                <div className="col-12 mt-3">
                    <button onClick={guardar} className="btn btn-primary">Guardar</button>
                </div>
            </div>
        </>
    );
}
export default Formulario;