import AppBar from "../components/AppBar";
import PageFooter from "../components/PageFooter";
import ProductCard from "../components/ProductCard";
import ProductCatalogHeadline from "../components/ProductCatalogHeadline";

const ProductCatalogPage = () => {
  const products = [
    {
      title: "Intensive Bootcamp Microsoft Excel - for Data Analysis Batch 13",
      subtitle: "Microsoft Excel - for Data Analysis",
      batch: new Date("2023-08-09"),
      mentors: [
        "Perdana Suteja Putra",
        "Veto Anggipriyugo, S.T.",
        "Aryadimas Suprayitno",
      ],
      price: 798000,
      discount: 65,
    },
    {
      title: "Intensive Bootcamp Flutter - for Mobile Development Batch 17",
      subtitle: "Flutter - for Mobile Development",
      batch: new Date("2023-07-13"),
      mentors: ["Fikri Razzaq Arasyid", "Fadil Nugraha Adithama"],
      price: 998000,
      discount: 70,
    },
    {
      title: "Intensive Bootcamp IoT - for IoT Engineering Batch 15",
      subtitle: "IoT for IoT Engineering",
      batch: new Date("2023-07-13"),
      mentors: ["Ahmad Sony Alfathani", "Fariz Alemuda"],
      price: 998000,
      discount: 60,
    },
    {
      title: "Intensive Bootcamp ReactJS - for Front End Development Batch 8",
      subtitle: "ReactJS - for Front End Development",
      batch: new Date("2023-07-13"),
      mentors: ["Ardi Widyanto Saputra", "Ade Armyatna Yusfantri"],
      price: 998000,
      discount: 75,
    },
  ];

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
