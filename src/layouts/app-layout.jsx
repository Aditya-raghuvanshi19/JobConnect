import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10 pt-10 ">
        
      <img src="../public/logo.jpeg" className="h-20 rounded ml-10" alt="Logo" />
      
      </div>
    </div>
  );
};

export default AppLayout;
