const AboutMe = () => {

    const raynne = require("../assets/Raynne.png")

    return (
        <section className="flex justify-center bg-pink-100 dark:bg-neutral-800 p-5" id="aboutMe">
            <div className="flex content-center gap-4 overflow-hidden flex-wrap md:flex-nowrap">
                <div>
                    <img src={raynne} width={"300px"} />
                </div>
                <div className="text-neutral-700 dark:text-white self-center text-lg font-normal
                  max-w-4xl leading-7">
                    <h3 className="text-3xl font-bold text-neutral-800 mb-4 dark:text-white ">
                        Eu crio sites para pequenas empresas e empreendedores que querem crescer e crescer. 
                    </h3>
                    <p> Especialista em HTML, CSS e Javascript, com sólidos conhecimentos em arquitetura do ecosistema Front-End e em tecnologias com  React, VueJs, TypeScript, Web Components, design responsivo, web mobile, entre outros. </p>
                    <p> Sou entusiasta de tecnologia, gosto de me manter atualizada sobre as tendencias e como elas podem nos auxiliar. Também gosto de livros cliches, gatinhos fofos e café. </p>
                    <p> Busco futuramente ingressar no mundo do desenvolvimento de jogos em Javascript, Java e Python. </p>

                </div>
            </div>
        </section>
    )
}

export default AboutMe;
