import { CommandList } from "cmdk";
import Logo from "./Logo";
import { Command, CommandGroup, CommandItem, CommandShortcut } from "./ui/command";
import {
  BaggageClaim,
  BatteryFull,
  ChartCandlestick,
  X,
  ClipboardPenLine,
  HandPlatter,
  LayoutDashboard,
  SquareMousePointer,
  SquareUserRound,
  Truck,
} from "lucide-react";
import { Card, CardFooter, CardHeader } from "./ui/card";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { TbLogout2 } from "react-icons/tb";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useMenu } from "@/hooks/useMenu";

export function Sidebar() {
  const { sidebar, closeSidebar } = useMenu();

  const onClick = () => {
    if (sidebar) {
      closeSidebar();
    }
  };

  const sidebarList = [
    {
      heading: "Menu",
      menu: [
        { href: "", label: "Dashboard", icon: LayoutDashboard },
        { href: "", label: "Stock", icon: BatteryFull },
        { href: "", label: "Restaurant", icon: HandPlatter },
        { href: "", label: "Design", icon: SquareMousePointer },
        { href: "", label: "Report", icon: ClipboardPenLine },
        { href: "", label: "Role & Admin", icon: SquareUserRound },
        { href: "", label: "Settings", icon: ChartCandlestick },
      ],
    },
    {
      heading: "Integration",
      menu: [
        { href: "", label: "Stocks", icon: BaggageClaim },
        { href: "", label: "Supply", icon: Truck },
      ],
    },
  ];

  return (
    <div
      className={`${
        sidebar ? "scale-x-100" : "scale-x-0"
      } transition origin-left lg:scale-100 z-50 fixed w-60 border-r h-screen bg-white flex flex-col`}
    >
      <Button
        onClick={onClick}
        variant={"ghost"}
        size={"icon"}
        className="absolute lg:hidden rounded-none right-0 text-primary-main hover:text-destructive"
      >
        <X className="size-5" />
      </Button>

      <div className="grow">
        <Logo />
        <Command className="px-2">
          <CommandList onClick={onClick}>
            {sidebarList.map((item, i) => (
              <CommandGroup key={i} heading={item.heading}>
                {item.menu.map((itm, idx) => (
                  <CommandItem key={idx} className="my-2">
                    {<itm.icon className="size-5 mr-2" />}
                    <span>{itm.label}</span>
                    {idx === 0 && i === 0 && <CommandShortcut>6</CommandShortcut>}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
      <Separator />
      <Card className="mt-auto rounded-none border-none">
        <CardHeader className="flex flex-row items-center space-x-2">
          <Avatar>
            <AvatarImage src="/images/me.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col pb-1">
            <h1 className="text-sm font-bold">Mkhotami Rais</h1>
            <p className="text-xs text-muted-foreground">Web Developer</p>
          </div>
        </CardHeader>
        <CardFooter>
          <Button variant={"destructiveMain"} className="w-full font-semibold">
            <TbLogout2 className="size-4 mr-2 text-destructive" />
            Logout
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
