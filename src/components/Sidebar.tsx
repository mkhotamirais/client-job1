import { CommandList } from "cmdk";
import Logo from "./Logo";
import { Command, CommandGroup, CommandItem, CommandShortcut } from "./ui/command";
import {
  BaggageClaim,
  BatteryFull,
  ChartCandlestick,
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

export function Sidebar() {
  return (
    <div className={`z-50 fixed w-60 border-r h-screen bg-white flex flex-col`}>
      <div className="grow">
        <Logo />
        <Command className="px-2">
          <CommandList>
            <CommandGroup heading="Menu">
              <CommandItem>
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
                <CommandShortcut>
                  <div className="text-white rounded-full flex items-center text-xs justify-center size-5 bg-gradient-to-br from-orange-400 to-orange-500">
                    8
                  </div>
                </CommandShortcut>
              </CommandItem>
              <CommandItem>
                <BatteryFull className="mr-2 h-4 w-4" />
                <span>Stock</span>
              </CommandItem>
              <CommandItem>
                <HandPlatter className="mr-2 h-4 w-4" />
                <span>Restaurant</span>
              </CommandItem>
              <CommandItem>
                <SquareMousePointer className="mr-2 h-4 w-4" />
                <span>Design</span>
              </CommandItem>
              <CommandItem>
                <ClipboardPenLine className="mr-2 h-4 w-4" />
                <span>Report</span>
              </CommandItem>
              <CommandItem>
                <SquareUserRound className="mr-2 h-4 w-4" />
                <span>Role & Admin</span>
              </CommandItem>
              <CommandItem>
                <ChartCandlestick className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </CommandItem>
            </CommandGroup>
            <CommandGroup heading="Integration">
              <CommandItem>
                <BaggageClaim className="mr-2 h-4 w-4" />
                <span>Stocks</span>
              </CommandItem>
              <CommandItem>
                <Truck className="mr-2 h-4 w-4" />
                <span>Supply</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
      <Separator />
      <Card className="mt-auto rounded-none border-none">
        <CardHeader className="flex flex-row items-center space-x-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
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
