import PropTypes from "prop-types";

import utils from "../../common/utils.js";
import DummyFigure from "../../assets/images/dummy-card-figure.svg";
import { Link } from "react-router-dom";

/**
 * @param {object} props
 * @param {import('../../core/entities/Product.js').default} props.product
 */
const ProductCard = ({ product }) => {
  return (
    <Link to={`products/${product.id}`}>
      <article
        id="product-card"
        className="card cursor-pointer"
      >
        <figure className="flex flex-row bg-header rounded-t-xl px-8 pt-4">
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
                {product.mentors.map((e) => e.name).join(", ")}
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
    </Link>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    batch: PropTypes.instanceOf(Date),
    mentors: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string, title: PropTypes.string })
    ),
    price: PropTypes.number,
    discount: PropTypes.number,
  }).isRequired,
};

export default ProductCard;
