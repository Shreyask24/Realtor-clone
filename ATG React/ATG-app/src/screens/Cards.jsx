import React, { useState } from 'react'

import "../App.css";

const Cards = () => {
    const [ishovering, setIsHovering] = useState(false);
    const [fillColor, setFillColor] = useState("#8064A2");

    const [green, setGreen] = useState("#77933C");
    const [red, setRed] = useState("#C0504D");
    const [blue, setBlue] = useState("#0096C8");

    function handleMouseOver() {
        setIsHovering(!ishovering);

        if (ishovering == true) {
            setFillColor("#8064A2")
        }

        else {
            setFillColor("#FFFFFF")
        }
    }


    function handleMouseLeave() {
        setIsHovering(false)
        setFillColor("#8064A2")
    }



    function MouseEnter() {
        setIsHovering(!ishovering);

        if (ishovering == true) {
            setGreen("#77933C")
        }

        else {
            setGreen("#FFFFFF")
        }
    }


    function MouseLeave() {
        setIsHovering(false)
        setGreen("#77933C")
    }


    function MouseEnterRed() {
        setIsHovering(!ishovering);

        if (ishovering == true) {
            setRed("#C0504D")
        }

        else {
            setRed("#FFFFFF")
        }
    }


    function MouseLeaveRed() {
        setIsHovering(false)
        setRed("#C0504D")
    }


    function MouseEnterBlue() {
        setIsHovering(!ishovering);

        if (ishovering == true) {
            setBlue("#0096C8")
        }

        else {
            setBlue("#FFFFFF")
        }
    }


    function MouseLeaveBlue() {
        setIsHovering(false)
        setBlue("#0096C8")
    }


    return (
        <>
            <section className="Cards" >
                <div className="PeopleCard" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave}>
                    <div className="CardHeading">

                        <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20 11.25C22.7167 11.25 25.1167 11.9 27.0667 12.75C28.8667 13.55 30 15.35 30 17.3V20H10V17.3167C10 15.35 11.1333 13.55 12.9333 12.7667C14.8833 11.9 17.2833 11.25 20 11.25ZM6.66667 11.6667C8.5 11.6667 10 10.1667 10 8.33333C10 6.5 8.5 5 6.66667 5C4.83333 5 3.33333 6.5 3.33333 8.33333C3.33333 10.1667 4.83333 11.6667 6.66667 11.6667ZM8.55 13.5C7.93333 13.4 7.31667 13.3333 6.66667 13.3333C5.01667 13.3333 3.45 13.6833 2.03333 14.3C0.8 14.8333 0 16.0333 0 17.3833V20H7.5V17.3167C7.5 15.9333 7.88333 14.6333 8.55 13.5ZM33.3333 11.6667C35.1667 11.6667 36.6667 10.1667 36.6667 8.33333C36.6667 6.5 35.1667 5 33.3333 5C31.5 5 30 6.5 30 8.33333C30 10.1667 31.5 11.6667 33.3333 11.6667ZM40 17.3833C40 16.0333 39.2 14.8333 37.9667 14.3C36.55 13.6833 34.9833 13.3333 33.3333 13.3333C32.6833 13.3333 32.0667 13.4 31.45 13.5C32.1167 14.6333 32.5 15.9333 32.5 17.3167V20H40V17.3833ZM20 0C22.7667 0 25 2.23333 25 5C25 7.76667 22.7667 10 20 10C17.2333 10 15 7.76667 15 5C15 2.23333 17.2333 0 20 0Z"
                                fill={fillColor} />
                        </svg>


                        <h2>
                            People
                        </h2>
                    </div>

                    <p>Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate,
                        accompanist or collaborator.</p>

                    <button className="cardBtn">Connect</button>
                </div>

                <div className="Card">
                    <div className="PlaceCard" onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>
                        <div className="CardHeading">
                            <svg width="24" height="34" viewBox="0 0 24 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.0002 0.333328C5.55016 0.333328 0.333496 5.55 0.333496 12C0.333496 20.75 12.0002 33.6667 12.0002 33.6667C12.0002 33.6667 23.6668 20.75 23.6668 12C23.6668 5.55 18.4502 0.333328 12.0002 0.333328ZM12.0002 16.1667C9.70016 16.1667 7.8335 14.3 7.8335 12C7.8335 9.7 9.70016 7.83333 12.0002 7.83333C14.3002 7.83333 16.1668 9.7 16.1668 12C16.1668 14.3 14.3002 16.1667 12.0002 16.1667Z"
                                    fill={green} />
                            </svg>

                            <h2>


                                Place
                            </h2>
                        </div>

                        <p>Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow
                            booking through hobbycue.</p>
                        <button className="cardBtn">Meet up</button>
                    </div>
                </div>


                <div className="Card">
                    <div className='ProductCard' onMouseEnter={MouseEnterRed} onMouseLeave={MouseLeaveRed}>
                        <div className="CardHeading">
                            <svg width="38" height="32" viewBox="0 0 38 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M27.6832 11.9997L20.3832 1.06636C20.0665 0.599697 19.5332 0.366364 18.9998 0.366364C18.4665 0.366364 17.9332 0.599697 17.6165 1.08303L10.3165 11.9997H2.33317C1.4165 11.9997 0.666504 12.7497 0.666504 13.6664C0.666504 13.8164 0.683171 13.9664 0.733171 14.1164L4.9665 29.5664C5.34984 30.9664 6.63317 31.9997 8.1665 31.9997H29.8332C31.3665 31.9997 32.6498 30.9664 33.0498 29.5664L37.2832 14.1164L37.3332 13.6664C37.3332 12.7497 36.5832 11.9997 35.6665 11.9997H27.6832ZM13.9998 11.9997L18.9998 4.66636L23.9998 11.9997H13.9998ZM18.9998 25.333C17.1665 25.333 15.6665 23.833 15.6665 21.9997C15.6665 20.1664 17.1665 18.6664 18.9998 18.6664C20.8332 18.6664 22.3332 20.1664 22.3332 21.9997C22.3332 23.833 20.8332 25.333 18.9998 25.333Z"
                                    fill={red} />
                            </svg>

                            <h2>
                                Product
                            </h2>
                        </div>

                        <p>Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from
                            community members.</p>
                        <button className="cardBtn">Get it</button>
                    </div>
                </div>


                <div className="Card">
                    <div className="ProgramCard" onMouseEnter={MouseEnterBlue} onMouseLeave={MouseLeaveBlue}>
                        <div className="CardHeading">
                            <svg width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M21.6667 16.5498C21.1833 16.0665 20.3833 16.0665 19.9 16.5498L12.65 23.7998L10 21.1498C9.51667 20.6665 8.71667 20.6665 8.23333 21.1498C7.75 21.6332 7.75 22.4332 8.23333 22.9165L11.4667 26.1498C12.1167 26.7998 13.1667 26.7998 13.8167 26.1498L21.65 18.3165C22.15 17.8332 22.15 17.0332 21.6667 16.5498ZM26.6667 3.99984H25V2.33317C25 1.4165 24.25 0.666504 23.3333 0.666504C22.4167 0.666504 21.6667 1.4165 21.6667 2.33317V3.99984H8.33333V2.33317C8.33333 1.4165 7.58333 0.666504 6.66667 0.666504C5.75 0.666504 5 1.4165 5 2.33317V3.99984H3.33333C1.48333 3.99984 0.0166667 5.49984 0.0166667 7.33317L0 30.6665C0 32.4998 1.48333 33.9998 3.33333 33.9998H26.6667C28.5 33.9998 30 32.4998 30 30.6665V7.33317C30 5.49984 28.5 3.99984 26.6667 3.99984ZM25 30.6665H5C4.08333 30.6665 3.33333 29.9165 3.33333 28.9998V12.3332H26.6667V28.9998C26.6667 29.9165 25.9167 30.6665 25 30.6665Z"
                                    fill={blue} />
                            </svg>

                            <h2>
                                Program
                            </h2>
                        </div>

                        <p>Find events, meetups and workshops related to your hobby. Register or buy tickets online.</p>
                        <button className="cardBtn">Attend</button>
                    </div>
                </div>




            </section>



            <div className="customCard">

                <div className="customSubCard">

                    <div className="customCardText">
                        <h2>
                            <svg width="34" height="28" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.0002 0.333313C7.80016 0.333313 0.333496 7.79998 0.333496 17C0.333496 26.2 7.80016 33.6666 17.0002 33.6666C26.2002 33.6666 33.6668 26.2 33.6668 17C33.6668 7.79998 26.2002 0.333313 17.0002 0.333313ZM23.6668 18.6666H18.6668V23.6666C18.6668 24.5833 17.9168 25.3333 17.0002 25.3333C16.0835 25.3333 15.3335 24.5833 15.3335 23.6666V18.6666H10.3335C9.41683 18.6666 8.66683 17.9166 8.66683 17C8.66683 16.0833 9.41683 15.3333 10.3335 15.3333H15.3335V10.3333C15.3335 9.41665 16.0835 8.66665 17.0002 8.66665C17.9168 8.66665 18.6668 9.41665 18.6668 10.3333V15.3333H23.6668C24.5835 15.3333 25.3335 16.0833 25.3335 17C25.3335 17.9166 24.5835 18.6666 23.6668 18.6666Z"
                                    fill="#0096C8" />
                            </svg> Add your own
                        </h2>

                        <p>
                            Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone
                            who
                            should be on hobbycue? Go ahead and Add your Own page
                        </p>


                        <button id="customCardBtn">Add new</button>
                    </div>

                </div>
            </div>
        </>

    )
}

export default Cards