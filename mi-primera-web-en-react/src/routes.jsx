import { createBrowserRouter } from "react-router-dom";
import Inicio from "./pages/inicio/inicio";
import Nosotros from "./pages/nosotros/nosotros";
import Formulario from "./pages/formulario/formulario";
import LoginForm from "./pages/login/login";
import RutaProtegida from "./components/rutaProtegida/rutaProtegida";
import GestionVehiculos from "./pages/vehiculos/vehiculo";
import EditarVehiculo from "./pages/editarVehiculo/editarVehiculo";



export const routes = createBrowserRouter([
    {
        path:'/',
        element:<RutaProtegida><Inicio/></RutaProtegida>
    },
    {
        path:'/vehiculos',
        element:<RutaProtegida><GestionVehiculos/></RutaProtegida>
    },
    {
        path:'/vehiculos/editar/:id',
        element:<RutaProtegida><EditarVehiculo/></RutaProtegida>
    },
    {
        path:'/nosotros/:idColor',
        element:<Nosotros/>
    },
    {
        path:'/formulario',
        element:<Formulario/>
    },
    {
        path:'/login',
        element:<LoginForm/>
    }
]);