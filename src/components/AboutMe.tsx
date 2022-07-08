import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/system';

import "../styles/components/AboutMe.css"

const AboutMe = () => {
    const avatar = require('../assets/avatar.png')
    const theme = useTheme()
    const isMob = useMediaQuery(theme.breakpoints.down('sm'));
 
    return (
        <section>
            <div className='aboutme'>
                <div className="aboutme_avatar">
                    <img src={avatar} width='250px' />
                </div>
                <div className="aboutme_info">
                    <p className='inner_text'> Olá, sou a </p>
                    <p className='inner_text_h1'>  Raynne Andrade </p>
                    <p className='inner_text'> Desenvolvedora Front-End </p>
                    <div> 
                        <button className="button"> <a> Linkedin </a> </button> 
                        <button className="button"> <a> GitHub </a> </button> 
                    </div>
                </div>
            </div>
            <div className='next'>
                <a href="#portfolio"> <KeyboardArrowDownIcon /> </a>
            </div>
        </section>
    )
}
export default AboutMe;