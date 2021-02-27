function Button(props) {
    const style = {
        gridArea: props.area,
        backgroundColor: props.color,
    };

    return (
    <button style={style} id={props.area} className="py-3" onClick={()=> {props.clickHandler(props.content)}}>
        {props.content}
    </button>
    );
}
export default Button;
