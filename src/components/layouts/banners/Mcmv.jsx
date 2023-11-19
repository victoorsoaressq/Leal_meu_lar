import Logo1 from '../../../assets/img/mcmvLogo.png'
import Logo2 from '../../../assets/img/caixaLogo.png'
import Logo3 from '../../../assets/img/fgtsLogo.png'

function Mcmv() {
    return(
        <div className='bannerMcmv'>
           
            <img src={Logo1} alt="MCMV" />
            <img src={Logo2} alt="CAIXA" />
            <img src={Logo3} alt="FGTS" />
            
            
        </div>
    )
}
export default Mcmv