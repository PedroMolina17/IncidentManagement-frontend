import AdminLayout from "./layout";
const Admin = () => {
  return (
    <div>
      <h1>Admin Dashboard Home</h1>
    </div>
  );
};

Admin.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default Admin;
