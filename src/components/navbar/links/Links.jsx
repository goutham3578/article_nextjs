"use client"
import Image from 'next/image'
import styles from './links.module.css'
import NavLink from "./navlink/navLink"
import { useState } from "react"

const links = [
    {
        title: "HomePage",
        path: "/",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Contact",
        path: "/contact",
    },
    {
        title: "Blog",
        path: "/blog",
    }
]

const Links = () => {
    const [open, setOpen] = useState(false);

    //TEMPIRARY
    const session = false
    const isAdmin = false
    return (
        <div className={styles.container}>

            <div className={styles.links}>
                {
                    links.map((link => (
                        <NavLink item={link} key={link.title} />
                    )))
                }
                {
                    session ? (
                        <>
                            {isAdmin && <NavLink item={{ title: "Admin", path: "./admin" }} />}
                            <button className={styles.logout}>Logout</button>
                        </>

                    ) : (
                        <NavLink item={{ title: "Login", path: "/login" }} />
                    )
                }
            </div>

            <Image src="/menu.png" alt="" width={30} height={30} className={styles.menuButton} onClick={() => setOpen((prev) => !prev)} />
            {open &&
                <div className={styles.mobileLinks}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.title} />
                    ))}
                </div>
            }
        </div>
    )
}

export default Links