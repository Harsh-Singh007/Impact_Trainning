import React, { useEffect, useState } from 'react'
import { FiWifi, FiWifiOff } from "react-icons/fi";
import Header from './header';

const Userstatus = () => {
 const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <>
  <Header/>
    <div className=" flex  justify-center text-[#3c4a21] transition-all duration-300">
      <div className="bg-[#e1f1c6] p-8 rounded-xl shadow-lg text-center w-[300px] m-2">
        <div className="text-5xl mb-4 flex justify-center">
          {online ? <FiWifi className="text-green-600" /> : <FiWifiOff className="text-red-500" />}
        </div>
        <h2 className="text-xl font-semibold">
          Status:{" "}
          <span className={online ? "text-green-700" : "text-red-600"}>
            {online ? "User is Online " : "User is Offline"}
          </span>
        </h2>
      </div>
    </div>
  </>
  )
}

export default Userstatus