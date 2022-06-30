import React from "react";
import './Top_item.css';
import img_1 from './../images/top/category-1.png';
import img_2 from './../images/top/category-2.png';
import img_3 from './../images/top/category-3.png';
import Slider from "react-slick";
import {AiFillCaretRight} from "react-icons/ai";
import {MdDashboard} from "react-icons/md";

const Top_item=()=>{
    const settings = {
        dots: false,
        infinite: true,
        speed: 1800,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay:true,

    };



    const data=[
        {id:1,img:img_1},
        {id:2,img:img_2},
        {id:3,img:img_3},
        {id:4,img:img_2},
        {id:5,img:img_1},
        {id:6,img:img_3},
    ]

    return(
        <div className="top_item">
            <div className="contener">
                    <div className="head">
                        <div className="title">
                            <MdDashboard/>
                            <h2>Top Categories</h2>
                        </div>
                        <div className="all">
                            <span>view all</span>
                            <AiFillCaretRight/>
                        </div>
                    </div>
                    
                    <div className="main_top">
                        <Slider {...settings}>
                            {
                                data.map(element=>{
                                    return(
                                        <div className="box" key={element.id}>
                                            <div className="cart">
                                                <img src={element.img} alt="" />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                    </Slider>
                    </div>
            </div>
            
        </div>
    )
}
export default Top_item;