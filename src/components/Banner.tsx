import { Plus } from "lucide-react";
import { Button } from "./ui/button";

export default function Banner() {
  return (
    <div className="relative h-32 my-2 border overflow-hidden rounded-lg">
      <div className="z-10 w-1/3 h-full bg-primary-main" />
      <div className="z-10 absolute border-r-[2px] border-r-indigo-300 size-32 scale-[170%] left-1/3 bottom-1/2 -translate-x-1/3 rotate-45 bg-primary-main" />
      <div
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,.7), rgba(0,0,0,.2)), url(/images/pix-family.jpg) center/cover no-repeat",
        }}
        className="absolute bg-gray-500/15 w-2/3 h-32 right-0 bottom-0"
      />
      <div className="absolute z-30 inset-[0.6rem] text-white flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-semibold mb-1">Customer</h1>
          <p className="text-[0.8rem] leading-tight">
            On this menu you will be able to create, edit, and also delete the customer. <br />
            Also you can delete it easily.
          </p>
        </div>
        <div className="*:text-sm">
          <Button size={"sm"} className="backdrop-blur bg-white/15 hover:bg-white/30">
            <Plus className="size-4 mr-2" />
            <span>Add New Customer</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
