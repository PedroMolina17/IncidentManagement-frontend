"use client";
import { useGetCountUsers } from "../hooks/useUsers";
import CardsHome from "./components/CardsHome";
import { RiAdminFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { MdReportProblem } from "react-icons/md";

const Admin = () => {
  const { data: DataUserAdmins, isLoading: isLoadingDataUserAdmins } =
    useGetCountUsers("2");

  const { data: DataUserRole, isLoading: isLoadingDataUsersRole } =
    useGetCountUsers("1");

  const { data: DataUser, isLoading: isLoadingDataUsers } = useGetCountUsers();

  return (
    <>
      <p className="text-3xl font-bold pb-8">Dashboard</p>
      <div className="grid grid-cols-4 gap-8 rounded-md">
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
          color={
            DataUserAdmins > 0
              ? "from-violet-600 to-violet-500"
              : "from-green-600 to-green-500"
          }
          subtotal={isLoadingDataUserAdmins ? 0 : DataUserAdmins}
          total={isLoadingDataUserAdmins ? 0 : DataUser}
          image={<MdReportProblem />}
        />
        <CardsHome
          title={"Admins"}
          color={"from-[#c731e7] to-[#e56efd]"}
          subtotal={isLoadingDataUsersRole ? 0 : DataUserRole}
          total={isLoadingDataUsers ? 0 : DataUser}
          image={<RiAdminFill />}
        />
      </div>
    </>
  );
};

export default Admin;
