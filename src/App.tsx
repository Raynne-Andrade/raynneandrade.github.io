import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Header/Menu";
import "./styles/App.css"

function App() {
  const theme = useTheme()
  const isMob = useMediaQuery(theme.breakpoints.down('sm'));
  const container = {
    display: 'flex', justifyContent: 'center', overflow: 'hidden',
    background: 'linear-gradient(357deg, rgba(255,255,255,1) 0%, rgba(251,8,169,1) 100%)'
  }
  return (
    <div className="App">
      <Header />
      <div style={container}>
        <div>
          <AboutMe />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
