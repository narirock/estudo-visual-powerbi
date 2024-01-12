import powerbi from "powerbi-visuals-api";
import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";
// import { BarChartDataPoint } from "./barChart";

import FormattingSettingsCard = formattingSettings.CompositeCard;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;
import ValidatorType = powerbi.visuals.ValidatorType;

export class matrixStyleSettings extends FormattingSettingsCard {
  groups: formattingSettings.Group[];
  orderType = new formattingSettings.ItemDropdown({
    name: "orderType",
    displayName: "Type",
    items: [
      { value: "valueFirst", displayName: "Value First" },
      { value: "columnFirst", displayName: "Column First" },
    ],
    value: { value: "columnFirst", displayName: "Column First" },
  });

  name: string = "matrixStyle";
  displayName: string = "Matrix Style";
  // slices: Array<FormattingSettingsSlice> = [this.orderType, this.headerRowHeight]
  slices: Array<FormattingSettingsSlice> = [this.orderType];
}

export class ColumnStyleSettings extends FormattingSettingsCard {
  groups: formattingSettings.Group[];
  headerRowHeight = new formattingSettings.NumUpDown({
    name: "headerRowHeight",
    displayName: "Row Height",
    value: 30,
  });

  headerRowPadding = new formattingSettings.NumUpDown({
    name: "headerRowPadding",
    displayName: "Row Padding",
    value: 2,
  });

  columnLevel = new formattingSettings.ItemDropdown({
    name: "columnLevel",
    displayName: "Column Level",
    items: [
      { value: 1, displayName: "1" },
      { value: 2, displayName: "2" },
      { value: 3, displayName: "3" },
    ],
    value: { value: 1, displayName: "1" },
  });

  fillColor_1 = new formattingSettings.ColorPicker({
    name: "fillColor_1",
    displayName: "Fill Color",
    value: { value: "#FFFFFF" },
  });

  fillOpacity_1 = new formattingSettings.NumUpDown({
    name: "fillOpacity_1",
    displayName: "Fill Opacity",
    value: 100,
    options: {
      minValue: {
        type: ValidatorType.Min,
        value: 0,
      },
      maxValue: {
        type: ValidatorType.Max,
        value: 100,
      },
    },
  });

  outlineColor_1 = new formattingSettings.ColorPicker({
    name: "outlineColor_1",
    displayName: "Outline Color",
    value: { value: "#3f464b" },
  });

  outlineThickness_1 = new formattingSettings.NumUpDown({
    name: "outlineThickness_1",
    displayName: "Outline Thickness",
    value: 2,
  });

  outlineLeft_1 = new formattingSettings.ToggleSwitch({
    name: "outlineLeft_1",
    displayName: "Outline Left",
    value: false,
  });

  outlineRight_1 = new formattingSettings.ToggleSwitch({
    name: "outlineRight_1",
    displayName: "Outline Right",
    value: false,
  });

  outlineTop_1 = new formattingSettings.ToggleSwitch({
    name: "outlineTop_1",
    displayName: "Outline Top",
    value: false,
  });

  outlineBottom_1 = new formattingSettings.ToggleSwitch({
    name: "outlineBottom_1",
    displayName: "Outline Bottom",
    value: true,
  });

  outlineRadiusTopLeft_1 = new formattingSettings.NumUpDown({
    name: "outlineRadiusTopLeft_1",
    displayName: "Outline Radius Top-left",
    value: 0,
  });

  outlineRadiusTopRight_1 = new formattingSettings.NumUpDown({
    name: "outlineRadiusTopRight_1",
    displayName: "Outline Radius Top-right",
    value: 0,
  });

  outlineRadiusBottomLeft_1 = new formattingSettings.NumUpDown({
    name: "outlineRadiusBottomLeft_1",
    displayName: "Outline Radius Bottom-left",
    value: 0,
  });

  outlineRadiusBottomRight_1 = new formattingSettings.NumUpDown({
    name: "outlineRadiusBottomRight_1",
    displayName: "Outline Radius Bottom-right",
    value: 0,
  });

  fontFamily_1 = new formattingSettings.FontPicker({
    name: "fontFamily_1",
    displayName: "Font Family",
    value: "Segoe UI Bold",
  });

  fontSize_1 = new formattingSettings.NumUpDown({
    name: "fontSize_1",
    displayName: "Font Size",
    value: 12,
  });

  fontColor_1 = new formattingSettings.ColorPicker({
    name: "fontColor_1",
    displayName: "Font Color",
    value: { value: "#000000" },
  });

  fontBold_1 = new formattingSettings.ToggleSwitch({
    name: "fontBold_1",
    displayName: "Font Bold",
    value: false,
  });

  fontItalic_1 = new formattingSettings.ToggleSwitch({
    name: "fontItalic_1",
    displayName: "Font Italic",
    value: false,
  });

  fontUnderline_1 = new formattingSettings.ToggleSwitch({
    name: "fontUnderline_1",
    displayName: "Font Underline",
    value: false,
  });

  wordWrap_1 = new formattingSettings.ToggleSwitch({
    name: "wordWrap_1",
    displayName: "Word Wrap",
    value: true,
  });

  position_1 = new formattingSettings.ItemDropdown({
    name: "position_1",
    displayName: "Position",
    items: [
      { value: "Left", displayName: "Left" },
      { value: "Center", displayName: "Center" },
      { value: "Right", displayName: "Right" },
    ],
    value: { value: "Left", displayName: "Left" },
  });

  stepIndentation_1 = new formattingSettings.NumUpDown({
    name: "stepIndentation_1",
    displayName: "Step Indentation",
    value: 0,
  });

  fillColor_2 = new formattingSettings.ColorPicker({
    name: "fillColor_2",
    displayName: "Fill Color",
    value: { value: "#FFFFFF" },
  });

  fillOpacity_2 = new formattingSettings.NumUpDown({
    name: "fillOpacity_2",
    displayName: "Fill Opacity",
    value: 100,
    options: {
      minValue: {
        type: ValidatorType.Min,
        value: 0,
      },
      maxValue: {
        type: ValidatorType.Max,
        value: 100,
      },
    },
  });

  outlineColor_2 = new formattingSettings.ColorPicker({
    name: "outlineColor_2",
    displayName: "Outline Color",
    value: { value: "#3f464b" },
  });

  outlineThickness_2 = new formattingSettings.NumUpDown({
    name: "outlineThickness_2",
    displayName: "Outline Thickness",
    value: 2,
  });

  outlineLeft_2 = new formattingSettings.ToggleSwitch({
    name: "outlineLeft_2",
    displayName: "Outline Left",
    value: false,
  });

  outlineRight_2 = new formattingSettings.ToggleSwitch({
    name: "outlineRight_2",
    displayName: "Outline Right",
    value: false,
  });

  outlineTop_2 = new formattingSettings.ToggleSwitch({
    name: "outlineTop_2",
    displayName: "Outline Top",
    value: false,
  });

  outlineBottom_2 = new formattingSettings.ToggleSwitch({
    name: "outlineBottom_2",
    displayName: "Outline Bottom",
    value: true,
  });

  outlineRadiusTopLeft_2 = new formattingSettings.NumUpDown({
    name: "outlineRadiusTopLeft_2",
    displayName: "Outline Radius Top-left",
    value: 0,
  });

  outlineRadiusTopRight_2 = new formattingSettings.NumUpDown({
    name: "outlineRadiusTopRight_2",
    displayName: "Outline Radius Top-right",
    value: 0,
  });

  outlineRadiusBottomLeft_2 = new formattingSettings.NumUpDown({
    name: "outlineRadiusBottomLeft_2",
    displayName: "Outline Radius Bottom-left",
    value: 0,
  });

  outlineRadiusBottomRight_2 = new formattingSettings.NumUpDown({
    name: "outlineRadiusBottomRight_2",
    displayName: "Outline Radius Bottom-right",
    value: 0,
  });

  fontFamily_2 = new formattingSettings.FontPicker({
    name: "fontFamily_2",
    displayName: "Font Family",
    value: "Segoe UI Bold",
  });

  fontSize_2 = new formattingSettings.NumUpDown({
    name: "fontSize_2",
    displayName: "Font Size",
    value: 12,
  });

  fontColor_2 = new formattingSettings.ColorPicker({
    name: "fontColor_2",
    displayName: "Font Color",
    value: { value: "#000000" },
  });

  fontBold_2 = new formattingSettings.ToggleSwitch({
    name: "fontBold_2",
    displayName: "Font Bold",
    value: false,
  });

  fontItalic_2 = new formattingSettings.ToggleSwitch({
    name: "fontItalic_2",
    displayName: "Font Italic",
    value: false,
  });

  fontUnderline_2 = new formattingSettings.ToggleSwitch({
    name: "fontUnderline_2",
    displayName: "Font Underline",
    value: false,
  });

  wordWrap_2 = new formattingSettings.ToggleSwitch({
    name: "wordWrap_2",
    displayName: "Word Wrap",
    value: true,
  });

  position_2 = new formattingSettings.ItemDropdown({
    name: "position_2",
    displayName: "Position",
    items: [
      { value: "Left", displayName: "Left" },
      { value: "Center", displayName: "Center" },
      { value: "Right", displayName: "Right" },
    ],
    value: { value: "Left", displayName: "Left" },
  });

  stepIndentation_2 = new formattingSettings.NumUpDown({
    name: "stepIndentation_2",
    displayName: "Step Indentation",
    value: 0,
  });

  fillColor_3 = new formattingSettings.ColorPicker({
    name: "fillColor_3",
    displayName: "Fill Color",
    value: { value: "#FFFFFF" },
  });

  fillOpacity_3 = new formattingSettings.NumUpDown({
    name: "fillOpacity_3",
    displayName: "Fill Opacity",
    value: 100,
    options: {
      minValue: {
        type: ValidatorType.Min,
        value: 0,
      },
      maxValue: {
        type: ValidatorType.Max,
        value: 100,
      },
    },
  });

  outlineColor_3 = new formattingSettings.ColorPicker({
    name: "outlineColor_3",
    displayName: "Outline Color",
    value: { value: "#3f464b" },
  });

  outlineThickness_3 = new formattingSettings.NumUpDown({
    name: "outlineThickness_3",
    displayName: "Outline Thickness",
    value: 2,
  });

  outlineLeft_3 = new formattingSettings.ToggleSwitch({
    name: "outlineLeft_3",
    displayName: "Outline Left",
    value: false,
  });

  outlineRight_3 = new formattingSettings.ToggleSwitch({
    name: "outlineRight_3",
    displayName: "Outline Right",
    value: false,
  });

  outlineTop_3 = new formattingSettings.ToggleSwitch({
    name: "outlineTop_3",
    displayName: "Outline Top",
    value: false,
  });

  outlineBottom_3 = new formattingSettings.ToggleSwitch({
    name: "outlineBottom_3",
    displayName: "Outline Bottom",
    value: true,
  });

  outlineRadiusTopLeft_3 = new formattingSettings.NumUpDown({
    name: "outlineRadiusTopLeft_3",
    displayName: "Outline Radius Top-left",
    value: 0,
  });

  outlineRadiusTopRight_3 = new formattingSettings.NumUpDown({
    name: "outlineRadiusTopRight_3",
    displayName: "Outline Radius Top-right",
    value: 0,
  });

  outlineRadiusBottomLeft_3 = new formattingSettings.NumUpDown({
    name: "outlineRadiusBottomLeft_3",
    displayName: "Outline Radius Bottom-left",
    value: 0,
  });

  outlineRadiusBottomRight_3 = new formattingSettings.NumUpDown({
    name: "outlineRadiusBottomRight_3",
    displayName: "Outline Radius Bottom-right",
    value: 0,
  });

