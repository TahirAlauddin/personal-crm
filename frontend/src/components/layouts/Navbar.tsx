import Image from "next/image";
import SearchBox from "../SearchBox";

interface MyComponentProps {
  children?: React.ReactNode;
}

export default function Navbar({children}: MyComponentProps) {
    return (
      <div className="flex items-center ml-4 w-full h-full gap-4 z-10">
        {children} {/* This is used for Sidebar Toggle Button */}
        <SearchBox />

      </div>
    );
  }
  