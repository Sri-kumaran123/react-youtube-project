import { TITLE } from "assets/constant";
import SearchBox from "./SearchBox";
import { GrMenu } from "react-icons/gr";

export default function Header({ toggle }) {
  return (
    <header className="h-16 px-4 flex items-center bg-white shadow-md sticky top-0 z-50">
      {/* <span
        onClick={() => toggle((prev) => !prev)}
        className="cursor-pointer"
      >
        <GrMenu />
      </span> */}
      {/* Logo / Title */}
      <h1
        className="hidden md:block pl-3 md:text-2xl  font-sans cursor-pointer select-none mr-4"
        
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
