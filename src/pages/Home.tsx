import { Title } from "@/components/Title";
import { Separator } from "@/components/ui/separator";
import { useMenu } from "@/hooks/useMenu";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Customer from "./customer/Customer";
import Voucher from "./voucher/Voucher";
import Promo from "./promo/Promo";

export default function Home() {
  const { sidebar, closeSidebar } = useMenu();
  const [tab, setTab] = useState<number>(0);

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
        <React.Fragment key={i}>{tab === i ? item.content : null}</React.Fragment>
      ))}
    </div>
  );
}
