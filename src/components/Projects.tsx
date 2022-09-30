import ReadMore from "./Molecules/ReadMore"

const Projects = () => {
    const project = [
        { name: 'Pokedrex', url: "#", img: '../../assets/cartao.png', id:"1" },
        { name: 'Pokedrex', url: "#", img: '../../assets/cartao.png', id:"2" },
        { name: 'Pokedrex', url: "#", img: '../../assets/cartao.png', id:"3" },
        { name: 'Pokedrex', url: "#", img: '../../assets/cartao.png', id:"4" },
        { name: 'Pokedrex', url: "#", img: '../../assets/cartao.png', id:"5" },
        { name: 'Pokedrex', url: "#", img: '../../assets/cartao.png', id:"6" },
        { name: 'Pokedrex', url: "#", img: '../../assets/cartao.png', id:"7" },
        { name: 'Pokedrex', url: "#", img: '../../assets/cartao.png', id:"8" }
    ]
    
    return (
        <section className="max-w-6xl min-h-screen">
            <div>
                <h2 className="text-white text-2xl mb-10"> Projetos desenvolvidos: </h2>
                <div className="flex flex-wrap gap-3 justify-evenly">
                    {project.map((item: any, index: Number) => 
                        <div className={ index >= 6 ? "hidden w-[350px] h-60 rounded-2 overflow-hidden" : " block w-[350px] h-60 rounded-2 overflow-hidden"} key={item.id}>
                            <a href={item.url} className="relative"> 
                                <img src={item.img} width="330px" height="250px" className="object-cover"/>
                                <p className="relative bottom-20 text-center"> {item.name}</p>
                            </a> 
                        </div> 
                    )}
                </div> 
                <div className="flex justify-center"> 
                    {project.length > 3 && <ReadMore/>}
                </div>
            </div>
        </section>
    )
}
export default Projects