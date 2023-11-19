import Footer from "../../layouts/footer/Footer"
import Header from "../../layouts/header/Header"
import Redes from "../../layouts/redes/redes"
import { motion } from 'framer-motion'

function Contato() {
    return(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Header 
                banner='BannerDepoimentos'
                title=' Ficou com alguma duvida?'
                subTitle=' Para mais informações acesse meu WhatsApp, estarei esperando por você!'
            />
            <Redes/>
            <Footer/>
        </motion.div>
    )
}
export default Contato