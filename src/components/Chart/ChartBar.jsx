import "./ChartBar.css"

const ChartBar = (props) => {
    return (
        <div id="jan" className="chartbar-container">
            <div className="chartbar-box">
                <div className="chartbar-filler"></div>
            </div>
            <label htmlFor="jan">Jan</label>
        </div>
    );
}

export default ChartBar;