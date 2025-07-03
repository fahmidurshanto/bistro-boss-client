import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Recom from '../../Shared/Recom/Recom';

const ChefRecoms = () => {
    const [recoms, setRecoms] = useState([]);
    useEffect(() =>{
        fetch("chefRecoms.json")
        .then(res => res.json())
        .then(data => setRecoms(data))
    }, [])
    return (
        <section className='mb-12 w-2/3 mx-auto'>
            <SectionTitle heading={"chef recommends"} subHeading={"...Should try..."} ></SectionTitle>
            <div className='grid md:grid-cols-3 gap-8'>
                {
                    recoms.map((item) => <Recom key={item.id} item={item}></Recom>)
                }
            </div>
        </section>
    );
};

export default ChefRecoms;