import { IconButton, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CloseIcon from '@mui/icons-material/Close';
import Itens from "./Itens";
import { useState } from "react";
import SocialMedia from "../SocialMedia";

type TProps = {
    links: any
}
const Menu = ({ links }: TProps) => {
    const theme = useTheme();
    const isMob = useMediaQuery(theme.breakpoints.down('sm'));
    const [OpenMenu, setOpenMenu] = useState(false)

    return (
        <div>
            <div>
                {isMob ?
                    <IconButton onClick={() => setOpenMenu(!OpenMenu)}> <DragHandleIcon color="primary" width={'20px'} /> </IconButton>
                    : <div> {links.map((item: any) => <Itens link={item.link} name={item.name} />)} </div>
                }
            </div>
            {OpenMenu &&
                <div style={{ background: '#000', zIndex: '100', width: ' 300px', display: 'flex', minHeight: '100%', padding: '15px', position: 'fixed', top: '0px', left: '0px' }}>
                    <div style={{ display: 'block', width: '260px' }}>
                        {links.map((item: any) => <div> <Itens link={item.link} name={item.name} /> </div>)}
                        <div style={{marginTop: '30px'}}>
                            <SocialMedia />
                        </div>
                    </div>
                    <IconButton style={{ alignItems: 'flex-start' }} onClick={() => setOpenMenu(!OpenMenu)}> <CloseIcon color='primary' /> </IconButton>
                </div>
            }
        </div>
    )
}

export default Menu;