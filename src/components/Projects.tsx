import { useState } from "react"
import ReadLess from "./Molecules/ReadLess"
import ReadMore from "./Molecules/ReadMore"

const Projects = () => {
    const project = require('../content/projects.json')
    const embreve = require("../assets/embreve.png")

    const projectbyrow = 3
    const [next, setNext] = useState(projectbyrow)

    const handleMoreProject = () => {
        setNext(next + projectbyrow)
    }

    const handleLessProject = () => { 
        setNext(projectbyrow)
    }

    return (
        <section className="w-screen min-h-screen bg-pink-100 dark:bg-neutral-800 flex justify-center px-9 py-9" id="portfolio">
            <div className="max-w-6xl text-center">
                <h2 className="text-black dark:text-white font-semibold text-4xl"> {"< Projetos desenvolvidos />"} </h2>
                <p className="text-pink-500 font-semibold text-4xl mb-20 leading-6"> ______ </p>
                <div className="flex flex-wrap gap-3 justify-evenly">
                    {project.slice(0, next).map((item: any, index: Number) =>
                        <div className="w-[350px] h-60 rounded-2 overflow-hidden" key={item.id} >
                            <a href={item.url ? item.url : "#portfolio" } className="relative" target={item.url ? "_blank" : ""}>
                                <img src={item.img} width="350px" height="250px" className="object-cover rounded-2x1 " />
                                <div className="hidden relative bottom-16 z-30 hover:block"> 
                                    <h2> teste </h2> 
                                    <button> teste a</button>
                                </div>
                            </a>
                        </div>
                    )}
                </div>
                <div className="flex justify-center ">
                    {project.length > next ? <ReadMore handleMoreProject={handleMoreProject.bind(this)} /> : <ReadLess handleLessProject={handleLessProject.bind(this)} />}
                </div>
            </div>
        </section>
    )
}
export default Projects