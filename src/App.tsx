import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Menu from "./components/Header/Menu";
import MySkill from "./components/MySkill";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <AboutMe />
          <MySkill />
        </div>
      </div>
    </div>
  );
}

export default App;
