import { useLoaderData } from "react-router-dom";
import AppBar from "../components/common/AppBar";
import PageFooter from "../components/common/PageFooter";

import ProductCard from "../components/ProductCard";
import ProductCatalogHeadline from "../components/ProductCatalogHeadline";

const ProductCatalogPage = () => {
  /**
   * @type {import('../../core/entities/Product').default[]}
   */
  const products = useLoaderData()

  return (
    <>
      <AppBar />
      <main className="bg-secondary">
        <ProductCatalogHeadline />
        <section
          id="products"
          className="grid gap-8 gap-y-16 grid-cols-3 justify-center items-center px-page py-16"
        >
          {products.map((e, i) => (
            <ProductCard key={i} product={e} />
          ))}
        </section>
      </main>
      <PageFooter />
    </>
  );
};

export default ProductCatalogPage;
