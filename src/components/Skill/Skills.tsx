import { FaReact, FaVuejs, FaHtml5, FaCss3Alt, FaJsSquare, FaWordpress, FaFigma, FaSass, FaLaptopCode, FaSearch, FaLaravel } from 'react-icons/fa'
const Skill = () => {

    const tailwind = require("../../assets/Tailwind.png")
    const skills = ['Javascript', 'react', 'css', 'html', 'vuejs', "Wordpress", "Sass", "Figma", "tailwind", "blade", "seo", "responsividade"]
    function onHoverSkill(item: string) {
        for (let i = 0; i < skills.length; i++) {
            if (skills[i] == item) {
                const a = document.querySelector('.' + skills[i]) as HTMLElement | null;
                const b = document.querySelector('.default') as HTMLElement | null;
                if (a != null && b != null) {
                    a.style.display = 'block'
                    b.style.display = 'none'
                }
            }
            else {
                const a = document.querySelector('.' + skills[i]) as HTMLElement | null;
                if (a != null) {
                    a.style.display = 'none'
                }
            }
        }
    }

    function mouseout(item: string) {
        const a = document.querySelector('.default') as HTMLElement | null;
        if (a != null) {
            a.style.display = 'block'
        }
        for (let i = 0; i < skills.length; i++) {
            if (skills[i] == item) {
                const a = document.querySelector('.' + skills[i]) as HTMLElement | null;
                if (a != null) {
                    a.style.display = 'none'
                }
            }
        }
    }
    return (
        <section className='my-10 sm:flex min-h-[200px] justify-center p-5 items-center flex-wrap' id="skills">
            <div className='text-white'>
                <h2 className="text-black dark:text-white font-semibold text-4xl"> {"< Habilidades />"} </h2>
                <p className="text-pink-500 font-semibold text-4xl mb-20 leading-6"> ______ </p>
            </div>
            <div className='my-10 sm:flex justify-center items-center min-w-full'>
                <div className='w-full justify-between block mb-5 sm:w-[400px]'>
                    <button className='bg-gray-200 dark:bg-gray-400 p-2 rounded-xl m-2' onMouseOver={() => onHoverSkill('react')} onMouseOut={() => mouseout('react')}>
                        <FaReact size={50} color='#73D8FF' />
                    </button>
                    <button className='bg-gray-200 dark:bg-gray-400 p-2 rounded-xl m-2' onMouseOver={() => onHoverSkill('vuejs')} onMouseOut={() => mouseout('vuejs')}>
                        <FaVuejs size={50} color='#2D862E' />
                    </button>
                    <button className='bg-gray-200 dark:bg-gray-400 p-2 rounded-xl m-2' onMouseOver={() => onHoverSkill('html')} onMouseOut={() => mouseout('html')}>
                        <FaHtml5 size={50} color='#FF5722' />
                    </button>
                    <button className='bg-gray-200 dark:bg-gray-400 p-2 rounded-xl m-2' onMouseOver={() => onHoverSkill('css')} onMouseOut={() => mouseout('css')}>
                        <FaCss3Alt size={50} color="#1273DE" />
                    </button>
                    <button className='bg-gray-200 dark:bg-gray-400 p-2 rounded-xl m-2' onMouseOver={() => onHoverSkill('Javascript')} onMouseOut={() => mouseout('Javascript')}>
                        <FaJsSquare size={50} color="#FB9E00" />
                    </button>
                    <button className='bg-gray-200 dark:bg-gray-400 p-2 rounded-xl m-2' onMouseOver={() => onHoverSkill('WordPress')} onMouseOut={() => mouseout('WordPress')}>
                        <FaWordpress size={50} color='#207196' />
                    </button>
                    <button className='bg-gray-200 dark:bg-gray-400 p-2 rounded-xl m-2' onMouseOver={() => onHoverSkill('Figma')} onMouseOut={() => mouseout('Figma')}>
                        <FaFigma size={50} color='#000' />
                    </button>
                    <button className='bg-gray-200 dark:bg-gray-400 p-2 rounded-xl m-2' onMouseOver={() => onHoverSkill('Sass')} onMouseOut={() => mouseout('Sass')}>
                        <FaSass size={50} color='#C76395' />
                    </button>
                    <button className='bg-gray-200 dark:bg-gray-400 p-2 rounded-xl m-2' onMouseOver={() => onHoverSkill('tailwind')} onMouseOut={() => mouseout('tailwind')}>
                        <img src={tailwind} width={50} />
                    </button>
                    <button className='bg-gray-200 dark:bg-gray-400 p-2 rounded-xl m-2' onMouseOver={() => onHoverSkill('blade')} onMouseOut={() => mouseout('blade')}>
                        <FaLaravel size={50} color="#eb4d43" />
                    </button>
                    <button className='bg-gray-200 dark:bg-gray-400 p-2 rounded-xl m-2' onMouseOver={() => onHoverSkill('seo')} onMouseOut={() => mouseout('seo')}>
                        <FaSearch size={50} color="#1273DE" />
                    </button>
                    <button className='bg-gray-200 dark:bg-gray-400 p-2 rounded-xl m-2' onMouseOver={() => onHoverSkill('responsividade')} onMouseOut={() => mouseout('responsividade')}>
                        <FaLaptopCode size={50} color="#FB9E00" />
                    </button>

                </div>
                <div className='max-w-lg'>
                    <p className="default text-gray-800 dark:text-white block text-center">  Passe o mouse sobre as habilidades para entender um pouco mais sobre cada uma delas.  </p>
                    <p className="Javascript text-gray-800 dark:text-white hidden text-center"> <b> JavaScript </b> é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web. </p>
                    <p className="react text-gray-800 dark:text-white hidden text-center"> O <b> React </b> é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros. </p>
                    <p className="css text-gray-800 dark:text-white hidden text-center" >  Trata-se de uma linguagem de marcação, amplamente utilizada com HTML ou XHTML, e representa diversas possibilidades para a formatação. O <b> CSS </b> ajuda a editar, alinhar, remover e trabalhar no espaço entre elementos de uma página. </p>
                    <p className="html text-gray-800 dark:text-white hidden text-center" >   Linguagem de Marcação de Hipertexto. O <b> HTML </b> é o componente básico da web, ele permite inserir o conteúdo e estabelecer a estrutura básica de um website. </p>
                    <p className="vuejs text-gray-800 dark:text-white hidden text-center" > <b> Vue.js </b> é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única </p>
                    <p className="WordPress text-gray-800 dark:text-white hidden text-center"> O <b> WordPress </b> é o CMS mais usado no mundo, e por bons motivos. Além de flexível e gratuito, ele conta com várias outras vantagens em relação aos demais CMS's </p>
                    <p className="Figma text-gray-800 dark:text-white hidden text-center"> <b> Figma </b> é um editor online de design gráfico focado na criação de interfaces gráficas e experiência de usuário com ênfase colaborativa.  </p>
                    <p className="Sass text-gray-800 dark:text-white hidden text-center" > O <b> SASS </b> é uma linguagem de extensão do CSS, a sigla significa “Syntactically Awesome Style Sheets” traduzindo ao pé da letra, folhas de estilo com uma sintaxe incrível. A sua ideia é adicionar recursos especiais como variáveis, mixins, funções e operações e outras opções variadas que iremos comentar. O SASS tem como objetivo tornar o processo de desenvolvimento mais simples e eficiente, agora, veremos alguns exemplos da versatilidade dessa tecnologia. </p>
                    <p className="tailwind text-gray-800 dark:text-white hidden text-center" > <b> Tailwind </b> é um framework CSS que permite há você criar layouts para suas aplicações web utilizando sua estrutura. Ou seja, uma ferramenta que fornece componentes para sua estilização agilizando os processos de criação de web sites. Trazendo classes estilizadas a serem incluídas no CSS, com o uso de utility-first que são classes utilitárias que representam atributos CSS, como width, border e background.</p>
                    <p className="blade text-gray-800 dark:text-white hidden text-center" > <b> Blade </b>, é um engine templates do framework Laravel que possibilita o reuso de código e simplifica a inserção de trechos PHP em páginas HTML.</p>
                    <p className="seo text-gray-800 dark:text-white hidden text-center" >  <b> Seo </b> é o conjunto de técnicas usadas, geralmente divididas entre tecnologia, conteúdo e autoridade, para alcançar bom posicionamento de páginas de um site no Google e em outros buscadores, gerando tráfego orgânico.</p>
                    <p className="responsividade text-gray-800 dark:text-white hidden text-center" >  Um <b> site responsivo </b> é aquele cuja disposição dos elementos e o conteúdo se adaptam de acordo com o tamanho da tela do usuario.  </p>
                </div>
            </div>
        </section>
    )
}
export default Skill