  fontFamily_3 = new formattingSettings.FontPicker({
    name: "fontFamily_3",
    displayName: "Font Family",
    value: "Segoe UI Bold",
  });

  fontSize_3 = new formattingSettings.NumUpDown({
    name: "fontSize_3",
    displayName: "Font Size",
    value: 12,
  });

  fontColor_3 = new formattingSettings.ColorPicker({
    name: "fontColor_3",
    displayName: "Font Color",
    value: { value: "#000000" },
  });

  fontBold_3 = new formattingSettings.ToggleSwitch({
    name: "fontBold_3",
    displayName: "Font Bold",
    value: false,
  });

  fontItalic_3 = new formattingSettings.ToggleSwitch({
    name: "fontItalic_3",
    displayName: "Font Italic",
    value: false,
  });

  fontUnderline_3 = new formattingSettings.ToggleSwitch({
    name: "fontUnderline_3",
    displayName: "Font Underline",
    value: false,
  });

  wordWrap_3 = new formattingSettings.ToggleSwitch({
    name: "wordWrap_3",
    displayName: "Word Wrap",
    value: true,
  });

  position_3 = new formattingSettings.ItemDropdown({
    name: "position_3",
    displayName: "Position",
    items: [
      { value: "Left", displayName: "Left" },
      { value: "Center", displayName: "Center" },
      { value: "Right", displayName: "Right" },
    ],
    value: { value: "Left", displayName: "Left" },
  });

  stepIndentation_3 = new formattingSettings.NumUpDown({
    name: "stepIndentation_3",
    displayName: "Step Indentation",
    value: 0,
  });

  name: string = "columnStyle";
  displayName: string = "Column Style";
  slices: Array<FormattingSettingsSlice> = [
    this.columnLevel,
    // ,this.headerRowHeight
    // ,this.headerRowPadding
    this.fillColor_1,
    this.fillOpacity_1,
    this.outlineColor_1,
    this.outlineThickness_1,
    this.outlineLeft_1,
    this.outlineRight_1,
    this.outlineTop_1,
    this.outlineBottom_1,
    this.outlineRadiusTopLeft_1,
    this.outlineRadiusTopRight_1,
    this.outlineRadiusBottomLeft_1,
    this.outlineRadiusBottomRight_1,
    this.fontFamily_1,
    this.fontSize_1,
    this.fontColor_1,
    this.fontBold_1,
    this.fontItalic_1,
    this.fontUnderline_1,
    this.wordWrap_1,
    this.position_1,
    this.stepIndentation_1,
    this.fillColor_2,
    this.fillOpacity_2,
    this.outlineColor_2,
    this.outlineThickness_2,
    this.outlineLeft_2,
    this.outlineRight_2,
    this.outlineTop_2,
    this.outlineBottom_2,
    this.outlineRadiusTopLeft_2,
    this.outlineRadiusTopRight_2,
    this.outlineRadiusBottomLeft_2,
    this.outlineRadiusBottomRight_2,
    this.fontFamily_2,
    this.fontSize_2,
    this.fontColor_2,
    this.fontBold_2,
    this.fontItalic_2,
    this.fontUnderline_2,
    this.wordWrap_2,
    this.position_2,
    this.stepIndentation_2,
    this.fillColor_3,
    this.fillOpacity_3,
    this.outlineColor_3,
    this.outlineThickness_3,
    this.outlineLeft_3,
    this.outlineRight_3,
    this.outlineTop_3,
    this.outlineBottom_3,
    this.outlineRadiusTopLeft_3,
    this.outlineRadiusTopRight_3,
    this.outlineRadiusBottomLeft_3,
    this.outlineRadiusBottomRight_3,
    this.fontFamily_3,
    this.fontSize_3,
    this.fontColor_3,
    this.fontBold_3,
    this.fontItalic_3,
    this.fontUnderline_3,
    this.wordWrap_3,
    this.position_3,
    this.stepIndentation_3,
  ];
}

export class RowLabelSettings extends FormattingSettingsCard {
  groups: formattingSettings.Group[];
  rowLevel = new formattingSettings.ItemDropdown({
    name: "rowLevel",
    displayName: "Row Level",
    items: [
      { value: 1, displayName: "1" },
      { value: 2, displayName: "2" },
      { value: 3, displayName: "3" },
    ],
    value: { value: 1, displayName: "1" },
  });

  rowHeight_1 = new formattingSettings.TextInput({
    name: "rowHeight_1",
    displayName: "Row Height",
    placeholder: "Auto",
    value: "Auto",
  });

  rowPadding_1 = new formattingSettings.NumUpDown({
    name: "rowPadding_1",
    displayName: "Row Padding",
    value: 2,
  });

  // highlightType_1 = new formattingSettings.ItemDropdown({
  //     name: "highlightType_1",
  //     displayName: "Highlight Type",
  //     // "Header Highlighted" | "Banded Rows"
  //     items:[{"value":'Header Highlighted',"displayName":"Header Highlighted"},{"value":'Banded Rows',"displayName":"Banded Rows"}],
  //     value:{"value":'Banded Rows',"displayName":"Banded Rows"}
  // })

  fillColor_1 = new formattingSettings.ColorPicker({
    name: "fillColor_1",
    displayName: "Fill Color",
    value: { value: "#FFFFFF" },
  });

  fillOpacity_1 = new formattingSettings.NumUpDown({
    name: "fillOpacity_1",
    displayName: "Fill Opacity",
    value: 0,
    options: {
      minValue: {
        type: ValidatorType.Min,
        value: 0,
      },
      maxValue: {
        type: ValidatorType.Max,
        value: 100,
      },
    },
  });

  bandedFill_1 = new formattingSettings.ToggleSwitch({
    name: "bandedFill_1",
    displayName: "Banded Fill",
    value: false,
  });

  bandedFillColor_1 = new formattingSettings.ColorPicker({
    name: "bandedFillColor_1",
    displayName: "Banded Fill Color",
    value: { value: "#FFFFFF" },
  });

  bandedFillOpacity_1 = new formattingSettings.NumUpDown({
    name: "bandedFillOpacity_1",
    displayName: "Banded Fill Opacity",
    value: 100,
    options: {
      minValue: {
        type: ValidatorType.Min,
        value: 0,
      },
      maxValue: {
        type: ValidatorType.Max,
        value: 100,
      },
    },
  });

  outlineColor_1 = new formattingSettings.ColorPicker({
    name: "outlineColor_1",
    displayName: "Outline Color",
    value: { value: "#3f464b" },
  });

  outlineThickness_1 = new formattingSettings.NumUpDown({
    name: "outlineThickness_1",
    displayName: "Outline Thickness",
    value: 2,
  });

  outlineLeft_1 = new formattingSettings.ToggleSwitch({
    name: "outlineLeft_1",
    displayName: "Outline Left",
    value: false,
  });

  outlineRight_1 = new formattingSettings.ToggleSwitch({
    name: "outlineRight_1",
    displayName: "Outline Right",
    value: false,
  });

  outlineTop_1 = new formattingSettings.ToggleSwitch({
    name: "outlineTop_1",
    displayName: "Outline Top",
    value: false,
  });

  outlineBottom_1 = new formattingSettings.ToggleSwitch({
    name: "outlineBottom_1",
    displayName: "Outline Bottom",
    value: true,
  });

  outlineRadiusTopLeft_1 = new formattingSettings.NumUpDown({
    name: "outlineRadiusTopLeft_1",
    displayName: "Outline Radius Top-left",
    value: 0,
  });

  outlineRadiusTopRight_1 = new formattingSettings.NumUpDown({
    name: "outlineRadiusTopRight_1",
    displayName: "Outline Radius Top-right",
    value: 0,
  });

  outlineRadiusBottomLeft_1 = new formattingSettings.NumUpDown({
    name: "outlineRadiusBottomLeft_1",
    displayName: "Outline Radius Bottom-left",
    value: 0,
  });

  outlineRadiusBottomRight_1 = new formattingSettings.NumUpDown({
    name: "outlineRadiusBottomRight_1",
    displayName: "Outline Radius Bottom-right",
    value: 0,
  });

  fontFamily_1 = new formattingSettings.FontPicker({
    name: "fontFamily_1",
    displayName: "Font Family",
    value: "Segoe UI Bold",
  });

  fontSize_1 = new formattingSettings.NumUpDown({
    name: "fontSize_1",
    displayName: "Font Size",
    value: 12,
  });

  fontColor_1 = new formattingSettings.ColorPicker({
    name: "fontColor_1",
    displayName: "Font Color",
    value: { value: "#000000" },
  });

  fontBold_1 = new formattingSettings.ToggleSwitch({
    name: "fontBold_1",
    displayName: "Font Bold",
    value: false,
  });

  fontItalic_1 = new formattingSettings.ToggleSwitch({
    name: "fontItalic_1",
    displayName: "Font Italic",
    value: false,
  });

  fontUnderline_1 = new formattingSettings.ToggleSwitch({
    name: "fontUnderline_1",
    displayName: "Font Underline",
    value: false,
  });

  wordWrap_1 = new formattingSettings.ToggleSwitch({
    name: "wordWrap_1",
    displayName: "Word Wrap",
    value: true,
  });

  position_1 = new formattingSettings.ItemDropdown({
    name: "position_1",
    displayName: "Position",
    items: [
      { value: "Left", displayName: "Left" },
      { value: "Center", displayName: "Center" },
      { value: "Right", displayName: "Right" },
    ],
    value: { value: "Left", displayName: "Left" },
  });

  stepIndentation_1 = new formattingSettings.NumUpDown({
    name: "stepIndentation_1",
    displayName: "Step Indentation",
    value: 0,
  });

  showExpand_1 = new formattingSettings.ToggleSwitch({
    name: "showExpand_1",
    displayName: "Expand",
    value: true,
  });

  expandCollapseIcon_1 = new formattingSettings.ItemDropdown({
    name: "expandCollapseIcon_1",
    displayName: "Icon",
    items: [
      { value: "+/-", displayName: "+/-" },
      { value: "chevron", displayName: "Chevron" },
    ],
    value: { value: "chevron", displayName: "Chevron" },
  });

  expandCollapseIconColor_1 = new formattingSettings.ColorPicker({
    name: "expandCollapseIconColor_1",
    displayName: "Icon Color",
    value: { value: "#ffffff" },
  });

  expandCollapseFillColor_1 = new formattingSettings.ColorPicker({
    name: "expandCollapseFillColor_1",
    displayName: "Fill Color",
    value: { value: "#000000" },
  });

  expandCollapseOutlineColor_1 = new formattingSettings.ColorPicker({
    name: "expandCollapseOutlineColor_1",
    displayName: "Outline Color",
    value: { value: "#000000" },
  });

  expandCollapseOutlineThickness_1 = new formattingSettings.NumUpDown({
    name: "expandCollapseOutlineThickness_1",
    displayName: "Outline Thickness",
    value: 0,
  });

  expandCollapseOutlineRadius_1 = new formattingSettings.NumUpDown({
    name: "expandCollapseOutlineRadius_1",
    displayName: "Outline Radius",
    value: 2,
  });

  rowHeight_2 = new formattingSettings.TextInput({
    name: "rowHeight_2",
    displayName: "Row Height",
    placeholder: "Auto",
    value: "Auto",
  });

  rowPadding_2 = new formattingSettings.NumUpDown({
    name: "rowPadding_2",
    displayName: "Row Padding",
    value: 2,
  });

