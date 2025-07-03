import { Helmet } from "react-helmet";
import Cover from "../Shared/Cover/Cover";
import offeredImg from "../../assets/menu/banner3.jpg"
import menuImg from "../../assets/menu/banner3.jpg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";


const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === "dessert")
    const pizza = menu.filter(item => item.category === "pizza")
    const salad = menu.filter(item => item.category === "salad")
    const drinks = menu.filter(item => item.category === "drinks")
    const soups = menu.filter(item => item.category === "soup");
    const offered = menu.filter(item => item.category === "offered");

    return (
        <div className="mt-10">
            <Helmet>
                <title>Bistro Boss - Menu</title>
            </Helmet>       
           <Cover img={menuImg} title={"Our Menu"}></Cover>
            <SectionTitle subHeading={"...Don't Miss..."} heading={"Today's Offers"}></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered} title={"Offered Menu"} coverImg={offeredImg}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory items={desserts} title={"Desserts"} coverImg={dessertImg}></MenuCategory>
            {/* salad menu items */}
            <MenuCategory items={salad} title={"Salads"} coverImg={saladImg}></MenuCategory>
            {/* soup menu items */}
            <MenuCategory items={soups} title={"Soups"} coverImg={soupImg}></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory items={pizza} title={"Pizza"} coverImg={pizzaImg}></MenuCategory>
            {/* drinks menu items */}
            <MenuCategory items={drinks} title={"Drinks"} coverImg={pizzaImg}></MenuCategory>
        </div>
    );
};

export default Menu;