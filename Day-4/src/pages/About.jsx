import '../assets/css/about.css';
 import founder from "../assets/images/founder.avif";
import confidence from "../assets/images/confidence.png";
import journey from "../assets/images/journey.png";
import worlds from "../assets/images/worlds.png";
import tm1 from "../assets/images/tm1.jpeg";
import tm2 from "../assets/images/tm2.jpeg";
import tm3 from "../assets/images/tm3.jpeg";
import tm4 from "../assets/images/tm4.jpeg";
import tm5 from "../assets/images/tm5.jpeg";
import Carous from '../components/Carsoul';
import CustomNavBar from '../components/CustomNavBar';
const AboutUs = () => {
  const missionSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const differentiatorsSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="about-us-container">
        <CustomNavBar/>
       <section className="hero-section">
        <div className="hero-image">
          {/* <img src={} alt=''></img> */}
          {/* Collage showcasing diverse individuals */}
        </div>
        <div className="hero-content">
          <h1 className="hero-headline">Unlocking Potential, Crossing Borders: BritEng Cert Empowers Your World with English.</h1>
          <h2 className="hero-subheadline">Discover our story, explore our mission, and join a community dedicated to mastering the Queen's English.</h2>
        </div>
      </section>

      <section className="founder-section">
  <div className="founder-box">
    <div className="founder-content">
      <h2>Our Founder's Journey:</h2>
      <p>
        Sundar Pichai, an educator and entrepreneur with a lifelong passion for language and a drive to make it accessible.
        Share a captivating personal anecdote about the founder's own experience overcoming language barriers or witnessing the struggles of others.
        Explain how this inspiration sparked the vision for BritEng Cert – a platform to bridge the gap between language barriers and empower individuals to unlock their full potential on a global stage.

        Sundar Pichai (born June 10, 1972, Madras [now Chennai], Tamil Nadu, India) Indian-born American executive who was CEO of both Google, Inc. (2015– ), and its holding company, Alphabet Inc. (2019– ).

As a boy growing up in Madras, Pichai slept with his brother in the living room of the cramped family home, but his father, an electrical engineer at the British multinational GEC, saw that the boys received a good education. At an early age Pichai displayed an interest in technology and an extraordinary memory, especially for telephone numbers. After earning a degree in metallurgy (B.Tech., 1993) and a silver medal at the Indian Institute of Technology Kharagpur, he was awarded a scholarship to study at Stanford University (M.S. in engineering and materials science, 1995). He remained in the United States thereafter, working briefly for Applied Materials (a supplier of semiconductor materials) and then earning an M.B.A. (2002) from the Wharton School of the University of Pennsylvania.
      </p>
    </div>
    <div className="founder-image">
      <img src={founder} alt="Founder" />
    </div>
  </div>
</section>


      <section className="mission-section">
  <div className="mission-content">
    <h2>Our Mission:</h2>
    <div className="mission-grid">
      <div className="mission-item">
        <img src={confidence} alt="Confidence" />
        <h3>Spark confidence</h3>
        <p>Visualize individuals radiating confidence through language.</p>
      </div>
      <div className="mission-item">
        <img src={journey} alt="Online Learning" />
        <h3>Simplify the journey</h3>
        <p>Showcase students learning comfortably through online platforms and dedicated support.</p>
      </div>
      <div className="mission-item">
        <img src={worlds} alt="Connect the World" />
        <h3>Connect the world</h3>
        <p>Show diverse individuals interacting and collaborating seamlessly across cultures.</p>
      </div>
    </div>
    {/* <Carous/> */}
  </div>
</section>


<section className="differentiators-section">
  <div className="differentiators-content">
    <h2>What Makes Us Different:</h2>
    <div className="differentiators-grid">
      <div className="differentiators-item">
        <img src="personalized-learning.jpg" alt="Personalized Learning" />
        <h3>Personalized Learning</h3>
        <p>Highlight your diverse course offerings, flexible learning formats, and individual support system.</p>
      </div>
      <div className="differentiators-item">
        <img src="practical-application.jpg" alt="Practical Application" />
        <h3>Practical Application</h3>
        <p>Showcase the real-world relevance of your courses and their alignment with professional and academic needs.</p>
      </div>
      <div className="differentiators-item">
        <img src="unwavering-quality.jpg" alt="Unwavering Quality" />
        <h3>Unwavering Quality</h3>
        <p>Emphasize your rigorous standards, qualified instructors, and internationally recognized certifications.</p>
      </div>
      <div className="differentiators-item">
        <img src="technology-driven-solutions.jpg" alt="Technology-driven Solutions" />
        <h3>Technology-driven Solutions</h3>
        <p>Introduce your user-friendly platform, interactive learning tools, and convenient online accessibility.</p>
      </div>
    </div>
  </div>
</section>


      <section className="team-section">
  <div className="team-content">
    <h2>Our Team:</h2>
    <div className="team-grid">
      <div className="team-member">
        <img src={tm1} alt="Team Member 1" />
        <h3>John Doe</h3>
        <p>John is an experienced English teacher with a passion for helping others achieve language proficiency.</p>
      </div>
      <div className="team-member">
        <img src={tm2} alt="Team Member 2" />
        <h3>Kate Cross</h3>
        <p>Kate is a language enthusiast who loves to inspire and motivate students in their language learning journey.</p>
      </div>
      <div className="team-member">
        <img src={tm3} alt="Team Member 3" />
        <h3>Michael Johnson</h3>
        <p>Michael brings years of teaching experience and a unique approach to language instruction.</p>
      </div>
      <div className="team-member">
        <img src={tm4} alt="Team Member 4" />
        <h3>Sarah Wilson</h3>
        <p>Sarah is dedicated to creating engaging and effective learning experiences for students.</p>
      </div>
      {/* <div className="team-member">
        <img src="team-member5.jpg" alt="Team Member 5" />
        <h3>David Brown</h3>
        <p>David's passion for languages drives him to continuously innovate and improve language education.</p>
      </div> */}
      <div className="team-member">
        <img src={tm5} alt="Team Member 6" />
        <h3>Emily Garcia</h3>
        <p>Emily's friendly and supportive approach makes learning English a positive and rewarding experience.</p>
      </div>
    </div>
  </div>
</section>



<section className="testimonials-section">
  <div className="testimonials-content">
    <h2>Testimonials:</h2>
    <div className="testimonial-grid">
      <div className="testimonial-item">
        <div className="testimonial-card">
          <p>"I was able to improve my English skills significantly with BritEng Cert. The personalized learning approach really helped me."</p>
          <p>- John Smith</p>
        </div>
      </div>
      <div className="testimonial-item">
        <div className="testimonial-card">
          <p>"BritEng Cert provided me with the confidence to communicate effectively in English in professional settings."</p>
          <p>- Sarah Johnson</p>
        </div>
      </div>
      <div className="testimonial-item">
        <div className="testimonial-card">
          <p>"The courses at BritEng Cert are practical and relevant to real-world scenarios. Highly recommended!"</p>
          <p>- Michael Brown</p>
        </div>
      </div>
      <div className="testimonial-item">
        <div className="testimonial-card">
          <p>"I appreciate the support and guidance from the instructors at BritEng Cert. They truly care about the students' progress."</p>
          <p>- Emily Wilson</p>
        </div>
      </div>
      <div className="testimonial-item">
        <div className="testimonial-card">
          <p>"Thanks to BritEng Cert, I feel more confident in my English-speaking abilities, which has opened up new opportunities for me."</p>
          <p>- David Lee</p>
        </div>
      </div>
      <div className="testimonial-item">
        <div className="testimonial-card">
          <p>"The interactive learning tools provided by BritEng Cert made the learning experience engaging and enjoyable."</p>
          <p>- Jennifer Garcia</p>
        </div>
      </div>
    </div>
  </div>
</section>


      <section className="future-section">
        <div className="future-content">
          <h2>A Bright Future:</h2>
          <p>Share your vision for the future of BritEng Cert – expanding reach, innovating learning methods, and empowering individuals globally.</p>
          <div className="future-image">
            {/* Image of diverse individuals learning together */}
          </div>
          <button className="cta-button">Join the BritEng Cert Community</button>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
