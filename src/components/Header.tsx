import Menu from "./Header/Menu"

const Header = () => { 
    return ( 
        <header style={{display:'flex', gap: '20px', padding:"15px", background: "#000", justifyContent: 'space-between', alignItems: 'center'}}>
            <Menu/> 
            <div> 
                <input type={"search"} placeholder="Pesquisar" style={{ padding: "3px" }}/>
            </div>
        </header>
    )
}
export default Header