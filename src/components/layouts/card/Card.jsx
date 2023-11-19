import styles from './Card.module.css'
import { Link } from 'react-router-dom'

function Card(props) {
    return (
        <div className={styles.card_item}>
            <img src={props.capaImg} alt="imovel" />
            <div className={styles.card_description}>
                <div className={styles.bandeira}>
                    <span>{props.bandeira}</span>
                </div>
                <div>
                    <h3 className={styles.title_imovel}>{props.title}</h3>
                    <span>{props.subTitle}</span>
                    <p className={styles.description_imovel}>
                        {props.description}
                    </p>
                    <div className={styles.card_icon}>
                        {props.icon1}
                        {props.icon2}
                        {props.icon3}
                        {props.icon4}
                    </div>
                </div>
                <Link to={props.link} className={styles.btn}>
                    Saiba mais
                </Link>
                
            </div>
        </div>
    )
}
export default Card