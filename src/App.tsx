import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Introduction from "./components/Introduction/Intruduction";
import Projects from "./components/Projects";
import Skill from "./components/Skill/Skills";

import "./styles/index.css";

function App() {

    return (
        <div className="App">
            <Header />
            <div className='flex justify-center overflow-hidden bg-black'>
                <div>
                    <Introduction/>
                    <AboutMe />
                    <Skill/>
                    <Projects/>
                    <Contact/>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
