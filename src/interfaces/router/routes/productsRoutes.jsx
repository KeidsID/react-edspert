import GetProductById from "../../../core/use_cases/GetProductById";
import ProductDetailPage from "../../pages/ProductDetailPage";
import RouteErrorPage from "../RouteErrorPage";

/**
 * @param {import('instances-container').Container} container
 *
 * @return {import('react-router-dom').RouteObject[]}
 */
export default function productsRoutes(container) {
  return [
    {
      path: "/products/:id",
      element: <ProductDetailPage />,
      errorElement: <RouteErrorPage />,
      loader: async ({ params }) => {
        try {
          /**
           * @type {GetProductById}
           */
          const getProductById = container.getInstance(GetProductById.name);
          const product = await getProductById.execute(params.id);

          return product;
        } catch (e) {
          throw new Response(e, { status: 404, statusText: 'Not Found'});
        }
      },
    },
  ];
}
