import React from "react";
import nepserv from '../assets/images/neptunelogo.png'
import stambic from "../assets/images/centenary.png";
import equity from "../assets/images/equity-bank.png"
import service from "../assets/images/ServiceCops.png"
import housing from "../assets/images/hfb-bank.png"
const Partner = ()=>{
    return(
        <section className="partner-section">
            <div className="p-info">
            <h2>Partners</h2>
            <div class="line"></div>
            </div>
            <div className="partner-container">
                <img className="partner-img" src={nepserv} alt="nepserv"/>
                <img className="partner-img"  src={stambic} alt="stambic"/>
                <img className="partner-img"  src={equity} alt="equity"/>
                <img className="partner-img" src={service} alt="service"/>
                <img className="partner-img"  src={housing} alt="housing"/>


            </div>
        </section>
    )
}
export default Partner;