import styles from 'stykes/pagination.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function pagination({
    prevText = '',
    prevUrl = '',
    nextText = '',
    nextUrl = '',
}) {
    return (
        <ul className={styles.flexContainer}>
            {prevText && prevUrl && (
                <li className={styles.prev}>
                    <Link href={prevUrl} >
                        <a className={styles.iconText}>
                            <FontAwesomeIcon icon={faChevronLeft} color='var(--gray-25)' />
                            <span>{prevText}</span>
                        </a>
                    </Link>
                </li>
            )}
            {nextText && nextUrl && (
                <li className={styles.next}>
                    <Link href={nextUrl}>
                        <a className={styles.iconText}>
                            <span>{nextText}</span>
                            <FontAwesomeIcon icon={faChevronRight} color='vat(--gray-25)' />
                        </a>
                    </Link>
                </li>
            )}
        </ul>
    )
}