  // highlightType_2 = new formattingSettings.ItemDropdown({
  //     name: "highlightType_2",
  //     displayName: "Highlight Type",
  //     // "Header Highlighted" | "Banded Rows"
  //     items:[{"value":'Header Highlighted',"displayName":"Header Highlighted"},{"value":'Banded Rows',"displayName":"Banded Rows"}],
  //     value:{"value":'Banded Rows',"displayName":"Banded Rows"}
  // })

  fillColor_2 = new formattingSettings.ColorPicker({
    name: "fillColor_2",
    displayName: "Fill Color",
    value: { value: "#FFFFFF" },
  });

  fillOpacity_2 = new formattingSettings.NumUpDown({
    name: "fillOpacity_2",
    displayName: "Fill Opacity",
    value: 100,
    options: {
      minValue: {
        type: ValidatorType.Min,
        value: 0,
      },
      maxValue: {
        type: ValidatorType.Max,
        value: 100,
      },
    },
  });

  bandedFill_2 = new formattingSettings.ToggleSwitch({
    name: "bandedFill_2",
    displayName: "Banded Fill",
    value: false,
  });

  bandedFillColor_2 = new formattingSettings.ColorPicker({
    name: "bandedFillColor_2",
    displayName: "Banded Fill Color",
    value: { value: "#FFFFFF" },
  });

  bandedFillOpacity_2 = new formattingSettings.NumUpDown({
    name: "bandedFillOpacity_2",
    displayName: "Banded Fill Opacity",
    value: 100,
    options: {
      minValue: {
        type: ValidatorType.Min,
        value: 0,
      },
      maxValue: {
        type: ValidatorType.Max,
        value: 100,
      },
    },
  });

  outlineColor_2 = new formattingSettings.ColorPicker({
    name: "outlineColor_2",
    displayName: "Outline Color",
    value: { value: "#3f464b" },
  });

  outlineThickness_2 = new formattingSettings.NumUpDown({
    name: "outlineThickness_2",
    displayName: "Outline Thickness",
    value: 2,
  });

  outlineLeft_2 = new formattingSettings.ToggleSwitch({
    name: "outlineLeft_2",
    displayName: "Outline Left",
    value: false,
  });

  outlineRight_2 = new formattingSettings.ToggleSwitch({
    name: "outlineRight_2",
    displayName: "Outline Right",
    value: false,
  });

  outlineTop_2 = new formattingSettings.ToggleSwitch({
    name: "outlineTop_2",
    displayName: "Outline Top",
    value: false,
  });

  outlineBottom_2 = new formattingSettings.ToggleSwitch({
    name: "outlineBottom_2",
    displayName: "Outline Bottom",
    value: true,
  });

  outlineRadiusTopLeft_2 = new formattingSettings.NumUpDown({
    name: "outlineRadiusTopLeft_2",
    displayName: "Outline Radius Top-left",
    value: 0,
  });

  outlineRadiusTopRight_2 = new formattingSettings.NumUpDown({
    name: "outlineRadiusTopRight_2",
    displayName: "Outline Radius Top-right",
    value: 0,
  });

  outlineRadiusBottomLeft_2 = new formattingSettings.NumUpDown({
    name: "outlineRadiusBottomLeft_2",
    displayName: "Outline Radius Bottom-left",
    value: 0,
  });

  outlineRadiusBottomRight_2 = new formattingSettings.NumUpDown({
    name: "outlineRadiusBottomRight_2",
    displayName: "Outline Radius Bottom-right",
    value: 0,
  });

  fontFamily_2 = new formattingSettings.FontPicker({
    name: "fontFamily_2",
    displayName: "Font Family",
    value: "Segoe UI Bold",
  });

  fontSize_2 = new formattingSettings.NumUpDown({
    name: "fontSize_2",
    displayName: "Font Size",
    value: 12,
  });

  fontColor_2 = new formattingSettings.ColorPicker({
    name: "fontColor_2",
    displayName: "Font Color",
    value: { value: "#000000" },
  });

  fontBold_2 = new formattingSettings.ToggleSwitch({
    name: "fontBold_2",
    displayName: "Font Bold",
    value: false,
  });

  fontItalic_2 = new formattingSettings.ToggleSwitch({
    name: "fontItalic_2",
    displayName: "Font Italic",
    value: false,
  });

  fontUnderline_2 = new formattingSettings.ToggleSwitch({
    name: "fontUnderline_2",
    displayName: "Font Underline",
    value: false,
  });

  wordWrap_2 = new formattingSettings.ToggleSwitch({
    name: "wordWrap_2",
    displayName: "Word Wrap",
    value: true,
  });

  position_2 = new formattingSettings.ItemDropdown({
    name: "position_2",
    displayName: "Position",
    items: [
      { value: "Left", displayName: "Left" },
      { value: "Center", displayName: "Center" },
      { value: "Right", displayName: "Right" },
    ],
    value: { value: "Left", displayName: "Left" },
  });

  stepIndentation_2 = new formattingSettings.NumUpDown({
    name: "stepIndentation_2",
    displayName: "Step Indentation",
    value: 0,
  });

  showExpand_2 = new formattingSettings.ToggleSwitch({
    name: "showExpand_2",
    displayName: "Expand",
    value: true,
  });

  expandCollapseIcon_2 = new formattingSettings.ItemDropdown({
    name: "expandCollapseIcon_2",
    displayName: "Icon",
    items: [
      { value: "+/-", displayName: "+/-" },
      { value: "chevron", displayName: "Chevron" },
    ],
    value: { value: "chevron", displayName: "Chevron" },
  });

  expandCollapseIconColor_2 = new formattingSettings.ColorPicker({
    name: "expandCollapseIconColor_2",
    displayName: "Icon Color",
    value: { value: "#ffffff" },
  });

  expandCollapseFillColor_2 = new formattingSettings.ColorPicker({
    name: "expandCollapseFillColor_2",
    displayName: "Fill Color",
    value: { value: "#000000" },
  });

  expandCollapseOutlineColor_2 = new formattingSettings.ColorPicker({
    name: "expandCollapseOutlineColor_2",
    displayName: "Outline Color",
    value: { value: "#000000" },
  });

  expandCollapseOutlineThickness_2 = new formattingSettings.NumUpDown({
    name: "expandCollapseOutlineThickness_2",
    displayName: "Outline Thickness",
    value: 0,
  });

  expandCollapseOutlineRadius_2 = new formattingSettings.NumUpDown({
    name: "expandCollapseOutlineRadius_2",
    displayName: "Outline Radius",
    value: 2,
  });

  rowHeight_3 = new formattingSettings.TextInput({
    name: "rowHeight_3",
    displayName: "Row Height",
    placeholder: "Auto",
    value: "Auto",
  });

  rowPadding_3 = new formattingSettings.NumUpDown({
    name: "rowPadding_3",
    displayName: "Row Padding",
    value: 2,
  });

  // highlightType_3 = new formattingSettings.ItemDropdown({
  //     name: "highlightType_3",
  //     displayName: "Highlight Type",
  //     // "Header Highlighted" | "Banded Rows"
  //     items:[{"value":'Header Highlighted',"displayName":"Header Highlighted"},{"value":'Banded Rows',"displayName":"Banded Rows"}],
  //     value:{"value":'Banded Rows',"displayName":"Banded Rows"}
  // })

  fillColor_3 = new formattingSettings.ColorPicker({
    name: "fillColor_3",
    displayName: "Fill Color",
    value: { value: "#FFFFFF" },
  });

  fillOpacity_3 = new formattingSettings.NumUpDown({
    name: "fillOpacity_3",
    displayName: "Fill Opacity",
    value: 100,
    options: {
      minValue: {
        type: ValidatorType.Min,
        value: 0,
      },
      maxValue: {
        type: ValidatorType.Max,
        value: 100,
      },
    },
  });

  bandedFill_3 = new formattingSettings.ToggleSwitch({
    name: "bandedFill_3",
    displayName: "Banded Fill",
    value: false,
  });

  bandedFillColor_3 = new formattingSettings.ColorPicker({
    name: "bandedFillColor_3",
    displayName: "Banded Fill Color",
    value: { value: "#FFFFFF" },
  });

  bandedFillOpacity_3 = new formattingSettings.NumUpDown({
    name: "bandedFillOpacity_3",
    displayName: "Banded Fill Opacity",
    value: 100,
    options: {
      minValue: {
        type: ValidatorType.Min,
        value: 0,
      },
      maxValue: {
        type: ValidatorType.Max,
        value: 100,
      },
    },
  });

  outlineColor_3 = new formattingSettings.ColorPicker({
    name: "outlineColor_3",
    displayName: "Outline Color",
    value: { value: "#3f464b" },
  });

  outlineThickness_3 = new formattingSettings.NumUpDown({
    name: "outlineThickness_3",
    displayName: "Outline Thickness",
    value: 2,
  });

  outlineLeft_3 = new formattingSettings.ToggleSwitch({
    name: "outlineLeft_3",
    displayName: "Outline Left",
    value: false,
  });

  outlineRight_3 = new formattingSettings.ToggleSwitch({
    name: "outlineRight_3",
    displayName: "Outline Right",
    value: false,
  });

  outlineTop_3 = new formattingSettings.ToggleSwitch({
    name: "outlineTop_3",
    displayName: "Outline Top",
    value: false,
  });

  outlineBottom_3 = new formattingSettings.ToggleSwitch({
    name: "outlineBottom_3",
    displayName: "Outline Bottom",
    value: true,
  });

  outlineRadiusTopLeft_3 = new formattingSettings.NumUpDown({
    name: "outlineRadiusTopLeft_3",
    displayName: "Outline Radius Top-left",
    value: 0,
  });

  outlineRadiusTopRight_3 = new formattingSettings.NumUpDown({
    name: "outlineRadiusTopRight_3",
    displayName: "Outline Radius Top-right",
    value: 0,
  });

  outlineRadiusBottomLeft_3 = new formattingSettings.NumUpDown({
    name: "outlineRadiusBottomLeft_3",
    displayName: "Outline Radius Bottom-left",
    value: 0,
  });

  outlineRadiusBottomRight_3 = new formattingSettings.NumUpDown({
    name: "outlineRadiusBottomRight_3",
    displayName: "Outline Radius Bottom-right",
    value: 0,
  });

  fontFamily_3 = new formattingSettings.FontPicker({
    name: "fontFamily_3",
    displayName: "Font Family",
    value: "Segoe UI Bold",
  });

  fontSize_3 = new formattingSettings.NumUpDown({
    name: "fontSize_3",
    displayName: "Font Size",
    value: 12,
  });

  fontColor_3 = new formattingSettings.ColorPicker({
    name: "fontColor_3",
    displayName: "Font Color",
    value: { value: "#000000" },
  });

  fontBold_3 = new formattingSettings.ToggleSwitch({
    name: "fontBold_3",
    displayName: "Font Bold",
    value: false,
  });

  fontItalic_3 = new formattingSettings.ToggleSwitch({
    name: "fontItalic_3",
    displayName: "Font Italic",
    value: false,
  });

  fontUnderline_3 = new formattingSettings.ToggleSwitch({
    name: "fontUnderline_3",
    displayName: "Font Underline",
    value: false,
  });

  wordWrap_3 = new formattingSettings.ToggleSwitch({
    name: "wordWrap_3",
    displayName: "Word Wrap",
    value: true,
  });

  position_3 = new formattingSettings.ItemDropdown({
    name: "position_3",
    displayName: "Position",
    items: [
      { value: "Left", displayName: "Left" },
      { value: "Center", displayName: "Center" },
      { value: "Right", displayName: "Right" },
    ],
    value: { value: "Left", displayName: "Left" },
  });

