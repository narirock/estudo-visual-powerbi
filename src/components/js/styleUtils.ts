import * as d3 from "d3";
import { IStyles } from "../styles";

export const parseSettings = (columnStyle): IStyles[] => {
  const obj = {};
  Object.keys(columnStyle).forEach((key, i) => {
    if (columnStyle[key]?.name && key.indexOf("_") > -1) {
      const [styleName, index] = key.split("_");
      if (!(index in obj)) {
        obj[index] = {};
      }
      const valueType = typeof columnStyle[key].value;
      let val: any;
      if (valueType == "object") {
        val = columnStyle[key].value?.value;
      } else {
        val = columnStyle[key].value;
      }
      obj[index] = { ...obj[index], ...{ [styleName]: val } };
    }
  });
  return Object.values(obj);
};

export const genFontStyle = (
  fontBold: boolean | string = false,
  fontColor = "#000000",
  fontFamily = "Georgia, serif",
  fontItalic = false,
  fontSize = 12,
  fontUnderline = false,
  position = "Left",
  stepIndentation = 0,
  wordWrap = true
) => {
  return `
        font: ${fontItalic ? "italic" : "normal"} normal ${
    fontBold ? "bold" : "normal"
  } ${fontSize}px ${fontFamily.replace('"', "")};
        text-decoration: ${fontUnderline ? "underline" : "none"};
        text-align: ${
          position == "Left" ? "left" : position == "Right" ? "right" : "center"
        };
        text-indent: ${stepIndentation}px;
        color: ${fontColor};
        word-wrap: ${wordWrap ? "break-word" : "normal"};
    `;
};

export const genBackground = (fillColor = "#FFFFFF", fillOpacity = 100) => {
  if(fillColor==''){
    return `background-color:transparent;`
  }

  const hexColor = d3.color(fillColor) as d3.RGBColor;

  return `
        background-color: rgba(${hexColor.r}, ${hexColor.g}, ${hexColor.b}, ${
    fillOpacity / 100
  });
    `;
};

export const genBorder = (
  outlineTop = true,
  outlineRight = true,
  outlineBottom = true,
  outlineLeft = true,
  outlineRadiusTopLeft = 2,
  outlineRadiusTopRight = 2,
  outlineRadiusBottomRight = 2,
  outlineRadiusBottomLeft = 2,
  outlineColor = "#000000",
  outlineThickness = 2
) => {
  return `
        border-width: ${outlineTop ? outlineThickness : 0}px ${
    outlineRight ? outlineThickness : 0
  }px ${outlineBottom ? outlineThickness : 0}px ${
    outlineLeft ? outlineThickness : 0
  }px;
        border-radius: ${outlineRadiusTopLeft}px ${outlineRadiusTopRight}px ${outlineRadiusBottomRight}px ${outlineRadiusBottomLeft}px;
        border-color: ${outlineColor};
        border-style: ${outlineTop ? "solid" : "none"} ${
    outlineRight ? "solid" : "none"
  } ${outlineBottom ? "solid" : "none"} ${outlineLeft ? "solid" : "none"};
    `;
};

export const genBandedBackgroud = (
  bandedFillColor = "#FFFFFF",
  bandedFillOpacity = 100
) => {
  const hexColor = d3.color(bandedFillColor) as d3.RGBColor;

  return `
        background-color: rgba(${hexColor.r}, ${hexColor.g}, ${hexColor.b}, ${
    bandedFillOpacity / 100
  });
    `;
};

/**
 *     outline: darkblue;
    outline-width: 5px;
    outline-style: solid;
    border-radius: 10px;
 */

export const genIconStyle = (
  expandCollapseFillColor = "#000000",
  expandCollapseIconColor = "#ffffff",
  expandCollapseIcon = '',
  expandCollapseOutlineColor = "#000000",
  expandCollapseOutlineRadius = 2,
  expandCollapseOutlineThickness = 0
) => {
        if(expandCollapseIcon=="chevron"){
            return `
                outline: ${expandCollapseOutlineColor};
                outline-width: ${expandCollapseOutlineThickness}px;
                outline-style: solid;
                border-radius: ${expandCollapseOutlineRadius}px;
                background:${expandCollapseFillColor};
                color:${expandCollapseIconColor};
                border-color:transparent;
            `
        } else if (expandCollapseIcon=="+/-"){
            return `
                outline: ${expandCollapseOutlineColor};
                outline-width: ${expandCollapseOutlineThickness}px;
                outline-style: solid;
                border-radius: ${expandCollapseOutlineRadius}px;
                background:transparent;
                color:${expandCollapseIconColor};
                border-color:transparent;
            `
        }
};

export const genRowLayout = (rowHeight='Auto',rowPadding=2)=>{
    if(rowHeight=='Auto'){
        return `
            padding-top: ${rowPadding}px;
            padding-bottom: ${rowPadding}px;
        `
    } else {
        return `
            height: ${rowHeight};
            padding-top: ${rowPadding}px;
            padding-bottom: ${rowPadding}px;
        `
    }
}
