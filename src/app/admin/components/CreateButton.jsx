"use client";
import { useRouter } from "next/navigation";
const CreateButton = ({ href }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  return (
    <button onClick={handleClick} className="border rounded-md p-2">
      Create
    </button>
  );
};

export default CreateButton;
