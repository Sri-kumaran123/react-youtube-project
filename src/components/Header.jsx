import { TITLE } from "assets/constant";
import SearchBox from "./SearchBox";

export default function Header({ toggle }) {
  return (
    <header className="h-16 px-4 flex items-center bg-white shadow-md sticky top-0 z-50">
      {/* Logo / Title */}
      <h1
        className="text-xl md:text-2xl font-bold cursor-pointer select-none mr-4"
        onClick={() => toggle((prev) => !prev)}
      >
        {TITLE}
      </h1>

      {/* Search box centered for desktop */}
      <div className="flex-grow hidden sm:flex justify-center">
        <SearchBox />
      </div>

      {/* Search box icon for mobile */}
      <div className="sm:hidden ml-auto">
        <SearchBox mobile />
      </div>
    </header>
  );
}
