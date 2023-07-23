import PropTypes from "prop-types";

import utils from "../../common/utils.js";
import DummyFigure from "../../assets/images/dummy-card-figure.svg";

/**
 * @typedef {object} Product
 * @property {string} title
 * @property {string} subtitle
 * @property {Date} batch
 * @property {string[]} mentors
 * @property {number} price
 * @property {number} discount
 *
 * @param {object} props
 * @param {Product} props.product
 * @returns
 */
const ProductCard = ({ product }) => {
  return (
    <article
      id="product-card"
      className="bg-white shadow-md rounded-xl cursor-pointer"
    >
      <figure className="flex flex-row bg-primary rounded-t-xl px-8 pt-4">
        <img src={DummyFigure} alt="dummy-figure" />
        <figcaption className="pl-4 py-2">
          <h6 className="text-[#ffcd29]">Intensive Bootcamp</h6>
          <h5 className="line-clamp-2">{product.subtitle}</h5>
        </figcaption>
      </figure>

      <section className="p-4">
        <h5 className="line-clamp-2">{product.title}</h5>

        <table className="my-4">
          <tr className="text-sm">
            <th className="font-normal text-start text-black/60">Batch</th>
            <td className="pl-3">
              {utils.dateFormatter.format(product.batch)}
            </td>
          </tr>
          <tr className="text-sm">
            <th className="font-normal text-start text-black/60">Mentors</th>
            <td className="pl-3 text-black line-clamp-1">
              {product.mentors.join(", ")}
            </td>
          </tr>
        </table>

        <div id="price" className="flex flex-row justify-end">
          <p className="text-sm text-black/60 line-through">
            {utils.currencyFormatter.format(product.price)}
          </p>
          <h5 className="pl-1 text-[#0acf83]">
            {utils.currencyFormatter.format(
              (product.price * product.discount) / 100
            )}
          </h5>
        </div>
      </section>
    </article>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    batch: PropTypes.instanceOf(Date),
    mentors: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number,
    discount: PropTypes.number,
  }).isRequired,
};

export default ProductCard;
