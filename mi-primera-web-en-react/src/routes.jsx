import { createBrowserRouter } from "react-router-dom";
import Inicio from "./pages/inicio/inicio";
import Nosotros from "./pages/nosotros/nosotros";
import Formulario from "./pages/formulario/formulario";



export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Inicio/>
    },
    {
        path:'/nosotros/:idColor',
        element:<Nosotros/>
    },
    {
        path:'/formulario',
        element:<Formulario/>
    }
]);