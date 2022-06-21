type Props = { 
    link: string;
    name: string;
}

const Itens = ({link, name}: Props) => { 
    return(
        <a href={link} style={{textDecoration: "none", color:'#fff'}}> {name} </a>
    );
}
export default Itens