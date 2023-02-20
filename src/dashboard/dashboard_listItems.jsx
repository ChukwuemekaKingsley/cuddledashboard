import React from 'react'

const Dashboard_listItems = ({name, photoUrl, dateOfM, vehicleType, dueDate, cost, vehicleNo, model}) => {
  return (
    <div className="grid hover:bg-[#F97B04]/5 grid-cols-7 text-center text-[13px] px-4 py-4">
      <div className="flex space-x-2 col-span-1">
        <input type="checkbox" />
        <p>{vehicleNo}</p>
      </div>
      <div className="col-span-1">
        <img src={photoUrl} alt="" />
        <p>{name}</p>
      </div>
      <div className="col-span-1">
        <p>{dateOfM}</p>
      </div>
      <div className="col-span-1">
        <p>{vehicleType}</p>
      </div>
      <div className="col-span-1">
        <p>{dueDate}</p>
      </div>
      <div className="col-span-1">
        <p>{model}</p>
      </div>
      <div className="col-span-1 text-[#F97B04]">
        <p>{cost}</p>
      </div>
    </div>
  );
}

export default Dashboard_listItems