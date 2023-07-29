import { useLoaderData } from "react-router-dom";

import AppBar from "../components/common/AppBar";
import PageFooter from "../components/common/PageFooter";

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
