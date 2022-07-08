import Menu from "./Header/Menu"

import "../styles/header.css"

const Header = () => { 
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
            <Menu links={links}/> 
            <div> 
                <input type={"search"} placeholder="Pesquisar" className="Header--search" />
            </div>
        </header>
    )
}
export default Header