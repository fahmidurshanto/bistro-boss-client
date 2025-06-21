import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() =>{
        fetch("menu.json")
        .then(res => res.json())
        .then(data => {
            const popularMenu =data.filter(item => item.category === 'popular')
            console.log(popularMenu);
            setMenu(popularMenu);            // Assuming you want to filter the menu items by category 'popular'     

        })
      
    },[])

    const loadFullMenu = () => {
        fetch("menu.json")
        .then(res => res.json())
        .then(data => {
            setMenu(data);
        });
    }
    return (
        <section className='mb-12'>
            <SectionTitle subHeading={"...Check it out..."} heading={"From our menu"}></SectionTitle>
            <div className='grid md:grid-cols-2 gap-16'>
                {
                   menu.map((item) =><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <button onClick={loadFullMenu} className='btn btn-outline border-0 border-b-4 mt-10 text-yellow-500 mb-16 '>View full menu</button>
        </section>
    );
};

export default PopularMenu;