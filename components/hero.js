import  style from 'styles/hero.module.css'

export default function Hero({ title, subtitle, imageOn = false }) {
    return (
        <div className={style.flexContainer}>
            <div className={style.text}>
            <h1 className={style.title}>{title}</h1>
            <p className={style.subtitle}>{subtitle}</p>
        </div>
            {imageOn && (
            <figure className={styles.image}>
                <Image 
                    src={cube}
                    alt="" 
                    layout="responsive"
                    sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vm, 100vm"
                    priority
                    placeholder="blur"
                />
            </figure>
        )}
        </div>
    )
}