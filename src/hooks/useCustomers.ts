import { create } from "zustand";
import axios from "axios";
import { url } from "@/constants";

export interface Customers {
  id?: string;
  level: "warga" | "juragan" | "sultan" | "konglomerat";
  customerName: string;
  favouriteMenu: string;
  totalTransaction: string;
  createdAt?: string;
  updatedAt?: string;
}

interface CustomersState {
  data: Customers[];
  loadData: boolean;
  errData: string | null;
  getData: () => void;
  singleData: Customers | null;
  loadSingleData: boolean;
  errSingleData: string | null;
  getDataById: (id: string) => void;
}

export const useCustomers = create<CustomersState>((set) => ({
  data: [],
  loadData: false,
  errData: null,
  getData: async () => {
    set({ loadData: true });
    await axios
      .get(`${url}/customers`)
      .then((res) => {
        set({ data: res.data });
      })
      .catch((err) => {
        set({ errData: err.response.data.message || err.message });
      })
      .finally(() => set({ loadData: false }));
  },
  singleData: null,
  loadSingleData: false,
  errSingleData: null,
  getDataById: async (id: string) => {
    set({ loadSingleData: true });
    await axios
      .get(`${url}/customers/${id}`)
      .then((res) => {
        set({ singleData: res.data });
      })
      .catch((err) => {
        set({ errSingleData: err.response.data.message || err.message });
      })
      .finally(() => set({ loadSingleData: false }));
  },
}));