  stepIndentation_3 = new formattingSettings.NumUpDown({
    name: "stepIndentation_3",
    displayName: "Step Indentation",
    value: 0,
  });

  showExpand_3 = new formattingSettings.ToggleSwitch({
    name: "showExpand_3",
    displayName: "Expand",
    value: true,
  });

  expandCollapseIcon_3 = new formattingSettings.ItemDropdown({
    name: "expandCollapseIcon_3",
    displayName: "Icon",
    items: [
      { value: "+/-", displayName: "+/-" },
      { value: "chevron", displayName: "Chevron" },
    ],
    value: { value: "chevron", displayName: "Chevron" },
  });

  expandCollapseIconColor_3 = new formattingSettings.ColorPicker({
    name: "expandCollapseIconColor_3",
    displayName: "Icon Color",
    value: { value: "#ffffff" },
  });

  expandCollapseFillColor_3 = new formattingSettings.ColorPicker({
    name: "expandCollapseFillColor_3",
    displayName: "Fill Color",
    value: { value: "#000000" },
  });

  expandCollapseOutlineColor_3 = new formattingSettings.ColorPicker({
    name: "expandCollapseOutlineColor_3",
    displayName: "Outline Color",
    value: { value: "#000000" },
  });

  expandCollapseOutlineThickness_3 = new formattingSettings.NumUpDown({
    name: "expandCollapseOutlineThickness_3",
    displayName: "Outline Thickness",
    value: 0,
  });

  expandCollapseOutlineRadius_3 = new formattingSettings.NumUpDown({
    name: "expandCollapseOutlineRadius_3",
    displayName: "Outline Radius",
    value: 2,
  });

  name: string = "rowLabelStyle";
  displayName: string = "Row (Row Headers)";
  slices: Array<FormattingSettingsSlice> = [
    this.rowLevel,
    this.rowHeight_1,
    this.rowPadding_1,
    // ,this.highlightType_1
    this.fillColor_1,
    this.fillOpacity_1,
    this.bandedFill_1,
    this.bandedFillColor_1,
    this.bandedFillOpacity_1,
    this.outlineColor_1,
    this.outlineThickness_1,
    this.outlineLeft_1,
    this.outlineRight_1,
    this.outlineTop_1,
    this.outlineBottom_1,
    this.outlineRadiusTopLeft_1,
    this.outlineRadiusTopRight_1,
    this.outlineRadiusBottomLeft_1,
    this.outlineRadiusBottomRight_1,
    this.fontFamily_1,
    this.fontSize_1,
    this.fontColor_1,
    this.fontBold_1,
    this.fontItalic_1,
    this.fontUnderline_1,
    this.wordWrap_1,
    this.position_1,
    this.stepIndentation_1,
    this.showExpand_1,
    this.expandCollapseIcon_1,
    this.expandCollapseIconColor_1,
    this.expandCollapseFillColor_1,
    this.expandCollapseOutlineColor_1,
    this.expandCollapseOutlineThickness_1,
    this.expandCollapseOutlineRadius_1,
    this.rowHeight_2,
    this.rowPadding_2,
    // ,this.highlightType_2
    this.fillColor_2,
    this.fillOpacity_2,
    this.bandedFill_2,
    this.bandedFillColor_2,
    this.bandedFillOpacity_2,
    this.outlineColor_2,
    this.outlineThickness_2,
    this.outlineLeft_2,
    this.outlineRight_2,
    this.outlineTop_2,
    this.outlineBottom_2,
    this.outlineRadiusTopLeft_2,
    this.outlineRadiusTopRight_2,
    this.outlineRadiusBottomLeft_2,
    this.outlineRadiusBottomRight_2,
    this.fontFamily_2,
    this.fontSize_2,
    this.fontColor_2,
    this.fontBold_2,
    this.fontItalic_2,
    this.fontUnderline_2,
    this.wordWrap_2,
    this.position_2,
    this.stepIndentation_2,
    this.showExpand_2,
    this.expandCollapseIcon_2,
    this.expandCollapseIconColor_2,
    this.expandCollapseFillColor_2,
    this.expandCollapseOutlineColor_2,
    this.expandCollapseOutlineThickness_2,
    this.expandCollapseOutlineRadius_2,
    this.rowHeight_3,
    this.rowPadding_3,
    // ,this.highlightType_3
    this.fillColor_3,
    this.fillOpacity_3,
    this.bandedFill_3,
    this.bandedFillColor_3,
    this.bandedFillOpacity_3,
    this.outlineColor_3,
    this.outlineThickness_3,
    this.outlineLeft_3,
    this.outlineRight_3,
    this.outlineTop_3,
    this.outlineBottom_3,
    this.outlineRadiusTopLeft_3,
    this.outlineRadiusTopRight_3,
    this.outlineRadiusBottomLeft_3,
    this.outlineRadiusBottomRight_3,
    this.fontFamily_3,
    this.fontSize_3,
    this.fontColor_3,
    this.fontBold_3,
    this.fontItalic_3,
    this.fontUnderline_3,
    this.wordWrap_3,
    this.position_3,
    this.stepIndentation_3,
    this.showExpand_3,
    this.expandCollapseIcon_3,
    this.expandCollapseIconColor_3,
    this.expandCollapseFillColor_3,
    this.expandCollapseOutlineColor_3,
    this.expandCollapseOutlineThickness_3,
    this.expandCollapseOutlineRadius_3,
  ];
}

export class RowValueSettings extends FormattingSettingsCard {
  groups: formattingSettings.Group[];
  groupsBeforeValue = new formattingSettings.ToggleSwitch({
    name: "groupsBeforeValue",
    displayName: "Column groups before value",
    value: true,
  });

  rowLevel = new formattingSettings.ItemDropdown({
    name: "rowLevel",
    displayName: "Row Level",
    items: [
      { value: 1, displayName: "1" },
      { value: 2, displayName: "2" },
      { value: 3, displayName: "3" },
    ],
    value: { value: 1, displayName: "1" },
  });

  // orderType = new formattingSettings.ItemDropdown({
  //     name: "orderType",
  //     displayName: "Type",
  //     items:[{"value":'valueFirst',"displayName":"Value First"},{"value":'columnFirst',"displayName":"Column First"}],
  //     value:{"value":'columnFirst',"displayName":"Column First"}
  // })

  // highlightType_1 = new formattingSettings.ItemDropdown({
  //     name: "highlightType_1",
  //     displayName: "Highlight Type",
  //     // "Header Highlighted" | "Banded Rows"
  //     items:[{"value":'Header Highlighted',"displayName":"Header Highlighted"},{"value":'Banded Rows',"displayName":"Banded Rows"}],
  //     value:{"value":'Banded Rows',"displayName":"Banded Rows"}
  // })

  fillColor_1 = new formattingSettings.ColorPicker({
    name: "fillColor_1",
    displayName: "Fill Color",
    value: { value: "#FFFFFF" },
  });

  fillOpacity_1 = new formattingSettings.NumUpDown({
    name: "fillOpacity_1",
    displayName: "Fill Opacity",
    value: 100,
    options: {
      minValue: {
        type: ValidatorType.Min,
        value: 0,
      },
      maxValue: {
        type: ValidatorType.Max,
        value: 100,
      },
    },
  });

  bandedFill_1 = new formattingSettings.ToggleSwitch({
    name: "bandedFill_1",
    displayName: "Banded Fill",
    value: false,
  });

  bandedFillColor_1 = new formattingSettings.ColorPicker({
    name: "bandedFillColor_1",
    displayName: "Banded Fill Color",
    value: { value: "#FFFFFF" },
  });

  bandedFillOpacity_1 = new formattingSettings.NumUpDown({
    name: "bandedFillOpacity_1",
    displayName: "Banded Fill Opacity",
    value: 100,
    options: {
      minValue: {
        type: ValidatorType.Min,
        value: 0,
      },
      maxValue: {
        type: ValidatorType.Max,
        value: 100,
      },
    },
  });

  outlineColor_1 = new formattingSettings.ColorPicker({
    name: "outlineColor_1",
    displayName: "Outline Color",
    value: { value: "#3f464b" },
  });

  outlineThickness_1 = new formattingSettings.NumUpDown({
    name: "outlineThickness_1",
    displayName: "Outline Thickness",
    value: 2,
  });

  outlineLeft_1 = new formattingSettings.ToggleSwitch({
    name: "outlineLeft_1",
    displayName: "Outline Left",
    value: false,
  });

  outlineRight_1 = new formattingSettings.ToggleSwitch({
    name: "outlineRight_1",
    displayName: "Outline Right",
    value: false,
  });

  outlineTop_1 = new formattingSettings.ToggleSwitch({
    name: "outlineTop_1",
    displayName: "Outline Top",
    value: false,
  });

  outlineBottom_1 = new formattingSettings.ToggleSwitch({
    name: "outlineBottom_1",
    displayName: "Outline Bottom",
    value: true,
  });

  outlineRadiusTopLeft_1 = new formattingSettings.NumUpDown({
    name: "outlineRadiusTopLeft_1",
    displayName: "Outline Radius Top-left",
    value: 0,
  });

  outlineRadiusTopRight_1 = new formattingSettings.NumUpDown({
    name: "outlineRadiusTopRight_1",
    displayName: "Outline Radius Top-right",
    value: 0,
  });

  outlineRadiusBottomLeft_1 = new formattingSettings.NumUpDown({
    name: "outlineRadiusBottomLeft_1",
    displayName: "Outline Radius Bottom-left",
    value: 0,
  });

  outlineRadiusBottomRight_1 = new formattingSettings.NumUpDown({
    name: "outlineRadiusBottomRight_1",
    displayName: "Outline Radius Bottom-right",
    value: 0,
  });

  fontFamily_1 = new formattingSettings.FontPicker({
    name: "fontFamily_1",
    displayName: "Font Family",
    value: "Segoe UI Bold",
  });

  fontSize_1 = new formattingSettings.NumUpDown({
    name: "fontSize_1",
    displayName: "Font Size",
    value: 12,
  });

  fontColor_1 = new formattingSettings.ColorPicker({
    name: "fontColor_1",
    displayName: "Font Color",
    value: { value: "#000000" },
  });

  fontBold_1 = new formattingSettings.ToggleSwitch({
    name: "fontBold_1",
    displayName: "Font Bold",
    value: false,
  });

  fontItalic_1 = new formattingSettings.ToggleSwitch({
    name: "fontItalic_1",
    displayName: "Font Italic",
    value: false,
  });

  fontUnderline_1 = new formattingSettings.ToggleSwitch({
    name: "fontUnderline_1",
    displayName: "Font Underline",
    value: false,
  });

  wordWrap_1 = new formattingSettings.ToggleSwitch({
    name: "wordWrap_1",
    displayName: "Word Wrap",
    value: true,
  });

  position_1 = new formattingSettings.ItemDropdown({
    name: "position_1",
    displayName: "Position",
    items: [
      { value: "Left", displayName: "Left" },
      { value: "Center", displayName: "Center" },
      { value: "Right", displayName: "Right" },
    ],
    value: { value: "Left", displayName: "Left" },
  });

  stepIndentation_1 = new formattingSettings.NumUpDown({
    name: "stepIndentation_1",
    displayName: "Step Indentation",
    value: 0,
  });

  enableSelection_1 = new formattingSettings.ToggleSwitch({
    name: "enableSelection_1",
    value: true,
  });

