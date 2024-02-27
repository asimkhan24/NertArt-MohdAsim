import React from 'react'
import styles from './machines.module.css'
import image from '/src/images/3.png'
const Machines = () => {
  return (
    <div className={styles.machines_container}>
        <p style={{fontSize: '15px', fontWeight: "600"}}>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
        <img src={image} alt="machine parts image" />
        <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
     
    </div>
  )
}

export default Machines