"use client";
import React from "react";
import { AiFillMessage } from "react-icons/ai";
import { RiProjectorFill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";
import { BarType } from "@/app/(admin)/dashboard/page";
import { toast } from "react-toastify";
import { IoIosAddCircle } from "react-icons/io";

const Bar = ({ setWork, work }: { setWork: React.Dispatch<React.SetStateAction<BarType>>, work: BarType }) => {

  const barLogic = (props: number) => {
    if (props === 1) {
      setWork({ first: true, second: false, third: false });
    } else if (props === 2) {
      setWork({ first: false, second: true, third: false });
    } else if (props === 3) {
      setWork({ first: false, second: false, third: true });
    } else {
      toast.warning("Something went wrong!");
    }
  };

  const logOut = () => {
    confirm("Are you sure you want to log out?");
  };

  return (
    <nav className="w-[100px] p-6 h-screen bg-[#0507257e] shadow-lg text-3xl relative">
      {/* Messages Button */}
      <div 
        onClick={() => barLogic(1)}
        className={`rounded-full py-2 mb-6 cursor-pointer flex justify-center items-center hover:bg-[#8686866b] duration-100 active:scale-90 ${
          work.first ? "text-[#3377f7]" : ""
        }`}
      >
        <AiFillMessage />
      </div>

      {/* Project Options Button */}
      <div 
        onClick={() => barLogic(2)}
        className={`rounded-full py-2 mb-6 cursor-pointer flex justify-center items-center hover:bg-[#8686866b] duration-100 active:scale-90 ${
          work.second ? "text-[#3377f7]" : ""
        }`}
      >
        <RiProjectorFill />
      </div>

      {/* Add Button */}
      <div 
        onClick={() => barLogic(3)}
        className={`rounded-full py-2 mb-6 cursor-pointer flex justify-center items-center hover:bg-[#8686866b] duration-100 active:scale-90 ${
          work.third ? "text-[#3377f7]" : ""
        }`}
      >
        <IoIosAddCircle />
      </div>

      {/* Logout Button */}
      <div 
        onClick={logOut}
        className="rounded-full py-2 mb-6 cursor-pointer flex justify-center items-center text-red-600 duration-100 active:scale-90 absolute bottom-10 left-[35%]"
      >
        <IoLogOut />
      </div>
    </nav>
  );
};

export default Bar;