  selectionType_1 = new formattingSettings.ItemDropdown({
    name: "selectionType_1",
    displayName: "Selection Type",
    items: [
      {
        value: "Highlight and Move to Top",
        displayName: "Highlight and Move to Top",
      },
      { value: "Highlight Only", displayName: "Highlight Only" },
      { value: "Move to Top Only", displayName: "Move to Top Only" },
    ],
    value: {
      value: "Highlight and Move to Top",
      displayName: "Highlight and Move to Top",
    },
  });

  selectedFillColor_1 = new formattingSettings.ColorPicker({
    name: "selectedFillColor_1",
    displayName: "Fill Color",
    value: { value: "#ffffff" },
  });

  selectedFillOpacity_1 = new formattingSettings.NumUpDown({
    name: "selectedFillOpacity_1",
    displayName: "Fill Opacity",
    value: 100,
    options: {
      minValue: {
        type: ValidatorType.Min,
        value: 0,
      },
      maxValue: {
        type: ValidatorType.Max,
        value: 100,
      },
    },
  });

  selectedOutline_1 = new formattingSettings.ToggleSwitch({
    name: "selectedOutline_1",
    displayName: "Show Outline",
    value: true,
  });

  selectedOutlineColor_1 = new formattingSettings.ColorPicker({
    name: "selectedOutlineColor_1",
    displayName: "Outline Color",
    value: { value: "#8c9093" },
  });

  selectedOutlineThickness_1 = new formattingSettings.NumUpDown({
    name: "selectedOutlineThickness_1",
    displayName: "Outline Thickness",
    value: 2,
  });

  selectedOutlineRadius_1 = new formattingSettings.NumUpDown({
    name: "selectedOutlineRadius_1",
    displayName: "Outline Radius",
    value: 2,
  });

  // highlightType_2 = new formattingSettings.ItemDropdown({
  //     name: "highlightType_2",
  //     displayName: "Highlight Type",
  //     // "Header Highlighted" | "Banded Rows"
  //     items:[{"value":'Header Highlighted',"displayName":"Header Highlighted"},{"value":'Banded Rows',"displayName":"Banded Rows"}],
  //     value:{"value":'Banded Rows',"displayName":"Banded Rows"}
  // })

  fillColor_2 = new formattingSettings.ColorPicker({
    name: "fillColor_2",
    displayName: "Fill Color",
    value: { value: "#FFFFFF" },
  });

  fillOpacity_2 = new formattingSettings.NumUpDown({
    name: "fillOpacity_2",
    displayName: "Fill Opacity",
    value: 100,
    options: {
      minValue: {
        type: ValidatorType.Min,
        value: 0,
      },
      maxValue: {
        type: ValidatorType.Max,
        value: 100,
      },
    },
  });

  bandedFill_2 = new formattingSettings.ToggleSwitch({
    name: "bandedFill_2",
    displayName: "Banded Fill",
    value: false,
  });

  bandedFillColor_2 = new formattingSettings.ColorPicker({
    name: "bandedFillColor_2",
    displayName: "Banded Fill Color",
    value: { value: "#FFFFFF" },
  });

  bandedFillOpacity_2 = new formattingSettings.NumUpDown({
    name: "bandedFillOpacity_2",
    displayName: "Banded Fill Opacity",
    value: 100,
    options: {
      minValue: {
        type: ValidatorType.Min,
        value: 0,
      },
      maxValue: {
        type: ValidatorType.Max,
        value: 100,
      },
    },
  });

  outlineColor_2 = new formattingSettings.ColorPicker({
    name: "outlineColor_2",
    displayName: "Outline Color",
    value: { value: "#3f464b" },
  });

  outlineThickness_2 = new formattingSettings.NumUpDown({
    name: "outlineThickness_2",
    displayName: "Outline Thickness",
    value: 2,
  });

  outlineLeft_2 = new formattingSettings.ToggleSwitch({
    name: "outlineLeft_2",
    displayName: "Outline Left",
    value: false,
  });

  outlineRight_2 = new formattingSettings.ToggleSwitch({
    name: "outlineRight_2",
    displayName: "Outline Right",
    value: false,
  });

  outlineTop_2 = new formattingSettings.ToggleSwitch({
    name: "outlineTop_2",
    displayName: "Outline Top",
    value: false,
  });

  outlineBottom_2 = new formattingSettings.ToggleSwitch({
    name: "outlineBottom_2",
    displayName: "Outline Bottom",
    value: true,
  });

  outlineRadiusTopLeft_2 = new formattingSettings.NumUpDown({
    name: "outlineRadiusTopLeft_2",
    displayName: "Outline Radius Top-left",
    value: 0,
  });

  outlineRadiusTopRight_2 = new formattingSettings.NumUpDown({
    name: "outlineRadiusTopRight_2",
    displayName: "Outline Radius Top-right",
    value: 0,
  });

  outlineRadiusBottomLeft_2 = new formattingSettings.NumUpDown({
    name: "outlineRadiusBottomLeft_2",
    displayName: "Outline Radius Bottom-left",
    value: 0,
  });

  outlineRadiusBottomRight_2 = new formattingSettings.NumUpDown({
    name: "outlineRadiusBottomRight_2",
    displayName: "Outline Radius Bottom-right",
    value: 0,
  });

  fontFamily_2 = new formattingSettings.FontPicker({
    name: "fontFamily_2",
    displayName: "Font Family",
    value: "Segoe UI Bold",
  });

  fontSize_2 = new formattingSettings.NumUpDown({
    name: "fontSize_2",
    displayName: "Font Size",
    value: 12,
  });

  fontColor_2 = new formattingSettings.ColorPicker({
    name: "fontColor_2",
    displayName: "Font Color",
    value: { value: "#000000" },
  });

  fontBold_2 = new formattingSettings.ToggleSwitch({
    name: "fontBold_2",
    displayName: "Font Bold",
    value: false,
  });

  fontItalic_2 = new formattingSettings.ToggleSwitch({
    name: "fontItalic_2",
    displayName: "Font Italic",
    value: false,
  });

  fontUnderline_2 = new formattingSettings.ToggleSwitch({
    name: "fontUnderline_2",
    displayName: "Font Underline",
    value: false,
  });

  wordWrap_2 = new formattingSettings.ToggleSwitch({
    name: "wordWrap_2",
    displayName: "Word Wrap",
    value: true,
  });

  position_2 = new formattingSettings.ItemDropdown({
    name: "position_2",
    displayName: "Position",
    items: [
      { value: "Left", displayName: "Left" },
      { value: "Center", displayName: "Center" },
      { value: "Right", displayName: "Right" },
    ],
    value: { value: "Left", displayName: "Left" },
  });

  stepIndentation_2 = new formattingSettings.NumUpDown({
    name: "stepIndentation_2",
    displayName: "Step Indentation",
    value: 0,
  });

  enableSelection_2 = new formattingSettings.ToggleSwitch({
    name: "enableSelection_2",
    value: true,
  });

  selectionType_2 = new formattingSettings.ItemDropdown({
    name: "selectionType_2",
    displayName: "Selection Type",
    items: [
      {
        value: "Highlight and Move to Top",
        displayName: "Highlight and Move to Top",
      },
      { value: "Highlight Only", displayName: "Highlight Only" },
      { value: "Move to Top Only", displayName: "Move to Top Only" },
    ],
    value: {
      value: "Highlight and Move to Top",
      displayName: "Highlight and Move to Top",
    },
  });

  selectedFillColor_2 = new formattingSettings.ColorPicker({
    name: "selectedFillColor_2",
    displayName: "Fill Color",
    value: { value: "#ffffff" },
  });

  selectedFillOpacity_2 = new formattingSettings.NumUpDown({
    name: "selectedFillOpacity_2",
    displayName: "Fill Opacity",
    value: 100,
    options: {
      minValue: {
        type: ValidatorType.Min,
        value: 0,
      },
      maxValue: {
        type: ValidatorType.Max,
        value: 100,
      },
    },
  });

  selectedOutline_2 = new formattingSettings.ToggleSwitch({
    name: "selectedOutline_2",
    displayName: "Show Outline",
    value: true,
  });

  selectedOutlineColor_2 = new formattingSettings.ColorPicker({
    name: "selectedOutlineColor_2",
    displayName: "Outline Color",
    value: { value: "#8c9093" },
  });

  selectedOutlineThickness_2 = new formattingSettings.NumUpDown({
    name: "selectedOutlineThickness_2",
    displayName: "Outline Thickness",
    value: 2,
  });

  selectedOutlineRadius_2 = new formattingSettings.NumUpDown({
    name: "selectedOutlineRadius_2",
    displayName: "Outline Radius",
    value: 2,
  });

  // highlightType_3 = new formattingSettings.ItemDropdown({
  //     name: "highlightType_3",
  //     displayName: "Highlight Type",
  //     // "Header Highlighted" | "Banded Rows"
  //     items:[{"value":'Header Highlighted',"displayName":"Header Highlighted"},{"value":'Banded Rows',"displayName":"Banded Rows"}],
  //     value:{"value":'Banded Rows',"displayName":"Banded Rows"}
  // })

  fillColor_3 = new formattingSettings.ColorPicker({
    name: "fillColor_3",
    displayName: "Fill Color",
    value: { value: "#FFFFFF" },
  });

  fillOpacity_3 = new formattingSettings.NumUpDown({
    name: "fillOpacity_3",
    displayName: "Fill Opacity",
    value: 100,
    options: {
      minValue: {
        type: ValidatorType.Min,
        value: 0,
      },
      maxValue: {
        type: ValidatorType.Max,
        value: 100,
      },
    },
  });

  bandedFill_3 = new formattingSettings.ToggleSwitch({
    name: "bandedFill_3",
    displayName: "Banded Fill",
    value: false,
  });

  bandedFillColor_3 = new formattingSettings.ColorPicker({
    name: "bandedFillColor_3",
    displayName: "Banded Fill Color",
    value: { value: "#FFFFFF" },
  });

  bandedFillOpacity_3 = new formattingSettings.NumUpDown({
    name: "bandedFillOpacity_3",
    displayName: "Banded Fill Opacity",
    value: 100,
    options: {
      minValue: {
        type: ValidatorType.Min,
        value: 0,
      },
      maxValue: {
        type: ValidatorType.Max,
        value: 100,
      },
    },
  });

  outlineColor_3 = new formattingSettings.ColorPicker({
    name: "outlineColor_3",
    displayName: "Outline Color",
    value: { value: "#3f464b" },
  });

  outlineThickness_3 = new formattingSettings.NumUpDown({
    name: "outlineThickness_3",
    displayName: "Outline Thickness",
    value: 2,
  });

  outlineLeft_3 = new formattingSettings.ToggleSwitch({
    name: "outlineLeft_3",
    displayName: "Outline Left",
    value: false,
  });

  outlineRight_3 = new formattingSettings.ToggleSwitch({
    name: "outlineRight_3",
    displayName: "Outline Right",
    value: false,
  });

  outlineTop_3 = new formattingSettings.ToggleSwitch({
    name: "outlineTop_3",
    displayName: "Outline Top",
    value: false,
  });

  outlineBottom_3 = new formattingSettings.ToggleSwitch({
    name: "outlineBottom_3",
    displayName: "Outline Bottom",
    value: true,
  });

  outlineRadiusTopLeft_3 = new formattingSettings.NumUpDown({
    name: "outlineRadiusTopLeft_3",
    displayName: "Outline Radius Top-left",
    value: 0,
  });

  outlineRadiusTopRight_3 = new formattingSettings.NumUpDown({
    name: "outlineRadiusTopRight_3",
    displayName: "Outline Radius Top-right",
    value: 0,
  });

  outlineRadiusBottomLeft_3 = new formattingSettings.NumUpDown({
    name: "outlineRadiusBottomLeft_3",
    displayName: "Outline Radius Bottom-left",
    value: 0,
  });

