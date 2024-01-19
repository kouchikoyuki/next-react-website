import { useState } from 'react'
import Link from "next/link"
import styles from 'styles/nav.module.css'

export default function Nav() {
    const [navIsOpen, setNavIsOpen] = useState(false)
    
    return (
        <nav className={navIsOpen ? styles.close}>
            <button className={styles.btn}>MENU</button>

            <ul className={styles.list}>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        Blog
                    </Link>
                </li>
            </ul>
        </nav>
    )
}