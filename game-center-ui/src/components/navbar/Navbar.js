import './Navbar.css';
import '../../css/global.css';
import logo from '../../shared/logo.png';
import avatar from '../../shared/avatar.png';
import Spacer from '../spacer/Spacer';
import { useEffect, useRef, useState } from 'react';
import { useKeycloak } from '@react-keycloak/web';


const Navbar = () => {
    const { keycloak } = useKeycloak();
    const [height, setHeight] = useState(80);
    const ref = useRef(null);
    

    useEffect(() => {
        setHeight(ref.current.clientHeight);
    });

    return (
        <div>
            <div className='navbar' ref={ref}>
                <img 
                    src={logo} 
                    alt='Lyceum Game Center Logo' 
                    className='navbar-logo' />
                <div className='navbar-nav'>
                    <div className='navbar-nav-item'>
                        <a 
                            className='navbar-nav-link' 
                            href="/">
                                Главная
                        </a>
                    </div>
                    <div className='navbar-nav-item'>
                        <a 
                            className='navbar-nav-link' 
                            href="/games">
                                Игры
                        </a> 
                    </div>
                    <div className='navbar-nav-item'>
                        <a 
                            className='navbar-nav-link' 
                            href="/about-us">
                                О нас
                        </a> 
                    </div>
                </div>
                <div className='navbar-nav-right'>
                    {
                        !keycloak.authenticated ?
                        <>
                            <button 
                                onClick={() => keycloak.register()} 
                                className="navbar-button">
                                    Sign up
                            </button>
                            <button 
                                onClick={() => keycloak.login()} 
                                className="primary navbar-button">
                                    Sign in
                            </button>
                        </>
                        :
                        <>
                            <img 
                                src={avatar}
                                onClick={() => {window.location.href = '/users/me';}} 
                                className="navbar-account">
                            </img>
                        </>
                    }
                </div>
            </div>

            <Spacer height={height} />
        </div>
    )
}

export default Navbar;
