import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class TimerDisplay extends Component {

    render() {
        const leftText = this.props.leftText;
        const rightText = this.props.rightText;
        return (
            <div className="main" >
                <div className="left" >
                    {leftText}
                </div>
                <div className="right" >
                    {rightText}
                </div>
            </div>
        );
    }
}

export default TimerDisplay;