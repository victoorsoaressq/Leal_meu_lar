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
import imovel01 from '../../../assets/img/capa01.jpg'
import imovel02 from '../../../assets/img/capa02.jpg'
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
                            capaImg={imovel01}
                            bandeira='Lançamento'
                            title='Cidade Mooca - San Pietro'
                            subTitle='Mooca'
                            description='2 dorms. com opção de terraço e lazer completo'
                            icon1={Icon.churrasqueira()}
                            icon2={Icon.piscina()}
                            icon3={Icon.beachTennis()}
                            icon4={Icon.fitness()}
                            link='/projetos/ap01'
                        />
                        <Card 
                            capaImg={imovel02}
                            bandeira='Lançamento'
                            title='Dez Limão'
                            subTitle='Limão'
                            description='2 dorms. com opção de terraço, varanda e vaga | Lazer Completo'
                            icon1={Icon.salaoDeFestas()}
                            icon2={Icon.fitnessExterno()}
                            icon3={Icon.churrasqueira()}
                            icon4={Icon.miniQuadraGramaSintetica()}
                            link='/projetos/ap02'
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
            <Mcmv/>
            <Redes />
            
            <Footer/>
        </motion.div>
    )
}

export default Home