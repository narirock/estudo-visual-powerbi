import * as React from "react";
import MatrixTable from "./components/MatrixTable";


export interface State {
    text: string;
}

export const initialState: State = {
    text: 'initial',
}

export class ReactVisual extends React.Component<{}, State>{
    constructor(props: any) {
        super(props);
        this.state = initialState;
        console.log("Inside Component", initialState);
    }

    private static updateCallback: (data: object) => void = null;

    public static update(newState: State) {
        if (typeof ReactVisual.updateCallback === 'function') {
            ReactVisual.updateCallback(newState);
        }
    }

    public state: State = initialState;

    public componentWillMount() {
        ReactVisual.updateCallback = (newState: State): void => { this.setState(newState); };
    }

    public componentWillUnmount() {
        ReactVisual.updateCallback = null;
    }

    render() {
        return (
            <div className="circleCard">
                <MatrixTable text={this.state.text} />
            </div>
        )
    }
}

export default ReactVisual;