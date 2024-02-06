import '../assets/css/courses.css'; // Import CSS file for styling
import ielts from "../assets/images/ielts.jpg"
import toefl from "../assets/images/toefl.gif"
import eot from "../assets/images/eot.jpg"
import literature from "../assets/images/literature.webp"
import creative from "../assets/images/creative.jpg"
import medical from "../assets/images/medical.jpg"
import business from "../assets/images/business.jpg"
import legal from "../assets/images/legal.jpg"
import begin from "../assets/images/begin.png"
import inter from "../assets/images/inter.png"
import master from "../assets/images/master.jpg"
import CustomNavBar from '../components/CustomNavBar';

const CoursesPage = () => {
  return (
    <div className="courses-page_course">
      {/* Hero Banner */}
      <CustomNavBar/>
      <div className="hero-banner_course">
        <h1 className="headline_course">Discover Your Path to Proficiency: <br/>Choose From Our Diverse Range of British English Courses.</h1>
      </div>

      {/* Course Categories */}
      <div className="course-categories_course">
        {/* General English */}
        <div className="category_course">
          <h2 className="category-title_course">General English</h2>
          {/* Courses */}
          <div className="course_course">
            <img src={begin} alt="General English Thumbnail" />
            <div className="course-details_course">
              <h3>Beginner Fundamentals</h3>
              <p>Build a solid foundation in grammar, vocabulary, and pronunciation.</p>
              <button className="cta-button_course">Learn More</button>
            </div>
          </div>
          <div className="course_course">
            <img src={inter} alt="General English Thumbnail" />
            <div className="course-details_course">
              <h3>Intermediate Essentials</h3>
              <p>Enhance your fluency and accuracy in daily communication.</p>
              <button className="cta-button_course">Learn More</button>
            </div>
          </div>
          <div className="course_course">
            <img src={master} alt="General English Thumbnail" />
            <div className="course-details_course">
              <h3>Advanced Mastery</h3>
              <p>Hone your skills for academic or professional success.</p>
              <button className="cta-button_course">Learn More</button>
            </div>
          </div>
        </div>

        {/* Professional English */}
        <div className="category_course">
          <h2 className="category-title_course">Professional English</h2>
          {/* Courses */}
          <div className="course_course">
            <img src={business} alt="Professional English Thumbnail" />
            <div className="course-details_course">
              <h3>Business Communication</h3>
              <p>Master English for presentations, meetings, and email writing.</p>
              <button className="cta-button_course">Learn More</button>
            </div>
          </div>
          <div className="course_course">
            <img src={legal} alt="Professional English Thumbnail" />
            <div className="course-details_course">
              <h3>Legal English</h3>
              <p>Gain specialized vocabulary and grammar for legal documents and contracts.</p>
              <button className="cta-button_course">Learn More</button>
            </div>
          </div>
          <div className="course_course">
            <img src={medical} alt="Professional English Thumbnail" />
            <div className="course-details_course">
              <h3>Medical English</h3>
              <p>Develop communication skills for medical fields.</p>
              <button className="cta-button_course">Learn More</button>
            </div>
          </div>
        </div>

        {/* Exam Preparation */}
        <div className="category_course">
          <h2 className="category-title_course">Exam Preparation</h2>
          {/* Courses */}
          <div className="course_course">
            <img src={ielts} alt="Exam Preparation Thumbnail" />
            <div className="course-details_course">
              <h3>IELTS Test Prep</h3>
              <p>Confidently tackle the International English Language Testing System.</p>
              <button className="cta-button_course">Learn More</button>
            </div>
          </div>
          <div className="course_course">
            <img src={toefl} alt="Exam Preparation Thumbnail" />
            <div className="course-details_course">
              <h3>TOEFL iBT Exam Preparation</h3>
              <p>Master the Test of English as a Foreign Language.</p>
              <button className="cta-button_course">Learn More</button>
            </div>
          </div>
        </div>

        {/* Special Interest */}
        <div className="category_course">
          <h2 className="category-title_course">Special Interest</h2>
          {/* Courses */}
          <div className="course_course">
            <img src={eot} alt="Special Interest Thumbnail" />
            <div className="course-details_course">
              <h3>English for Travel</h3>
              <p>Speak English confidently on your next adventure abroad.</p>
              <button className="cta-button_course">Learn More</button>
            </div>
          </div>
          <div className="course_course">
            <img src={literature} alt="Special Interest Thumbnail" />
            <div className="course-details_course">
              <h3>English for Literature</h3>
              <p>Dive deeper into the beauty and intricacies of English literature.</p>
              <button className="cta-button_course">Learn More</button>
            </div>
          </div>
          <div className="course_course">
            <img src={creative} alt="Special Interest Thumbnail" />
            <div className="course-details_course">
              <h3>English for Creative Writing</h3>
              <p>Unleash your storytelling potential in English.</p>
              <button className="cta-button_course">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesPage;
