import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
const AdminLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <Navbar />
      <main className="flex-1 ml-96 pt-24 p-4 text-white">{children}</main>
    </div>
  );
};

export default AdminLayout;
