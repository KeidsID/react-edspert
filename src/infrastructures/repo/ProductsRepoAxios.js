import ProductsRepo from "../../core/ProductsRepo";
import Product from "../../core/entities/Product";

class ProductsRepoAxios extends ProductsRepo {
  /**
   * @param {import('axios').AxiosInstance} axios
   */
  constructor(axios) {
    super();

    this.#axios = axios;
  }

  #axios;

  /**
   * @return {Promise<Product[]>}
   */
  async getProducts() {
    const response = await this.#axios.get("/products");

    if (response.status !== 200) {
      throw new Error(`${response.status} : ${response.statusText}`);
    }

    /**
     * @type {Product[]}
     */
    const rawData = response.data;

    return rawData.map((e) => new Product({ ...e, batch: new Date(e.batch) }));
  }

  /**
   * @param {string} id
   * @return {Promise<Product>}
   */
  async getProductById(id) {
    const response = await this.#axios.get(`/products/${id}`);

    if (response.status !== 200) {
      throw new Error(`${response.status} : ${response.statusText}`);
    }

    /**
     * @type {Product}
     */
    const rawData = response.data;

    return new Product({ ...rawData, batch: new Date(rawData.batch) });
  }
}

export default ProductsRepoAxios;
