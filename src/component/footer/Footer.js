import React from "react";
import "./Footer.css"
import {FaFacebookSquare} from "react-icons/fa";
import {BsTwitter,BsYoutube,BsCaretRightFill} from "react-icons/bs";
import {MdLocationOn} from "react-icons/md";
import {BiTimeFive,BiPhoneCall} from "react-icons/bi";
const Footer=()=>{
    return(
        <div className="footer">
            <div className="contener">
                <div className='content'>
                    <div className="box">
                        <span className="logo">
                            SHOP
                        </span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
                        <div className="social">
                            <div className="facebook "><FaFacebookSquare/></div>
                            <div className="twitter"><BsTwitter/></div>
                            <div className="youtube"><BsYoutube/></div>
                        </div>
                    
                    </div>
                    {/* ////////////////////////////////// */}
                    <div className="box">
                        <ul>
                            <li><BsCaretRightFill/> import link</li>
                            <li><BsCaretRightFill/> import link</li>
                            <li><BsCaretRightFill/> import link</li>
                            <li><BsCaretRightFill/> import link</li>
                        </ul>
                    </div>
                    {/* ///////////////////////////////////////// */}
                    <div className="box">
                        <div className="lines">
                            <div className="line">
                                <MdLocationOn/>
                                <span>egypt/ alsharqiah/ Zagazig</span>
                            </div>
                            <div className="line">
                                <BiTimeFive/>
                                <span>Business Hours: From 10:00 To 18:00</span>
                            </div>
                            <div className="line">
                                <BiPhoneCall/>
                                <span>+201220458853</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;