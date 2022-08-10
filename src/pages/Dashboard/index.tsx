import React from "react";
import Cards from "../../Components/Common/Cards";
import DashboardLayout from "../../Components/Layouts/DashboardLayout";
const Dashboard = () => {
  return (
    <>
      <DashboardLayout>
        <div className="dashboard">
          <div className="row">
            <div className="col-md-12 mb-4">
              <div className="title">
                <h1>Dashboard</h1>
              </div>
              <div className="cards">
                <Cards />
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
