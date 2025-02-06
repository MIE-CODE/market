import { useStore } from "../context/productsContext";
import { ProductResponse } from "../helpers/types";
import { toast } from "react-toastify";

export const useGetProducts = () => {
  const { dispatch } = useStore();

  const getProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = (await response.json()) as ProductResponse;
      if (!response.ok) {
        toast.error("Failed to fetch data");
      }

      if (response.ok) {
        dispatch({ type: "SET_PRODUCTS", payload: data });
      }
    } catch (error) {
      toast.error(error as string);
    }
  };

  return { getProducts };
};
