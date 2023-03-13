import Center from '../../components/flex/Center';
import VStack from '../../components/flex/VStack';
import lyceum_logo from '../../shared/lyceum_logo.png';
import lyceum_game_center_logo from '../../shared/logo_light.png';
import developer from '../../shared/me.jpg';
import github from '../../shared/github.png';
import './AboutUsPage.css';

const AboutUsPage = () => {
    return (
        <Center>
            <VStack>
                <h1 className="logo_h1">
                    Lyceum 
                    <span className="blue"> G</span>
                    <span className="green">a</span>
                    <span className="yellow">m</span>
                    <span className="red">e </span> 
                    Center
                </h1>
                <img src={lyceum_logo} className='lyceum-logo-image' />
                <div className='text-block'>
                    <h1>
                        <span style={{fontWeight: 400}}>Лицей БГУ</span><br/>
                        Первое в Республике Беларусь<br/>  учебноезаведение нового типа,<br/>  основанное в 1989 г.
                    </h1>
                </div>
                <img src={lyceum_game_center_logo} className='lyceum-logo-image' />
                <div className='text-block'>
                    <h1>
                        <span style={{fontWeight: 400}}>Игровой Центр</span><br/>
                        Место, где можно отдохнуть от<br/> учёбы, играя в простые игры<br/> и соревнуясь с другими<br/> лицеисатми
                    </h1>
                </div>
                <img src={developer} className='lyceum-logo-image' style={{boxSizing: "250px"}} />
                <div className='text-block'>
                    <h1>
                        <span style={{fontWeight: 400}}>Разработчик</span><br/>
                        Меня зовут Даниил Кононенко.<br/> Я учусь в Лицее БГУ, 11ИФ классе. 
                    </h1>
                </div>

                <a href='https://github.com/Kononenko-Daniil/game-center'>
                    <img src={github} style={{width: "50px", marginBottom: "20px", cursor: 'pointer'}} />
                </a>
            </VStack>
        </Center>
    )
}

export default AboutUsPage;
