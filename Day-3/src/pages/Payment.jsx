import  { useState } from 'react';
import '../assets/css/payment.css';
import CustomNavBar from '../components/CustomNavBar';

const PaymentPage = () => {
  const [userDetails, setUserDetails] = useState({
    name_payment: '',
    email_payment: '',
    phone_payment: '',
    address_payment: '',
    profession_payment: '',
    goals_payment: ''
  });

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState('3_months');
  const [selectedStartDate, setSelectedStartDate] = useState(null);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for submitting user details, selected course, payment option, etc.
    console.log('Form submitted:', userDetails, selectedCourse, selectedPaymentOption, selectedStartDate);
  };

  return (
    <div className="payment-page">
        <CustomNavBar/>
      <div className="payment-header">
        <h1 className="headline_payment">Welcome to Your English Evolution</h1>
        <p className="subheadline_payment">Complete Your Details and Unlock Mastery</p>
      </div>
      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="user-details_payment">
          <h2>User Details</h2>
          <input type="text" className="payment-input" placeholder="Full Name" />
          <input type="email" className="payment-input" placeholder="Email Address" />
          <input type="tel" className="payment-input" placeholder="Phone Number" />
          <input type="text" className="payment-input" placeholder="Address" />
          <input type="text" className="payment-input" placeholder="Profession (Optional)" />
          <input type="text" className="payment-input" placeholder="Goals (Optional)" />
        </div>
        <div className="course-selection_payment">
          <h2>Choose Your Course</h2>
          <select className="payment-input">
            <option value="general_english">General English</option>
            <option value="mastery">Mastery</option>
            <option value="intermediate">Intermediate</option>
          </select>
        </div>
        <div className="payment-options_payment">
          <h2>Course Fees and Schedule</h2>
          {/* Payment options section */}
        </div>
        <div className="payment-gateway_payment">
          <h2>Payment Gateway</h2>
          <div className="payment-options">
            <label>
              <input type="radio" name="payment_option" value="rupay" /> RuPay
            </label>
            <label>
              <input type="radio" name="payment_option" value="paytm" /> Paytm
            </label>
            <label>
              <input type="radio" name="payment_option" value="gpay" /> GPay
            </label>
          </div>
        </div>
        <div className="review-payment_payment">
          <h2>Review and Payment</h2>
          {/* Review and payment section */}
          <input type="text" className="payment-input" placeholder="Card Number" />
          <input type="text" className="payment-input" placeholder="Expiry Date" />
          <input type="text" className="payment-input" placeholder="CVV" />
          <input type="text" className="payment-input" placeholder="Name on Card" />
        </div>
        <button className="payment-button" type="submit">Secure Payment</button>
      </form>
    </div>
  );
};

export default PaymentPage;
