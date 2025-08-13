import { useState } from "react";
import { BiSearch } from "react-icons/bi";

export default function SearchBox({ mobile = false }) {
  const [search, setSearch] = useState("");

  if (mobile) {
    // Small icon-only search for mobile header
    return (
      <button
        className="p-2 rounded-full hover:bg-gray-200 active:bg-gray-300 transition"
        onClick={() => console.log("Open mobile search UI")}
      >
        <BiSearch size={22} />
      </button>
    );
  }

  return (
    <div className="w-full max-w-lg rounded-full overflow-hidden relative border border-gray-300 focus-within:border-blue-500 transition-colors duration-200 bg-white shadow-sm">
      <input
        className="w-full h-10 md:h-12 outline-none pl-4 pr-14 text-sm md:text-base"
        type="text"
        name="searchbox"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search something..."
      />
      <button
        className="absolute right-0 top-0 h-full w-12 flex items-center justify-center 
        border-l border-gray-200 hover:bg-blue-500 hover:text-white text-gray-600 
        transition-colors duration-200"
        onClick={() => console.log("Searching for:", search)}
      >
        <BiSearch size={20} />
      </button>
    </div>
  );
}
