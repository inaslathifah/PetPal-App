import { DetailProductType } from "./types";
import axios from "axios";

export const getDetailProduct = async (id: number): Promise<DetailProductType> => {
    try {
      const response = await axios.get(`https://zyannstore.my.id/products/${id}`);
      return response.data.data;
    } catch (error) {
      console.error("Failed to fetch product details:", error);
      throw error;
    }
};