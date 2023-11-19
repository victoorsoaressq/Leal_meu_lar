import styles from './CardDepoimento.module.css'

function CardDp(props) {
    return(
        <div className={styles.cardContainer}>
            <div>
                <img 
                src={props.img} 
                alt="Img Usuário" 
            />
                <h2>{props.nome}</h2>
            </div>
            
            <p>
                {props.descritivo}
            </p>
        </div>
    )
}
export default CardDp