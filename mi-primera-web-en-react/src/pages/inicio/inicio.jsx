import { useState } from 'react';
import estilos from './inicio.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './inicio.css';
import { useNavigate } from 'react-router-dom';

    function BasicExample() {
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        );
    }

function Inicio() {
    const navigate = useNavigate();
    const [txtCorreo, setTxtCorreo] = useState("");

    function guardar() {
        console.log(txtCorreo);
    }

    function irANosotros() {
        console.log("Navegacion nosotros");
        var idColor = 2000;
        //navigate('/nosotros/1500');
        navigate(`/nosotros/${idColor}`);
        
    }

    return(
        <>
        <button className='btn btn-primary m-5' onClick={irANosotros} >Ir a nosotros</button>
        <h1 className={`${estilos.miEstilo} tamanio`}>Hoola</h1>
        <img src="/public/img/conejo.jpg" alt="" />
        <button onClick={guardar}>Guardar</button>
 

        <div className="row">
            <div className="col-4">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur et deleniti temporibus vel numquam eos.</p>
            </div>
            <div className="col-4">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur et deleniti temporibus vel numquam eos.</p>
            </div>
            <div className="col-4 mb-5">
                <label htmlFor="txtCorreo">Correo</label>
                <input value={txtCorreo} onChange={(e) => setTxtCorreo(e.target.value)} id='txtCorreo' type="text" className='form-control' />
            </div>
        </div>

        <BasicExample/>
        
        </>
        
    );
}

export default Inicio;