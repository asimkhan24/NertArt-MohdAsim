import React from 'react'
import styles from './footer.module.css'
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Footer = () => {
  return (
    <div className={styles.footer_container}>

<h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
        <p style={{textAlign:'center'}}>CHEMICALS & PROCESS |POWER WATER & WASTE WATER| OILS & GAS |PHARMA| SUGARS & DISTILLERIES |PAPER & PULP| MARINE & DEFENCE| METAL & MINING| FOOD & BEVERAGE| PETROCHEMICAL & REFINERIES |SOLAR| BUILDING| HVAC| FIRE FIGHTING | AGRICULTURE & RESIDENTIAL</p> 

        <div className={styles.social_links}>
            <div>
            <FaPhoneSquareAlt fontSize={"30px"} /> Toll free <b>1800 200 1234</b>
            </div>

            <div>
            <FaFacebook fontSize={"30px"}/>
            <a href="https://www.facebook.com/cripumps"> www.facebook.com/cripumps</a>
            </div>

            <div>
                <TbWorld fontSize={"30px"}/>
               <a href="https://www.crigroups.com/">  www.cripumps.com</a>
            </div>
    
        </div>
    </div>
  )
}

export default Footer