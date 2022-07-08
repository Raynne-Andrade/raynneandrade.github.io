import "../../styles/components/Menu.css"

type Props = { 
    link: string;
    name: string;
}

const Itens = ({link, name}: Props) => { 
    return(
        <a href={link} className="Menu--item"> {name} </a>
    );
}
export default Itens