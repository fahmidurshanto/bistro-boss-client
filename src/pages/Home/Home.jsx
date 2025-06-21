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
