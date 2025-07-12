import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import FoodCard from "../FoodCard/FoodCard";

const TabSystem = ({ tabIndex, setTabIndex, foods }) => {
  const categories = [
    { name: "Offered", key: "offered" },
    { name: "Salads", key: "salad" },
    { name: "Soups", key: "soup" },
    { name: "Pizza", key: "pizza" },
    { name: "Desserts", key: "dessert" },
    { name: "Drinks", key: "drinks" },
  ];

  return (
    <Tabs
      selectedIndex={tabIndex}
      onSelect={setTabIndex}
      className="react-tabs"
    >
      <TabList className="flex flex-wrap justify-center gap-2 p-2  rounded-lg w-full  mx-auto">
        {categories.map((category, idx) => (
          <Tab
            key={category.key}
            className={`
              cursor-pointer font-semibold py-3 px-6 transition-colors rounded-lg outline-none border-0
              ${tabIndex === idx
                ? "text-yellow-500 bg-white shadow-md "
                : "text-white hover:text-black bg-black hover:bg-yellow-400 "}
            `}
          >
            {category.name}
          </Tab>
        ))}
      </TabList>

      {categories.map((category, index) => (
        <TabPanel key={index} className="react-tabs__tab-panel">
          <div className="p-4">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {foods
                .filter((food) => food.category === category.key)
                .map((item) => (
                  <SwiperSlide key={item._id}>
                    <FoodCard item={item} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default TabSystem;