import React from 'react'
import { useForm } from 'react-hook-form';

function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        alert('Message sent!');
    };

    return (
        <div className="bg-white p-8 rounded-lg mb-10 shadow-md grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Block - Map */}
            <div className="w-full h-[400px]">
                <iframe
                    title="Google Map"
                    className="w-full h-full rounded-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117223.79900184536!2d85.23892471117551!3d23.343183243079867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e104aa5db7dd%3A0xdc09d49d6899f43e!2sRanchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1726939802226!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>

            {/* Right Block - Contact Form */}
            <div>
                <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* First Name */}
                    <div className='md:flex gap-4'>
                        <div className="mb-4 md:w-1/2">
                            <label className="block mb-2">First Name</label>
                            <input
                                {...register('firstName', { required: true, minLength: 2 })}
                                type="text"
                                className={`border rounded-md p-2 w-full ${errors.firstName ? 'border-red-500' : ''}`}
                                required
                            />
                            {errors.firstName && <p className="text-red-500">First Name is required and should be at least 2 characters long.</p>}
                        </div>

                        {/* Last Name */}
                        <div className="mb-4 md:w-1/2">
                            <label className="block mb-2">Last Name</label>
                            <input
                                {...register('lastName', { required: true, minLength: 2 })}
                                type="text"
                                className={`border rounded-md p-2 w-full ${errors.lastName ? 'border-red-500' : ''}`}
                                required
                            />
                            {errors.lastName && <p className="text-red-500">Last Name is required and should be at least 2 characters long.</p>}
                        </div>
                    </div>

                    {/* Email */}
                    <div className='md:flex gap-4 '>
                        <div className="mb-4 md:w-1/2">
                            <label className="block mb-2">Email</label>
                            <input
                                {...register('email', {
                                    required: true,
                                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i
                                })}
                                type="email"
                                className={`border rounded-md p-2 w-full ${errors.email ? 'border-red-500' : ''}`}
                                required
                            />
                            {errors.email && <p className="text-red-500">Please enter a valid email address.</p>}
                        </div>

                        {/* Phone Number */}
                        <div className="mb-4 md:w-1/2">
                            <label className="block mb-2">Phone Number</label>
                            <input
                                {...register('phone', {
                                    required: true,
                                    pattern: /^[0-9]{10,12}$/i
                                })}
                                type="tel"
                                className={`border rounded-md p-2 w-full ${errors.phone ? 'border-red-500' : ''}`}
                                required
                            />
                            {errors.phone && <p className="text-red-500">Please enter a valid phone number (10-12 digits).</p>}
                        </div>

                    </div>
                    {/* Message */}
                    <div className="mb-2">
                        <label className="block mb-2">Message</label>
                        <textarea
                            {...register('message', { required: true })}
                            className="border rounded-md p-2 w-full"
                            rows="3"
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="bg-gray-800 block mx-auto text-white py-2 px-6 rounded">
                        Send Message
                    </button>


                </form>
            </div>
        </div>
    );
}

export default Contact;
