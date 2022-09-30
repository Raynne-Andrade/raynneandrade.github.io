import { FaReact, FaVuejs, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa'
const Skill = () => {
    const skills = ['Javascript', 'react', 'css', 'html', 'vuejs']
    function onHoverSkill(item: string) {
        for( let i = 0; i < skills.length; i++){ 
            if(skills[i] == item){ 
                const a = document.querySelector('.' + skills[i]) as HTMLElement | null;
                const b = document.querySelector('.default') as HTMLElement | null;
                if (a != null && b  != null){
                a.style.display = 'block'
                b.style.display = 'none'
            }}
            else{ 
                const a = document.querySelector('.' + skills[i]) as HTMLElement | null;
                    if (a != null){
                    a.style.display = 'none'
                }
            }
        }
    }

    function mouseout(item: string) { 
        const a = document.querySelector('.default') as HTMLElement | null;
        if (a != null){
        a.style.display = 'block'
        }
        for( let i = 0; i < skills.length; i++){ 
            if(skills[i] == item){ 
                const a = document.querySelector('.' + skills[i]) as HTMLElement | null;
                if (a != null){
                a.style.display = 'none'
            }}
        }
    }
    return (
        <section className='block max-w-5xl my-10 sm:flex min-h-[200px]'>
            <div className='w-full justify-between block sm:w-1/2'>
                <button className='bg-slate-600 p-2 rounded-xl m-2' onMouseOver={() => onHoverSkill('react')} onMouseOut={() => mouseout('react')}>
                    <FaReact size={50} color='#73D8FF' />
                </button>
                <button className='bg-slate-600 p-2 rounded-xl m-2' onMouseOver={() => onHoverSkill('vuejs')} onMouseOut={() => mouseout('vuejs')}>
                    <FaVuejs size={50} color='#2D862E' />
                </button>
                <button className='bg-slate-600 p-2 rounded-xl m-2' onMouseOver={() => onHoverSkill('html')} onMouseOut={() => mouseout('html')}>
                    <FaHtml5 size={50} color='#FF5722' />
                </button>
                <button className='bg-slate-600 p-2 rounded-xl m-2' onMouseOver={() => onHoverSkill('css')} onMouseOut={() => mouseout('css')}>
                    <FaCss3Alt size={50} color="#1273DE" />
                </button>
                <button className='bg-slate-600 p-2 rounded-xl m-2' onMouseOver={() => onHoverSkill('Javascript')} onMouseOut={() => mouseout('Javascript')}>
                    <FaJsSquare size={50} color="#FB9E00" />
                </button>

            </div>
            <div className='max-w-lg'>
                <p className="default text-white block text-center">  Passe o mouse sobre as habilidades para entender um pouco mais sobre cada uma delas.  </p>
                <p className="Javascript text-white hidden text-center"> JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web. </p>
                <p className="react text-white hidden text-center"> O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros. </p>
                <p className="css text-white hidden text-center" >  Trata-se de uma linguagem de marcação, amplamente utilizada com HTML ou XHTML, e representa diversas possibilidades para a formatação. O CSS ajuda a editar, alinhar, remover e trabalhar no espaço entre elementos de uma página. </p>
                <p className="html text-white hidden text-center" >   Linguagem de Marcação de Hipertexto. O HTML é o componente básico da web, ele permite inserir o conteúdo e estabelecer a estrutura básica de um website. </p>
                <p className="vuejs text-white hidden text-center" >  Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única </p>
            </div>
        </section>
    )
}
export default Skill