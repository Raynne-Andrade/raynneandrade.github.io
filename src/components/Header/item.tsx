type Props = { 
    link: string;
    name: string;
}

const Itens = ({link, name}: Props) => { 
    return(
        <a href="/"> {name} </a>
    );
}
export default Itens