import { ColumnsType } from "antd/lib/table";
import { RowTitle } from "../RowTitle";
import * as React from "react";
import {
  ColumnStyleSettings,
  matrixStyleSettings,
  RowDetailsSettings,
} from "../../settings";

type StyleType = {
  colStyle: Record<string, any>;
  valueStyle: Record<string, any>;
  rowLabelStyle: Record<string, any>;
  rowValueStyle: Record<string, any>;
};


const formatCellValue =
  (valueType: powerbi.ValueTypeDescriptor,unit) =>
  (text: any, record: any, index: number) => {
    if (text == null) {
      return text;
    }
    if (valueType.numeric || valueType.integer) {
      const num = Number(text);
      const [n, float] = num.toFixed(2).split(".");
      const value =  `${[n.replace(/(\d)(?=(?:\d{3})+$)/g, "$1,"), float].join(".")}`;
      return <div>{value}<span className="value-unit"> {unit}</span></div>
    } else {
      return <div>{text}<span className="value-unit"> {unit}</span></div>
      // return `${text}`;
    }
    // return text
  };

export const genSource = (
  rowsData: powerbi.DataViewMatrix["rows"],
  valueSources: powerbi.DataViewMatrix["valueSources"],
  rowLabelSettings,
  rowDetailsSettings: RowDetailsSettings,
  measureIndexes,
  rowDetailIndex,
  rowLevel,
) => {
  const defaultExpandRowKeys = [];
  const numOfLevels = rowsData.levels.length;
  const rowKeys = [];
  const handlData = (values) => {
    const dataList: Record<string, any[]> = {};

    for (const key in values!) {
      const element = values![key];
      // const vsIndex = element.valueSourceIndex ? element.valueSourceIndex : 0
      // subData[`${vsIndex}-${key}`] = element.value
      const vsIndex = element.valueSourceIndex
        ? element.valueSourceIndex + ""
        : "0";
      if (!(vsIndex in dataList)) {
        dataList[vsIndex] = [];
      }
      dataList[vsIndex].push(element.value!);
    }
    return dataList;
  };

  const getValueByDataList = (list: Record<string, number[]>,currentLevel) => {
    const vals = {};
    // (list, "list");
    // 取出数据
    for (const key in list) {
      if(measureIndexes.map(d=>String(d)).indexOf(key)>-1){
        const element = list[key];
        element.forEach((val, i) => {
          vals[`${key}-${i}`] = val;
        });
      }
    }
    if((rowDetailIndex) && (currentLevel==rowLevel)){
      vals['rowDetail'] = String(list[rowDetailIndex].filter(d=>d)[0])
    }
    return vals;
  };

  const getResult = (
    node: powerbi.DataViewMatrixNode,
    index,
    currentLevel,
    currentTitle,
    parent
  ) => {
    const subData: Record<string, any> = {};
    subData.name = {
      text: currentTitle,
      index,
      key: `${currentTitle}-${node.level}-${index}`,
    };
    const rowKey = `${currentTitle}-${node.level}-${index}`;
    subData.parent = parent;
    subData.rowKey = rowKey;
    rowKeys.push(rowKey);
    subData.level = currentLevel;
    if (rowLabelSettings[node.level].showExpand) {
      defaultExpandRowKeys.push(rowKey);
    }
    subData.className = `ant-table-row-level-${currentLevel}-${
      index % 2 == 1 ? "odd" : "even"
    }`;
    if (node?.values) {
      const res = handlData(node.values!);
      Object.assign(subData, getValueByDataList(res,currentLevel));
    } else {
      // if (
      //   !rowDetailsSettings.show.value ||
      //   (rowDetailsSettings.show && node.level !== numOfLevels - 2)
      // ) {
        subData.children = node.children
          .filter((d) => !d.isSubtotal)
          .map((d, i) =>
            getResult(d, JSON.stringify(d.identity), d.level, d.value, subData)
          );
      // }

      // if (rowDetailsSettings.show.value && node.level == numOfLevels - 2) {
      //   Object.assign(subData, { rowDetail: node.children[0].value });
      // }

      const res = handlData(
        node.children.filter((d) => d.isSubtotal)[0]?.values!
      );
      Object.assign(subData, getValueByDataList(res,currentLevel));
    }
    //定义一个存储所有values中有或没有valueSourceIndex的数据集合
    return subData;
  };

  let subData = [];
  rowsData.root
    .children!.filter((d) => !d.isSubtotal)
    .forEach((d, i) =>
      subData.push(
        getResult(
          d,
          JSON.stringify(d.identity),
          d.level,
          d.value || "Grand Total",
          subData
        )
      )
    );

  return {
    subData: subData,
    defaultExpandRowKeys: defaultExpandRowKeys,
    rowKeys: rowKeys,
  };
};

