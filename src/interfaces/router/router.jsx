import { createBrowserRouter } from "react-router-dom";

import ProductCatalogPage from "../pages/ProductCatalogPage";
import RouteErrorPage from "./RouteErrorPage";
import GetProducts from "../../core/use_cases/GetProducts";
import productsRoutes from "./routes/productsRoutes";

/**
 * @param {import('instances-container').Container} container
 *
 * @return {import('react-router-dom').Router}
 */
export default function router(container) {
  return createBrowserRouter([
    {
      path: "/",
      element: <ProductCatalogPage />,
      errorElement: <RouteErrorPage />,
      loader: async () => {
        /**
         * @type {GetProducts}
         */
        const getProducts = container.getInstance(GetProducts.name);
        const products = await getProducts.execute();

        return products;
      },
    },
    ...productsRoutes(container),
  ]);
}
