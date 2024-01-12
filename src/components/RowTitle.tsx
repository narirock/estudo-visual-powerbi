import * as React from "react";
import { useRef } from "react";
import * as d3 from "d3";

interface IProps {
  numOfLevels: number;
  headerRowHeight: number;
  rowKeys: string[];
  updateDefaultExpandRowKeys: any;
  defaultExpandRowKeys: any;
  updateTableKey:any
}

export const RowTitle = (props: IProps) => {
  const [expandedAll, updateExpandedAll] = React.useState(
    props.defaultExpandRowKeys.length > 0 ? "expanded" : "collapsed"
  );

  const wrapper = useRef(null);

  const onClick = (event) => {
    if (expandedAll == "collapsed") {
      event.stopPropagation();
      updateExpandedAll("expanded");
      props.updateDefaultExpandRowKeys(props.rowKeys);
      props.updateTableKey(`${Math.round(Math.random() * 1000)}`)
    } else {
      event.stopPropagation();
      updateExpandedAll("collapsed");
      props.updateDefaultExpandRowKeys([]);
      props.updateTableKey(`${Math.round(Math.random() * 1000)}`)
    }
  };

  React.useEffect(() => {
    updateExpandedAll(
      props.defaultExpandRowKeys.length > 0 ? "expanded" : "collapsed"
    );
  }, [props.defaultExpandRowKeys]);

  return (
    <div ref={wrapper}>
      <div
        className="expandClickableArea"
        style={{
          width: "75px",
          height: `${props.numOfLevels * props.headerRowHeight}px`,
          backgroundColor: "lightgreen",
          position: "fixed",
          top: "0px",
          left: "0px",
          zIndex: 99,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          opacity: 0,
        }}
        onClick={onClick}
      ></div>
      <button
        type="button"
        className={`ant-table-row-expand-icon ant-table-row-expand-icon-${expandedAll}`}
        aria-label="Collapse row"
        aria-expanded="true"
      ></button>

      <p style={{ padding: " 0px 4px" }}>Row</p>
    </div>
  );
};
