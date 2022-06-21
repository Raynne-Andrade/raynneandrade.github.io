import Menu from "./Header/Menu"

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
        <header style={{display:'flex', gap: '20px', padding:"15px", background: "#000", justifyContent: 'space-between', alignItems: 'center'}}>
            <Menu links={links}/> 
            <div> 
                <input type={"search"} placeholder="Pesquisar" style={{ padding: "3px" }}/>
            </div>
        </header>
    )
}
export default Header