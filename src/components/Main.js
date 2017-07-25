import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './Main.css';

import TimerDisplay from './TimerDisplay';

@observer
class Main extends Component {

    render() {

        const timerStore = this.props.timerStore;

        let firstButton;
        let secondButton;

        if (!timerStore.isRunning) {
            secondButton = (
                <button className="myButton" style={{color: '#4bd761'}} onClick={() => timerStore.startTimer()}>
                    start
                </button>
            );

            firstButton = (
                <button className="myButton" onClick={() => timerStore.resetTimer()}>
                    reset
                </button>
            );

            if (!timerStore.hasStarted) {
                firstButton = null;
            }
        } else {
            secondButton = (
                <button className="myButton" style={{color: '#fd3d2a'}} onClick={() => timerStore.stopTimer()}>
                    stop
                </button>
            );

            firstButton = (
                <button className="myButton" onClick={() => timerStore.lapTimer()}>
                    lap
                </button>
            );
        }

        return (
            <div style={{fontSize: 30}}>
                <div className="display">
                    {timerStore.mainDisplay}
                </div>
                <div>
                    <div className="buttons">
                        {firstButton}
                        {secondButton}
                    </div>
                    <div>
                        {timerStore.lapData.map((el) =>
                                <TimerDisplay
                                    key={el.lap.id}
                                    leftText={el.text}
                                    rightText={el.lap.display}
                                    />
                        )}
                    </div>
                </div>
            </div>
        )
    }

}

export default Main;