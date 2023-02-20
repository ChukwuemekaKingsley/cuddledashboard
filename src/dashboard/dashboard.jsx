import React, { useEffect, useState } from "react";
import Dashboard_listItems from "./dashboard_listItems";
import Header from "./header";
import deliveryIcon from "../assets/delivery.png";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { useLocation } from "react-router";
import { getUserData, logout } from "../firebase/firebase";
import LandingPage from "../pages/landingpage";

const Dashboard = () => {
  const location = useLocation();
  const [userDatas, setUserDatas] = useState([]);
  const [userInfo, setUserInfo] = useState();

  const getData = async () => {
    // getting user data from firebase and passing  to a state
    const { userData } = await getUserData(location.state.info);
    console.log(userData);
    setUserDatas(userData?.data);
    setUserInfo(userData);
  };

  // used to avoid dynamically routing
  const checkError = () => {
    if (location.state?.info == undefined){
        window.location.pathname='/'
    }
  };
  useEffect(() => {
    checkError();
    getData();
  }, []);
  return (
    <div>
      <Header
        displayName={userInfo?.displayName}
        photoUrl={userInfo?.photoUrl}
      />
      <div className="grid grid-cols-5">
        <div className="h-[90vh] col-span-1 py-9 px-8 flex-col flex justify-between">
          <div className="flex items-center space-x-3">
            <img src={deliveryIcon} alt="" />
            <p className=" text-[#333333]/60">Package Tracking</p>
          </div>
          <div className="flex items-center space-x-4">
            <ArrowRightOnRectangleIcon className="h-6 w-6" />
            <p
              className=" text-[#333333]/60 cursor-pointer"
              onClick={() => logout()}
            >
              Logout
            </p>
          </div>
        </div>
        <div className=" col-span-4">
          <div className="space-y-3 py-9">
            <h1 className="text-2xl font-semibold">Truck</h1>
            <div className="flex space-x-4">
              <p className="text-[#CCCCCC]">
                Vechicle ID: <span className="text-[#333333]">224488</span>
              </p>
              <p className="text-[#CCCCCC]">
                Last Login:
                <span className="text-[#333333]"> 10 Feb 2020 01:02 PM</span>
              </p>
            </div>
          </div>
          <div className="border-[0.5px] border-[#F97B04]/30">
            <div className="grid grid-cols-7 text-[#333333] text-sm text-center px-4 py-6">
              <div className="flex space-x-2 col-span-1 items-center">
                <input type="checkbox" checked={true} readOnly />
                <p>Vechicle No</p>
              </div>
              <div className=" col-span-1">
                <p>Driver Name</p>
              </div>
              <div className=" col-span-1">
                <p>Date of Maintenance</p>
              </div>
              <div className=" col-span-1">
                <p>Vechicle Type</p>
              </div>
              <div className=" col-span-1">
                <p>Next Due Date</p>
              </div>
              <div className=" col-span-1">
                <p>Vechicle Model</p>
              </div>
              <div className=" col-span-1">
                <p>Cost</p>
              </div>
            </div>
            {userDatas.map((item, i) => (
              <Dashboard_listItems
                key={i}
                cost={item?.cost}
                vehicleNo={item?.vehicleNo}
                vehicleType={item?.vehicleType}
                model={item?.vehicleModel}
                dateOfM={item?.date}
                dueDate={item?.dueDate}
                name={item?.driver}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
