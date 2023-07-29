import ProductDetailPage from "../../pages/ProductDetailPage";

/**
 * @type {import('react-router-dom').LoaderFunction}
 */
const loader = ({ params }) => {
  return params.id;
};

/**
 * @type {import('react-router-dom').RouteObject}
 */
export default {
  path: "/products/:id",
  element: <ProductDetailPage />,
  loader,
};
