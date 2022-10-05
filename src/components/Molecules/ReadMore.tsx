interface TProps { 
    handleMoreProject: Function
}

const ReadMore = ({handleMoreProject}: TProps) => {

    return (
            <button onClick={(() => handleMoreProject())} className="py-3 px-16 bg-pink-600 text-white mt-7 rounded-xl">
               Ver mais 
            </button> 
    )
}
export default ReadMore