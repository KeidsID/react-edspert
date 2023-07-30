/* eslint-disable no-unused-vars */

class ProductsRepo {
  /**
   * Fetch products from server.
   *
   * @return {Promise<Product[]>}
   */
  getProducts() {
    throw new Error("ProductsRepo.Method_Not_Implemented");
  }

  /**
   * Fetch product detail from server.
   *
   * @param {string} id
   *
   * @return {Promise<Product>}
   */
  getProductById(id) {
    throw new Error("ProductsRepo.Method_Not_Implemented");
  }
}

export default ProductsRepo;
