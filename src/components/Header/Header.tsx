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
        }
    ]
    return (
        <header className="flex flex-col gap-5 p-4 justify-between items-center bg-pink-500 px-10 text-neutral-800 md:flex-row dark:bg-black dark:text-white">
            <img src={logo} width='200px' />
            <div className="flex gap-20 justify-between items-center w-full md:justify-end">
                <Menu links={links} />
                <DarkModeToggle />
            </div>
        </header>
    )
}
export default Header