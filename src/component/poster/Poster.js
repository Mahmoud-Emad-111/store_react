import React from "react";
import "./Poster.css"
import img_1 from "./../all_image/banner-1.png";
import img_2 from "./../all_image/banner-2.png";

const Poster=()=>{
    return(
        <div className="poster">
            <div className="contener">
                <div className="left_poster">
                        <img src={img_1} alt="" />
                </div>
                <div className="right_posster">
                    <img src={img_2} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Poster;