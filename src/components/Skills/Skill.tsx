type TProps = {
    name: string,
    descriptions: string,
}
const Skill = ({name, descriptions}: TProps) => {
    return (
        <div>
            <h4> {name} </h4>
            <p> {descriptions} </p>
        </div>
    )
}
export default Skill