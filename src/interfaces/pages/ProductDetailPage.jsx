import { useLoaderData } from "react-router-dom";

import AppBar from "../components/AppBar";
import PageFooter from "../components/PageFooter";

const ProductDetailPage = () => {
  const routeLoader = useLoaderData();

  return (
    <>
      <AppBar />
      <main className="bg-secondary">
        <h3>{routeLoader}</h3>
      </main>
      <PageFooter />
    </>
  );
};

export default ProductDetailPage;
