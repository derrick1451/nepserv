import { useState, useEffect } from "react";
import React from "react";
import nepserv from '../assets/images/neptunelogo.png'
import stambic from "../assets/images/centenary.png";
import equity from "../assets/images/equity-bank.png"
import service from "../assets/images/ServiceCops.png"
import housing from "../assets/images/hfb-bank.png"
const Partner = ()=>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await fetch('https://angage.co.ug/support-appcompany/get-company-details-for-website');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

    },[])
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return(
        <section id='partners' className="partner-section" >
            <div className="p-infoz">
            <h2>Partners</h2>
            <div class="line"></div>
            </div>
            <div className="partner-container">
                {data.map(partner =>{
                    return(
                        <img key={partner.name} className="partner-img" src={partner.logo} alt={partner.name}/>
                    )
                })}
            </div>
        </section>
    )
}
export default Partner;