import * as React from "react";
import { IProps, MatrixTable } from "./components/MatrixTable";


export interface State extends IProps {
    columns: any;
    dataSource: any;
    rowKeys: any;
    defaultExpandRowKeys: any;
    numOfLevels: number;
    StyledDiv: any
}

export const initialState: State = {
    tableKey: null,
    columns: [],
    dataSource: null,
    defaultExpandRowKeys: null,
    rowKeys: null,
    numOfLevels: null,
    headerRowHeight: null,
    rowValueSettings: null,
    numberOfColumns: null,
    visualHeight: null,
    StyledDiv: null,
    showRowDetail: null
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
            console.log("Inside update", newState);
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
                <MatrixTable
                    tableKey={this.state.tableKey}
                    columns={this.state.columns}
                    dataSource={this.state.dataSource}
                    defaultExpandRowKeys={this.state.defaultExpandRowKeys}
                    rowKeys={this.state.rowKeys}
                    numOfLevels={this.state.numOfLevels}
                    headerRowHeight={this.state.headerRowHeight}
                    rowValueSettings={this.state.rowValueSettings}
                    numberOfColumns={this.state.numberOfColumns}
                    visualHeight={this.state.visualHeight}
                    showRowDetail={this.state.showRowDetail}
                />
            </div>
        )
    }
}

export default ReactVisual;