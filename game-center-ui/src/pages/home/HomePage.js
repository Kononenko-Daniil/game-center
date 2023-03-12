import logo from '../../shared/logo_light.png';
import lyceum_logo from '../../shared/lyceum_logo.png';
import Center from "../../components/flex/Center";
import VStack from "../../components/flex/VStack";
import './HomePage.css';

const HomePage = () => {
    return (
        <Center>
            <VStack>
                <a href="/">
                    <img 
                        src={logo} 
                        alt="Lyceum Game Center Logo Light" 
                        className="logo_large" />
                </a>
                <h1 className="logo_h1">
                    Lyceum 
                    <span className="blue"> G</span>
                    <span className="green">a</span>
                    <span className="yellow">m</span>
                    <span className="red">e </span> 
                    Center
                </h1>
                <a href="/games">Перейти к играм</a>
            </VStack>
        </Center>
    )
}

export default HomePage;
