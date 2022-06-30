import React from "react";
import './flash.css'
import img_1 from './../all_image/flash/flash-1.png'
import img_2 from './../all_image/flash/flash-2.png'
import img_3 from './../all_image/flash/flash-3.png'
import img_4 from './../all_image/flash/flash-4.png'
import Slider from "react-slick";
import {IoFlashSharp,IoAddOutline} from "react-icons/io5";
import {HiOutlineArrowNarrowLeft,HiOutlineArrowNarrowRight} from "react-icons/hi";
import {AiFillStar} from "react-icons/ai";

const Flash_deals=()=>{
    const data=[
        {id:1, desc:60,name:'shose',price:100,img:img_1},
        {id:2, desc:30,name:'watch',price:150,img:img_2},
        {id:3, desc:60,name:'smart mopile',price:200,img:img_3},
        {id:4, desc:40,name:'smart watch ',price:80,img:img_4},
        {id:5, desc:30,name:'watch',price:150,img:img_2},
        {id:6, desc:40,name:'smart watch ',price:80,img:img_4},
        {id:7, desc:30,name:'watch',price:150,img:img_2},
        {id:8, desc:40,name:'smart watch ',price:80,img:img_4},
        
      ]


    const NextArrow=(props)=>{
        const {onClick}=props
        return(
            <div className="control-btn" onClick={onClick}>
                    <button className="next">
                    <HiOutlineArrowNarrowLeft/>
                    
                    </button>
            </div>
        )
    }
    const PrevArrow=(props)=>{
        const {onClick}=props
        return(
            <div className="control-btn" onClick={onClick}>
                    <button className="perv">
                    <HiOutlineArrowNarrowRight/>
                    
                    </button>
            </div>
        )
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay:true,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>
    };
    return(
        <div className="flash">

            <div className="contener">
                <div className="title">
                    <h4>Flash</h4>
                    <IoFlashSharp/>
                </div>
                    
                    <div className="carts">
                <Slider {...settings}>
                            {data.map(value=>{
                                return(
                                    <div className="box" key={value.id}>
                                        <div className="cart" >
                                        
                                        <span className="desc">{value.desc}% off</span>
                                        <img src={value.img} alt="" />
                                        <div className="detalis">
                                                <span className="name">{value.name}</span>
                                                <div className="rate">
                                                    <AiFillStar/>
                                                    <AiFillStar/>
                                                    <AiFillStar/>
                                                    <AiFillStar/>
                                                    <AiFillStar/>
                                                </div>
                                                <div className="price">
                                                    <span>{value.price}$</span>
                                                    <button ><IoAddOutline/></button>
                                                </div>
                                        </div>
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
export default Flash_deals;