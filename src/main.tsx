import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createRoutesFromElements, Route, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.tsx";
import CustomerCreate from "./pages/customer/CustomerCreate.tsx";
import CustomerDetail from "./pages/customer/CustomerDetail.tsx";
import CustomerUpdate from "./pages/customer/CustomerUpdate.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />}>
        <Route path="/create-customer" element={<CustomerCreate />} />
        <Route path="/detail-customer/:id" element={<CustomerDetail />} />
        <Route path="/update-customer/:id" element={<CustomerUpdate />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
