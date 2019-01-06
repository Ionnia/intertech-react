import React from 'react';
import {Stage} from "./models";
import './App.css'

class Workflow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stages: []
        }
    }

    static randomText() {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < 15; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    onNewStage() {
        let oldStages = this.state.stages;
        oldStages.push(new Stage());
        this.setState({
            stages: oldStages
        })
    }

    onNewTask() {
        let oldStages = this.state.stages;
        if (oldStages && oldStages.length > 0) {
            oldStages[0].tasks.push(Workflow.randomText());
            this.setState({
                stages: oldStages
            })
        }
    }
    onMoveDown(idx) {
        let currentStages = this.state.stages;
        let currentStage = currentStages[idx];
        if (currentStage.tasks && currentStage.tasks.length > 0) {
            let element = currentStage.tasks[0];
            currentStage.tasks = currentStage.tasks.slice(1);
            if (currentStages.length > idx + 1) {
                currentStages[idx + 1].tasks.push(element);
            }
            this.setState({
                stages: currentStages
            })

        }
    }

    render() {
        return (
            <div>
                <h1>Workflow!</h1>
                <hr/>
                <button onClick={() => this.onNewStage()}>New Stage!</button>
                <button onClick={() => this.onNewTask()}>New Task!</button>
                <hr/>
                <div>
                    {
                        this.state.stages.map((el, idx) => <div key={idx}>
                            <div>
                                <div>{`Stage #${idx}`}</div>
                                <ul>
                                    {el.tasks.map(t => t &&
                                        <li>
                                            {t}
                                        </li>
                                    )}
                                </ul>
                                <button onClick={() => this.onMoveDown(idx)}>Move down!</button>
                            </div>
                        </div>)

                    }
                </div>
            </div>
        );
    }
}

export default Workflow;