  outlineRadiusBottomRight_3 = new formattingSettings.NumUpDown({
    name: "outlineRadiusBottomRight_3",
    displayName: "Outline Radius Bottom-right",
    value: 0,
  });

  fontFamily_3 = new formattingSettings.FontPicker({
    name: "fontFamily_3",
    displayName: "Font Family",
    value: "Segoe UI Bold",
  });

  fontSize_3 = new formattingSettings.NumUpDown({
    name: "fontSize_3",
    displayName: "Font Size",
    value: 12,
  });

  fontColor_3 = new formattingSettings.ColorPicker({
    name: "fontColor_3",
    displayName: "Font Color",
    value: { value: "#000000" },
  });

  fontBold_3 = new formattingSettings.ToggleSwitch({
    name: "fontBold_3",
    displayName: "Font Bold",
    value: false,
  });

  fontItalic_3 = new formattingSettings.ToggleSwitch({
    name: "fontItalic_3",
    displayName: "Font Italic",
    value: false,
  });

  fontUnderline_3 = new formattingSettings.ToggleSwitch({
    name: "fontUnderline_3",
    displayName: "Font Underline",
    value: false,
  });

  wordWrap_3 = new formattingSettings.ToggleSwitch({
    name: "wordWrap_3",
    displayName: "Word Wrap",
    value: true,
  });

  position_3 = new formattingSettings.ItemDropdown({
    name: "position_3",
    displayName: "Position",
    items: [
      { value: "Left", displayName: "Left" },
      { value: "Center", displayName: "Center" },
      { value: "Right", displayName: "Right" },
    ],
    value: { value: "Left", displayName: "Left" },
  });

  stepIndentation_3 = new formattingSettings.NumUpDown({
    name: "stepIndentation_3",
    displayName: "Step Indentation",
    value: 0,
  });

  enableSelection_3 = new formattingSettings.ToggleSwitch({
    name: "enableSelection_3",
    value: true,
  });

  selectionType_3 = new formattingSettings.ItemDropdown({
    name: "selectionType_3",
    displayName: "Selection Type",
    items: [
      {
        value: "Highlight and Move to Top",
        displayName: "Highlight and Move to Top",
      },
      { value: "Highlight Only", displayName: "Highlight Only" },
      { value: "Move to Top Only", displayName: "Move to Top Only" },
    ],
    value: {
      value: "Highlight and Move to Top",
      displayName: "Highlight and Move to Top",
    },
  });

  selectedFillColor_3 = new formattingSettings.ColorPicker({
    name: "selectedFillColor_3",
    displayName: "Fill Color",
    value: { value: "#ffffff" },
  });

  selectedFillOpacity_3 = new formattingSettings.NumUpDown({
    name: "selectedFillOpacity_3",
    displayName: "Fill Opacity",
    value: 100,
    options: {
      minValue: {
        type: ValidatorType.Min,
        value: 0,
      },
      maxValue: {
        type: ValidatorType.Max,
        value: 100,
      },
    },
  });

  selectedOutline_3 = new formattingSettings.ToggleSwitch({
    name: "selectedOutline_3",
    displayName: "Show Outline",
    value: true,
  });

  selectedOutlineColor_3 = new formattingSettings.ColorPicker({
    name: "selectedOutlineColor_3",
    displayName: "Outline Color",
    value: { value: "#8c9093" },
  });

  selectedOutlineThickness_3 = new formattingSettings.NumUpDown({
    name: "selectedOutlineThickness_3",
    displayName: "Outline Thickness",
    value: 2,
  });

  selectedOutlineRadius_3 = new formattingSettings.NumUpDown({
    name: "selectedOutlineRadius_3",
    displayName: "Outline Radius",
    value: 2,
  });

  name: string = "rowValueStyle";
  displayName: string = "Values";
  slices: Array<FormattingSettingsSlice> = [
    this.groupsBeforeValue,
    this.rowLevel,
    this.fillColor_1,
    this.fillOpacity_1,
    this.bandedFill_1,
    this.bandedFillColor_1,
    this.bandedFillOpacity_1,
    this.outlineColor_1,
    this.outlineThickness_1,
    this.outlineLeft_1,
    this.outlineRight_1,
    this.outlineTop_1,
    this.outlineBottom_1,
    this.outlineRadiusTopLeft_1,
    this.outlineRadiusTopRight_1,
    this.outlineRadiusBottomLeft_1,
    this.outlineRadiusBottomRight_1,
    this.fontFamily_1,
    this.fontSize_1,
    this.fontColor_1,
    this.fontBold_1,
    this.fontItalic_1,
    this.fontUnderline_1,
    this.wordWrap_1,
    this.position_1,
    this.stepIndentation_1,
    this.enableSelection_1,
    this.selectionType_1,
    this.selectedFillColor_1,
    this.selectedFillOpacity_1,
    this.selectedOutline_1,
    this.selectedOutlineColor_1,
    this.selectedOutlineThickness_1,
    this.selectedOutlineRadius_1,
    // ,this.highlightType_2
    this.fillColor_2,
    this.fillOpacity_2,
    this.bandedFill_2,
    this.bandedFillColor_2,
    this.bandedFillOpacity_2,
    this.outlineColor_2,
    this.outlineThickness_2,
    this.outlineLeft_2,
    this.outlineRight_2,
    this.outlineTop_2,
    this.outlineBottom_2,
    this.outlineRadiusTopLeft_2,
    this.outlineRadiusTopRight_2,
    this.outlineRadiusBottomLeft_2,
    this.outlineRadiusBottomRight_2,
    this.fontFamily_2,
    this.fontSize_2,
    this.fontColor_2,
    this.fontBold_2,
    this.fontItalic_2,
    this.fontUnderline_2,
    this.wordWrap_2,
    this.position_2,
    this.stepIndentation_2,
    this.enableSelection_2,
    this.selectionType_2,
    this.selectedFillColor_2,
    this.selectedFillOpacity_2,
    this.selectedOutline_2,
    this.selectedOutlineColor_2,
    this.selectedOutlineThickness_2,
    this.selectedOutlineRadius_2,
    // ,this.highlightType_3
    this.fillColor_3,
    this.fillOpacity_3,
    this.bandedFill_3,
    this.bandedFillColor_3,
    this.bandedFillOpacity_3,
    this.outlineColor_3,
    this.outlineThickness_3,
    this.outlineLeft_3,
    this.outlineRight_3,
    this.outlineTop_3,
    this.outlineBottom_3,
    this.outlineRadiusTopLeft_3,
    this.outlineRadiusTopRight_3,
    this.outlineRadiusBottomLeft_3,
    this.outlineRadiusBottomRight_3,
    this.fontFamily_3,
    this.fontSize_3,
    this.fontColor_3,
    this.fontBold_3,
    this.fontItalic_3,
    this.fontUnderline_3,
    this.wordWrap_3,
    this.position_3,
    this.stepIndentation_3,
    this.enableSelection_3,
    this.selectionType_3,
    this.selectedFillColor_3,
    this.selectedFillOpacity_3,
    this.selectedOutline_3,
    this.selectedOutlineColor_3,
    this.selectedOutlineThickness_3,
    this.selectedOutlineRadius_3,
  ];
}

export class ValueSettings extends FormattingSettingsCard {
  groups: formattingSettings.Group[];
  headerRowHeight = new formattingSettings.NumUpDown({
    name: "headerRowHeight",
    displayName: "Row Height",
    value: 30,
  });

  headerRowPadding = new formattingSettings.NumUpDown({
    name: "headerRowPadding",
    displayName: "Row Padding",
    value: 2,
  });

  valueIndex = new formattingSettings.ItemDropdown({
    name: "valueIndex",
    displayName: "Value Index",
    items: [
      { value: 1, displayName: "1" },
      { value: 2, displayName: "2" },
      { value: 3, displayName: "3" },
    ],
    value: { value: 1, displayName: "1" },
  });

  fillColor_1 = new formattingSettings.ColorPicker({
    name: "fillColor_1",
    displayName: "Fill Color",
    value: { value: "" },
  });

  fillOpacity_1 = new formattingSettings.NumUpDown({
    name: "fillOpacity_1",
    displayName: "Fill Opacity",
    value: 100,
    options: {
      minValue: {
        type: ValidatorType.Min,
        value: 0,
      },
      maxValue: {
        type: ValidatorType.Max,
        value: 100,
      },
    },
  });

  outlineColor_1 = new formattingSettings.ColorPicker({
    name: "outlineColor_1",
    displayName: "Outline Color",
    value: { value: "#3f464b" },
  });

  outlineThickness_1 = new formattingSettings.NumUpDown({
    name: "outlineThickness_1",
    displayName: "Outline Thickness",
    value: 2,
  });

  outlineLeft_1 = new formattingSettings.ToggleSwitch({
    name: "outlineLeft_1",
    displayName: "Outline Left",
    value: false,
  });

  outlineRight_1 = new formattingSettings.ToggleSwitch({
    name: "outlineRight_1",
    displayName: "Outline Right",
    value: false,
  });

  outlineTop_1 = new formattingSettings.ToggleSwitch({
    name: "outlineTop_1",
    displayName: "Outline Top",
    value: false,
  });

  outlineBottom_1 = new formattingSettings.ToggleSwitch({
    name: "outlineBottom_1",
    displayName: "Outline Bottom",
    value: true,
  });

  outlineRadiusTopLeft_1 = new formattingSettings.NumUpDown({
    name: "outlineRadiusTopLeft_1",
    displayName: "Outline Radius Top-left",
    value: 0,
  });

  outlineRadiusTopRight_1 = new formattingSettings.NumUpDown({
    name: "outlineRadiusTopRight_1",
    displayName: "Outline Radius Top-right",
    value: 0,
  });

  outlineRadiusBottomLeft_1 = new formattingSettings.NumUpDown({
    name: "outlineRadiusBottomLeft_1",
    displayName: "Outline Radius Bottom-left",
    value: 0,
  });

  outlineRadiusBottomRight_1 = new formattingSettings.NumUpDown({
    name: "outlineRadiusBottomRight_1",
    displayName: "Outline Radius Bottom-right",
    value: 0,
  });

  fontFamily_1 = new formattingSettings.FontPicker({
    name: "fontFamily_1",
    displayName: "Font Family",
    value: "Segoe UI Bold",
  });

  fontSize_1 = new formattingSettings.NumUpDown({
    name: "fontSize_1",
    displayName: "Font Size",
    value: 12,
  });

  fontColor_1 = new formattingSettings.ColorPicker({
    name: "fontColor_1",
    displayName: "Font Color",
    value: { value: "#000000" },
  });

  fontBold_1 = new formattingSettings.ToggleSwitch({
    name: "fontBold_1",
    displayName: "Font Bold",
    value: false,
  });

  fontItalic_1 = new formattingSettings.ToggleSwitch({
    name: "fontItalic_1",
    displayName: "Font Italic",
    value: false,
  });

  fontUnderline_1 = new formattingSettings.ToggleSwitch({
    name: "fontUnderline_1",
    displayName: "Font Underline",
    value: false,
  });

  wordWrap_1 = new formattingSettings.ToggleSwitch({
    name: "wordWrap_1",
    displayName: "Word Wrap",
    value: true,
  });

  position_1 = new formattingSettings.ItemDropdown({
    name: "position_1",
    displayName: "Position",
    items: [
      { value: "Left", displayName: "Left" },
      { value: "Center", displayName: "Center" },
      { value: "Right", displayName: "Right" },
    ],
    value: { value: "Left", displayName: "Left" },
  });

