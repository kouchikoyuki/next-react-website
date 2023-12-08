import { Styles } from 'styles/social.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTwitter,
    faFacebookF,
    faGithub,
} from '@fortawesome/free-brands-svg-icons'

export default function Social({ iconSize = 'initial' }) {
    return (
        <ul className={styles.list} style={{ '--icon-size': iconSize}}>
            <li>
                <a href='https://twitter.com/'>
                    <span className='sr-only'>Twitter</span>
                </a>
            </li>
            <li>
                <a href='https://www.facebook.com/'>
                    <FontAwesomeIcon icon={faFacebookF} />
                    <span className='sr-only'>GitHub</span>
                </a>
            </li>
        </ul>
    )
}