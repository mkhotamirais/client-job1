import { Sidebar } from "./components/Sidebar";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="font-quicksand">
      <Sidebar />
      <main className="min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