  stepIndentation_1 = new formattingSettings.NumUpDown({
    name: "stepIndentation_1",
    displayName: "Step Indentation",
    value: 0,
  });

  showSortIcon_1 = new formattingSettings.ToggleSwitch({
    name: "showSortIcon_1",
    value: true,
  });

  iconColor_1 = new formattingSettings.ColorPicker({
    name: "iconColor_1",
    displayName: "Icon Color",
    value: { value: "#000000" },
  });

  iconPosition_1 = new formattingSettings.ItemDropdown({
    name: "iconPosition_1",
    displayName: "Icon Position",
    items: [
      { value: "Next to text", displayName: "Next to text" },
      { value: "Right justified", displayName: "Right justified" },
    ],
    value: { value: "Right justified", displayName: "Right justified" },
  });

  fillColor_2 = new formattingSettings.ColorPicker({
    name: "fillColor_2",
    displayName: "Fill Color",
    value: { value: "#FFFFFF" },
  });

  fillOpacity_2 = new formattingSettings.NumUpDown({
    name: "fillOpacity_2",
    displayName: "Fill Opacity",
    value: 100,
    options: {
      minValue: {
        type: ValidatorType.Min,
        value: 0,
      },
      maxValue: {
        type: ValidatorType.Max,
        value: 100,
      },
    },
  });

  outlineColor_2 = new formattingSettings.ColorPicker({
    name: "outlineColor_2",
    displayName: "Outline Color",
    value: { value: "#3f464b" },
  });

  outlineThickness_2 = new formattingSettings.NumUpDown({
    name: "outlineThickness_2",
    displayName: "Outline Thickness",
    value: 2,
  });

  outlineLeft_2 = new formattingSettings.ToggleSwitch({
    name: "outlineLeft_2",
    displayName: "Outline Left",
    value: false,
  });

  outlineRight_2 = new formattingSettings.ToggleSwitch({
    name: "outlineRight_2",
    displayName: "Outline Right",
    value: false,
  });

  outlineTop_2 = new formattingSettings.ToggleSwitch({
    name: "outlineTop_2",
    displayName: "Outline Top",
    value: false,
  });

  outlineBottom_2 = new formattingSettings.ToggleSwitch({
    name: "outlineBottom_2",
    displayName: "Outline Bottom",
    value: true,
  });

  outlineRadiusTopLeft_2 = new formattingSettings.NumUpDown({
    name: "outlineRadiusTopLeft_2",
    displayName: "Outline Radius Top-left",
    value: 0,
  });

  outlineRadiusTopRight_2 = new formattingSettings.NumUpDown({
    name: "outlineRadiusTopRight_2",
    displayName: "Outline Radius Top-right",
    value: 0,
  });

  outlineRadiusBottomLeft_2 = new formattingSettings.NumUpDown({
    name: "outlineRadiusBottomLeft_2",
    displayName: "Outline Radius Bottom-left",
    value: 0,
  });

  outlineRadiusBottomRight_2 = new formattingSettings.NumUpDown({
    name: "outlineRadiusBottomRight_2",
    displayName: "Outline Radius Bottom-right",
    value: 0,
  });

  fontFamily_2 = new formattingSettings.FontPicker({
    name: "fontFamily_2",
    displayName: "Font Family",
    value: "Segoe UI Bold",
  });

  fontSize_2 = new formattingSettings.NumUpDown({
    name: "fontSize_2",
    displayName: "Font Size",
    value: 12,
  });

  fontColor_2 = new formattingSettings.ColorPicker({
    name: "fontColor_2",
    displayName: "Font Color",
    value: { value: "#000000" },
  });

  fontBold_2 = new formattingSettings.ToggleSwitch({
    name: "fontBold_2",
    displayName: "Font Bold",
    value: false,
  });

  fontItalic_2 = new formattingSettings.ToggleSwitch({
    name: "fontItalic_2",
    displayName: "Font Italic",
    value: false,
  });

  fontUnderline_2 = new formattingSettings.ToggleSwitch({
    name: "fontUnderline_2",
    displayName: "Font Underline",
    value: false,
  });

  wordWrap_2 = new formattingSettings.ToggleSwitch({
    name: "wordWrap_2",
    displayName: "Word Wrap",
    value: true,
  });

  position_2 = new formattingSettings.ItemDropdown({
    name: "position_2",
    displayName: "Position",
    items: [
      { value: "Left", displayName: "Left" },
      { value: "Center", displayName: "Center" },
      { value: "Right", displayName: "Right" },
    ],
    value: { value: "Left", displayName: "Left" },
  });

  stepIndentation_2 = new formattingSettings.NumUpDown({
    name: "stepIndentation_2",
    displayName: "Step Indentation",
    value: 0,
  });

  showSortIcon_2 = new formattingSettings.ToggleSwitch({
    name: "showSortIcon_2",
    value: true,
  });

  iconColor_2 = new formattingSettings.ColorPicker({
    name: "iconColor_2",
    displayName: "Icon Color",
    value: { value: "#000000" },
  });

  iconPosition_2 = new formattingSettings.ItemDropdown({
    name: "iconPosition_2",
    displayName: "Icon Position",
    items: [
      { value: "Next to text", displayName: "Next to text" },
      { value: "Right justified", displayName: "Right justified" },
    ],
    value: { value: "Right justified", displayName: "Right justified" },
  });

  fillColor_3 = new formattingSettings.ColorPicker({
    name: "fillColor_3",
    displayName: "Fill Color",
    value: { value: "#FFFFFF" },
  });

  fillOpacity_3 = new formattingSettings.NumUpDown({
    name: "fillOpacity_3",
    displayName: "Fill Opacity",
    value: 100,
    options: {
      minValue: {
        type: ValidatorType.Min,
        value: 0,
      },
      maxValue: {
        type: ValidatorType.Max,
        value: 100,
      },
    },
  });

  outlineColor_3 = new formattingSettings.ColorPicker({
    name: "outlineColor_3",
    displayName: "Outline Color",
    value: { value: "#3f464b" },
  });

  outlineThickness_3 = new formattingSettings.NumUpDown({
    name: "outlineThickness_3",
    displayName: "Outline Thickness",
    value: 2,
  });

  outlineLeft_3 = new formattingSettings.ToggleSwitch({
    name: "outlineLeft_3",
    displayName: "Outline Left",
    value: false,
  });

  outlineRight_3 = new formattingSettings.ToggleSwitch({
    name: "outlineRight_3",
    displayName: "Outline Right",
    value: false,
  });

  outlineTop_3 = new formattingSettings.ToggleSwitch({
    name: "outlineTop_3",
    displayName: "Outline Top",
    value: false,
  });

  outlineBottom_3 = new formattingSettings.ToggleSwitch({
    name: "outlineBottom_3",
    displayName: "Outline Bottom",
    value: true,
  });

  outlineRadiusTopLeft_3 = new formattingSettings.NumUpDown({
    name: "outlineRadiusTopLeft_3",
    displayName: "Outline Radius Top-left",
    value: 0,
  });

  outlineRadiusTopRight_3 = new formattingSettings.NumUpDown({
    name: "outlineRadiusTopRight_3",
    displayName: "Outline Radius Top-right",
    value: 0,
  });

  outlineRadiusBottomLeft_3 = new formattingSettings.NumUpDown({
    name: "outlineRadiusBottomLeft_3",
    displayName: "Outline Radius Bottom-left",
    value: 0,
  });

  outlineRadiusBottomRight_3 = new formattingSettings.NumUpDown({
    name: "outlineRadiusBottomRight_3",
    displayName: "Outline Radius Bottom-right",
    value: 0,
  });

  fontFamily_3 = new formattingSettings.FontPicker({
    name: "fontFamily_3",
    displayName: "Font Family",
    value: "Segoe UI Bold",
  });

  fontSize_3 = new formattingSettings.NumUpDown({
    name: "fontSize_3",
    displayName: "Font Size",
    value: 12,
  });

  fontColor_3 = new formattingSettings.ColorPicker({
    name: "fontColor_3",
    displayName: "Font Color",
    value: { value: "#000000" },
  });

  fontBold_3 = new formattingSettings.ToggleSwitch({
    name: "fontBold_3",
    displayName: "Font Bold",
    value: false,
  });

  fontItalic_3 = new formattingSettings.ToggleSwitch({
    name: "fontItalic_3",
    displayName: "Font Italic",
    value: false,
  });

  fontUnderline_3 = new formattingSettings.ToggleSwitch({
    name: "fontUnderline_3",
    displayName: "Font Underline",
    value: false,
  });

  wordWrap_3 = new formattingSettings.ToggleSwitch({
    name: "wordWrap_3",
    displayName: "Word Wrap",
    value: true,
  });

  position_3 = new formattingSettings.ItemDropdown({
    name: "position_3",
    displayName: "Position",
    items: [
      { value: "Left", displayName: "Left" },
      { value: "Center", displayName: "Center" },
      { value: "Right", displayName: "Right" },
    ],
    value: { value: "Left", displayName: "Left" },
  });

  stepIndentation_3 = new formattingSettings.NumUpDown({
    name: "stepIndentation_3",
    displayName: "Step Indentation",
    value: 0,
  });

  showSortIcon_3 = new formattingSettings.ToggleSwitch({
    name: "showSortIcon_3",
    value: true,
  });

  iconColor_3 = new formattingSettings.ColorPicker({
    name: "iconColor_3",
    displayName: "Icon Color",
    value: { value: "#000000" },
  });

  iconPosition_3 = new formattingSettings.ItemDropdown({
    name: "iconPosition_3",
    displayName: "Icon Position",
    items: [
      { value: "Next to text", displayName: "Next to text" },
      { value: "Right justified", displayName: "Right justified" },
    ],
    value: { value: "Right justified", displayName: "Right justified" },
  });

  name: string = "valueStyle";
  displayName: string = "Column Header (Column Headers)";
  slices: Array<FormattingSettingsSlice> = [
    this.headerRowHeight,
    this.headerRowPadding,
    this.valueIndex,
    this.fillColor_1,
    this.fillOpacity_1,
    this.outlineColor_1,
    this.outlineThickness_1,
    this.outlineLeft_1,
    this.outlineRight_1,
    this.outlineTop_1,
    this.outlineBottom_1,
    this.outlineRadiusTopLeft_1,
    this.outlineRadiusTopRight_1,
    this.outlineRadiusBottomLeft_1,
    this.outlineRadiusBottomRight_1,
    this.fontFamily_1,
    this.fontSize_1,
    this.fontColor_1,
    this.fontBold_1,
    this.fontItalic_1,
    this.fontUnderline_1,
    this.wordWrap_1,
    this.position_1,
    this.stepIndentation_1,
    this.showSortIcon_1,
    this.iconColor_1,
    this.iconPosition_1,
    this.fillColor_2,
    this.fillOpacity_2,
    this.outlineColor_2,
    this.outlineThickness_2,
    this.outlineLeft_2,
    this.outlineRight_2,
    this.outlineTop_2,
    this.outlineBottom_2,
    this.outlineRadiusTopLeft_2,
    this.outlineRadiusTopRight_2,
    this.outlineRadiusBottomLeft_2,
    this.outlineRadiusBottomRight_2,
    this.fontFamily_2,
    this.fontSize_2,
    this.fontColor_2,
    this.fontBold_2,
    this.fontItalic_2,
    this.fontUnderline_2,
    this.wordWrap_2,
    this.position_2,
    this.stepIndentation_2,
    this.showSortIcon_2,
    this.iconColor_2,
    this.iconPosition_2,
    this.fillColor_3,
    this.fillOpacity_3,
    this.outlineColor_3,
    this.outlineThickness_3,
    this.outlineLeft_3,
    this.outlineRight_3,
    this.outlineTop_3,
    this.outlineBottom_3,
    this.outlineRadiusTopLeft_3,
    this.outlineRadiusTopRight_3,
    this.outlineRadiusBottomLeft_3,
    this.outlineRadiusBottomRight_3,
    this.fontFamily_3,
    this.fontSize_3,
    this.fontColor_3,
    this.fontBold_3,
    this.fontItalic_3,
    this.fontUnderline_3,
    this.wordWrap_3,
    this.position_3,
    this.stepIndentation_3,
    this.showSortIcon_3,
    this.iconColor_3,
    this.iconPosition_3,
  ];
}

