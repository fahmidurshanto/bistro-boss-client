import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
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
                ? 'text-yellow-500 bg-white shadow-md ' 
                : 'text-white hover:text-black bg-black hover:bg-yellow-400 '}
            `}
          >
            {category.name}
          </Tab>
        ))}
      </TabList>

      {categories.map((category, index) => (
        <TabPanel key={index} className="react-tabs__tab-panel">
          <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {foods
              .filter((food) => food.category === category.key)
              .slice(0, 6)
              .map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default TabSystem;