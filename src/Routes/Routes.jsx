import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home';
import Menu from '../pages/Menu/Menu';
import Order from '../pages/Order/Order/Order';
import ContactUs from '../pages/ContactUs/ContactUs';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/menu",
                element: <Menu></Menu>
            },
            {
                path: "/order",
                element: <Order></Order>
            },
            {
                path: "/order/:category",
                element: <Order></Order>
            },
            {
                path: "/contact",
                element: <ContactUs></ContactUs>
            }
        ]
    }
]);

export default router;