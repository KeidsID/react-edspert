import PropTypes from "prop-types";

import GirlPointingHeadlineImage from "../../assets/images/girl-pointing.svg";

/**
 * @param {object} props
 * @param {import('../../core/entities/Product.js').default} props.product
 */
const ProductDetailHeadline = ({ product }) => {
  return (
    <article
      id="headline"
      className="flex flex-row items-end bg-header px-page pt-8"
    >
      <section className="flex flex-1 flex-col gap-4 pb-8">
        <h2>Intensive Bootcamp</h2>
        <h3>{product.subtitle}</h3>
        <br />

        <h5 className="font-normal text-slate-300">Mentors</h5>
        <section className="grid grid-cols-2 gap-8">
          {product.mentors.map((e, i) => (
            <div key={i} id={`mentor-${e.name}`}>
              <h4 className="font-semibold">{e.name}</h4>
              <h5 className="font-normal text-slate-300">{e.title}</h5>
            </div>
          ))}
        </section>
      </section>

      <figure className="relative">
        <div className="absolute top-0 right-28 triangle-br"></div>

        <img
          src={GirlPointingHeadlineImage}
          alt="girl pointing headline"
          className="relative max-w-sm"
        />
      </figure>
    </article>
  );
};

ProductDetailHeadline.propTypes = {
  product: PropTypes.shape({
    subtitle: PropTypes.string,
    mentors: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string, title: PropTypes.string })
    ),
  }).isRequired,
};

export default ProductDetailHeadline;
