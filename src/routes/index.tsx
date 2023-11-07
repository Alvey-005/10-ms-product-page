import {  createBrowserRouter } from "react-router-dom";
import ProductDetails ,{Productloader}from "../pages/ProductDetails";

const router = createBrowserRouter([
    {
        path:'/',
        // element: lazy(() => import('../pages/Home'))
    },
    {
        path: '/product',
        children: [
          {
            path: ":productSlug",
            element: <ProductDetails/>,
            //@ts-ignore
            loader:Productloader

          },
        ],
      },

]);
export default router;