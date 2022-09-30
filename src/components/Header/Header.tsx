import DarkModeToggle from "../DarkMode";
import Menu from "./Menu"

const Header = () => {
    const logo = require('../../assets/Logo.png')
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
        <header className="flex gap-5 p-4 justify-between items-center bg-pink-300 px-10 dark:bg-neutral-600">
            <img src={logo} width='200px' />
            <Menu links={links} />
            <DarkModeToggle/>
        </header>
    )
}
export default Header