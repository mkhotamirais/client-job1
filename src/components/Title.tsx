import { MouseEvent } from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useMenu } from "@/hooks/useMenu";

export function Title({ title, description, className }: { title: string; description: string; className: string }) {
  const { openSidebar } = useMenu();

  const onOpen = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    openSidebar();
  };

  return (
    <div className={`${className}`}>
      <div className="flex items-center">
        <Button onClick={onOpen} size={"icon"} variant={"ghost"} className="static lg:hidden">
          <Menu />
        </Button>
        <h1 className="text-[28px] font-semibold">{title}</h1>
      </div>
      <p className="ml-3 lg:ml-0 text-muted-foreground text-sm">{description}</p>
    </div>
  );
}
