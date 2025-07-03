import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import BistroBoss from "./BistroBoss/BistroBoss";
import CallUs from "./CallUs/CallUs";
import Category from "./Category/Category";
import ChefRecoms from "./ChefRecoms/ChefRecoms";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <>
          <Helmet>
              <title>Bistro Boss - Your Favorite Restaurant</title>
          </Helmet>
           <Banner />
           <Category/>
           <BistroBoss/>
           <PopularMenu/>
           <CallUs/>
           <ChefRecoms/>
           <Featured/>
           <Testimonials/>
    </>
  );
};

export default Home;
