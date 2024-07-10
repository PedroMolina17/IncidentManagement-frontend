"use client";
import { IoHomeOutline, IoHomeSharp } from "react-icons/io5";
import { TbUsers } from "react-icons/tb";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { HiMiniUsers } from "react-icons/hi2";
import { BiSolidReport } from "react-icons/bi";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar = () => {
  const pathname = usePathname();
  const navLinks = [
    {
      href: "/admin",
      icon: IoHomeOutline,
      icon2: IoHomeSharp,
      label: "Home",
    },
    {
      href: "/admin/users",
      icon: TbUsers,
      icon2: HiMiniUsers,
      label: "Users",
    },
    {
      href: "admin/category",
      icon: HiOutlineDocumentReport,
      icon2: BiSolidReport,
      label: "Category",
    },
  ];

  return (
    <div className="flex flex-col absolute left-0 w-96 h-full bg-[#221f4a] text-white">
      {navLinks.map((navLink, index) => {
        const Icon = pathname === navLink.href ? navLink.icon2 : navLink.icon;
        return (
          <ul
            key={index}
            className={`w-full ${
              pathname === navLink.href
                ? "text-[#5aba8a] border-r border-[#5aba8a]"
                : "hover:text-slate-400 transition-colors"
            }`}
          >
            <li className="flex items-center">
              <Link href={navLink.href} className="flex items-center space-x-2">
                <Icon
                  className={
                    pathname === navLink.href ? "text-[#5aba8a]" : "text-white"
                  }
                />
                <span>{navLink.label}</span>
              </Link>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Sidebar;
