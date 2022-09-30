
interface IProps { 
    name: string,
    url: string,
    icon?: string 
}

const SocialButton = ({name, url, icon}: IProps) => {
    return ( 
        <button className="w-36 h-8 rounded-2xl px-10 dark:bg-black m-2 border-none cursor-pointer  dark:text-white text-black bg-white"> 
          <a href={url}> {name} <img src={icon} width={"10px"}/>  </a>
        </button>
    )
}
export default SocialButton;