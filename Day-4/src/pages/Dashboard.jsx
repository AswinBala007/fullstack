import AdNavbar from "../components/AdminNavBar";
import Sidebar from "../components/SideNavBar";
import "../assets/css/dashboard.css"; // Import CSS for styling

const AdDashboard = () => {
  // Sample data (replace with actual data from your backend)
  const activeCourses = 15;
  const enrolledUsers = 250;
  const completedCertifications = 100;
  const recentActivity = {
    logins: 120,
    enrollments: 50,
    completions: 30,
  };
  const revenueGenerated = "$10,000";

  return (
    <div className="home_ad">
      <AdNavbar />
      <div className="homeContainer_ad">
        <Sidebar className="sidebar_ad"/>
        <div className="dashboardContent_ad">
          <h2>Dashboard Overview</h2>
          {/* Cards for different parameters */}
          <div className="dashboardCards_ad">
            {/* Card for Number of Active Courses */}
            <div className="dashboardCard_ad">
              <h3>Active Courses</h3>
              <p>{activeCourses}</p>
            </div>
            {/* Card for Number of Enrolled Users */}
            <div className="dashboardCard_ad">
              <h3>Enrolled Users</h3>
              <p>{enrolledUsers}</p>
            </div>
            {/* Card for Number of Completed Certifications */}
            <div className="dashboardCard_ad">
              <h3>Completed Certifications</h3>
              <p>{completedCertifications}</p>
            </div>
            {/* Card for Recent User Activity */}
            <div className="dashboardCard_ad">
              <h3>Recent User Activity</h3>
              <p>
                Logins: {recentActivity.logins} <br />
                Enrollments: {recentActivity.enrollments} <br />
                Completions: {recentActivity.completions}
              </p>
            </div>
            {/* Card for Overall Revenue Generated */}
            <div className="dashboardCard_ad">
              <h3>Overall Revenue Generated</h3>
              <p>{revenueGenerated}</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdDashboard;
