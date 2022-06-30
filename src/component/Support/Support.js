import React from "react";
import './Support.css';
import {TbTruckDelivery} from "react-icons/tb";
import {FaShieldAlt} from "react-icons/fa";
import {MdOutlineSupportAgent} from "react-icons/md";
import {AiFillIdcard} from "react-icons/ai";
const Support=()=>{
    const data=[
        {id:1,icone:<TbTruckDelivery/>,name:'Worldwide Delivery'},
        {id:2,icone:<AiFillIdcard/>,name:'Safe Payment'},
        {id:3,icone:<FaShieldAlt/>,name:'Shop With Confidence'},
        {id:4,icone:<MdOutlineSupportAgent/>,name:'24/7 Support'},

    ]
    return(
        <div className="support">
            <div className="contener">
                <div className="main_support">
                    {
                        data.map(value=>{
                            return(
                                <div className="box" key={value.id}>
                                    <div className="icone">{value.icone}
                                        <h3>
                                            {value.name}
                                        </h3> 

                                    </div>
                                    <div className="detalis">
                                        <p>We offer competitive prices on our 100 million plus product any range.</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

            </div>

        </div>
    )
}
export default Support;