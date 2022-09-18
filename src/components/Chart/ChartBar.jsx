import "./ChartBar.css"

const ChartBar = (props) => {

    let barFillHeight = "0%";

    if (props.maxAmount > 0) {
        barFillHeight = Math.round((props.amount / props.maxAmount) * 100) + "%";
    }

    return (
        <div className="chart-bar">
            <div id="charbar" className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height : barFillHeight}}></div>
            </div>
            <label htmlFor="charbar" className="char-bar__label" >{props.month}</label>
        </div>
    );
}

export default ChartBar;