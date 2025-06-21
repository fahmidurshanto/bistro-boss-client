import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./featured.css"


const Featured = () => {
    return (
        <section className="featured-item bg-fixed py-24">
            <SectionTitle subHeading={"...Check it out..."} heading={"Featured Items"} ></SectionTitle>
           <div className='md:flex justify-center items-center gap-8  text-white px-16 bg-slate-400/15'>
             <div className="p-4">
                <img src={featuredImg} className="p-5"  />
            </div>
            <div className=" space-y-4 text-start">
                <p>Aug 20, 2029</p>
                <h3 className="uppercase">Where can I get some?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maxime, saepe similique provident nesciunt cumque facere! Illum expedita incidunt suscipit iure voluptates, mollitia, saepe perspiciatis dolores autem hic sapiente inventore recusandae eum ad rem facere quae consequuntur sunt dolore molestiae alias corporis provident fugiat quidem? Ipsa corrupti voluptas earum vero.</p>
                <button className="btn btn-outline border-0 border-b-4 text-white  hover:bg-gray-700 hover:text-white">Order Now</button>
            </div>
           </div>
        </section>
    );
};

export default Featured;