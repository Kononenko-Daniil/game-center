import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Layout from "./Layout";
import GameDetailPage from "./pages/game-detail/GameDetailPage";
import GamesPage from "./pages/games/GamesPage";
import HomePage from "./pages/home/HomePage";
import './css/global.css'


const App = () => {
    return (
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
        
    );
}

export default App;
