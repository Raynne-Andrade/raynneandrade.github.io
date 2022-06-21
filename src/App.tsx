import AboutMe from "./components/AboutMe";
import Estudying from "./components/Estudying";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Header/Menu";
import MySkill from "./components/MySkill";
import Projects from "./components/Projects";
import SocialMedia from "./components/SocialMedia";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: 'flex', justifyContent: 'center', minWidth: '100%'}}>
        <div>
          <AboutMe />
          <div style={{ display: 'flex' }}>
            <MySkill />
            <Estudying />
          </div>
          <Projects />
          <SocialMedia />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
