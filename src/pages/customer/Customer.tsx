import LoaderFade from "@/components/LoaderFade";
import { columns } from "@/components/tables/Columns";
import { MyTable } from "@/components/tables/MyTable";
import { Customers, useCustomers } from "@/hooks/useCustomers";
import { useEffect } from "react";

// const data: Customer[] = [
//   {
//     customerName: "ahmad",
//     level: "warga",
//     favouriteMenu: "Chicken & Ribs Combo",
//     totalTransaction: 50000,
//   },
//   {
//     customerName: "abdul",
//     level: "warga",
//     favouriteMenu: "Chicken & Ribs Combo",
//     totalTransaction: 70000,
//   },
// ];

export default function Customer() {
  const { data, getData, loadData, errData } = useCustomers();

  useEffect(() => {
    getData();
  }, [getData]);

  if (loadData) return <LoaderFade />;
  if (errData) return <div>{errData}</div>;

  return (
    <>
      <MyTable<Customers, unknown> columns={columns} data={data} />;
    </>
  );
}
