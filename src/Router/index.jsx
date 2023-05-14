import { createBrowserRouter } from "react-router-dom";

import Root from "../layout/Root";
import Home, { loaderProducts } from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import ProductDetail from "../pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: loaderProducts,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "productdetail",
        element: <ProductDetail />,
      },
    ],
  },
]);

export default router;
