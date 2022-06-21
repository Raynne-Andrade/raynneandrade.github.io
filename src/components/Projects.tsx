import { Description } from "@mui/icons-material"

const Projects = () => {
    const projects = [
        {
            linguagem: 'Wordpress',
            nome: 'Closet',
            description: 'Loja virtual de roupa',
            img: '../assets\cartao.png',
            link: "closetdetendencia.com.br"
        }, {
            linguagem: 'Wordpress',
            nome: 'Closet',
            description: 'Loja virtual de roupa',
            img: '../assets\cartao.png',
            link: "closetdetendencia.com.br"
        }
    ]
    return (
        <div id="portfolio">
            <h2> Projetos desenvolvidos </h2>
            <div> {projects.map((project) => <div> {project.nome} </div>)}  </div>
        </div>
    )
}
export default Projects