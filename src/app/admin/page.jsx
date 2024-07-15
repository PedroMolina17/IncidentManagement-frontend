"use client";
import { useGetCountUsers } from "../hooks/useUsers";

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
    <div>
      <h1>Admin Dashboard Home</h1>

      <section>
        <h2>Data User Admins</h2>
        {isLoadingDataUserAdmins ? (
          <p>Cargando...</p>
        ) : isErrorDataUserAdmins ? (
          <p>Error al cargar los datos de admins.</p>
        ) : DataUserAdmins ? (
          <div>
            <p>Total de admins: {DataUserAdmins}</p>
          </div>
        ) : (
          <p>No se encontraron datos de admins.</p>
        )}
      </section>

      <section>
        <h2>Data User Role</h2>
        {isLoadingDataUsersRole ? (
          <p>Cargando...</p>
        ) : isErrorDataUsersRole ? (
          <p>Error al cargar los datos de roles.</p>
        ) : DataUserRole ? (
          <div>
            <p>Total de roles: {DataUserRole}</p>
          </div>
        ) : (
          <p>No se encontraron datos de roles.</p>
        )}
      </section>

      <section>
        <h2>Data Users</h2>
        {isLoadingDataUsers ? (
          <p>Cargando...</p>
        ) : isErrorDataUsers ? (
          <p>Error al cargar los datos de usuarios.</p>
        ) : DataUser ? (
          <div>
            <p>Total de usuarios: {DataUser}</p>
          </div>
        ) : (
          <p>No se encontraron datos de usuarios.</p>
        )}
      </section>
    </div>
  );
};

export default Admin;
