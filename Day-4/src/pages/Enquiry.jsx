import '../assets/css/enquiry.css'; // Import CSS file for styling
import CustomNavBar from '../components/CustomNavBar';

const EnquiryPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="enquiry-page_enquiry">
      {/* Hero Banner */}<CustomNavBar/>
      <div className="hero-banner_enquiry">
        <h1 className="headline_enquiry">Have Questions? We are Here to Help! <br/>Contact BritEng Cert for All Your Enquiries.</h1>
        <h2 className="subheadline_enquiry">Get personalized assistance with course details, payment options, and anything else on your mind.</h2>
      </div>

      {/* Enquiry Categories */}
      <div className="enquiry-categories_enquiry">
        {/* Course Specific */}
        <div className="category_enquiry">
          <h3 className="category-title_enquiry">Course Specific</h3>
          <ul>
            <li>Curriculum and learning outcomes for specific courses.</li>
            <li>Eligibility requirements and prerequisites.</li>
            <li>Scheduling options and session timings.</li>
            <li>Instructor qualifications and teaching methods.</li>
          </ul>
        </div>
        {/* Payment & Enrollment */}
        <div className="category_enquiry">
          <h3 className="category-title_enquiry">Payment & Enrollment</h3>
          <ul>
            <li>Fee structure and payment methods.</li>
            <li>Scholarship and discount opportunities.</li>
            <li>Enrollment process and registration steps.</li>
            <li>Cancellation and refund policies.</li>
          </ul>
        </div>
        {/* General Enquiries */}
        <div className="category_enquiry">
          <h3 className="category-title_enquiry">General Enquiries</h3>
          <ul>
            <li>Learning platforms and technology requirements.</li>
            <li>Support services and resources available.</li>
            <li>Corporate training and group discounts.</li>
            <li>Company information and background.</li>
          </ul>
        </div>
      </div>

      {/* Enquiry Form */}
      <div className="enquiry-form_enquiry">
        <form onSubmit={handleSubmit}>
          <div className="input-group_enquiry">
            <label htmlFor="name" className="label_enquiry">Name:</label>
            <input type="text" id="name" className="input_enquiry" required />
          </div>
          <div className="input-group_enquiry">
            <label htmlFor="email" className="label_enquiry">Email:</label>
            <input type="email" id="email" className="input_enquiry" required />
          </div>
          <div className="input-group_enquiry">
            <label htmlFor="category" className="label_enquiry">Enquiry Category:</label>
            <select id="category" className="input_enquiry">
              <option value="">Select Category</option>
              {/* Add options for different enquiry categories */}
            </select>
          </div>
          <div className="input-group_enquiry">
            <label htmlFor="message" className="label_enquiry">Message:</label>
            <textarea id="message" className="textarea_enquiry" rows="4" required></textarea>
          </div>
          <button type="submit" className="submit-btn_enquiry">Submit</button>
        </form>
      </div>

      {/* Additional Features */}
      <div className="additional-features_enquiry">
        <p>Additional Features:</p>
        <ul>
          <li>Live Chat</li>
          <li>FAQs Section</li>
          <li>Knowledge Base</li>
          <li>Contact Information</li>
        </ul>
      </div>
    </div>
  );
}

export default EnquiryPage;
