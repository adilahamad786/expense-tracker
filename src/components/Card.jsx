import "./Card.css"

function Car(props) {
    const classes = "card "+ props.className;
    return (
        <div className={classes}>{props.children}</div>
    );
}

export default Car;