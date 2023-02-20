import React from 'react'
import {ChevronDownIcon, MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import {
  BellIcon,
} from "@heroicons/react/24/solid";
import userIcon from '../assets/user123.png'

const Header = ({displayName, photoUrl}) => {
  return (
    <div className="grid grid-cols-4 w-full h-14">
      <div className="col-span-1"></div>
      <div className="col-span-2 flex items-center justify-center border-b-[1px] border-[#F97B04]/40">
        <div className="flex items-center bg-[#CCCCCC]/20 px-16 w-fit rounded-md space-x-6 py-2">
          <MagnifyingGlassIcon className="w-4 h-4" />
          <input
            className=" bg-transparent w-[300px]"
            type="text"
            placeholder="Search report, analytic or anything here"
          />
        </div>
      </div>
      <div className="flex items-center space-x-2 px-16 justify-end col-span-1 border-b-[1px] border-[#F97B04]/40">
        <BellIcon className="h-6 w-6" />
        <div className="flex items-center text-[13px] space-x-2">
          <img src={photoUrl} alt="userProfile" className=' cursor-pointer w-9 h-9' />
          <div>
            <p className="text-[12px] text-[#F97B04]">{displayName}</p>
            <p>Sales Manager</p>
          </div>
        </div>
        <ChevronDownIcon className="h-4 w-4" />
      </div>
    </div>
  );
}

export default Header