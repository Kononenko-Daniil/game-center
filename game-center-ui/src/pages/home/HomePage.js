import logo from '../../shared/logo_light.png';
import lyceum_logo from '../../shared/lyceum_logo.png';
import Center from "../../components/flex/Center";
import VStack from "../../components/flex/VStack";
import './HomePage.css';

const HomePage = () => {
    return (
        <div>
            <Center>
                <VStack>
                    <a href="/">
                        <img src={logo} alt="Lyceum Game Center Logo Light" className="logo_large" />
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
            {/* <HStack style={{marginTop: "100px", backgroundColor: "#1EC2E2", justifyContent: "center"}}>
            <img 
                src={lyceum_logo} 
                alt="Lyceum Logo" 
                style={{width:"300px"}} />
            
            <div style={{width:"300px"}}>
                <h1 className="logo_h1" style={{color: "white"}}>Лицей БГУ</h1>
                <p>
                    Учебно-образовательное учреждение Республики Беларусь, 
                    обеспечивающее получение последней ступени среднего образования
                </p>
            </div>
        </HStack> */}
        </div>
    )
}

export default HomePage;
