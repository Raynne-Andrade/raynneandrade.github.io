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
    const [options, setOptions] = useState({
        title: 'Gráfico de Pizza'
    })
    const [data, setData] = useState([
        ['Linguagens', 'Quantidade'],
        ['React', 100],
        ['Angula', 80],
        ['Vue', 50],
    ])
    return (
        <div>
            <h2 style={{ alignItems: 'center' }}> My Skills </h2>
            <div>
                <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="PieChart"
                    data={data}
                    options={options}
                />
            </div>
        </div>
    )
}
export default MySkill