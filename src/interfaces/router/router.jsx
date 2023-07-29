import { createBrowserRouter } from "react-router-dom";

import productDetailRoute from "./routes/productDetailRoute";

import ProductCatalogPage from "../pages/ProductCatalogPage";
import RouteErrorPage from "./RouteErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductCatalogPage />,
    errorElement: <RouteErrorPage />,
  },
  productDetailRoute,
]);

export default router;
