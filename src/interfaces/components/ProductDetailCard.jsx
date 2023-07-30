import PropTypes from "prop-types";

/**
 * @typedef {Object} Content
 * @prop {string} title
 * @prop {string} detail
 *
 * @param {object} props
 * @param {string} props.header
 * @param {Content[]} props.contents
 */
const ProductDetailCard = ({ header, contents }) => {
  return (
    <article id={header} className="card p-8">
      <h4>{header}</h4>
      <div className="py-2"></div>
      <section>
        {contents.map((e, i) => (
          <div key={i} className="flex flex-row gap-4 py-1">
            <h6>X</h6>
            <div className="flex flex-col gap-2">
              <h6>{e.title}</h6>
              <p className="text-black/60">{e.detail}</p>
            </div>
          </div>
        ))}
      </section>
    </article>
  );
};

ProductDetailCard.propTypes = {
  header: PropTypes.string.isRequired,
  contents: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      detail: PropTypes.string,
    })
  ).isRequired,
};

export default ProductDetailCard;
