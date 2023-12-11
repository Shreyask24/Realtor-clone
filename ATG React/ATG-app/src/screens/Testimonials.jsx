import React from 'react'

import "../App.css";


import dancing_girl from "../assets/dancing_girl.png";
import dancing_girl_audio from "../assets/dancing_girl_audio.png";

const Testimonials = () => {
    return (
        <section className="testimonials">

            <div className="testimonialcontainer">
                <div className="testimonialcontent">

                    <svg width="25" height="25" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20 40.0005C31.0277 40.0005 40 31.0282 40 20.0005C40 16.7252 39.1373 13.6637 37.7383 10.9341L36 7.99854L33 4.99854L29.0566 2.2583C26.3293 0.862223 23.2723 0.000490634 20 0.000490347C8.9723 0.000489383 2.71253e-06 8.97278 1.74846e-06 20.0005C7.84383e-07 31.0282 8.97229 40.0005 20 40.0005ZM26 26.9985C23.791 26.9985 22 25.2075 22 22.9985C22 22.9125 22.0204 22.8316 22.0254 22.7466C22.0114 22.6656 22 22.5826 22 22.4966C22 22.2216 22.0526 15.7084 26.5996 12.2974C26.8696 12.0954 27.185 11.9966 27.498 11.9966C27.954 11.9966 28.4042 12.2051 28.6992 12.5981C29.1962 13.2611 29.0624 14.2008 28.4004 14.6978C26.8924 15.8288 26.0568 17.5196 25.5898 19.0396C25.7268 19.0256 25.859 18.9985 26 18.9985C28.209 18.9985 30 20.7895 30 22.9985C30 25.2075 28.209 26.9985 26 26.9985ZM14 26.9985C11.791 26.9985 10 25.2075 10 22.9985C10 22.9125 10.0204 22.8316 10.0254 22.7466C10.0114 22.6656 10 22.5826 10 22.4966C10 22.2216 10.0526 15.7084 14.5996 12.2974C14.8696 12.0954 15.185 11.9966 15.498 11.9966C15.954 11.9966 16.4042 12.2051 16.6992 12.5981C17.1962 13.2611 17.0624 14.2008 16.4004 14.6978C14.8924 15.8288 14.0568 17.5195 13.5898 19.0396C13.7268 19.0256 13.859 18.9985 14 18.9985C16.209 18.9985 18 20.7895 18 22.9985C18 25.2075 16.209 26.9985 14 26.9985Z"
                            fill="#8064A2" />
                    </svg>
                    Testimonials

                    <p>In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or
                        connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch
                        with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of
                        finding products and services that I can avail, which I can be assured is going to be of great quality as it
                        comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able
                        to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I
                        highly recommend it.</p>

                    <div className="testimonialaudio">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="20" fill="white" />

                        </svg>
                        <svg width="11" height="14" viewBox="0 0 11 14" style={{ marginLeft: "-24px" }} fill=" none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0 1.82001V12.18C0 12.97 0.87 13.45 1.54 13.02L9.68 7.84001C10.3 7.45001 10.3 6.55001 9.68 6.15001L1.54 0.980008C0.87 0.550008 0 1.03001 0 1.82001Z"
                                fill="#8064A2" />
                        </svg>

                        <svg width="12" height="12" viewBox="0 0 12 12" style={{ position: "absolute", left: "29vh" }} fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="6" fill="#8064A2" />
                        </svg>

                        <svg width="468" height="2" viewBox="0 0 468 2" style={{ marginLeft: "5vh", marginRight: "10px" }} fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect width="468" height="2" rx="1" fill="white" />
                        </svg>0:00



                        <img src={dancing_girl_audio} width="60px" height="60px" style={{ marginLeft: "100px" }}
                            alt="" />



                    </div>
                    <img src={dancing_girl} className="testimonialimg" alt="" />
                    <div className="testimonialaudiotext">
                        <h3>Shubha Nagarajan</h3>
                        <span style={{ color: "#0096C8" }}>
                            <h4>Classical Dancer</h4>
                        </span>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Testimonials