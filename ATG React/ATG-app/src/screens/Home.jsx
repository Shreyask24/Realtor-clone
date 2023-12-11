import React from 'react'

import "../App.css";

// Images
import HomeSvg from "../assets/homemodel.png";
import HobbyLogo from "../assets/HobbyCueLogo.png";
import searchIcon from "../assets/searchIcon.png";
import Explore from "../assets/Explore.png";
import bookmark from "../assets/bookmark.png";
import Hobbieslogo from "../assets/Hobbieslogo.png";
import notifications from "../assets/notifications.png";
import cart from "../assets/cart.png";
import Googlelogo from "../assets/Googlelogo.png";
import FacebookLogo from "../assets/FacebookLogo.png";
import eyeslash from "../assets/eyeslash.png";
import lock from "../assets/lock.png";
import down_arrow from "../assets/down_arrow.png";

const Home = () => {
    return (
        <section>
            <nav className="navbar">
                <div>
                    <img src={HobbyLogo} alt="" />
                </div>
                <div className="navbarText">

                    <div className="navbarList">
                        <input type="text" className="searchBar" placeholder="Search here" />
                        <img src={searchIcon} alt="" />

                        <img src={Explore} alt="" /> Explore <img src={down_arrow} alt="" />
                        <img src={Hobbieslogo} alt="" />Hobbies <img src={down_arrow} alt="" />
                        <a href="">
                            <img src={bookmark} alt="" />
                        </a>

                        <a href="">
                            <img src={notifications} alt="" />
                        </a>

                        <a href="">
                            <img src={cart} alt="" />
                        </a>

                        <button id="signIn">Sign In</button>
                    </div>
                </div>

            </nav>




            <div className="homeLayout">
                <h1 className="homeTitle">Explore your
                    <span style={{ color: "#0096C8" }}> hobby </span> or <span style={{ color: "#8064A2" }}>
                        passion</span></h1>

                <p className="homeText">
                    Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers,
                    classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing
                    arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
                </p>

                <p className="homeText">
                    If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,
                    services or events. Hop on your hobbyhorse and enjoy the ride.
                </p>


                <div className="homeSvg">
                    <img src={HomeSvg} alt="" />


                </div>


            </div>


            <div className="homeForm">

                <div className="HeaderLayout">
                    <h2 id="SignIntext">Sign In</h2>
                    <h2 id="JoinIntext">Join In</h2>
                </div>
                <form action="">


                    <button className="googleBtn">
                        <img src={Googlelogo} alt="" />
                        Continue with Google</button>

                    <button className="googleBtn">
                        <img src={FacebookLogo} alt="" />Continue with Facebook</button>

                    <p className="midFormText">Or connect with</p>

                    <input type="email" className='inputFields' placeholder='Email' />
                    <div>
                        <input type="password" className='inputFields' placeholder='Password' />
                        <img src={eyeslash} id='eyeslash' alt="" />
                    </div>


                    <input type="checkbox" style={{ cursor: "pointer" }} name="checkbox" />
                    <label htmlFor="checkbox">Remember me</label>
                    <div className="resetPass">
                        <img src={lock} alt="" />
                        <p>Forgot password?</p>
                    </div>

                    <button type="submit" id="submitForm">Continue</button>

                </form>
            </div>
        </section>
    )
}

export default Home;