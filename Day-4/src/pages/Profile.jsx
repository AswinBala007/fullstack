 import '../assets/css/profile.css';
import profile from "../assets/images/tm2.jpeg";
import CustomNavBar from '../components/CustomNavBar';
function Profile() {
  // Sample data
  const courses = [
    { id: 1, name: 'English Literature', progress: 60 },
    { id: 2, name: 'British History', progress: 40 },
    { id: 3, name: 'English Language', progress: 75 },
    { id: 4, name: 'British Literature', progress: 80 },
    { id: 5, name: 'Shakespeare Studies', progress: 55 },
    { id: 6, name: 'Victorian Literature', progress: 90 },
    { id: 7, name: 'British Culture', progress: 70 },
    { id: 8, name: 'Contemporary British Writing', progress: 85 },
    { id: 9, name: 'English Grammar', progress: 65 },
    { id: 10, name: 'British Politics', progress: 50 },
    // Add more courses as needed
  ];
  const userData = {
    username: 'Emiley',
    email: 'Emiley@example.com',
    age: 25,
    country: 'United States',
    occupation: 'Student',
    interests: ['Reading', 'Writing', 'Coding'],
    // Add more user parameters as needed
  };

  const assignments = [
    { id: 1, name: 'Essay on Shakespeare', dueDate: 'January 31, 2024' },
    { id: 2, name: 'Research Paper on Victorian Era', dueDate: 'February 10, 2024' },
    { id: 3, name: 'British History Assignment', dueDate: 'February 15, 2024' },
    { id: 4, name: 'Literature Review on British Culture', dueDate: 'February 20, 2024' },
    { id: 5, name: 'Grammar Quiz', dueDate: 'February 25, 2024' },
    { id: 6, name: 'British Politics Debate', dueDate: 'March 1, 2024' },
    { id: 7, name: 'Essay on Victorian Literature', dueDate: 'March 5, 2024' },
    { id: 8, name: 'Presentation on Contemporary British Writing', dueDate: 'March 10, 2024' },
    { id: 9, name: 'Quiz on British Culture', dueDate: 'March 15, 2024' },
    { id: 10, name: 'Assignment on Shakespeare Studies', dueDate: 'March 20, 2024' },
    // Add more assignments as needed
  ];

  const grades = [
    { id: 1, assignment: 'Essay on Shakespeare', grade: 'A' },
    { id: 2, assignment: 'British History Assignment', grade: 'B+' },
    { id: 3, assignment: 'Grammar Quiz', grade: 'A-' },
    { id: 4, assignment: 'Presentation on Contemporary British Writing', grade: 'A' },
    { id: 5, assignment: 'Research Paper on Victorian Era', grade: 'B' },
    { id: 6, assignment: 'British Politics Debate', grade: 'B+' },
    { id: 7, assignment: 'Literature Review on British Culture', grade: 'A-' },
    { id: 8, assignment: 'Quiz on British Culture', grade: 'B-' },
    { id: 9, assignment: 'Essay on Victorian Literature', grade: 'A+' },
    { id: 10, assignment: 'Assignment on Shakespeare Studies', grade: 'A' },
    // Add more grades as needed
  ];

  return (
    <>
   
    <CustomNavBar className="custom-navbar" />
     <div className="app_profile">

    <section className="user-section_profile">
            <div className="user-card_profile">
              <div className="user-image_profile">
                <img src={profile} alt="Profile Picture" />
              </div>
              <div className="user-details_profile">
                <h3 className="user-name_profile">{userData.username}</h3>
                <p className="user-email_profile">Email: {userData.email}</p>
                <p className="user-age_profile">Age: {userData.age}</p>
                <p className="user-country_profile">Country: {userData.country}</p>
                <p className="user-occupation_profile">Occupation: {userData.occupation}</p>
                <p className="user-interests_profile">Interests: {userData.interests.join(', ')}</p>
                {/* Add other user parameters here */}
              </div>
            </div>
          </section>
      <main className="main_profile">
        <section className="section_profile">
          <h2 className="h2_profile">My Courses</h2>
          <div className="card-container_profile">
            {courses.map(course => (
              <div className="card_profile" key={course.id}>
                <h3 className="h3_profile">{course.name}</h3>
                <progress className="progress_profile" value={course.progress} max="100"></progress>
              </div>
            ))}
          </div>
        </section>
        <section className="section_profile">
          <h2 className="h2_profile">Upcoming Assignments</h2>
          <div className="card-container_profile">
            {assignments.map(assignment => (
              <div className="card_profile" key={assignment.id}>
                <h3 className="h3_profile">{assignment.name}</h3>
                <p className="p_profile">Due: {assignment.dueDate}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="section_profile">
          <h2 className="h2_profile">Grades</h2>
          <div className="card-container_profile">
            {grades.map(grade => (
              <div className="card_profile" key={grade.id}>
                <h3 className="h3_profile">{grade.assignment}</h3>
                <p className="p_profile">Grade: {grade.grade}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="footer_profile">
        {/* Footer content */}
      </footer>
    </div> </>
  );
}

export default Profile;
