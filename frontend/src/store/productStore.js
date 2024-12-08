import { create } from "zustand";
import axios from "axios";

const API_URL =
  import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api";

axios.defaults.withCredentials = true;

export const useProductStore = create((set) => ({
  products: [],
  error: null,
  isLoading: false,

  // Fetch products
  fetchProducts: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/products`);
      set({
        products: response.data.products,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error.response.data.message || "Error fetching products",
        isLoading: false,
      });
      throw error;
    }
  },

  // Add a product
  addProduct: async (name, price, addedBy) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/add-product`, {
        name,
        price,
        addedBy,
      });
      set((state) => ({
        isLoading: false,
      }));
    } catch (error) {
      set({
        error: error.response.data.message || "Error adding product",
        isLoading: false,
      });
      throw error;
    }
  },

  // Edit a product
  editProduct: async (id, name, price, addedBy) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/edit-product`, {
        id,
        name,
        price,
        addedBy,
      });

      set({
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error.response.data.message || "Error editing product",
        isLoading: false,
      });
      throw error;
    }
  },

  // Delete a product
  deleteProduct: async (id) => {
    set({ isLoading: true, error: null });
    try {
      await axios.post(`${API_URL}/delete-product`, { id });
      set({
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error.response.data.message || "Error deleting product",
        isLoading: false,
      });
      throw error;
    }
  },
}));
