import { IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';

const SocialMedia = () => {
    return (
        <div>
            <IconButton> <GitHubIcon color="primary" /> </IconButton>
            <IconButton> <LinkedInIcon color="primary" /> </IconButton>
            <IconButton> <LanguageIcon color="primary" /> </IconButton>
        </div>
    )

}
export default SocialMedia;