import React, { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const { email, password } = formData;

    const [showPassword, setShowPassword] = useState(false);

    function onChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));

    }

    return (
        <section>
            <h1 className='text-center font-bold text-3xl mt-6'>Sign In</h1>

            <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
                <div className='md:w-[63%] lg:w-[50%] mb-12 md:mb-6'>
                    <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" className='w-full rounded-2xl' alt="Key" />
                </div>

                <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
                    <form>
                        <input className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-3' type="email" value={email} onChange={onChange} id='email' placeholder='Email Address' />

                        <div className='relative'>
                            <input className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-4' type={showPassword ? "text" : "password"} id='password' value={password} onChange={onChange} placeholder='Password' />

                            {showPassword ? <AiFillEye onClick={() => setShowPassword((prevState) => !(prevState))} className='absolute right-3 top-3 text-xl cursor-pointer' /> : <AiFillEyeInvisible onClick={() => setShowPassword((prevState) => !(prevState))} className='absolute right-3 top-3 text-xl cursor-pointer' />}
                        </div>

                        {/*  WhiteSpace prevrnts the element to go to the next line in small devices */}
                        <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg '>
                            <p className='mb-6'>Dont Have A Account?
                                <Link to="/sign-out" className='text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1'>Register</Link>
                            </p>

                            <Link to="/forgot-password" className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out ml-1'>Forgot Password?</Link>

                        </div>

                        <button type="submit" className='w-full text-white bg-blue-600 px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out shadow-lg active:bg-blue-800 '>Sign In</button>

                        <div className='flex items-center my-4 before:border-t  before:flex-1  before:border-x-gray-300 after:border-t  after:flex-1  after:border-x-gray-300'>
                            <p className='font-semibold px-4 text-center'>OR</p>
                        </div>

                        <OAuth />

                    </form>


                </div>

            </div>
        </section>
    )
}

export default SignIn