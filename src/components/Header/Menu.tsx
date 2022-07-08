import { IconButton, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CloseIcon from '@mui/icons-material/Close';
import Itens from "./Itens";
import { useState } from "react";

import '../../styles/components/Menu.css'

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
          <IconButton onClick={() => setOpenMenu(!OpenMenu)}>
            <DragHandleIcon color="primary" width={'20px'} />
          </IconButton>
          :
          <div className="Menu">
            {links.map((item: any) => <Itens link={item.link} name={item.name} />)}
          </div>
        }
      </div>

      {OpenMenu &&
        <div className="MenuMob">
          <div className="MenuMob--item">
            {links.map((item: any) => <div> <Itens link={item.link} name={item.name} /> </div>)}
          </div>
          <IconButton className="MenuMob--close" onClick={() => setOpenMenu(!OpenMenu)}>
            <CloseIcon color='primary' />
          </IconButton>
        </div>
      }
    </div>
  )
}

export default Menu;