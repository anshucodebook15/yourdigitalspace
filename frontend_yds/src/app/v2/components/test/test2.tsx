import Layout from "../../layouts/layout";
import StatCard from "../main/statcard";

const StatsCards = () => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
    <StatCard
      title="Total Outstanding"
      value="$2,345,678"
      change="+12.5%"
      color="green"
    />
    <StatCard title="Active Campaigns" value="24" change="+3" color="green" />
    <StatCard
      title="Collections Rate"
      value="68%"
      change="+5.2%"
      color="green"
    />
    <StatCard title="Avg. Days to Pay" value="12.3" change="-2.1" color="red" />
  </div>
);

// Two Column Section
const TwoColumn = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="card bg-white shadow-sm p-5">
      <h3 className="font-semibold mb-4 text-gray-800 text-lg">
        Channel Performance
      </h3>
      <ul className="space-y-3 text-gray-700 text-base">
        <li className="flex justify-between">
          <span>Email</span>
          <span className="text-base">18.7% response rate</span>
        </li>
        <li className="flex justify-between">
          <span>SMS</span>
          <span className="text-base">22.9% response rate</span>
        </li>
        <li className="flex justify-between">
          <span>Voice</span>
          <span className="text-base">27.8% response rate</span>
        </li>
      </ul>
    </div>
    <div className="card bg-white shadow-sm p-5">
      <h3 className="font-semibold mb-4 text-gray-800 text-lg">
        Recent Activity
      </h3>
      <ul className="space-y-3 text-base text-gray-700">
        <li className="flex justify-between">
          <span>Payment received</span>
          <span className="text-green-600">$1,250</span>
        </li>
        <li>Email sequence completed</li>
        <li>New import processed (450 records)</li>
        <li>Campaign started</li>
      </ul>
    </div>
  </div>
);

// Quick Actions
const QuickActions = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
    <button className="btn btn-outline text-base py-3">Import Data</button>
    <button className="btn btn-outline text-base py-3">New Template</button>
    <button className="btn btn-outline text-base py-3">Create Campaign</button>
    <button className="btn btn-outline text-base py-3">View Reports</button>
  </div>
);

// Layout
const TestLayout = () => {
  return (
    <Layout pageTitle="Welcome, Rahul Siwal">
      <StatsCards />
      <TwoColumn />
      <QuickActions />
    </Layout>
  );
};

export default TestLayout;
