import { Toaster } from "sonner";
import { Sidebar } from "./components/Sidebar";
import { Outlet, ScrollRestoration } from "react-router-dom";

export default function App() {
  return (
    <div className="font-quicksand">
      <Sidebar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Toaster richColors closeButton position="top-right" />
      <ScrollRestoration />
    </div>
  );
}
