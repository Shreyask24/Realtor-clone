import React from 'react'
import "../App.css";


import go_to_top from "../assets/go_to_top.png";
import up_arrow from "../assets/up_arrow.png";
import connect from "../assets/connect.png";
import mail from "../assets/mail.png";
import telegram from "../assets/telegram.png";
import youtube from "../assets/youtube.png";
import google from "../assets/google.png";
import pinterest from "../assets/pinterest.png";
import instagram from "../assets/instagram.png";
import x from "../assets/x.png";
import facebook from "../assets/facebook.png";

const Footer = () => {
    return (
        <>
            <section className="connect">
                <div className="connectContent">
                    <h2 className="connectText">Your Hobby, Your Community...</h2>
                    <button className="connectBtn">Get Started</button>

                </div>
                <img id="circle" src={go_to_top} alt="" />
                <img id="arrow" src={up_arrow} alt="" />
                <h5>Go to top (Ctrl+Home)</h5>

                <img id="connectimg" src={connect} alt="" />
            </section>



            <section className="links">
                <div>
                    <h2>
                        Hobbycue
                    </h2>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Our Services</a></li>
                    <li><a href="">Work with Us</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Contact Us</a></li>
                </div>
                <div>
                    <h2>
                        How Do I
                    </h2>
                    <li><a href="">Sign Up</a></li>
                    <li><a href="">Add a Listing</a></li>
                    <li><a href="">Claim Listing</a></li>
                    <li><a href="">Post a Query</a></li>
                    <li><a href="">Add a Blog Post</a></li>
                    <li><a href="">Other Queries</a></li>
                </div>
                <div>
                    <h2>
                        Quick Links
                    </h2>
                    <li><a href="">Listings</a></li>
                    <li><a href="">Blog Posts</a></li>
                    <li><a href="">Shop / Store</a></li>
                    <li><a href="">Community</a></li>
                </div>


                <div className="social">
                    <h2>
                        Social Media
                    </h2>

                    <a href=""> <img src={facebook} alt="" /></a>
                    <a href=""> <img src={x} alt="" /></a>
                    <a href=""> <img src={instagram} alt="" /></a>
                    <a href=""> <img src={pinterest} alt="" /></a>
                    <a href=""> <img src={google} alt="" /></a>
                    <a href=""> <img src={youtube} alt="" /></a>
                    <a href=""> <img src={telegram} alt="" /></a>
                    <a href=""> <img src={mail} alt="" /></a>

                    <h3>Invite Friends</h3>
                    <input type="email" name="" id="" placeholder="Email ID" />
                    <div className="rectangle">
                        <h4 id="invite">
                            Invite</h4>
                    </div>
                </div>
            </section>

            <footer>
                <div>
                    <h2>© Purple Cues Private Limited</h2>
                </div>
            </footer>
        </>
    )
}

export default Footer