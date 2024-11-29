import axios from "axios";
import { ApiUrlService, IApiUrl } from "./ApiUrlService";
import { Product } from "../models/Products";

export class ApiService {
    public static GetProducts() {
      return axios.get<Product[]>(ApiUrlService.GetProductsEndpoint().url);
    };
}