import { Tab } from 'react-tabs';

const OrderTab = ({ items }) => {
    return (
        <div  className="flex justify-center space-x-4 p-5 bg-gray-200 rounded-lg">
        {items.map((category, index) => (
                 <Tab key={index} className="text-black cursor-pointer hover:text-yellow-500 font-semibold">
                   {category}
                 </Tab>
               ))}
               </div>
    );
};

export default OrderTab;