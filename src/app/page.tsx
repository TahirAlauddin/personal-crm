import StatCard from "../components/dashboard/StatCard";
import UpcomingAgenda from "../components/UpcomingAgenda";
import EmailOpenChart from "../components/EmailOpenChart";
import CompanyList from "@/components/CompanyList";
import PeopleList from "@/components/PeopleList";
export default function Home() {
  return (
    <div>
      <div className="border-b-[1px] my-2">
        <h1 className="mx-3 my-2 font-semibold text-lg">Dashboard</h1>
      </div>
      <div className="flex flex-wrap gap-3 m-3">
        <StatCard title="Email Sent" value="1,461 Mail"></StatCard>
        <StatCard title="Active Company" value="23 Company"></StatCard>
        <StatCard title="Total Contact" value="652 Contacts"></StatCard>
        <StatCard title="Ongoing Task" value="9 Task"></StatCard>
      </div>
      <div className="flex">
        <UpcomingAgenda />
        <EmailOpenChart />
      </div>
      <div className="flex flex-col gap-8">
        <PeopleList />
        <CompanyList />
      </div>
    </div>
  );
}
