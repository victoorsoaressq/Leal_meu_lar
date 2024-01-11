import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Ap.module.css'
import { motion } from 'framer-motion'

import Header from "../../layouts/header/Header"
import Icon from '../../../assets/js/icons'
import Redes from '../../layouts/redes/redes';
import Footer from '../../layouts/footer/Footer'
import Parceria from '../../layouts/parceria/Parceria'

import img1 from '../../../assets/img/projetos/apt07/01.jpeg'
import img2 from '../../../assets/img/projetos/apt07/02.jpg'
import img3 from '../../../assets/img/projetos/apt07/03.jpg'
import img4 from '../../../assets/img/projetos/apt07/04.jpg'
import img5 from '../../../assets/img/projetos/apt07/05.jpg'
import img6 from '../../../assets/img/projetos/apt07/06.jpg'
import img7 from '../../../assets/img/projetos/apt07/07.jpg'
import img8 from '../../../assets/img/projetos/apt07/08.jpg'
import img9 from '../../../assets/img/projetos/apt07/09.jpg'
import img10 from '../../../assets/img/projetos/apt07/10.jpg'
import img11 from '../../../assets/img/projetos/apt07/11.jpg'
import img12 from '../../../assets/img/projetos/apt07/12.jpg'
import img13 from '../../../assets/img/projetos/apt07/13.jpg'
import Regiao from '../../../assets/img/projetos/apt07/regiao.jpg'
import Pdf from '../../../assets/pdf/07.pdf'


function Apt07() {
    const data = [
        { id: '1', image: img1 },
        { id: '2', image: img2 },
        { id: '3', image: img3 },
        { id: '4', image: img4 },
        { id: '5', image: img5 },
        { id: '6', image: img6 },
        { id: '7', image: img7 },
        { id: '8', image: img8 },
        { id: '9', image: img9 },
        { id: '10', image: img10 },
        { id: '11', image: img11 },
        { id: '12', image: img12 },
        { id: '13', image: img13 },
    ]
    window.scrollTo(0, 0)
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Header
                banner='BannerAp07'
                title='Mérito - Santo Amaro'
                subTitle='Santo Amaro'
                button='ButtonClose'
            />
            <section className={styles.apDescritivo}>
                <div className={styles.boxInfo}>
                    <a
                        href={Pdf}
                        target='_blank'
                        rel="noreferrer"
                    >
                        Book de apresentação
                    </a>
                    <a
                        href='https://wa.me//5511982344334?text=https://lealmeular.com.br/projetos/ap07%0AOlá%20tudo%20bem?%0ATenho%20interesse%20nesse%20empreendimento' target='_blank'
                        rel="noreferrer"
                        id={styles.whatsApp}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" id={styles.whatsAppSvg}>
                            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                        </svg>
                        WhatsApp
                    </a>
                </div>
                <div className={styles.apContainer}>
                    <div className={styles.apTitle}>
                        <h2>Sobre o imóvel</h2>
                        <p>Apresentação do projeto</p>
                        <div className={styles.apParagrafo}>
                            <p>
                                Apartamentos à venda em Santo Amaro com 2 dormitórios, opção de terraço, suíte e lazer completo. Conheça o Mérito Santo Amaro com a Cury Construtora!
                            </p>
                            <p>
                                Ao lado da Sodimac Santo Amaro e do Centro Universitário Ítalo Brasileiro;
                                Próximo às estações João Dias e Santo Amaro;
                                Perto do Sesc Santo Amaro e do Carrefour
                            </p>
                            <p>
                                Compre na planta com condições imperdíveis.
                                Fale agora mesmo com um corretor online e faça uma simulação de financiamento!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.sliderContainer}>
                <h2>Imagens</h2>
                <p>Perspectiva do imóvel</p>
                <div className={styles.slide_flex}>
                    <Swiper
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        navigation
                    >
                        {data.map((item) => (
                            <SwiperSlide key={item.id}>
                                <img
                                    src={item.image}
                                    alt="Slider"
                                    className={styles.slide_item}
                                />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </section>

            <section>
                <div className={styles.apTitle}>
                    <h2>Diferencias</h2>
                    <p>Lazer e comodidade</p>
                    <div className={styles.lazerIcons}>
                        <div className={styles.lazerIconsCont} id={styles.licMargin}>
                            <div className={styles.icon}>
                                {Icon.piscina()}
                            </div>
                            <div className={styles.icon}>
                                {Icon.saunaEDescanso()}
                            </div>
                            <div className={styles.icon}>
                                {Icon.petPlace()}
                            </div>
                            <div className={styles.icon}>
                                {Icon.churrasqueira()}
                            </div>
                        </div>
                        <div className={styles.lazerIconsCont}>
                            <div className={styles.icon}>
                                {Icon.fitness()}
                            </div>
                            <div className={styles.icon}>
                                {Icon.playBaby()}
                            </div>
                            <div className={styles.icon}>
                                {Icon.espacoBeleza()}
                            </div>
                            <div className={styles.icon}>
                                {Icon.sportBar()}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.regiao}>
                <img src={Regiao} alt="Região" />
                <div className={styles.regiaoDescritivo}>
                    <h2>
                        Sobre a região
                    </h2>
                    <p>
                        A <span>Zona Sul de São Paulo</span> é uma das regiões mais desejadas para morar e não faltam motivos: seus bairros são repletos de uma extensa variedade de serviços, grandes centros comerciais, hospitais, escolas e universidades e oferecem muitas opções de lazer e mobilidade.
                    </p>
                    <p>
                        Com uma área que abrange mais de 600 km², a Zona Sul abriga alguns dos bairros mais famosos e privilegiados da cidade de São Paulo. Entre eles, podemos destacar: Sacomã, Vila Mariana, Santo Amaro, Vila das Belezas e outros.
                    </p>
                </div>
            </section>
            <Parceria />
            <Redes />
            <Footer />
        </motion.div>
    )
}
export default Apt07