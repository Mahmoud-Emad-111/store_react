import React from "react";
import "./Header.css";
import { useState } from "react";
import {FaPhoneAlt,FaBars} from "react-icons/fa";
import {CgMail} from "react-icons/cg";
import {BiUserCircle} from "react-icons/bi";
import {BsBasket,BsSearch} from "react-icons/bs";
import {RiDashboardFill} from "react-icons/ri";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";


const Header=()=>{
    const [link,setlink]=useState(false);
    ///////////////////////////////////////
    window.addEventListener('scroll',function(){
        const nav_Bar=document.querySelector(".search");
        nav_Bar.classList.toggle("active_nav",window.scrollY>300)
    })
    return(
        <div className="header">
            {/* THIS IS TOP ARAE HEADER */}
            <div className="top">
                <div className="contener">
                        <div className="left">
                            <span><FaPhoneAlt/> +020 01220458853</span>
                            <span><CgMail  className="cgmail"/> mahmoud.devops@gmail.com</span>
                        </div>
                        <div className="right">
                            <span>Theme FAQ"s</span>
                            <span>Need Help?</span>
                            <span>EN</span>
                            <span>USD</span>
                        </div>
                </div>
            </div>
            {/* THIS IS TOP ARAE HEADER */}
            <div className="nav">
                <div className="contener">
                    <div className="search">
                            <h3 className="logo">shop</h3>
                            {/* AREA_____SEARCH */}

                            <div className="box_search">
                                <BsSearch />
                                <input type="search"  placeholder="search......."/>
                                <span>All Category</span>
                            </div>
                            {/* AREA_____SEARCH */}

                            {/* AREA_____ICONE */}
                            <div className="icone">
                                <BiUserCircle/>
                                <BsBasket/>
                            </div>
                            {/* AREA_____ICONE */}
                    
                    </div>
                        
                        {/* START____AREA_____LINKS */}
                        
                        <div className="nav_links"  >
                            <div className="left">
                                <RiDashboardFill  size={"20px"}/>
                                <span>Categories</span>
                                <MdOutlineKeyboardArrowDown size={"22px"}/>
                            </div>
                            <div className={`right ${link ==true ? 'link_show': ''}`}>
                                <ul>
                                    <span onClick={()=>{setlink(!link)}} className={`${link==true ? 'close': ''}`}>x</span>
                                    <li>home</li>
                                    <li>pages</li>
                                    <li>user account</li>
                                    <li>vendor account</li>
                                    <li>track my order</li>
                                    <li>contact</li>
                                </ul>
                            </div>
                            <span className="bars"><FaBars onClick={()=>{setlink(!link)}}/></span>
                        </div>
                        {/* END____AREA_____LINKS */}
                </div>
            </div>
        </div>
    )
}
export default Header;