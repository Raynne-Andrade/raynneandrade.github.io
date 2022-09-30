import { IconButton, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CloseIcon from '@mui/icons-material/Close';
import Itens from "./Itens";
import { useState } from "react";

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
          <div className="flex gap-6">
            {links.map((item: any) => <Itens link={item.link} name={item.name} />)}
          </div>
        }
      </div>

      {OpenMenu &&
        <div className="transition-all duration-500 bg-black z-50 w-80 flex min-h-full p-4 fixed top-0 left-0">
          <div className="block w-64 mt-9">
            {links.map((item: any) => <div> <Itens link={item.link} name={item.name} /> </div>)}
          </div>
          <IconButton className="items-start" onClick={() => setOpenMenu(!OpenMenu)}>
            <CloseIcon color='primary' />
          </IconButton>
        </div>
      }
    </div>
  )
}

export default Menu;