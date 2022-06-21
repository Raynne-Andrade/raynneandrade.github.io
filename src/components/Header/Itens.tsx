type Props = { 
    link: string;
    name: string;
}

const Itens = ({link, name}: Props) => { 
    return(
        <a href={link} style={{textDecoration: "none", color:'#fff', fontFamily: 'sans-serif', textTransform: 'uppercase', fontSize: '16px'}}> {name} </a>
    );
}
export default Itens