interface TProps { 
    handleLessProject: Function
}

const ReadLess = ({handleLessProject}: TProps) => {

    return (
            <button onClick={(() => handleLessProject())} className="py-3 px-16 bg-pink-600 text-white mt-7 rounded-xl">
               Ver menos 
            </button> 
    )
}
export default ReadLess