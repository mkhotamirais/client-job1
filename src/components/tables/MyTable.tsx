import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import { Edit, Filter, Plus, Printer, RefreshCcw, Search, ShieldEllipsis } from "lucide-react";
import Banner from "../Banner";
import CustomerDelDialog from "@/pages/customer/CustomerDelDialog";
import { Customers } from "@/hooks/useCustomers";
import { Link } from "react-router-dom";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function MyTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: { sorting, columnFilters },
    getPaginationRowModel: getPaginationRowModel(),
  });

  const InputSearch = ({ className }: { className?: string }) => (
    <div
      className={`${className} flex w-full grow flex-row items-center text-muted-foreground bg-white px-1 rounded-lg`}
    >
      <Search className="ml-2" />
      <Input
        autoFocus
        placeholder="Search Customer..."
        value={(table.getColumn("customerName")?.getFilterValue() as string) ?? ""}
        onChange={(event) => table.getColumn("customerName")?.setFilterValue(event.target.value)}
        className="bg-inherit focus:outline-none border-none"
      />
      <Button size="sm" className="bg-primary-main">
        Search
      </Button>
    </div>
  );

  return (
    <div>
      <Banner>
        <div className="flex items-center gap-1 md:gap-2 flex-wrap sm:flex-nowrap">
          <Button asChild className="backdrop-blur bg-white/15 hover:bg-white/30">
            <Link to="/create-customer" className="flex items-center">
              <Plus className="size-4 mr-0 md:mr-2" />
              <span className="hidden md:block">Add New Customer</span>
            </Link>
          </Button>
          <InputSearch className="hidden sm:flex" />
          <Button className="backdrop-blur bg-white/15 hover:bg-white/30">
            <Filter className="size-4 mr-0 md:mr-2" />
            <span className="hidden md:block">Filter</span>
          </Button>
          <Button className="backdrop-blur bg-white/15 hover:bg-white/30">
            <RefreshCcw className="size-4 mr-0 md:mr-2" />
            <span className="hidden md:block">Refresh</span>
          </Button>
          <Button className="backdrop-blur bg-white/15 hover:bg-white/30">
            <Printer className="size-4" />
          </Button>
          <InputSearch className="flex sm:hidden" />
        </div>
      </Banner>
      <div className="rounded-md my-2">
        <Table>
          <TableHeader className="bg-gray-50 rounded border-none">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow className="border-none" key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className={`px-0
                      ${header.id === "level" ? "hidden sm:table-cell" : ""} 
                      ${header.id === "favouriteMenu" ? "hidden md:table-cell" : ""} 
                      ${header.id === "totalTransaction" ? "hidden xl:table-cell" : ""} 
                      `}
                    >
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
                <TableHead className="">Action</TableHead>
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="border-none">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow className="border-none" key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => {
                    const value = cell.getValue() as number;
                    const isTotalTransactionColumn = cell.column.id === "totalTransaction";
                    return (
                      <TableCell
                        key={cell.id}
                        className={`capitalize
                      ${
                        cell.column.id === "level"
                          ? `hidden sm:table-cell md:block ${
                              cell.getValue() === "warga"
                                ? "bg-orange-50 text-orange-500"
                                : cell.getValue() === "juragan"
                                ? "bg-blue-50 text-blue-500"
                                : cell.getValue() === "konglomerat"
                                ? "bg-purple-50 text-purple-500"
                                : "bg-green-50 text-green-500"
                            } p-2 px-3 rounded w-fit`
                          : ""
                      } 
                      ${cell.column.id === "favouriteMenu" ? "hidden md:table-cell" : ""} 
                      ${cell.column.id === "totalTransaction" ? "hidden xl:table-cell" : ""} 
                    `}
                      >
                        {
                          value
                            ? isTotalTransactionColumn
                              ? `IDR ${Math.floor(value as number)
                                  .toLocaleString("id-ID")
                                  .replace(/\./g, ",")}`
                              : flexRender(cell.column.columnDef.cell, cell.getContext())
                            : "-" /* Tampilkan '-' jika nilai kosong */
                        }{" "}
                      </TableCell>
                    );
                  })}
                  <TableCell className="flex gap-1">
                    <Link
                      to={`/detail-customer/${(row.original as Customers).id}`}
                      className="flex p-2 px-3 items-center bg-gray-100"
                    >
                      <ShieldEllipsis className="size-4 mr-0 sm:mr-1" />
                      <span className="hidden sm:block">Detail</span>
                    </Link>
                    <Link
                      to={`/update-customer/${(row.original as Customers).id}`}
                      className="flex p-2 px-3 items-center bg-gray-100"
                    >
                      <Edit className="size-4" />
                    </Link>
                    <CustomerDelDialog data={row.original as Customers} />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          Previous
        </Button>
        <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          Next
        </Button>
      </div>
    </div>
  );
}
