import React from "react";
import "./New_item.css";
import stker from "./../all_image/arrivals/new.png";
import img_1 from "./../all_image/arrivals/arrivals1.png";
import img_2 from "./../all_image/arrivals/arrivals2.png";
import img_3 from "./../all_image/arrivals/arrivals3.png";
import img_4 from "./../all_image/arrivals/arrivals4.png";
import img_5 from "./../all_image/arrivals/arrivals5.png";
import img_6 from "./../all_image/arrivals/arrivals6.png";
import {AiFillCaretRight} from "react-icons/ai";

const New_item=()=>{
    const data=[
        {id:1,price:150,name:"Sunglass",img:img_1},
        {id:2,price:250,name:"makeup",img:img_2},
        {id:3,price:50,name:"Green Plant",img:img_5},
        {id:4,price:15,name:"Lipstick",img:img_4},
        {id:5,price:10,name:"Green Plant",img:img_5},
        {id:6,price:400,name:"Bonsai tree",img:img_6},



    ]


    return(
        <div className="new_item">
            <div className="contener">
                <div className="head">
                    <div className="left">
                        <img src={stker} alt="" />
                        <h2>New Arrivals</h2>
                    </div>
                    <div className="right">
                        <span>View All</span>
                        <AiFillCaretRight/>
                    </div>
                </div>
                {/* /////////////////////////////// */}
                            {/* MAIN */}
                {/* /////////////////////////////// */}
                <div className="main">
                        {
                            data.map(element=>{return(
                                <div className="box" key={element.id}>
                                    <div className="image">
                                        <img src={element.img} alt="" />

                                    </div>
                                    <div className="price">
                                        <h3 className="name">{element.name}</h3>
                                        <span>${element.price}</span>
                                    </div>
                                </div>
                            )})
                        }
                </div>
            </div>
        </div>
    )
}
export default New_item;