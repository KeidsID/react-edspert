class GetProductById {
  /**
   * @param {object} dependencies
   * @param {import('../ProductsRepo').default} dependencies.productsRepo
   */
  constructor({ productsRepo }) {
    this.#productsRepo = productsRepo;
  }

  #productsRepo;

  /**
   * Fetch product detail from server.
   */
  async execute(id) {
    const product = await this.#productsRepo.getProductById(id);

    return product;
  }
}

export default GetProductById;
