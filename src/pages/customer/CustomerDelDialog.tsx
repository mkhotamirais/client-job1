import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Trash } from "lucide-react";
import axios from "axios";
import { url } from "@/constants";
import { Customers, useCustomers } from "@/hooks/useCustomers";
import { toast } from "sonner";

export default function CustomerDelDialog({ data }: { data: Customers }) {
  const { getData } = useCustomers();
  const onDelete = async () => {
    await axios
      .delete(`${url}/customers/${data.id}`)
      .then((res) => {
        toast.success(res.data.message);
        getData();
      })
      .catch((err) => {
        toast.error(err.response.data.message || err.message);
      });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button type="button" title="delete" className="flex p-2 px-3 items-center bg-red-50 text-red-500">
          <Trash className="size-4" />
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="space-y-3">
          <div>
            <DialogTitle>Delete {data.customerName} ,Are you sure?</DialogTitle>
            <DialogDescription>This action cannot be undone!</DialogDescription>
          </div>
          <div className="space-x-1">
            <DialogClose asChild>
              <Button onClick={onDelete} size={"sm"} variant={"destructive"}>
                Delete
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button size={"sm"} variant={"outline"}>
                Cancel
              </Button>
            </DialogClose>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
