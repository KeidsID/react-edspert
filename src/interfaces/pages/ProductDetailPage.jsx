import { useEffect, useMemo, useState } from "react";
import { useLoaderData } from "react-router-dom";

import utils from "../../common/utils";

import AppBar from "../components/common/AppBar";
import PageFooter from "../components/common/PageFooter";
import ProductDetailHeadline from "../components/ProductDetailHeadline";
import ProductDetailCard from "../components/ProductDetailCard";

const ProductDetailPage = () => {
  /**
   * @type {import('../../core/entities/Product').default}
   */
  const product = useLoaderData();

  const defaultFacilities = useMemo(
    () => [
      { title: "E-Sertifikat" },
      { title: "Portofolio" },
      { title: "Job Connector" },
      { title: "Career Development" },
    ],
    []
  );

  const navs = useMemo(
    () => [
      { link: "#Materi", title: "Materi", contents: product.studyMaterials },
      { link: "#Fasilitas", title: "Fasilitas", contents: defaultFacilities },
    ],
    [product.studyMaterials, defaultFacilities]
  );

  const orderButton = <button className="w-56 mx-4">Daftar Kelas</button>;

  const [navIndex, setNavIndex] = useState(0);

  useEffect(() => {
    const scrollHandler = () => {
      navs.forEach((nav, i) => {
        const element = document.getElementById(nav.title);
        const rect = element.getBoundingClientRect();

        console.log(`card-${nav.title}-y: ${rect.y}`);

        if (rect.y >= 100 && rect.y <= 300) {
          setNavIndex(i);
        }
      });
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [navs]);

  return (
    <>
      <AppBar />
      <main className="bg-secondary">
        <ProductDetailHeadline product={product} />
        <article className="flex flex-row gap-8 px-page py-16">
          <aside className="sticky top-40 z-40 flex flex-col card h-min py-4">
            <nav className="flex flex-col">
              {navs.map((nav, i) => (
                <a
                  key={i}
                  id={`nav-${nav.title}`}
                  href={nav.link}
                  onClick={() => {
                    setNavIndex(i);
                  }}
                  className={`px-16 py-2 ${
                    navIndex == i
                      ? "bg-blue-50 text-blue-700 border-r-4 border-r-blue-700"
                      : ""
                  }`}
                >
                  {nav.title}
                </a>
              ))}
            </nav>
            <div className="w-full py-px my-2 bg-slate-500/10"></div>
            <section className="flex flex-row gap-8 px-4">
              <p className="text-lg text-black/60 line-through">
                {utils.currencyFormatter.format(product.price)}
              </p>
              <h5 className="pl-1 text-[#FF6A28]">
                {utils.currencyFormatter.format(
                  (product.price * product.discount) / 100
                )}
              </h5>
            </section>
            <br />
            {orderButton}
          </aside>
          <section className="flex flex-1 flex-col gap-8">
            {navs.map((nav, i) => (
              <ProductDetailCard
                key={i}
                header={nav.title}
                contents={nav.contents}
              />
            ))}
          </section>
        </article>
        <article className="flex flex-col gap-16 items-center py-24 bg-header">
          <h3>Sudah siap bergabung?</h3>
          {orderButton}
        </article>
      </main>
      <PageFooter />
    </>
  );
};

export default ProductDetailPage;
