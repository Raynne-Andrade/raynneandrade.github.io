const AboutMe = () => {

    return (
        <section className="flex justify-center bg-pink-100 dark:bg-neutral-800 p-5" id="aboutMe">
            <div className="flex content-center gap-4 overflow-hidden flex-wrap md:flex-nowrap">
                <div>
                    <img src="../assets/Raynne.png" width={"300px"} />
                </div>
                <div className="text-black dark:text-white self-center ">
                    <p> 23 anos, formada em analíse e desenvolvimento de sistemas. </p>
                    <p> Atuando como Desenvolvedor Front-end, onde lido com aplicações Web em Vue.js, Laravel com template blade. </p>
                    <p> Possuo conhecimentos sólidos em: HTML5, CSS3, JavaScript, SASS, Figma, Bootstrap, Git, ReactJs e VueJs.</p>
                    <p> Busco futuramente ingressar no mundo do desenvolvimento de jogos em Java e Python. </p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;
