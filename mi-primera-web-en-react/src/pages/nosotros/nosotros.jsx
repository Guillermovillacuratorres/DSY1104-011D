import { Link, useNavigate, useParams } from "react-router-dom";

function Nosotros() {
    const navigate = useNavigate();



    const {idColor} = useParams(); 
        
        
    


    function irAInicio() {
        console.log("PARAMETRO URL --> ",idColor);
        navigate('/');

    }


    var listaColores = [
        {
            idColor:1,
            nombreColor: "Rojo"
        },
        {
            idColor:2,
            nombreColor:"Verde"
        },
        {
            idColor:3,
            nombreColor:"Azul"
        }
    ];

    const elementosHmtl = [];

    for (const i of listaColores) {
        elementosHmtl.push(
            <>
            <h1>{i.idColor}</h1>
            <h3 key={i.idColor}>{i.nombreColor}</h3>
            </>
        );
    }




    return(
        <>
            
            <h1>Nosotros</h1>
            <button className="btn btn-danger" onClick={irAInicio}>Ir a inicio</button>
            {elementosHmtl}
            <Link to="/">
                <button>Ir A inicio más facil</button>
            </Link>
        </>
    );
}

export default Nosotros;