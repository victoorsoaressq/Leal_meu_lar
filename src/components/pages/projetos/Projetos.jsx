import styles from './Projetos.module.css'
import { motion } from 'framer-motion'

/* COMPONENTS */
import Header from "../../layouts/header/Header"
import Card from '../../layouts/card/Card'
import Icon from "../../../assets/js/icons"
import Redes from '../../layouts/redes/redes'
import Footer from '../../layouts/footer/Footer'
import Mcmv from '../../layouts/banners/Mcmv';

/* IMG */
import imovel01 from '../../../assets/img/capa01.jpg'
import imovel02 from '../../../assets/img/capa02.jpg'
import imovel03 from '../../../assets/img/capa03.jpg'
import imovel04 from '../../../assets/img/capa04.jpg'
import imovel05 from '../../../assets/img/capa05.jpg'
import imovel06 from '../../../assets/img/capa06.jpg'
import imovel07 from '../../../assets/img/capa07.jpg'
import imovel08 from '../../../assets/img/capa08.jpg'


function Projetos() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Header
                banner='BannerProjetos'
                title='Projetos e Regiões'
                subTitle=''
                button='ButtonClose'
            />
            <section className={styles.container}>
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
                    title='Guido Pq Nações Unidas'
                    subTitle='Santo Amaro'
                    description='2 dorms. com opção de terraço e lazer incrível'
                    icon1={Icon.piscina()}
                    icon2={Icon.churrasqueira()}
                    icon3={Icon.petCare()}
                    icon4={Icon.espacoBeleza()}
                    link='/projetos/ap03'
                />
                <Card
                    capaImg={imovel04}
                    bandeira='Lançamento'
                    title='Guedala Park - Premium'
                    subTitle='Jardim Guedala'
                    description='2 dorms, opção de vaga e lazer surpreendente'
                    icon1={Icon.solario()}
                    icon2={Icon.salaoDeFestas()}
                    icon3={Icon.cineOpenAir()}
                    icon4={Icon.churrasqueira()}
                    link='/projetos/ap04'
                />
                <Card
                    capaImg={imovel05}
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
                <Card
                    capaImg={imovel06}
                    bandeira='Lançamento'
                    title='Jaguaré Villa Eldorado'
                    subTitle='Jaguaré'
                    description='2 dorms. com opção de terraço, vaga e lazer completo'
                    icon1={Icon.piscina()}
                    icon2={Icon.petPlace()}
                    icon3={Icon.salaoDeFestas()}
                    icon4={Icon.fitnessExterno()}
                    link='/projetos/ap06'
                />
            </section>
            <Mcmv />
            <Redes
                sessao='SessaoClose'
            />
            <Footer />
        </motion.div>
    )
}
export default Projetos