import Image from "next/image";
import SearchBox from "../SearchBox";

interface MyComponentProps {
  children: React.ReactNode;
}

export default function Navbar({children}: MyComponentProps) {
    return (
      <div className="px-4 py-2 text-white shadow relative z-10">
        {children} {/* This is used for Sidebar Toggle Button */}
        <SearchBox />

      </div>
    );
  }
  