import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import useCallFetch from "../hooks/useCallDipatchQuery";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function SearchBox({ mobile = false }) {
  const [search, setSearch] = useState("");
  // const [setSearch, fetchCall] = useCallFetch();
  const [searchparams, setSearchParams] = useSearchParams();
  // const navigate = useNavigate();
  const handleSubmit = (e) =>{
    e.preventDefault();
    setSearchParams({search});
  }
  

  return (
    <div className="w-full max-w-lg rounded-full overflow-hidden relative border border-gray-300 focus-within:border-blue-500 transition-colors duration-200 bg-white shadow-sm">
      <form onSubmit={handleSubmit}>
        <input
        className="w-full h-10 md:h-12 outline-none pl-4 pr-14 text-sm md:text-base"
        type="text"
        name="searchbox"
        // value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search something..."
      />
      <button
        className="absolute right-0 top-0 h-full w-12 flex items-center justify-center 
        border-l border-gray-200 hover:bg-blue-500 hover:text-white text-gray-600 
        transition-colors duration-200 cursor-pointer"
        type="submit"
      >
        <BiSearch size={20} />
      </button>
      </form>
    </div>
  );
}
