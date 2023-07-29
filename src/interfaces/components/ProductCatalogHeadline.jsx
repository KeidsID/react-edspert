import GirlPointingHeadlineImage from "../../assets/images/girl-pointing.svg";

const ProductCatalogHeadline = () => {
  return (
    <article id="headline" className="flex flex-row bg-primary px-page pt-8">
      <section id="text" className="flex flex-col basis-3/4">
        <h3>Jadi expert bersama edspert.id</h3>
        <br />
        <h6 className="font-normal text-slate-300">
          Tingkatkan skill dan pengetahuan bersama para mentor terbaik di
          bidangnya, untuk siapkan karir impian anda.
        </h6>
      </section>

      <figure id="deco" className="relative">
        <div className="absolute top-10 right-32 triangle-br"></div>
        <div className="absolute bottom-0 left-24 triangle-bl"></div>

        <img
          src={GirlPointingHeadlineImage}
          alt="girl pointing headline"
          className="relative"
        />
      </figure>
    </article>
  );
};

export default ProductCatalogHeadline;
