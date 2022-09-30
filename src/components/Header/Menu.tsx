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
            <DragHandleIcon className="text-white"  width={'20px'} />
          </IconButton>
          :
          <div className="flex gap-6">
            {links.map((item: any) => <Itens link={item.link} name={item.name} key={item.name} />)}
          </div>
        }
      </div>

      {OpenMenu &&
        <div className="transition-all duration-500 bg-neutral-900 z-50 w-80 flex min-h-full p-4 fixed top-0 left-0">
          <div className="block w-64 mt-9">
            {links.map((item: any) => <div> <Itens link={item.link} name={item.name} key={item.name}/> </div>)}
          </div>
          <button className="items-baseline relative top-0 h-3" onClick={() => setOpenMenu(!OpenMenu)}>
            <CloseIcon className="text-white" />
          </button>
        </div>
      }
    </div>
  )
}

export default Menu;