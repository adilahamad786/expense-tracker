import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {

    // const months = []
    console.log(props.expenses);

    return (
        <div className="chart">
            <ChartBar/>
            <ChartBar/>
            <ChartBar/>
            <ChartBar/>
            <ChartBar/>
            <ChartBar/>
            <ChartBar/>
            <ChartBar/>
            <ChartBar/>
            <ChartBar/>
            <ChartBar/>
            <ChartBar/>
        </div>
    );
}

export default Chart;