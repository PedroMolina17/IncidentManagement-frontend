"use client";
import { useGetCountUsers } from "../hooks/useUsers";
import CardsHome from "./components/CardsHome";
import { RiAdminFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

const Admin = () => {
  const {
    data: DataUserAdmins,
    isLoading: isLoadingDataUserAdmins,
    isError: isErrorDataUserAdmins,
  } = useGetCountUsers("2");

  const {
    data: DataUserRole,
    isLoading: isLoadingDataUsersRole,
    isError: isErrorDataUsersRole,
  } = useGetCountUsers("1");

  const {
    data: DataUser,
    isLoading: isLoadingDataUsers,
    isError: isErrorDataUsers,
  } = useGetCountUsers();

  return (
    <div className="grid grid-cols-4 gap-2 rounded-md">
      <CardsHome
        title={"Admins"}
        color={"from-[#4e42d3] to-[#6456f9]"}
        subtotal={DataUserAdmins}
        total={DataUser}
        image={<RiAdminFill />}
      />
      <CardsHome
        title={"Users"}
        color={"from-[#4296f2] to-[#5d94ff]"}
        subtotal={DataUserRole}
        total={DataUser}
        image={<FaUser />}
      />
      <CardsHome
        title={"Admins"}
        color={"from-[#920afe] to-[#af4bfe]"}
        subtotal={DataUserAdmins}
        total={DataUser}
        image={<RiAdminFill />}
      />
      <CardsHome
        title={"Admins"}
        color={"from-[#c731e7] to-[#e56efd]"}
        subtotal={DataUserRole}
        total={DataUser}
        image={<RiAdminFill />}
      />
    </div>
  );
};

export default Admin;
