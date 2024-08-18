import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { ChevronsUpDown } from "lucide-react";
import { Customers } from "@/hooks/useCustomers";

export const columns: ColumnDef<Customers, unknown>[] = [
  {
    accessorKey: "customerName",
    header: ({ column }) => {
      return (
        <Button
          className="w-full justify-between"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Customer Name
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "level",
    header: ({ column }) => {
      return (
        <Button
          className="hidden sm:flex w-full justify-between"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Level
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "favouriteMenu",
    header: ({ column }) => {
      return (
        <Button
          className="hidden md:flex w-full justify-between"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Favourite Menu
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "totalTransaction",
    header: ({ column }) => {
      return (
        <Button
          className="hidden lg:flex w-full justify-between"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Total Transaction
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
];
