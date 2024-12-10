
interface MyComponentProps {
  children: React.ReactNode;
}

export default function Navbar({children}: MyComponentProps) {
    return (
      <div className="p-4 bg-gray-800 text-white shadow">
        {children} {/* This is used for Sidebar Toggle Button */}
        <h1 className="text-lg font-bold">Simple CRM</h1>
      </div>
    );
  }
  