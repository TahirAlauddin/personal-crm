import Image from "next/image";
import SearchBox from "../SearchBox";

import { FileQuestion } from "lucide-react";
import Dropdown from "../Dropdown";

interface MyComponentProps {
  children?: React.ReactNode;
}

export default function Navbar({ children }: MyComponentProps) {
  return (
    <div className="flex justify-between w-full h-full z-10">
      <div className="flex gap-4 items-center ml-4">
        {children} {/* This is used for Sidebar Toggle Button */}
        <SearchBox />
      </div>
      <div className="flex gap-8">
          <a className="flex items-center gap-3 text-neutral-80 text-sm font-medium" href="/helpcenter">
            <FileQuestion width={15} height={15} />
            Help Center
          </a>

        {/* Profile dropdown with picture */}
        <div className="flex items-center gap-3 text-black">
          <Image
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile"
            width={32}
            height={32}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <div>
              {/* dropdown */}
              <Dropdown
                className="border-none text-sm font-medium"
                buttonText="John D."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
