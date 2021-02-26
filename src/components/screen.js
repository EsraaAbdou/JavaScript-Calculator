import React from 'react';

class Screen extends React.Component{
    render(){
        return (
            <div className="screen d-flex align-items-end justify-content-between flex-column p-2">
                <div className="temp-display">{this.props.temp}</div>
                <div id="display">{this.props.result}</div>
            </div>
        );
    }
}
export default Screen;