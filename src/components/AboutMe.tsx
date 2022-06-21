import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { IconButton, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/system';
const AboutMe = () => {
    const avatar = require('../assets/avatar.png')
    const theme = useTheme()
    const isMob = useMediaQuery(theme.breakpoints.down('sm'));
    const styleDesk = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
    const styleMob= { 
        display:'block'
    }
    return (
        <>
            <div style={isMob ? styleMob : styleDesk}>
                <div>
                    <img src={avatar} width='200px' />
                </div>
                <div>
                    <h2 style={{ fontSize: '35px' }}> FrontEnd Developer </h2>
                    <p style={{ fontSize: '20px' }}> Hi, i am Raynne Andrade. Know a little about my work and skills !! </p>
                </div>
            </div>
            <div style={{ justifyContent: 'center', display: 'flex', marginTop: '35px' }}>
                <IconButton> <KeyboardArrowDownIcon /> </IconButton>
            </div>
        </>
    )
}
export default AboutMe;