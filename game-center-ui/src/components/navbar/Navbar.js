import './Navbar.css';
import logo from '../../shared/logo.png';
import Divider from '../divider/Divider';
import Spacer from '../spacer/Spacer';
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
    const ref = useRef(null);
    const [height, setHeight] = useState(80);

    useEffect(() => {
        setHeight(ref.current.clientHeight);
    });

    return (
        <div>
            <div className='navbar' ref={ref}>
                <img src={logo} alt='Lyceum Game Center Logo' className='navbar-logo' />
                <div className='navbar-nav'>
                    <div className='navbar-nav-item'>
                        <a className='navbar-nav-link' href="/">Главная</a>
                    </div>
                    <div className='navbar-nav-item'>
                        <a className='navbar-nav-link' href="/games">Игры</a> 
                    </div>
                </div>
            </div>
            <Spacer height={height} />
        </div>
        
    )
}

export default Navbar;
