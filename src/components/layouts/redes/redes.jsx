import styles from './Redes.module.css'

import Facebook from '../../../assets/icons/facebook.png'
import Instagram from '../../../assets/icons/instagram.png'
import WhatsImage from '../../../assets/img/mao-whatsapp.png'

function Redes(props) {
    return (
        <div className={styles.container}>
            <div className={styles.redesSociais} id={props.sessao}>
                <div>
                    <h3>acesse</h3>
                    <p>
                        Minhas principais<br />
                        redes sociais
                    </p>
                </div>
                <div className={styles.redes_icons}>
                    <a
                        href="https://www.facebook.com/profile.php?id=100066757778957"
                        target='_blank'
                        rel="noreferrer">
                        <img src={Facebook} alt="Facebook" />
                    </a>
                    <a
                        href="https://www.instagram.com/leal.meu_lar/"
                        target='_blank'
                        rel="noreferrer"
                    >
                        <img src={Instagram} alt="Instagram" />
                    </a>

                </div>
            </div>

            <div className={styles.whatsapp}>
                <div className={styles.whatsText}>
                    <h2>
                        Ficou com <br />
                        Alguma duvida?
                    </h2>
                    <p>
                        Para mais informações<br />
                        acesse meu WhatsApp<br />
                        estarei esperando por você!
                    </p>

                    <a
                        href='https://wa.me//5511982344334?text=Olá%20tudo%20bem?%0AVim%20através%20do%20site' target='_blank'
                        rel="noreferrer"
                        id={styles.whatsApp}
                    >
                        WhatsApp
                    </a>
                </div>
                <div className={styles.whtasImg}>
                    <img src={WhatsImage} alt="Whatsapp" />
                </div>
            </div>
        </div>
    )
}
export default Redes