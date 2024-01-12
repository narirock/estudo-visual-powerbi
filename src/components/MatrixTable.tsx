import * as React from "react";
import { Table } from "antd";
import { FC, useEffect, useState } from "react";
import { RowTitle } from "./RowTitle";

export interface IProps {
    tableKey,
    columns,
    dataSource,
    defaultExpandRowKeys,
    rowKeys,
    numOfLevels,
    headerRowHeight,
    rowValueSettings,
    numberOfColumns,
    visualHeight,
    showRowDetail,
}

export const MatrixTable: FC<IProps> = (props) => {

    const [defaultExpandRowKeys, updateDefaultExpandRowKeys] = useState(props.defaultExpandRowKeys);
    useEffect(() => updateDefaultExpandRowKeys(props.defaultExpandRowKeys), [props.defaultExpandRowKeys])

    const [tableKey, updateTableKey] = useState(props.tableKey);
    useEffect(() => updateTableKey(props.tableKey), [props.tableKey])

    const [dataSource, updateDataSource] = useState(props.dataSource);
    useEffect(() => updateDataSource(props.dataSource), [props.dataSource])

    const columns = [
        {
            dataIndex: ["name", "text"],
            width: 150,
            title: () => {
                return (
                    <RowTitle
                        numOfLevels={props.numOfLevels}
                        headerRowHeight={3}
                        rowKeys={props.rowKeys}
                        updateDefaultExpandRowKeys={updateDefaultExpandRowKeys}
                        updateTableKey={updateTableKey}
                        defaultExpandRowKeys={defaultExpandRowKeys}
                    />
                );
            },
            sorter: (a, b) => {
                return a?.name?.text > b?.name?.text ? 1 : -1;
            },
            render: (text: string, record: Record<string, any>) => {
                return (
                    <div className="row-label">
                        {text}
                        {(Object.keys(record).indexOf("rowDetail") > -1) && (props.showRowDetail) ? (
                            <p className="row-label-detail">{record["rowDetail"]}</p>
                        ) : null}
                    </div>
                );
            },
        },
        ...props.columns,
    ]

    return (
        <Table
            key={tableKey}
            rowKey="rowKey"
            columns={columns}
            dataSource={dataSource}
            scroll={{ x: (props.numberOfColumns + 1) * 150, y: props.visualHeight - props.headerRowHeight * props.numOfLevels }}
            pagination={false}
            expandable={{ defaultExpandedRowKeys: defaultExpandRowKeys }}
        />
    );
};

