import React from "react";
import image_1 from './../all_image/SlideCard/slide-1.png';
import image_2 from './../all_image/SlideCard/slide-2.png';
import image_3 from './../all_image/SlideCard/slide-3.png';
import image_4 from './../all_image/SlideCard/slide-4.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "./Main.css";
const Main=()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        appendDots:(dots)=>{
            return <ul style={{margin:'0px'}}>{dots}</ul>
        }
    };
    const data=[
        {title:'50% Off For Your First Shopping',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.',img:image_1},
        {title:'50% Off For Your First Shopping',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.',img:image_2},
        {title:'50% Off For Your First Shopping',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.',img:image_3},
        {title:'50% Off For Your First Shopping',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.',img:image_4},
    ]
    return(
        <div className="Main">
            <div className="contener">
                <Slider {...settings}>
                    {
                        data.map(value=>{
                            return(
                                
                                    <div className="slite" key={Math.random()}>
                                        <div className="left">
                                            <h1>{value.title}</h1>
                                            <p>{value.desc}</p>
                                            <button>visit collections</button>
                                        </div>
                                        <div className="right_img">
                                            <img src={value.img} alt="" />
                                        </div>
                                    </div>
                                
                            )
                        })
                    }
                </Slider>

            </div>
        </div>
    )
}
export default Main;