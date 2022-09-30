type Props = { 
    link: string;
    name: string;
}

const Itens = ({link, name}: Props) => { 
    return(
        <a href={link} className="no-underline text-white uppercase font-sans text-base"> {name} </a>
    );
}
export default Itens