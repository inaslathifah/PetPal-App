import axiosWithConfig from "../axiosWithConfig";

export const getProducts = async (params?: string) => {
  try {
    const response = await axiosWithConfig.get(`/products?${params}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
