import styles from './Home.module.css'
import Icon from '../../../assets/js/icons';
import { motion } from 'framer-motion'
import Mcmv from '../../layouts/banners/Mcmv';

/* COMPONENTS */
import Header from "../../layouts/header/Header";
import Card from '../../layouts/card/Card';
import Redes from '../../layouts/redes/redes';
import Footer from '../../layouts/footer/Footer';

/* IMG */
import imovel07 from '../../../assets/img/capa07.jpg'
import imovel08 from '../../../assets/img/capa08.jpg'
import imovel03 from '../../../assets/img/capa05.jpg'


function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Header
                banner='BannerHome'
                title='Encontre seu imóvel'
                subTitle='Apartamentos com as entradas e condições mais facilitadas em diversas regiões'
            />

            <section className={styles.destaques}>
                <div className={styles.container}>
                    <div className={styles.destaqueText}>
                        <h3 className={styles.h3Destaque}>Destaques</h3>
                        <p className={styles.pDestaque}>Conheça os imóveis em destaque</p>
                    </div>
                    <div className={styles.cards}>
                        <Card
                            capaImg={imovel07}
                            bandeira='Lançamento'
                            title='Mérito Santo Amaro'
                            subTitle='Santo Amaro'
                            description='2 dorms. com opção de terraço, suíte e lazer completo'
                            icon1={Icon.churrasqueira()}
                            icon2={Icon.fitness()}
                            icon3={Icon.playBaby()}
                            icon4={Icon.espacoBeleza()}
                            link='/projetos/ap07'
                        />
                        <Card
                            capaImg={imovel08}
                            bandeira='Lançamento'
                            title='The Place Barra Funda'
                            subTitle='Barra Funda'
                            description='2 dorms. com opção de suíte/ lazer completo'
                            icon1={Icon.fitness()}
                            icon2={Icon.piscina()}
                            icon3={Icon.churrasqueira()}
                            icon4={Icon.salaoDeFestas()}
                            link='/projetos/ap08'
                        />
                        <Card
                            capaImg={imovel03}
                            bandeira='Lançamento'
                            title='Urban Vila Maria'
                            subTitle='Vila Maria'
                            description='Studios, 1 e 2 dorms. com opção de suíte/terraço e lazer completo'
                            icon1={Icon.beachTennis()}
                            icon2={Icon.piscina()}
                            icon3={Icon.fitnessExterno()}
                            icon4={Icon.miniQuadraGramaSintetica()}
                            link='/projetos/ap05'
                        />

                    </div>
                </div>
            </section>
            <Mcmv />
            <Redes />

            <Footer />
        </motion.div>
    )
}

export default Home