import { createBrowserRouter } from "react-router-dom";
import Inicio from "./pages/inicio/inicio";
import Nosotros from "./pages/nosotros/nosotros";
import Formulario from "./pages/formulario/formulario";
import LoginForm from "./pages/login/login";
import RutaProtegida from "./components/rutaProtegida/rutaProtegida";



export const routes = createBrowserRouter([
    {
        path:'/',
        element:<RutaProtegida><Inicio/></RutaProtegida>
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