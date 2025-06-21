import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img from '../../../assets/home/01.jpg'; // Adjust the path as necessary
import img2 from '../../../assets/home/02.jpg'; 
import img3 from '../../../assets/home/03.png';
import img4 from '../../../assets/home/04.jpg';
import img5 from '../../../assets/home/05.png';
import img6 from '../../../assets/home/06.png'; // Adjust the path as necessary

const Banner = () => {
  return (
    <div className="">

    <Carousel
      className="carousel display-flex flex-col justify-center items-center w-full"
      autoPlay={true}
      showArrows={true}
      infiniteLoop={true}
      showThumbs={true}
    >
      <div>
        <img src={img} alt="Banner 1" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={img2} alt="Banner 2" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={img3} alt="Banner 3" />
        <p className="legend">Legend 2</p>
      </div>
        <div>
            <img src={img4} alt="Banner 4" />
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img src={img5} alt="Banner 5" />
            <p className="legend">Legend 4</p>
        </div>
        <div>
            <img src={img6} alt="Banner 6" />
            <p className="legend">Legend 5</p>
        </div>
    </Carousel>

    </div>
  );
};

export default Banner;
