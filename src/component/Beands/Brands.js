import React from "react";
import "./Brands.css";
import img_1 from "./../all_image/shops/shops-1.png";
import img_2 from "./../all_image/shops/shops-2.png";
import img_3 from "./../all_image/shops/shops-3.png";
import img_4 from "./../all_image/shops/shops-4.png";
import img_5 from "./../all_image/shops/shops-5.png";
import img_6 from "./../all_image/shops/shops-7.png";
import img_7 from "./../all_image/shops/shops-8.png";
import img_8 from "./../all_image/shops/shops-9.png";
import img_9 from "./../all_image/shops/shops-10.png";
import {AiFillStar,AiFillCaretRight} from "react-icons/ai";

const Brands=()=>{
    const data=[
        {name:'Mapple Earphones' ,ptice:180,img:img_1},
        {name:'Vivo android one' ,ptice:120,img:img_2},
        {name:'sony light' ,ptice:180,img:img_3},
        {name:'iphone' ,ptice:999,img:img_4},
        {name:'Ceats wireless earphone' ,ptice:80,img:img_5},
        {name:'Redimi Phone' ,ptice:400,img:img_6},
        {name:'Xeats Bluetooth earphones' ,ptice:60,img:img_7},
        {name:'Airpod' ,ptice:180,img:img_8},
        {name:'Silver Cap' ,ptice:5,img:img_9},
        
        
    ]
    return(
        <div className="brands">
            <div className="contener">
                    <div className="left">
                            <h3>Brands</h3>
                            <ul>
                                <li>apple</li>
                                <li>samsung</li>
                                <li>oppo</li>
                                <li>vivo</li>
                                <li>redimi</li>
                                <li>sony</li>

                            </ul>
                    </div>
                    {/* ////////////////////////// */}
                                {/* RIGHT */}
                    {/* ////////////////////////// */}
                    <div className="right_prand">
                        <div className="head">
                            <h3>Mobile Phones</h3>
                            <div className="view">
                                <span>view all</span>
                                <AiFillCaretRight/>
                            </div>
                        </div>
                        <div className="main">
                                {
                                    data.map(value=>{return(
                                        <div className="cart" key={Math.random()}>
                                            <img src={value.img} alt="" />
                                            <div className="detalis">
                                                <span>{value.name}</span>
                                                <div className="rate"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
                                                <div className="price">
                                                    <span>${value.ptice}</span>
                                                    <button>+</button>
                                                </div>
                                            </div>
                                        </div>
                                    )})
                                }
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default Brands;