import SearchInput from "./SearchInput";
import { IoMdNotifications } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { RxUpdate } from "react-icons/rx";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import Image from "next/image";

const Navbar = () => {
  return (
    <div className="fixed h-20 p-4 left-96 right-0 bg-[#221f4a] flex justify-between border-b border-slate-600 ">
      <SearchInput />
      <div className="flex  items-center gap-4 text-slate-300 ">
        <div className="flex gap-1 text-4xl">
          <IoMdNotifications className="rounded-md border border-slate-600 p-1 hover:text-white" />
          <AiOutlineMessage className="rounded-md border border-slate-600 p-1 hover:text-white" />
          <RxUpdate className="rounded-md border border-slate-600 p-1 hover:text-white" />
        </div>
        <div className="flex gap-1 items-center bg-[#3f3a7d] rounded-md px-2 py-1">
          <div className="border border-slate-600 w-9 h-9 rounded-full flex justify-center items-center">
            <Image
              src={"/batman.jpg"}
              alt="profile"
              width={600}
              height={600}
              className="rounded-full object-center object-cover"
            ></Image>
          </div>
          <p>Pedro</p>
          <div className="flex bg-[#332e66] h-full">
            <MdOutlineKeyboardArrowDown className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
