import styled from "styled-components";
import {
  genFontStyle,
  genBackground,
  genBorder,
  genBandedBackgroud,
  genIconStyle,
  genRowLayout,
} from "./js/styleUtils";
import { RowDetailsSettings,} from "../settings";
import { IStyles } from "./styles";

const columnStyleToCSS = (style: IStyles) => {
  const css = `
        ${genFontStyle(
          style.fontBold,
          style.fontColor,
          style.fontFamily,
          style.fontItalic,
          style.fontSize,
          style.fontUnderline,
          style.position,
          style.stepIndentation,
          style.wordWrap
        )}
        ${genBackground(style.fillColor, style.fillOpacity)}
        ${genBorder(
          style.outlineTop,
          style.outlineRight,
          style.outlineBottom,
          style.outlineLeft,
          style.outlineRadiusTopLeft,
          style.outlineRadiusTopRight,
          style.outlineRadiusBottomRight,
          style.outlineRadiusBottomLeft,
          style.outlineColor,
          style.outlineThickness
        )}
    `;
  return css;
};

const valueStyleToCSS = (style: IStyles) => {
  
  const css = `
        ${genFontStyle(
          style.fontBold,
          style.fontColor,
          style.fontFamily,
          style.fontItalic,
          style.fontSize,
          style.fontUnderline,
          style.position,
          style.stepIndentation,
          style.wordWrap
        )}
        ${genBackground(style.fillColor, style.fillOpacity)}
        ${genBorder(
          style.outlineTop,
          style.outlineRight,
          style.outlineBottom,
          style.outlineLeft,
          style.outlineRadiusTopLeft,
          style.outlineRadiusTopRight,
          style.outlineRadiusBottomRight,
          style.outlineRadiusBottomLeft,
          style.outlineColor,
          style.outlineThickness
        )}
    `;
  return css;
};

const rowLabelStyleToCSS = (style: IStyles) => {
  const css = `
        ${genFontStyle(
          style.fontBold,
          style.fontColor,
          style.fontFamily,
          style.fontItalic,
          style.fontSize,
          style.fontUnderline,
          style.position,
          style.stepIndentation,
          style.wordWrap
        )}
        ${genBackground(style.fillColor, style.fillOpacity)}
        ${genBorder(
          style.outlineTop,
          style.outlineRight,
          style.outlineBottom,
          style.outlineLeft,
          style.outlineRadiusTopLeft,
          style.outlineRadiusTopRight,
          style.outlineRadiusBottomRight,
          style.outlineRadiusBottomLeft,
          style.outlineColor,
          style.outlineThickness
        )}
    `;
  return css;
};

const callapseIconStyleToCSS = (style: IStyles) => {
  const css = genIconStyle(
    style.expandCollapseFillColor,
    style.expandCollapseIconColor,
    style.expandCollapseIcon,
    style.expandCollapseOutlineColor,
    style.expandCollapseOutlineRadius,
    style.expandCollapseOutlineThickness
  );
  return css;
};

const rowLayoutStyleToCSS = (style: IStyles) => {
  const css = `
        ${genRowLayout(style.rowHeight, style.rowPadding)}
    `;
  return css;
};

const rowValueStyleToCSS = (style: IStyles) => {
  const css = `
        ${genFontStyle(
          style.fontBold,
          style.fontColor,
          style.fontFamily,
          style.fontItalic,
          style.fontSize,
          style.fontUnderline,
          style.position,
          style.stepIndentation,
          style.wordWrap
        )}
        ${genBackground(style.fillColor, style.fillOpacity)}
        ${genBorder(
          style.outlineTop,
          style.outlineRight,
          style.outlineBottom,
          style.outlineLeft,
          style.outlineRadiusTopLeft,
          style.outlineRadiusTopRight,
          style.outlineRadiusBottomRight,
          style.outlineRadiusBottomLeft,
          style.outlineColor,
          style.outlineThickness
        )}
    `;
  return css;
};

const rowValueSelectionStyleToCSS = (style: IStyles) => {
  const css = `
        ${genBorder(
          style.selectedOutline && style.outlineTop,
          style.selectedOutline && style.outlineRight,
          style.selectedOutline && style.outlineBottom,
          style.selectedOutline && style.outlineLeft,
          style.selectedOutlineRadius,
          style.selectedOutlineRadius,
          style.selectedOutlineRadius,
          style.selectedOutlineRadius,
          style.selectedOutlineColor,
          style.selectedOutlineThickness
        )}
        ${genBackground(style.selectedFillColor, style.selectedFillOpacity)}
    `;
  return css;
};

