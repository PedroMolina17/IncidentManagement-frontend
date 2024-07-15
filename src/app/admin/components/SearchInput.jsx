import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <div className="rounded-md border-slate-600 border focus-within:border-white flex items-center bg-[#221f4a] w-80 p-2 gap-2 focus-within:transition-colors">
      <FaSearch className="text-white" />
      <input
        type="search"
        placeholder="Search"
        className="focus:outline-none w-full bg-[#221f4a] text-white"
      />
    </div>
  );
};

export default SearchInput;
