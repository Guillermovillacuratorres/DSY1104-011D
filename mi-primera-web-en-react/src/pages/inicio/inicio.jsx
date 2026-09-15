import estilos from './inicio.module.css';


function Inicio() {

    function guardar() {
        console.log("Soy un boton.");
    }

    return(
        <>
        <h1 className={estilos.miEstilo}>Hoola</h1>
        <img src="/public/img/conejo.jpg" alt="" />
        <button onClick={guardar}>Guardar</button>


        <div className="row">
            <div className="col-4">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur et deleniti temporibus vel numquam eos.</p>
            </div>
            <div className="col-4">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur et deleniti temporibus vel numquam eos.</p>
            </div>
            <div className="col-4">
                <label htmlFor="txtCorreo">Correo</label>
                <input id='txtCorreo' type="text" className='form-control' />
            </div>
        </div>
        
        </>
    );
}

export default Inicio;