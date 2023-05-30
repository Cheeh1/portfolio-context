import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { mail, phone } from '../assets'


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    //Registering the form input function
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: value,
            };
        });
    };

    // Form validation using react-hook-form
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <>
            <section id='contact' className='flex gap-20 flex-col md:flex-row md:gap-0 xl:flex-row items-center justify-evenly py-10'>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 items-center'>
                    <section className='flex flex-col gap-5'>
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="xl:w-96 w-80 py-2 pl-5 text-sm font-inter font-medium rounded-md border placeholder-cinder-light placeholder-opacity-60"
                                id="first_name"
                                onChange={handleChange}
                                defaultValue={formData.name}
                                {...register("name", { required: true, minLength: 3 })}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm font-pjs mt-1">Minimum of 3 characters</p>
                            )}
                        </div>
                        <div>
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                className="xl:w-96 w-80 py-2 pl-5 text-sm font-inter font-medium rounded-md border placeholder-cinder-light placeholder-opacity-60"
                                id="email"
                                onChange={handleChange}
                                defaultValue={formData.email}
                                {...register("email", {
                                    required: true,
                                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                                })}
                            />
                            {errors.email && <p className="text-red-500 text-sm font-pjs mt-1">Not a valid email format</p>}
                        </div>
                        <div>
                            <textarea
                                id="message"
                                name="message"
                                className="xl:w-96 w-80 h-32 py-3 pl-5 text-sm font-inter font-medium rounded-md border placeholder-cinder-light placeholder-opacity-60"
                                placeholder="Send me a message and I will reply you as soon as possible..."
                                onChange={handleChange}
                                defaultValue={formData.message}
                                {...register("message", { required: true, minLength: 10 })}
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-sm font-pjs">Characters too short</p>}
                        </div>
                    </section>
                    <button type='submit' className='p-3 w-80 bg-purplelight text-[#F5F3FE] rounded-lg font-inter font-medium'>
                        Send message
                    </button>
                </form>

                <div className='flex flex-col gap-6'>
                    <div className='flex gap-3 items-center'>
                        <img className='bg-[#F5F3FE] p-2 rounded-xl' src={phone} alt="phone" />
                        <div className='flex flex-col'>
                            <p className='font-inter text-cinder-dark dark:text-cinder-dark-mode font-semibold'>Phone</p>
                            <a href='tel:+2348155931977' className='font-inter text-cinder-light dark:text-white font-normal text-sm'>(+234)8155931977</a>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img className='bg-[#F5F3FE] p-2 rounded-xl' src={mail} alt="phone" />
                        <div className='flex flex-col'>
                            <p className='font-inter text-cinder-dark dark:text-cinder-dark-mode font-semibold'>E-Mail</p>
                            <a href='mailto:edwindivine5@gmail.com' className='font-inter text-cinder-light dark:text-white font-normal text-sm'>edwindivine5@gmail.com</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact