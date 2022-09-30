import ReadMore from "./Molecules/ReadMore"

const Projects = () => {
    const project = [
        { name: '', url: "#", img: '../../assets/embreve.png', id: "1" },
        { name: '', url: "#", img: '../../assets/embreve.png', id: "2" },
        { name: '', url: "#", img: '../../assets/embreve.png', id: "3" },
        { name: '', url: "#", img: '../../assets/embreve.png', id: "4" },
        { name: '', url: "#", img: '../../assets/embreve.png', id: "5" },
        { name: '', url: "#", img: '../../assets/embreve.png', id: "6" },
        { name: '', url: "#", img: '../../assets/embreve.png', id: "7" },
        { name: '', url: "#", img: '../../assets/embreve.png', id: "8" }
    ]

    return (
        <section className="w-screen min-h-screen bg-pink-100 dark:bg-neutral-800 flex justify-center px-5 py-9" id="portfolio">
            <div className="max-w-6xl">
                <h2 className="text-black dark:text-white text-2xl mb-10"> Projetos desenvolvidos: </h2>
                <div className="flex flex-wrap gap-3 justify-evenly">
                    {project.map((item: any, index: Number) =>
                        <div className={index >= 6 ? "hidden w-[350px] h-60 rounded-2 overflow-hidden" : " block w-[350px] h-60 rounded-2 overflow-hidden"} key={item.id}>
                            <a href={item.url} className="relative">
                                <img src={item.img} width="330px" height="250px" className="object-cover rounded-2xl" />
                            </a>
                        </div>
                    )}
                    <div className="flex justify-center ">
                        {project.length > 3 && <ReadMore />}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Projects