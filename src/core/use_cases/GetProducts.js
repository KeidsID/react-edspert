class GetProducts {
  /**
   * @param {object} dependencies
   * @param {import('../ProductsRepo').default} dependencies.productsRepo
   */
  constructor({ productsRepo }) {
    this.#productsRepo = productsRepo;
  }

  #productsRepo;

  /**
   * Fetch products from server.
   */
  async execute() {
    const products = await this.#productsRepo.getProducts();

    return products;
  }
}

export default GetProducts;
