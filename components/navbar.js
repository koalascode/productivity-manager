import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../styles/Navbar.module.css'


export default function NavBar() {
    const [menuStatus, setMenuStatus] = useState()
    const toggleMenu = () => {
        menuStatus === undefined ? setMenuStatus("open") : null;
        menuStatus === "open" ? setMenuStatus("closed") : null;
        menuStatus === "closed" ? setMenuStatus("open") : null;
    }

    useEffect(() => {
        const menuBtn = document.getElementById("menubtn");
        menuStatus === "open" ? menuBtn.classList.add('open') : null;
        menuStatus !== "open" ? menuBtn.classList.remove('open') : null
    })

    useEffect(() => {
       if (menuStatus === "open") {
           document.getElementById("navpopup").style.display = "block"
       }
       if (menuStatus === "closed") {
        document.getElementById("navpopup").style.display = "none" 
       }
    })
    

    return (
        <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.menubtn} id="menubtn" onClick={toggleMenu}>
            <div className={styles.menubtnburger}></div>
          </div>
          <Link href="/" passHref>
        <h2 className={styles.headername}>Aaron Anidjar</h2>  
        </Link>
        </div>
          
        
            <div className={styles.navpop} id="navpopup">
            <Link href="/film" passHref>
                  <h1 className={styles.bigpagelink}>Filmmaking</h1>
              </Link>
              <Link href="/programming" passHref>
                  <h1 className={styles.bigpagelink}>Programming</h1>
              </Link>
              <Link href="/photo" passHref>
                  <h1 className={styles.bigpagelink}>Photography</h1>
              </Link>
              <Link href="/blog" passHref>
                  <h1 className={styles.bigpagelink}>Blog</h1>
              </Link>
            </div>
        </div>
    )
}