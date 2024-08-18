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
  getData: () => void;
  singleData: Customers | null;
  getDataById: (id: string) => void;
}

export const useCustomers = create<CustomersState>((set) => ({
  data: [],
  getData: async () => {
    await axios
      .get(`${url}/customers`)
      .then((res) => {
        set({ data: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  singleData: null,
  getDataById: async (id: string) => {
    await axios
      .get(`${url}/customers/${id}`)
      .then((res) => {
        set({ singleData: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  },
}));
