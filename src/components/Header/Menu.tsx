import Itens from "./Itens";

const Menu = () => {
    const links = [
        {
            name: "Home",
            link: "/"
        }, {
            name: "Portfólio",
            link: "/portfolio"
        }
    ]
    return (
        <div> {links.map((item) => <Itens link={item.link} name={item.name} />)} </div>
    )
}

export default Menu;