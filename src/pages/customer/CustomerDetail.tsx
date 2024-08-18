import { useCustomers } from "@/hooks/useCustomers";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import LoaderFade from "@/components/LoaderFade";

export default function CustomerDetail() {
  const { id } = useParams();
  const { singleData, getDataById, loadSingleData, errSingleData } = useCustomers();

  useEffect(() => {
    if (id) {
      getDataById(id);
    }
  }, [getDataById, id]);

  if (loadSingleData) return <LoaderFade />;
  if (errSingleData) return <div>{errSingleData}</div>;

  const detailData = [
    { label: "ID", value: singleData?.id },
    { label: "Customer Name", value: singleData?.customerName },
    { label: "Favourite Menu", value: singleData?.favouriteMenu },
    {
      label: "Total Transaction",
      value: `IDR ${Math.floor(Number(singleData?.totalTransaction)).toLocaleString("id-ID").replace(/\./g, ",")}`,
    },
    { label: "Created Time", value: moment(singleData?.createdAt).fromNow() },
    { label: "Updated Time", value: moment(singleData?.updatedAt).fromNow() },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold">Detail {singleData?.customerName}</h2>
      <div className="space-y-1 my-3">
        {detailData.map((item, i) => (
          <div key={i} className="grid grid-cols-3 p-2 rounded odd:bg-indigo-100 even:bg-indigo-50">
            <div className="col-span-1 font-semibold">{item.label}</div>
            <div className="col-span-2">{item.value || "-"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
