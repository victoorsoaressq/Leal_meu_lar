import Header from '../../layouts/header/Header'
import styles from './Depoimentos.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion'

import Footer from '../../layouts/footer/Footer';
import CardDp from '../../layouts/cardDepoimento/CardDepoimento';

import img1 from '../../../assets/img/clientes/01.jpg'
import img2 from '../../../assets/img/clientes/02.jpg'
import img3 from '../../../assets/img/clientes/03.jpg'
import img4 from '../../../assets/img/clientes/04.jpg'
import img5 from '../../../assets/img/clientes/05.jpg'
import img6 from '../../../assets/img/clientes/06.jpg'
import img7 from '../../../assets/img/clientes/07.jpg'
import img8 from '../../../assets/img/clientes/08.jpg'
import img9 from '../../../assets/img/clientes/09.jpg'
import img10 from '../../../assets/img/clientes/10.jpg'

import dpImg01 from '../../../assets/img/clientes/dp01.jpg'
import dpImg02 from '../../../assets/img/clientes/dp02.jpg'
import dpImg03 from '../../../assets/img/clientes/dp03.jpg'
import dpImg04 from '../../../assets/img/clientes/dp04.jpg'

import dpVideo from '../../../assets/video/dpvideo.mp4'

function Depoimentos() {
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
    ]
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Header
                banner='BannerSobre'
                title='Depoimentos'
                subTitle='Entrega de chaves'
                button='ButtonClose'
            />
            <section>
                
                <div className={styles.dpContainer}>
                <video controls >
                    <source src={dpVideo} type="video/mp4"/>
                </video>
                </div>
                <div className={styles.dpContainer}> 
                    <CardDp 
                        img={dpImg01}
                        nome='Jaqueline'
                        descritivo='
                        Muito obrigada por tudo vocês são muito especiais , obrigada por estar nessa com a gente , por acreditar em sonhos , e por não desistir , e pelo presente ameii. 
                        Que Deus abençoe grandemente a vida de vocês 
                        DA ASSINATURA PARA A ENTREGA DAS  CHAVES, PRA VIDA ❤️
                        '
                    />
                     <CardDp 
                        img={dpImg02}
                        nome='Josy'
                        descritivo='
                        Obrigada Leal, gratidão pela sua paciência no meu momento de decisão 🙏 Deus continue te abençoando 😘😘
                        '
                    />
                     <CardDp 
                        img={dpImg03}
                        nome='Roberta'
                        descritivo='
                        Obrigada , vocês foram anjos que Deus colocou para realizar o nosso sonho 🙌🏻
                        '
                    />
                     <CardDp 
                        img={dpImg04}
                        nome='Francielle'
                        descritivo='
                        Obrigada por tudo, que você continue cuidadosa e gentil.

                        Isso fez toda a diferença. 

                        Sucesso!!!!🤩
                        '
                    />
                </div>
                <div className={styles.descritivo}>
                    <h2>
                        Já são + de 300<br/>
                        apartamentos vendidos
                    </h2>

                    <p>
                        Em toda São Paulo! São centenas de famílias e pessoas que 
                        ajudei a conquistar o apartamento próprio com as condições 
                        mais acessíveis .
                    </p>
                </div>
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
                <div className={styles.descritivo}>
                    <h2>
                    Olá, sou a<br/>
                    Corretora Leal.
                    </h2>
                    <p>
                        Sou especialista em imóveis financiados pela Caixa Econômica Federal, principalmente através do Programa Minha Casa Minha Vida. 
                    </p>
                    <p>
                        Meu foco é oferecer a condição mais facilitada possível para você conquistar o seu apartamento.
                    </p>
                    <p>
                        Saiba como você também pode:
                    </p>

                    <a 
                        href='https://wa.me//5511982344334?text=Olá%20tudo%20bem?        %0AVim%20através%20do%20site' target='_blank'
                        rel="noreferrer"
                        id={styles.whatsApp}>Como conquistar seu imóvel
                    </a>
                </div>
                
            </section>
            <Footer/>
        </motion.div>
    )
}
export default Depoimentos