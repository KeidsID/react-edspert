import ProductDetailPage from "../../pages/ProductDetailPage";

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
      loader: ({ params }) => {
        return params.id;
      },
    },
  ];
}
