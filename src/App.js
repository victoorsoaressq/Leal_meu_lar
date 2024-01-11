import {  Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import './Global.css'

import Home from './components/pages/home/Home'
import Depoimentos from './components/pages/depoimentos/Depoimentos'
import Projetos from './components/pages/projetos/Projetos'
import Contato from './components/pages/contato/Contato'

import Apt01 from './components/pages/imoveis/Apt01'
import Apt02 from './components/pages/imoveis/Apt02'
import Apt03 from './components/pages/imoveis/Apt03'
import Apt04 from './components/pages/imoveis/Apt04'
import Apt05 from './components/pages/imoveis/Apt05'
import Apt06 from './components/pages/imoveis/Apt06'
import Apt07 from './components/pages/imoveis/Apt07'
import Apt08 from './components/pages/imoveis/Apt08'

function App() {
  const location = useLocation()

  return (
    
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          
          <Route path='/' element={<Home />} />
          <Route path='/projetos' element={<Projetos />} />

          <Route path='/projetos/ap01' element={<Apt01 />} />
          <Route path='/projetos/ap02' element={<Apt02 />} />
          <Route path='/projetos/ap03' element={<Apt03 />} />
          <Route path='/projetos/ap04' element={<Apt04 />} />
          <Route path='/projetos/ap05' element={<Apt05 />} />
          <Route path='/projetos/ap06' element={<Apt06 />} />
          <Route path='/projetos/ap07' element={<Apt07 />} />
          <Route path='/projetos/ap08' element={<Apt08 />} />
          <Route path='/depoimentos' element={<Depoimentos />} />
          <Route path='/contato' element={<Contato />} />

        </Routes>
      </AnimatePresence>
    
  );
}

export default App;