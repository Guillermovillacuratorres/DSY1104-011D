import { Navigate } from "react-router-dom";
import { estaLogueado } from "../../auth/auth";


function RutaProtegida({ children }){
    console.log(estaLogueado());
    
    if(!estaLogueado()){
        return <Navigate to="/login" replace/>
    }
    return children;
}
export default RutaProtegida;