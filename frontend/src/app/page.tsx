import StatCard from "../components/dashboard/StatCard";
import UpcomingAgenda from "../components/UpcomingAgenda";
import EmailOpenChart from "../components/EmailOpenChart";
import CompanyList from "@/components/CompanyList";
import PeopleList from "@/components/PeopleList";
import CompanyCategoryChart from "@/components/CompanyCategoryChart";

const Home = ()  =>{
  return (
    <>
      {/* Header section with dashboard title */}
      <div className="border-b-[1px] my-2">
        <h1 className="mx-3 my-2 font-semibold text-lg">Dashboard</h1>
      </div>

      {/* Statistics cards section showing key metrics */}
      <div className="flex flex-wrap gap-3 m-3">
        <StatCard title="Email Sent" value="1,461 Mail"></StatCard>
        <StatCard title="Active Company" value="23 Company"></StatCard>
        <StatCard title="Total Contact" value="652 Contacts"></StatCard>
        <StatCard title="Ongoing Task" value="9 Task"></StatCard>
      </div>

      {/* Charts section - responsive layout that stacks on smaller screens */}
      <div className="flex flex-row max-lg:flex-col">
        <UpcomingAgenda />
        <EmailOpenChart />
      </div>

      {/* Lists and category chart section */}
      <div className="flex flex-col gap-8">
        {/* List of people/contacts */}
        <PeopleList />
        
        {/* Company information section with list and category distribution */}
        <div className="flex">
          <CompanyList />
          <CompanyCategoryChart />

        </div>
      </div>
    </>
  );
}

export default Home;