import React, { useEffect } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import { connectWithSocketServer } from "./socketConnection/socketConn";

const App = () => {
  useEffect(()=>{
    connectWithSocketServer()
  },[])
  return (
    <div className="relative min-h-screen h-full w-full bg-slate-950">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="text-gray-50 text-lg">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}; 

export default App;
