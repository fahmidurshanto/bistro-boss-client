
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import Review from '../../Shared/Review/Review';

const Testimonials = () => {

    const [ reviews, setReviews ] = useState([]);

    useEffect(() =>{
        fetch("reviews.json")
        .then(res => res.json())
        .then(data => {
           setReviews(data);
            // Assuming you want to do something with the fetched data
        })
    },[])

    return (
        <section>
            <SectionTitle heading="Testimonials" subHeading="...What Our Clients Say..."></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {
                reviews.map((review) => <SwiperSlide key={review._id}>
                    <Review review={review}></Review>
                </SwiperSlide>)
            }
        
      </Swiper>
        </section>
    );
};

export default Testimonials;