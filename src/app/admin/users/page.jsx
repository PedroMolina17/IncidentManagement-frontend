import AdminLayout from "../layout";

const Users = () => {
  return (
    <div>
      <h1>Users Page</h1>
    </div>
  );
};

Users.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default Users;
