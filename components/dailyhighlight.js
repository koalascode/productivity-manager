import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/DailyHighlight.module.css'
import { useEffect, useState } from 'react'

export default function DailyHighlight() {
    const [mode, setMode] = useState()
    const [highlight, setHighlight] = useState()
    const [checkStatus, setCheckStatus] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        let mainText = e.target.inputmain.value;
        setHighlight(mainText);
        setMode("displaying");
    }
    
    useEffect(() => {
        if (mode === "displaying") {
            document.getElementById("inputcontainer").style.display = "none";
        }
        if (mode === "editing") {
            document.getElementById("inputcontainer").style.display = "flex";
        }

    })

    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Daily Highlight</h2>
            <form className={styles.inputcontainer} onSubmit={handleSubmit} id="inputcontainer">
                <input className={styles.dailyinput} id="inputmain" type="text" placeholder='Daily Highlight'/>
                <br />
                <input className={styles.submitbutton} type="submit"/>
            </form>
            {mode === "displaying" ? 
            <div>
                <div className={styles.mainheader}>
                    <input type="checkbox" id="checkboxmain" onChange={(e) => setCheckStatus(e.target.checked)} checked={checkStatus}/> 
                    <p className={styles.editbutton} onClick={() => setMode("editing")}>✍️</p>
                </div>
                
                <p className={styles.dailyhighlighttext} id="highlight" style={checkStatus === true ? {textDecoration: "line-through"} : null}>{highlight}</p>
            </div> : null}
        </div>
    )
}