const rowDetailsStylesToCSS = (style: RowDetailsSettings) => {
  const css = `
        ${genFontStyle(
          style.fontBold.value,
          style.fontColor.value.value,
          style.fontFamily.value,
          style.fontItalic.value,
          style.fontSize.value,
          style.fontUnderline.value,
          style.position.value.value as string,
          style.stepIndentation.value
        )}
    `;
  return css;
};

const unitStylesToCSS = (style:IStyles)=>{
  const css = `
  display:${style.showUnits?"inline":"none"};
  ${genFontStyle(
    style.unitsFontBold,
    style.unitsFontColor,
    style.unitsFontFamily,
    style.unitsFontItalic,
    style.unitsFontSize,
    style.unitsFontUnderline,
  )}
`;
return css;
}

export const genStyledDiv = (
  headerRowHeight,
  headerRowPadding,
  expandCollapseAllSettings,
  columnSettings,
  valueSettings,
  rowLabelSettings,
  rowValueSettings,
  rowDetailsSettings,
  unitSettings
) => {
  
  const columnCSS = columnSettings.map((d) => columnStyleToCSS(d));

  const valuesCSS = valueSettings.map((d) => valueStyleToCSS(d));
  
  const rowLabelCSS = rowLabelSettings.map((d) => rowLabelStyleToCSS(d));
  const rowCollapseIconCSS = rowLabelSettings.map((d) =>
    callapseIconStyleToCSS(d)
  );
  const rowLayoutCSS = rowLabelSettings.map((d) => rowLayoutStyleToCSS(d));
  const rowValueCSS = rowValueSettings.map((d) => rowValueStyleToCSS(d));
  const valueUnitCSS = unitSettings.map((d) => unitStylesToCSS(d));
 
  const rowValueSelectionCSS = rowValueSettings.map((d) =>
    rowValueSelectionStyleToCSS(d)
  );
  const rowCollapseAllIconCSS = genIconStyle(
    expandCollapseAllSettings.expandCollapseFillColor.value.value,
    expandCollapseAllSettings.expandCollapseIconColor.value.value,
    expandCollapseAllSettings.expandCollapseIcon.value.value as string,
    expandCollapseAllSettings.expandCollapseOutlineColor.value.value,
    expandCollapseAllSettings.expandCollapseOutlineRadius.value,
    expandCollapseAllSettings.expandCollapseOutlineThickness.value
  );

  return styled.div`
    & .ant-table-container {
      & .ant-table-header {
        > table
          > thead
          > tr:nth-child(1)
          > th.ant-table-cell.ant-table-column-has-sorters
          > div
          > span.ant-table-column-title
          > div
          > button {
          ${rowCollapseAllIconCSS}
        }
        & .ant-table-thead {
          & tr {
            height: ${headerRowHeight +
            2 * headerRowPadding}px;
          }
        }
        & .matrix-col.matrix-col-cat.matrix-col-cat-1 {
          ${columnCSS[0]}
          padding-top: ${headerRowPadding}px !important;
          padding-bottom: ${headerRowPadding}px !important;
        }
        & .matrix-col.matrix-col-cat.matrix-col-cat-2 {
          ${columnCSS[1]}
          padding-top: ${headerRowPadding}px !important;
          padding-bottom: ${headerRowPadding}px !important;
        }
        & .matrix-col.matrix-col-cat.matrix-col-cat-3 {
          ${columnCSS[2]}
          padding-top: ${headerRowPadding}px !important;
          padding-bottom: ${headerRowPadding}px !important;
        }

        & .matrix-col.matrix-col-value.matrix-col-value-1 {
          ${valuesCSS[0]}
          padding-top: ${headerRowPadding}px !important;
          padding-bottom: ${headerRowPadding}px !important;
        }
        & .matrix-col.matrix-col-value.matrix-col-value-2 {
          ${valuesCSS[1]}
          padding-top: ${headerRowPadding}px !important;
          padding-bottom: ${headerRowPadding}px !important;
        }
        & .matrix-col.matrix-col-value.matrix-col-value-3 {
          ${valuesCSS[2]}
          padding-top: ${headerRowPadding}px !important;
          padding-bottom: ${headerRowPadding}px !important;
        }
      }
      & .ant-table-body {
        & .ant-table-row.ant-table-row-level-0 td {
          ${rowLayoutCSS[0]}
        }
        & .ant-table-row.ant-table-row-level-1 td {
          ${rowLayoutCSS[1]}
        }
        & .ant-table-row.ant-table-row-level-2 td {
          ${rowLayoutCSS[2]}
        }

        &
          .ant-table-row.ant-table-row-level-0.selected
          td.ant-table-cell.matrix-col {
          ${rowValueSelectionCSS[0]}
          & .value-unit{
            ${valueUnitCSS[0]}
          }
        }
        &
          .ant-table-row.ant-table-row-level-1.selected
          td.ant-table-cell.matrix-col {
          ${rowValueSelectionCSS[1]}
          & .value-unit{
            ${valueUnitCSS[1]}
          }
        }
        &
          .ant-table-row.ant-table-row-level-2.selected
          td.ant-table-cell.matrix-col {
          ${rowValueSelectionCSS[2]}
          & .value-unit{
            ${valueUnitCSS[2]}
          }
        }

        & .ant-table-row.ant-table-row-level-0 td:not(:first-child) {
          ${rowValueCSS[0]}
          & .value-unit{
            ${valueUnitCSS[0]}
          }
        }
        & .ant-table-row.ant-table-row-level-1 td:not(:first-child) {
          ${rowValueCSS[1]}
          & .value-unit{
            ${valueUnitCSS[1]}
          }
        }
        & .ant-table-row.ant-table-row-level-2 td:not(:first-child) {
          ${rowValueCSS[2]}
          & .value-unit{
            ${valueUnitCSS[2]}
          }
        }

        & .ant-table-row.ant-table-row-level-0 td:first-child {
          display: flex;
          align-items: center;
          ${rowLabelCSS[0]}
          > button.ant-table-row-expand-icon.ant-table-row-expand-icon-collapsed,.ant-table-row-expand-icon.ant-table-row-expand-icon-expanded {
            ${rowCollapseIconCSS[0]}
          }
          > .row-label .row-label-detail {
            ${rowDetailsStylesToCSS(rowDetailsSettings)}
          }
        }
        & .ant-table-row.ant-table-row-level-1 td:first-child {
          display: flex;
          align-items: center;
          ${rowLabelCSS[1]}
          > .ant-table-row-expand-icon.ant-table-row-expand-icon-collapsed,.ant-table-row-expand-icon.ant-table-row-expand-icon-expanded {
            ${rowCollapseIconCSS[1]}
          }
          > .row-label .row-label-detail {
            ${rowDetailsStylesToCSS(rowDetailsSettings)}
          }
        }
        & .ant-table-row.ant-table-row-level-2 td:first-child {
          display: flex;
          align-items: center;
          ${rowLabelCSS[2]}
          > .ant-table-row-expand-icon.ant-table-row-expand-icon-collapsed,.ant-table-row-expand-icon.ant-table-row-expand-icon-expanded {
            ${rowCollapseIconCSS[2]}
          }
          > .row-label .row-label-detail {
            ${rowDetailsStylesToCSS(rowDetailsSettings)}
          }
        }

        & .ant-table-row.ant-table-row-level-0:nth-child(even) td:first-child {
          ${rowLabelSettings[0].bandedFill
            ? genBandedBackgroud(
                rowLabelSettings[0].bandedFillColor,
                rowLabelSettings[0].bandedFillOpacity
              )
            : ``}
        }
        & .ant-table-row.ant-table-row-level-1:nth-child(even) td:first-child {
          ${rowLabelSettings[1].bandedFill
            ? genBandedBackgroud(
                rowLabelSettings[1].bandedFillColor,
                rowLabelSettings[1].bandedFillOpacity
              )
            : ``}
        }
        & .ant-table-row.ant-table-row-level-2:nth-child(even) td:first-child {
          ${rowLabelSettings[2].bandedFill
            ? genBandedBackgroud(
                rowLabelSettings[2].bandedFillColor,
                rowLabelSettings[2].bandedFillOpacity
              )
            : ``}
        }

        &
          .ant-table-row.ant-table-row-level-0:nth-child(even)
          td:not(:first-child) {
          ${rowValueSettings[0].highlightType == "Banded Rows"
            ? genBandedBackgroud(
                rowValueSettings[0].bandedFillColor,
                rowValueSettings[0].bandedFillOpacity
              )
            : ``}
        }
        &
          .ant-table-row.ant-table-row-level-1:nth-child(even)
          td:not(:first-child) {
          ${rowValueSettings[1].highlightType == "Banded Rows"
            ? genBandedBackgroud(
                rowValueSettings[1].bandedFillColor,
                rowValueSettings[1].bandedFillOpacity
              )
            : ``}
        }
        &
          .ant-table-row.ant-table-row-level-2:nth-child(even)
          td:not(:first-child) {
          ${rowValueSettings[2].highlightType == "Banded Rows"
            ? genBandedBackgroud(
                rowValueSettings[2].bandedFillColor,
                rowValueSettings[2].bandedFillOpacity
              )
            : ``}
        }
      }
    }
  `;
};
