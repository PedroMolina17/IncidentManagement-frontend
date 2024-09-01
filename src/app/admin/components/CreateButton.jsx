"use client";
import { useRouter } from "next/navigation";
const CreateButton = ({ route }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/admin/users/create`);
  };

  return (
    <button onClick={handleClick} className="border rounded-md p-2">
      {route}
      Create
    </button>
  );
};

export default CreateButton;