export const genColumnFirstHeader = (
  columnData: powerbi.DataViewMatrixNode[],
  columnLevel:number,
  valueSources: powerbi.DataViewMatrix["valueSources"],
  valueTypes: powerbi.ValueTypeDescriptor[],
  valueSettings,
  measureIndexes,
  units
) => {
  let dataIndex = 0;
  let vsIndexRecord: Record<string, any> = {};

  const renderTitle = (title: string, level: number) => {
    return <div className="h-full">{title}</div>;
  };
  const genValueSourceColumn = (level: number, valueSettings) => {
    const children: ColumnsType = [];
    valueSources.forEach((vs, i) => {
      let key = i + "";
      if (!(key in vsIndexRecord)) {
        vsIndexRecord[key] = 0;
      }
      if (measureIndexes.indexOf(i) > -1) {
        const indexKey = `${key}-${vsIndexRecord[key]}`;
        children.push({
          className: `matrix-col matrix-col-value matrix-col-value-${i + 1}`,
          title: ({ sortColumns }) => {
            const sortedColumn = sortColumns?.find(
              ({ column }) => column.dataIndex === indexKey
            );
            return (
              <div className="h-full">
                {sortedColumn
                  ? sortedColumn.order === "ascend"
                    ? // <SortUpIcon />
                      ""
                    : // <SortDownIcon />
                      ""
                  : ""}
                {vs.displayName}
              </div>
            );
          },
          dataIndex: indexKey,
          sorter: valueSettings[i].showSortIcon
            ? (a, b) => a[indexKey] - b[indexKey]
            : false,
          render(value, record, index) {
            const val = formatCellValue(valueTypes[i],units[i]?.unit||'')(value, record, index);
            return val;
          },
        });
      }
      vsIndexRecord[key]++;
    });
    return children;
  };

  const handle = (data: powerbi.DataViewMatrixNode[], valueSettings) => {
    console.log(data,"Data")
    let column = [];

    // No columns
    console.log(columnLevel,"columnLevel")
    if(columnLevel==0){
      const children = genValueSourceColumn(0, valueSettings);
      column = [...children]
      return column
    }

    data.forEach((item, i) => {
      const options: Record<string, any> = {
        className: `matrix-col matrix-col-cat matrix-col-cat-${item.level + 1}`,
      };
      // column is subtotal
      if (item.isSubtotal) {
        options.title = renderTitle("Total", item.level!);
        const children = genValueSourceColumn(item.level!, valueSettings);
        options.children = children;
        options.render = formatCellValue(valueTypes[i],units[i]?.unit||'');
        column.push(options);
      } 
      else {
        options.title = renderTitle(item.value + "", item.level!);
        // Last level of column
        if(item.level==columnLevel-1){
          const children = genValueSourceColumn(item.level!, valueSettings);
          options.children = children;
        }
        else {
          options.children = handle(item.children, valueSettings);
        }
        column.push(options);
      } 
    });
    return column;
  };

  return handle(columnData, valueSettings);
};

export const genValueFirstHeader = (
  columnData: powerbi.DataViewMatrixNode[],
  columnLevel:number,
  valueSources: powerbi.DataViewMatrix["valueSources"],
  valueTypes: powerbi.ValueTypeDescriptor[],
  valueSettings: any,
  measureIndexes,
  units
) => {
  const column = [];
  let dataIndex = 0,
    vsIndex = 0;
  const handle = (
    data: powerbi.DataViewMatrixNode[],
    vIndex: number,
    valueSetting
  ) => {
    const children: ColumnsType = [];
    data.forEach((item, i) => {
      const options: Record<string, any> = {
        className: `matrix-col matrix-col-cat matrix-col-cat-${item.level + 1}`,
      };
      if (item.isSubtotal) {
        options.title = "Total";
        children.push(options);
        const indexKey = `${vIndex}-${dataIndex}`;
        options.dataIndex = indexKey;
        options.render = formatCellValue(valueTypes[vIndex],units[vIndex]?.unit||'');
        options.sorter = valueSetting.showSortIcon
          ? (a, b) => a[indexKey] - b[indexKey]
          : false;
        ++dataIndex;
      } else {
        if (item.value) {
          options.title = item.value;
          options.key = item.value;
          if (!item?.children?.at(0)?.value) {
            const indexKey = `${vIndex}-${dataIndex}`;
            options.dataIndex = indexKey;
            options.render = formatCellValue(valueTypes[vIndex],units[vIndex]?.unit||'');
            options.sorter = valueSetting.showSortIcon
              ? (a, b) => a[indexKey] - b[indexKey]
              : false;
            ++dataIndex;
          } else if (!item?.children) {
            const indexKey = `${vIndex}-${dataIndex}`;
            options.dataIndex = indexKey;
            options.render = formatCellValue(valueTypes[vIndex],units[vIndex].unit||'');
            options.sorter = valueSetting.showSortIcon
              ? (a, b) => a[indexKey] - b[indexKey]
              : false;
            ++dataIndex;
          } else {
            options.children = handle(item.children, vIndex, valueSetting);
          }
        }
        children.push(options);
      }
    });
    return children;
  };
  valueSources.forEach((vs, i) => {
    if (measureIndexes.indexOf(i) > -1) {
      vsIndex = i;
      dataIndex = 0;
      const col: Record<string, any> = {
        title: vs.displayName,
        key: vs.displayName,
        className: `matrix-col matrix-col-value matrix-col-value-${i + 1}`,
      };
      if(columnLevel>0){
        col.children = handle(columnData, vsIndex, valueSettings[i]);
      } else {
        const indexKey = `${vsIndex}-${dataIndex}`;
        col.dataIndex = indexKey;
        col.render = formatCellValue(valueTypes[vsIndex],units[vsIndex]?.unit||'');
        col.sorter = valueSettings[vsIndex].showSortIcon
          ? (a, b) => a[indexKey] - b[indexKey]
          : false;
      }
      column.push(col);
    }
  });

  return column;
};
