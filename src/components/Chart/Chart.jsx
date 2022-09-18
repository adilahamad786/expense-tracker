import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {

    let maxAmount = 0;
    for (let dataPoint of props.dataPoints) {
        if (maxAmount < dataPoint.amount)
            maxAmount = dataPoint.amount;
    }

    return (
        <div className="chart">
            {
                props.dataPoints.map( dataPoint => {
                    return <ChartBar key={dataPoint.month} amount={dataPoint.amount} maxAmount={maxAmount} month={dataPoint.month}/>
                })
            }
        </div>
    );
}

export default Chart;