import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./helpers/Layout";
import GameDetailPage from "./pages/game-detail/GameDetailPage";
import GamesPage from "./pages/games/GamesPage";
import HomePage from "./pages/home/HomePage";
import './css/global.css'
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak";


const App = () => {
    return (
        <ReactKeycloakProvider 
            authClient={keycloak} 
            initOptions={{checkLoginIframe: false}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage />} />
                        <Route path="games">
                            <Route index element={<GamesPage />} />
                            <Route path=":gid" element={<GameDetailPage />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </ReactKeycloakProvider>
        
    );
}

export default App;
