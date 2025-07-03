// src/pages/Order/Order.jsx
import { useState, useEffect } from "react";
import orderImg from "../../../assets/shop/order.jpg";
import Cover from "../../Shared/Cover/Cover";
import TabSystem from "../../Shared/TabSystem/TabSystem";
import { Helmet } from "react-helmet";
import useMenu from "../../../hooks/useMenu";
import { useParams } from "react-router-dom";

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const { category } = useParams();

    // Map URL category to tab index
    useEffect(() => {
        const categoryMap = {
            "offered": 0,
            "salad": 1,
            "soup": 2,
            "pizza": 3,
            "dessert": 4,
            "drinks": 5
        };

        if (category && categoryMap[category] !== undefined) {
            setTabIndex(categoryMap[category]);
        }
    }, [category]);

    return (
        <div>
            <Helmet>
                <title>Order Food - Bistro Boss</title>
                <meta name="description" content="Order your favorite food from our restaurant." />
            </Helmet>
            <Cover img={orderImg} title="Order Food" />
            
            <TabSystem 
                foods={menu} 
                tabIndex={tabIndex} 
                setTabIndex={setTabIndex} 
            />
        </div>
    );
};

export default Order;