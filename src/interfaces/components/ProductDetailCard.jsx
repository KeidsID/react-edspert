import PropTypes from "prop-types";

import CheckIcon from "../../assets/check-icon.svg";

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
      <section>
        {contents.map((e, i) => (
          <div key={i} className="flex flex-row items-start gap-4 py-1">
            <img src={CheckIcon} alt="check-icon" className="mt-1"/>
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
