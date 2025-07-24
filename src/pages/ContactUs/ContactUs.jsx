import React from 'react';
import Cover from '../Shared/Cover/Cover';
import contactImg from "../../assets/contact/banner.jpg"
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const ContactUs = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const message = form.message.value;
        console.log(name, email, phone, message);
    }
    return (
        <div className='my-10'>
            <Cover img={contactImg} title={"Contact Us"}></Cover>
            <SectionTitle subHeading={"...visit us..."} heading={"Contact Form"}></SectionTitle>
            <div className='flex gap-4 items-center justify-center'>
                <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <input type="text" placeholder='Name' name='name' className='input input-bordered w-full focus-visible:outline-none'/>
                        <input type="email" placeholder='Email' name='email' className='input input-bordered w-full focus-visible:outline-none'/>
                    </div>
                    <input type="text" placeholder='Phone' name='phone' className='input input-bordered w-full focus-visible:outline-none' />
                    <textarea name="message" id="" placeholder='Message' className='textarea textarea-bordered w-full focus-visible:outline-none'></textarea>
                    <button className='btn btn-outline outline-gray-300 border-gray-300 w-full'>Send</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;