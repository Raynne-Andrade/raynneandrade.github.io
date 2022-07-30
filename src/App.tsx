import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";

import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Skill from "./components/Skills";

import "./styles/App.css";

function App() {
    const theme = useTheme()
    const isMob = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div className="App">
            <Header />
            <div className='container'>
                <div>
                    <AboutMe />
                    <Skill/>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
