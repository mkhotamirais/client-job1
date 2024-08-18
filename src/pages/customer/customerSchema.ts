import { z } from "zod";

export const customerSchema = z.object({
  level: z.enum(["warga", "juragan", "sultan", "konglomerat"]),
  customerName: z.string().min(1, "Customer name is required"),
  //   favouriteMenu: z.string().min(1, "Favourita menu is required"),
  //   totalTransaction: z.string().min(1, "Total transaction is required"),
});
export const customerUpdateSchema = z.object({
  level: z.enum(["warga", "juragan", "sultan", "konglomerat"]),
  customerName: z.string().min(1, "Customer name is required"),
  favouriteMenu: z.string().min(1, "Favourita menu is required"),
  totalTransaction: z.string().min(1, "Total transaction is required"),
});
