import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import DetalleProducto from "./pages/DetalleProducto";
import Carrito from "./pages/Carrito";
import AboutUs from "./pages/AboutUs";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'catalogo', element: <Catalogo /> },
            { path: 'producto/:id', element: <DetalleProducto /> },
            { path: 'carrito', element: <Carrito /> },
            { path: 'nosotros', element: <AboutUs /> }
        ]
    }
])