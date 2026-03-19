import AddLeave from "../components/AddLeave";
import LeaveList from "../components/LeaveList";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Smart Leave Management
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <AddLeave />
        <LeaveList />
      </div>

    </div>
  );
};

export default Dashboard;