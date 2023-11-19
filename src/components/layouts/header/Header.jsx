import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'


function Header(props) {
    const [active, setMode] = useState(false)
    const ToggleMode = () => {
        setMode(!active)
    }
    
    
    return (
        <header id={props.banner}>
            <div className={styles.container}>
                <nav>
                    <Link to='/'>
                        <h1>Leal <span>meu lar</span></h1>
                    </Link>
                    <ul className={styles.ul} id={active ? styles.open : styles.close}>
                        <Link to='/'>
                            Home
                        </Link>
                        <Link to='/depoimentos'>
                            Depoimentos
                        </Link>
                        <Link to='/projetos'>
                            Projetos
                        </Link>
                        <Link to='/contato' className={styles.btn} >
                            Contato
                        </Link>
                        <div className={styles.close_icon} onClick={ToggleMode}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
                            </svg>
                        </div>
                    </ul>
                    
                    <div className={styles.menu_icon}  onClick={ToggleMode}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                    </div>
                </nav>
                <section className={styles.banner} >
                    <div className={styles.banner_text} >
                        <h1>{props.title}</h1>
                        <p>{props.subTitle}</p>
                        <div id={props.button}>
                            <a 
                                href='https://wa.me//5511982344334?text=Olá%20tudo%20bem?%0AVim%20através%20do%20site' 
                                target='_blank'
                                rel="noreferrer"
                                className={styles.btn} 
                                id={styles.animate_btn}
                            >
                                Entre em contato
                            </a>
                        </div>
                    </div>
                </section>
            </div>

        </header>
    )
}

export default Header