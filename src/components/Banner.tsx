import React from "react";

export default function Banner({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-48 md:h-36 border overflow-hidden rounded-lg bg-primary-main">
      <div className="z-10 absolute border-r-[2px] border-r-indigo-300 size-40 scale-[200%] left-1/4 md:left-1/3 bottom-2/3 -translate-x-1/3 rotate-45 bg-primary-main" />
      <div
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,.7), rgba(0,0,0,.2)), url(/images/pix-family.jpg) center/cover no-repeat",
        }}
        className="absolute bg-gray-500/15 w-2/3 h-48 md:h-36 right-0 bottom-0"
      />
      <div className="absolute z-30 inset-[0.6rem] text-white flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-semibold mb-1">Customer</h1>
          <p className="text-[0.8rem] leading-tight">
            On this menu you will be able to create, edit, and also delete the customer. <br />
            Also you can delete it easily.
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}
