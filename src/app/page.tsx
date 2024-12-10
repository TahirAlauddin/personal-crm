import Image from "next/image";
import StatCard from "../components/dashboard/StatCard";

export default function Home() {
  return (
    <div className="flex">
      <StatCard title="My Title" value={123}></StatCard>
      <StatCard title="My Title" value={13}></StatCard>
      <StatCard title="My Title" value={7}></StatCard>
    </div>
   
  )
}