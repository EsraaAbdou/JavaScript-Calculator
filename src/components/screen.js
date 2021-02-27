function Screen (props){
    return (
        <div className="screen d-flex align-items-end justify-content-between flex-column p-2">
            <div className="temp-display">{props.temp}</div>
            <div id="display">{props.result}</div>
        </div>
    );
}
export default Screen;