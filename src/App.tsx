import { Menu } from "lucide-react";
import { Sidebar } from "./components/Sidebar";
import { Button } from "./components/ui/button";

export default function App() {
  return (
    <div className="font-quicksand">
      <Sidebar />
      <main className="bg-blue-200">
        <Button size={"icon"} variant={"ghost"}>
          <Menu />
        </Button>
      </main>
    </div>
  );
}
