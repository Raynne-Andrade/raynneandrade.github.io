import Menu from "./Header/Menu"

import "../styles/header.css"

const Header = () => { 
    const logo = require('../assets/Logo.png')
    const links = [
        {
            name: "Sobre mim",
            link: "#aboutMe"
        }, {
            name: "Portfólio",
            link: "#portfolio"
        }, {
            name: "Skills",
            link: "#skills"
        }, {
            name: "Contato",
            link: "#contact"
        }
    ]
    return ( 
        <header className="Header">
            <img src={logo} width='200px'/>
            <Menu links={links}/> 
        </header>
    )
}
export default Header