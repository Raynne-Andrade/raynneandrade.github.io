
interface IProps { 
    name: string,
    url: string,
    icon?: string 
}

const SocialButton = ({name, url, icon}: IProps) => {
    return ( 
        <button className="w-36 h-8 rounded-2xl px-10 bg-pink-500 m-2 border-none cursor-pointer text-white dark:bg-white dark:text-black"> 
          <a href={url}> {name} <img src={icon} width={"10px"}/>  </a>
        </button>
    )
}
export default SocialButton;