import { Title } from "@/components/Title";
import { Separator } from "@/components/ui/separator";
import { useMenu } from "@/hooks/useMenu";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Customer from "./customer/Customer";
import Voucher from "./voucher/Voucher";
import Promo from "./promo/Promo";
import { Button } from "@/components/ui/button";
import { Outlet, useLocation } from "react-router-dom";

export default function Home() {
  const { sidebar, closeSidebar } = useMenu();
  const [tab, setTab] = useState<number>(0);
  const { pathname } = useLocation();

  const path1 = pathname.split("/")[1];

  const TabList = [
    {
      title: "Customer",
      description: "You can manage and organize your customer and other things here",
      content: <Customer />,
    },
    { title: "Promo", description: "You can manage and organize your promo and other things here", content: <Promo /> },
    {
      title: "Voucher",
      description: "You can manage and organize your voucher and other things here",
      content: <Voucher />,
    },
  ];

  const onClose = () => {
    if (sidebar) {
      closeSidebar();
    }
  };

  const onSwitchTab = (i: number) => {
    setTab(i);
  };

  return (
    <div onClick={onClose} className={`p-4 min-h-screen ml-0 lg:ml-60`}>
      {TabList.map((item, i) => (
        <Title key={i} title={item.title} description={item.description} className={tab === i ? "block" : "hidden"} />
      ))}
      <div className="flex justify-start lg:justify-end overflow-x-scroll lg:overflow-visible">
        {TabList.map((item, i) => (
          <div key={i} className="relative">
            <button
              type="button"
              onClick={() => onSwitchTab(i)}
              className={`w-32 h-8 text-muted-foreground font-semibold hover:text-primary-main ${
                tab === i ? "text-primary-main" : ""
              }`}
            >
              {item.title}
            </button>
            {tab === i && (
              <motion.div layoutId="tab" className="absolute h-[3px] w-full rounded-full bg-primary-main" />
            )}
          </div>
        ))}
      </div>
      <Separator className="mt-[3px]" />
      {TabList.map((item, i) => (
        <React.Fragment key={i}>
          <>
            <div className={`${tab === i ? "grid" : "hidden"} col-span-3 xl:grid-cols-4`}>
              <div className="col-span-3 my-2">{!path1 ? item.content : <Outlet />}</div>
              <div className="m-2 grid col-span-3 sm:col-span-1 xl:grid-cols-1 gap-2">
                <div className="relative h-56 border rounded-lg bg-primary-main text-white overflow-hidden">
                  <div className="absolute inset-4 flex flex-col">
                    <p className="grow font-medium">See analytics of the Customer Clearly</p>
                    <Button className="backdrop-blur bg-white/15 hover:bg-white/30 w-32">See Analytics</Button>
                  </div>
                  <div className="absolute z-10 border border-white/30 size-72 -bottom-32 -right-32 rounded-full" />
                  <div className="absolute z-10 border border-white/50 size-72 -bottom-40 -right-40 rounded-full bg-white/15" />
                  <div className="absolute z-10 border border-white/70 size-72 -bottom-52 -right-52 rounded-full bg-white/30" />
                </div>
                <div className="relative bg-gray-50 rounded-lg">
                  <div className="p-4 flex flex-col gap-4">
                    <div className="font-semibold text-2xl">
                      <h3>Top Menu</h3>
                      <h3 className="text-orange-600">This Week</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">10 - 12 August 2023</p>
                    <div className="relative bg-white p-3 rounded shadow-lg has-[h3]:font-bold">
                      <h3>Nasi Goreng Jamur</h3>
                      <h3>Special Resto Pak Min</h3>
                      <div className="absolute -top-1 right-0 bg-orange-600 text-white size-5 rotate-[10deg] text-xs flex items-center justify-center shadow-[2px_2px_0_rgba(0,0,0,0.7)]">
                        1
                      </div>
                    </div>
                    <div>2. Tongseng Sapi Gurih</div>
                    <div>3. Nasi Gudeg Telur Cekert</div>
                    <div>4. Nasi Ayam Serundeng</div>
                    <div>5. Nasi Goreng Seafood</div>
                  </div>
                  <svg
                    id="svg"
                    viewBox="0 0 1440 590"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition duration-300 ease-in-out delay-150 pb-1"
                  >
                    <defs>
                      <linearGradient id="gradient" x1="53%" y1="0%" x2="47%" y2="100%">
                        <stop offset="5%" stopColor="#ff6900"></stop>
                        <stop offset="95%" stopColor="#ffffff"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0,600 L 0,150 C 40.22127451291665,141.09400854192015 80.4425490258333,132.1880170838403 111,120 C 141.5574509741667,107.81198291615969 162.4510784095835,92.34194020655895 201,114 C 239.5489215904165,135.65805979344105 295.7531373358328,194.44422208992384 338,194 C 380.2468626641672,193.55577791007616 408.5363722470853,133.8811714337456 443,102 C 477.4636277529147,70.1188285662544 518.1013736758259,66.03109217509373 556,102 C 593.8986263241741,137.96890782490627 629.058133049611,213.99445986587958 670,215 C 710.941866950389,216.00554013412042 757.6660941257302,141.99106836138785 794,122 C 830.3339058742698,102.00893163861215 856.2774904474688,136.041266688569 892,163 C 927.7225095525312,189.958733311431 973.2239440843939,209.84386488433606 1012,198 C 1050.776055915606,186.15613511566394 1082.826733214955,142.58327377408673 1114,135 C 1145.173266785045,127.41672622591327 1175.469123055785,155.82304001931698 1213,174 C 1250.530876944215,192.17695998068302 1295.296774561904,200.12456614864544 1334,198 C 1372.703225438096,195.87543385135456 1405.343778696599,183.67869538610128 1422,174 C 1438.656221303401,164.32130461389872 1439.3281106517006,157.16065230694937 1440,150 L 1440,600 L 0,600 Z"
                      stroke="none"
                      strokeWidth="0"
                      fill="url(#gradient)"
                      fillOpacity="0.53"
                      className="transition-all duration-300 ease-in-out delay-150 path-0"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </>
        </React.Fragment>
      ))}
    </div>
  );
}
