class Product {
  /**
   * @typedef {Object} Mentor
   * @prop {string} name
   * @prop {string} title
   *
   * @typedef {Object} StudyMaterial
   * @prop {string} title
   * @prop {string} detail
   *
   * @param {object} props
   * @param {string} props.id
   * @param {string} props.title
   * @param {string} props.subtitle
   * @param {Date} props.batch
   * @param {Mentor[]} props.mentors
   * @param {number} props.price
   * @param {number} props.discount
   * @param {StudyMaterial[]} props.studyMaterials
   */
  constructor(props) {
    this.#verifyProps(props);

    this.id = props.id;
    this.title = props.title;
    this.subtitle = props.subtitle;
    this.batch = props.batch;
    this.mentors = props.mentors;
    this.price = props.price;
    this.discount = props.discount;
    this.studyMaterials = props.studyMaterials;
  }

  #verifyProps({
    id,
    title,
    subtitle,
    batch,
    mentors,
    price,
    discount,
    studyMaterials,
  }) {
    if (
      !id ||
      !title ||
      !subtitle ||
      !batch ||
      !mentors ||
      !price ||
      !discount ||
      !studyMaterials
    ) {
      throw new Error("Product.Not_Contain_Needed_Properties");
    }

    if (
      typeof id !== "string" ||
      typeof title !== "string" ||
      typeof subtitle !== "string" ||
      !(batch instanceof Date) ||
      !(mentors instanceof Array) ||
      typeof price !== "number" ||
      typeof discount !== "number" ||
      !(studyMaterials instanceof Array)
    ) {
      throw new Error("Product.Not_Meet_Data_Type_Specification");
    }
  }
}

export default Product;
