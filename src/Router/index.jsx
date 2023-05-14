import { createBrowserRouter } from "react-router-dom";

import Root from "../layout/Root";
import Home, { loaderProducts } from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import ProductCard, {
  loaderProduct,
} from "../components/ProductCard/ProductCard";
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
        path: "productdetail/:id",
        element: <ProductCard />,
        loader: loaderProduct,
      },
    ],
  },
]);

export default router;
