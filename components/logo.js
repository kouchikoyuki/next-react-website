import Link from "next/link"
import styles from 'styles/logo.module.css'

export default function Logo({ styleType}) {
    return (
        <Link href="/">
            <div className={styles[styleType]}>CUBE</div>
        </Link>
    )
}