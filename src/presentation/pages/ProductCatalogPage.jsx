import AppBar from "../components/AppBar";

import GirlPointingHeadlineImage from "../../assets/images/girl-pointing.png";

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
      discount: 65,
    },
    {
      title: "Intensive Bootcamp IoT - for IoT Engineering Batch 15",
      subtitle: "IoT for IoT Engineering",
      batch: new Date("2023-07-13"),
      mentors: ["Ahmad Sony Alfathani", "Fariz Alemuda"],
      price: 998000,
      discount: 65,
    },
    {
      title: "Intensive Bootcamp ReactJS - for Front End Development Batch 8",
      subtitle: "ReactJS - for Front End Development",
      batch: new Date("2023-07-13"),
      mentors: ["Ardi Widyanto Saputra", "Ade Armyatna Yusfantri"],
      price: 998000,
      discount: 65,
    },
  ];

  return (
    <>
      <AppBar />
      <main>
        <section
          id="headline"
          className="flex bg-[#152a46] text-white p-8 sm:p-16 pb-0 sm:pb-0"
        >
          <div id="text" className="w-1/2">
            <h6 className="text-5xl">Jadi expert bersama edspert.id</h6>
            <br />
            <p className="text-xl text-slate-300">
              Tingkatkan skill dan pengetahuan bersama para mentor terbaik di
              bidangnya, untuk siapkan karir impian anda.
            </p>
          </div>
          <div id="deco" className="ml-24">
            <img src={GirlPointingHeadlineImage} alt="girl pointing headline" />
          </div>
        </section>
        <section id="products" className="flex">
          {products.map((e, i) => (
            <div
              key={`product-${i}`}
              className="w-80 m-8 bg-sky-800 text-white"
            >
              <h6>{e.title}</h6>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default ProductCatalogPage;