export class Units extends FormattingSettingsCard {
  groups: formattingSettings.Group[];
  valueIndex = new formattingSettings.ItemDropdown({
    name: "valueIndex",
    displayName: "Value Index",
    items: [
      { value: 1, displayName: "1" },
      { value: 2, displayName: "2" },
      { value: 3, displayName: "3" },
    ],
    value: { value: 1, displayName: "1" },
  });

  showUnits_1 = new formattingSettings.ToggleSwitch({
    name: "showUnits_1",
    value: true,
  });

  unitsSpacer_1 = new formattingSettings.ToggleSwitch({
    name: "unitsSpacer_1",
    displayName: "Units Spacer",
    value: true,
  });

  unitsFontFamily_1 = new formattingSettings.FontPicker({
    name: "unitsFontFamily_1",
    displayName: "Font Family",
    value: "Segoe UI Bold",
  });

  unitsFontSize_1 = new formattingSettings.NumUpDown({
    name: "unitsFontSize_1",
    displayName: "Font Size",
    value: 12,
  });

  unitsFontColor_1 = new formattingSettings.ColorPicker({
    name: "unitsFontColor_1",
    displayName: "Font Color",
    value: { value: "#000000" },
  });

  unitsFontBold_1 = new formattingSettings.ToggleSwitch({
    name: "unitsFontBold_1",
    displayName: "Font Bold",
    value: false,
  });

  unitsFontItalic_1 = new formattingSettings.ToggleSwitch({
    name: "unitsFontItalic_1",
    displayName: "Font Italic",
    value: false,
  });

  unitsFontUnderline_1 = new formattingSettings.ToggleSwitch({
    name: "unitsFontUnderline_1",
    displayName: "Font Underline",
    value: false,
  });

  showUnits_2 = new formattingSettings.ToggleSwitch({
    name: "showUnits_2",
    value: true,
  });

  unitsSpacer_2 = new formattingSettings.ToggleSwitch({
    name: "unitsSpacer_2",
    displayName: "Units Spacer",
    value: true,
  });

  unitsFontFamily_2 = new formattingSettings.FontPicker({
    name: "unitsFontFamily_2",
    displayName: "Font Family",
    value: "Segoe UI Bold",
  });

  unitsFontSize_2 = new formattingSettings.NumUpDown({
    name: "unitsFontSize_2",
    displayName: "Font Size",
    value: 12,
  });

  unitsFontColor_2 = new formattingSettings.ColorPicker({
    name: "unitsFontColor_2",
    displayName: "Font Color",
    value: { value: "#000000" },
  });

  unitsFontBold_2 = new formattingSettings.ToggleSwitch({
    name: "unitsFontBold_2",
    displayName: "Font Bold",
    value: false,
  });

  unitsFontItalic_2 = new formattingSettings.ToggleSwitch({
    name: "unitsFontItalic_2",
    displayName: "Font Italic",
    value: false,
  });

  unitsFontUnderline_2 = new formattingSettings.ToggleSwitch({
    name: "unitsFontUnderline_2",
    displayName: "Font Underline",
    value: false,
  });

  showUnits_3 = new formattingSettings.ToggleSwitch({
    name: "showUnits_3",
    value: true,
  });

  unitsSpacer_3 = new formattingSettings.ToggleSwitch({
    name: "unitsSpacer_3",
    displayName: "Units Spacer",
    value: true,
  });

  unitsFontFamily_3 = new formattingSettings.FontPicker({
    name: "unitsFontFamily_3",
    displayName: "Font Family",
    value: "Segoe UI Bold",
  });

  unitsFontSize_3 = new formattingSettings.NumUpDown({
    name: "unitsFontSize_3",
    displayName: "Font Size",
    value: 12,
  });

  unitsFontColor_3 = new formattingSettings.ColorPicker({
    name: "unitsFontColor_3",
    displayName: "Font Color",
    value: { value: "#000000" },
  });

  unitsFontBold_3 = new formattingSettings.ToggleSwitch({
    name: "unitsFontBold_3",
    displayName: "Font Bold",
    value: false,
  });

  unitsFontItalic_3 = new formattingSettings.ToggleSwitch({
    name: "unitsFontItalic_3",
    displayName: "Font Italic",
    value: false,
  });

  unitsFontUnderline_3 = new formattingSettings.ToggleSwitch({
    name: "unitsFontUnderline_3",
    displayName: "Font Underline",
    value: false,
  });

  name: string = "units";
  displayName: string = "Units";
  slices: Array<FormattingSettingsSlice> = [
    this.valueIndex,
    this.showUnits_1,
    this.unitsSpacer_1,
    this.unitsFontFamily_1,
    this.unitsFontSize_1,
    this.unitsFontColor_1,
    this.unitsFontBold_1,
    this.unitsFontItalic_1,
    this.unitsFontUnderline_1,
    this.showUnits_2,
    this.unitsSpacer_2,
    this.unitsFontFamily_2,
    this.unitsFontSize_2,
    this.unitsFontColor_2,
    this.unitsFontBold_2,
    this.unitsFontItalic_2,
    this.unitsFontUnderline_2,
    this.showUnits_3,
    this.unitsSpacer_3,
    this.unitsFontFamily_3,
    this.unitsFontSize_3,
    this.unitsFontColor_3,
    this.unitsFontBold_3,
    this.unitsFontItalic_3,
    this.unitsFontUnderline_3,
  ];
}

export class RowDetailsSettings extends FormattingSettingsCard {
  groups: formattingSettings.Group[];
  show = new formattingSettings.ToggleSwitch({
    name: "show",
    displayName: "Row Details",
    description: "Show the last row as row details",
    value: false,
  });

  fontFamily = new formattingSettings.FontPicker({
    name: "fontFamily",
    displayName: "Font Family",
    value: "Segoe UI Bold",
  });

  fontSize = new formattingSettings.NumUpDown({
    name: "fontSize",
    displayName: "Font Size",
    value: 12,
  });

  fontColor = new formattingSettings.ColorPicker({
    name: "fontColor",
    displayName: "Font Color",
    value: { value: "#000000" },
  });

  fontBold = new formattingSettings.ToggleSwitch({
    name: "fontBold",
    displayName: "Font Bold",
    value: false,
  });

  fontItalic = new formattingSettings.ToggleSwitch({
    name: "fontItalic",
    displayName: "Font Italic",
    value: false,
  });

  fontUnderline = new formattingSettings.ToggleSwitch({
    name: "fontUnderline",
    displayName: "Font Underline",
    value: false,
  });

  wordWrap = new formattingSettings.ToggleSwitch({
    name: "wordWrap",
    displayName: "Word Wrap",
    value: true,
  });

  position = new formattingSettings.ItemDropdown({
    name: "position",
    displayName: "Position",
    items: [
      { value: "Left", displayName: "Left" },
      { value: "Center", displayName: "Center" },
      { value: "Right", displayName: "Right" },
    ],
    value: { value: "Left", displayName: "Left" },
  });

  stepIndentation = new formattingSettings.NumUpDown({
    name: "stepIndentation",
    displayName: "Step Indentation",
    value: 0,
  });

  name: string = "rowDetailsStyle";
  displayName: string = "Row Continue";
  slices: Array<FormattingSettingsSlice> = [
    this.show,
    this.fontFamily,
    this.fontSize,
    this.fontColor,
    this.fontBold,
    this.fontItalic,
    this.fontUnderline,
    this.wordWrap,
    this.position,
    this.stepIndentation,
  ];
}

export class ExpandCollapseAllSettings extends FormattingSettingsCard {
  groups: formattingSettings.Group[];
  showExpand = new formattingSettings.ToggleSwitch({
    name: "showExpand",
    // displayName:'Expand',
    value: true,
  });

  expandCollapseIcon = new formattingSettings.ItemDropdown({
    name: "expandCollapseIcon",
    displayName: "Expand / collapse Icon",
    items: [
      { value: "+/-", displayName: "+/-" },
      { value: "chevron", displayName: "Chevron" },
    ],
    value: { value: "chevron", displayName: "Chevron" },
  });

  expandCollapseIconColor = new formattingSettings.ColorPicker({
    name: "expandCollapseIconColor",
    displayName: "Expand / collapse Icon Color",
    value: { value: "#ffffff" },
  });

  expandCollapseFillColor = new formattingSettings.ColorPicker({
    name: "expandCollapseFillColor",
    displayName: "Expand / collapse Fill Color",
    value: { value: "#000000" },
  });

  expandCollapseOutlineColor = new formattingSettings.ColorPicker({
    name: "expandCollapseOutlineColor",
    displayName: "Expand / collapse Outline Color",
    value: { value: "#000000" },
  });

  expandCollapseOutlineThickness = new formattingSettings.NumUpDown({
    name: "expandCollapseOutlineThickness",
    displayName: "Expand / collapse Outline Thickness",
    value: 0,
  });

  expandCollapseOutlineRadius = new formattingSettings.NumUpDown({
    name: "expandCollapseOutlineRadius",
    displayName: "Expand / collapse Outline Radius",
    value: 2,
  });

  name: string = "expandCollapseAll";
  displayName: string = "Expand / Collapse All";
  slices: Array<FormattingSettingsSlice> = [
    this.showExpand,
    this.expandCollapseIcon,
    this.expandCollapseIconColor,
    this.expandCollapseFillColor,
    this.expandCollapseOutlineColor,
    this.expandCollapseOutlineThickness,
    this.expandCollapseOutlineRadius,
  ];
}

/**
 * BarChart settings model class
 *
 */
export class ChartSettingsModel extends FormattingSettingsModel {
  // Create formatting settings model formatting cards
  columnStyleSettings = new ColumnStyleSettings();
  rowLabelSettings = new RowLabelSettings();
  rowValueSettings = new RowValueSettings();
  valueSettings = new ValueSettings();
  matrixSettings = new matrixStyleSettings();
  rowDetailsSettings = new RowDetailsSettings();
  expandCollapseAllSettings = new ExpandCollapseAllSettings();
  unitsSettings = new Units();
  cards = [
    this.rowLabelSettings,
    this.expandCollapseAllSettings,
    this.valueSettings,
    this.rowDetailsSettings,
    // this.columnStyleSettings,
    this.rowValueSettings,
    this.unitsSettings,
  ];

  updateLevels = (columnLevels, rowLevels, valueLevels) => {
    this.columnStyleSettings.columnLevel.items = this.columnStyleSettings.columnLevel.items.filter((d) => d.value <= columnLevels.length);
    this.rowLabelSettings.rowLevel.items = this.rowLabelSettings.rowLevel.items.filter((d) => d.value <= rowLevels.length);
    this.rowValueSettings.rowLevel.items = this.rowValueSettings.rowLevel.items.filter((d) => d.value <= rowLevels.length);
    this.valueSettings.valueIndex.items = this.valueSettings.valueIndex.items.filter((d) => d.value <= valueLevels.length);
  };
}
