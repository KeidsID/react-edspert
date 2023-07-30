import { createContainer } from "instances-container";

import axiosInstance from "./services/axiosInstance";

import ProductsRepo from "../core/ProductsRepo";
import ProductsRepoAxios from "./repo/ProductsRepoAxios";

import GetProducts from "../core/use_cases/GetProducts";
import GetProductById from "../core/use_cases/GetProductById";

const container = createContainer();

// infrastructures
container.register([
  {
    key: ProductsRepo.name,
    Class: ProductsRepoAxios,
    parameter: {
      dependencies: [{ concrete: axiosInstance }],
    },
  },
]);

// use_cases
container.register([
  {
    key: GetProducts.name,
    Class: GetProducts,
    parameter: {
      injectType: "destructuring",
      dependencies: [{ name: "productsRepo", internal: ProductsRepo.name }],
    },
  },
  {
    key: GetProductById.name,
    Class: GetProductById,
    parameter: {
      injectType: "destructuring",
      dependencies: [{ name: "productsRepo", internal: ProductsRepo.name }],
    },
  },
]);

export default container;
