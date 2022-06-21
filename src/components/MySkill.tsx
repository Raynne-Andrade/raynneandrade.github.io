import { useState } from "react"
import Chart from "react-google-charts"
import Skill from "./Skills/Skill"

const MySkill = () => {
    const skills = [
        {
            name: 'React',
            descriptions: 'AA',
        }, {
            name: 'React',
            descriptions: 'AA',
        }, {
            name: 'React',
            descriptions: 'AA',
        }, {
            name: 'React',
            descriptions: 'AA',
        },
    ]

    const [data, setData] = useState([
        ['Linguagens', 'Quantidade'],
        ['React', 100],
        ['Wordpress', 100],
        ['Vue', 80],
    ])
    return (
        <div>
            <h2 style={{ alignItems: 'center' }}> My Skills </h2>
            <div>
                <Chart
                    width={'700px'}
                    height={'500px'}
                    chartType="PieChart"
                    data={data}
                />
            </div>
        </div>
    )
}
export default MySkill