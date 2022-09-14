import "./Card.css"

const Car = (props) => {
    const classes = "card "+ props.className;
    return (
        <div className={classes}>{props.children}</div>
    );
}

export default Car;