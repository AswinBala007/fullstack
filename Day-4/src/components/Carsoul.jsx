import { Carousel } from 'rsuite';
import confidence from "../assets/images/confidence.png";
import journey from "../assets/images/journey.png"
import worlds from "../assets/images/worlds.png"
const Carous = () => (
  <Carousel autoplay style={{maxWidth:"800px" , marginLeft:"auto",marginRight:"auto",objectFit:"cover",borderRadius:"20px"}}>
    <img src={confidence} height="250" />
    <img src={journey} height="250" />
    <img src={worlds} height="250" />
    <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4" height="250" />
    <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5" height="250" />
  </Carousel>
  
);

export default Carous