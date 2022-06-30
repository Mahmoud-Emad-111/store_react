import React from "react";
import "./Catgorse.css";
import img_1 from "./../images/category/cat1.png";
import img_2 from "./../images/category/cat2.png";
import img_3 from "./../images/category/cat3.png";
import img_4 from "./../images/category/cat4.png";
import img_5 from "./../images/category/cat5.png";
import img_6 from "./../images/category/cat6.png";
import img_7 from "./../images/category/cat7.png";
import img_8 from "./../images/category/cat8.png";
import img_9 from "./../images/category/cat9.png";
import img_10 from "./../images/category/cat10.png";
import img_11 from "./../images/category/cat11.png";
const catgorse=()=>{
    const images=[
        {name:'Fashion', img:img_1},
        {name:'Electronic', img:img_2},
        {name:'Cars', img:img_3},
        {name:'Home & Garden', img:img_4},
        {name:'Gifts', img:img_5},
        {name:'Music', img:img_6},
        {name:'Health & Beauty', img:img_7},
        {name:'Pets', img:img_8},
        {name:'Baby Toys', img:img_9},
        {name:'Groceries', img:img_10},
        {name:'Books', img:img_11},
        
    ]
    return(
        <div className="catgorse">
            {
                images.map((value)=>{
                    return(
                        <div className="item" key={Math.random()}>
                            <img src={value.img} alt="" />
                            <span>{value.name}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default catgorse;