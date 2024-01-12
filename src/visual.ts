import { genStyledDiv } from "./components/StyledDiv";
import { genColumnFirstHeader, genSource, genValueFirstHeader } from "./components/js/formatData";
("use strict");

import { parseSettings } from "./components/js/styleUtils";
import { ChartSettingsModel } from "./settings";

import powerbi from "powerbi-visuals-api";
import * as React from "react";
import * as ReactDOM from "react-dom";
import ReactVisual, { initialState } from "./reactVisual";
import "./../style/visual.less";
import { FormattingSettingsService } from "powerbi-visuals-utils-formattingmodel";

import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import { dataRoleHelper } from "powerbi-visuals-utils-dataviewutils";

export class Visual implements IVisual {
  private target: HTMLElement;
  private reactRoot: React.ComponentElement<any, any>;
  private formattingSettings: ChartSettingsModel;
  private formattingSettingsService: FormattingSettingsService;

  constructor(options: VisualConstructorOptions) {
    const localizationManager = options.host.createLocalizationManager();
    this.formattingSettingsService = new FormattingSettingsService(localizationManager);
    this.reactRoot = React.createElement(ReactVisual, initialState);
    this.target = options.element;
    ReactDOM.render(this.reactRoot, this.target);

    console.log("Visual constructor", options);
  }

  public update(options: VisualUpdateOptions) {
    this.formattingSettings = this.formattingSettingsService.populateFormattingSettingsModel(ChartSettingsModel, options.dataViews[0]);
    if (dataRoleHelper.hasRoleInDataView(options.dataViews[0], "category") && dataRoleHelper.hasRoleInDataView(options.dataViews[0], "measure")) {
      const rowLabelSettings = parseSettings(this.formattingSettings.rowLabelSettings);
      const columnSettings = parseSettings(this.formattingSettings.columnStyleSettings);
      const rowValueSettings = parseSettings(this.formattingSettings.rowValueSettings);
      const valueSettings = parseSettings(this.formattingSettings.valueSettings);

      const unitSettings = parseSettings(this.formattingSettings.unitsSettings);
      const expandCollapseAllSettings = this.formattingSettings.expandCollapseAllSettings;
      const rowDetailsSettings = this.formattingSettings.rowDetailsSettings;

      const StyledDiv = genStyledDiv(
        this.formattingSettings.valueSettings.headerRowHeight.value,
        this.formattingSettings.valueSettings.headerRowPadding.value,
        expandCollapseAllSettings,
        columnSettings,
        valueSettings,
        rowLabelSettings,
        rowValueSettings,
        rowDetailsSettings,
        unitSettings
      );

      const valueIndex = options.dataViews[0].matrix.valueSources.map((d, i) => ({
        index: i,
        isMeasure: d.roles["measure"] && true,
        isUnit: d.roles["units"] && true,
        isRowDetails: d.roles["rowDetails"] && true,
      }));

      const measureIndexes = valueIndex.filter((d) => d.isMeasure).map((d) => d.index);

      const unitIndexes = dataRoleHelper.hasRoleInDataView(options.dataViews[0], "units") ? valueIndex.filter((d) => d.isUnit).map((d) => d.index) : null;

      const rowDetailIndex = valueIndex.filter((d) => d.isRowDetails)[0]?.index || null;

      const topLevelValues = this.getTopLevelValues(options);

      const units = measureIndexes.map((d, i) =>
        unitIndexes
          ? d <= unitIndexes.length - 1
            ? {
                index: i,
                unit: topLevelValues?.filter((v: any) => v.valueSourceIndex == unitIndexes[i] && v.value)[0]?.value,
              }
            : { index: 1, unit: "" }
          : { index: 1, unit: "" }
      );

      console.log("aqui", units);

      if (options.dataViews && options.dataViews[0]) {
        const columns = this.formatData(options, measureIndexes, units);
        const dataSource = this.dataSource(options, measureIndexes, rowDetailIndex);
        const numberOfColumns = Object.values(options.dataViews[0].matrix.rows.root.children.filter((d) => d.isSubtotal)[0]?.values).filter(
          (d) => measureIndexes.indexOf(d.valueSourceIndex || 0) > -1
        ).length;

        console.log(columns);
        ReactVisual.update({
          tableKey: `${Math.round(Math.random() * 1000)}`,
          columns,
          dataSource: dataSource.subData,
          defaultExpandRowKeys: dataSource.defaultExpandRowKeys,
          rowKeys: dataSource.rowKeys,
          numOfLevels: options.dataViews[0].matrix.columns.levels.length,
          headerRowHeight: this.formattingSettings.valueSettings.headerRowHeight.value + 2 * this.formattingSettings.valueSettings.headerRowPadding.value,
          rowValueSettings: rowValueSettings,
          numberOfColumns: numberOfColumns,
          visualHeight: options.viewport.height,
          StyledDiv: StyledDiv,
          showRowDetail: this.formattingSettings.rowDetailsSettings.show.value,
        });
      } else {
        this.clear();
      }
    } else {
      ReactVisual.update(initialState);
    }
  }

  private clear() {
    ReactVisual.update(initialState);
  }

  private formatData(options: VisualUpdateOptions, measureIndexes: any, units: any) {
    const valueSettings = parseSettings(this.formattingSettings.valueSettings);

    let columns;
    if (!this.formattingSettings.rowValueSettings.groupsBeforeValue.value) {
      columns = genValueFirstHeader(
        options.dataViews[0].matrix.columns.root.children,
        options.dataViews[0].matrix.columns.levels.length - 1,
        options.dataViews[0].matrix.valueSources,
        options.dataViews[0].matrix.valueSources.map((d) => d.type),
        valueSettings,
        measureIndexes,
        units
      );
    } else {
      columns = genColumnFirstHeader(
        options.dataViews[0].matrix.columns.root.children,
        options.dataViews[0].matrix.columns.levels.length - 1,
        options.dataViews[0].matrix.valueSources,
        options.dataViews[0].matrix.valueSources.map((d) => d.type),
        valueSettings,
        measureIndexes,
        units
      );
    }
    return columns;
  }

  private dataSource(options: VisualUpdateOptions, measureIndexes: any, rowDetailIndex: any) {
    const rowLabelSettings = parseSettings(this.formattingSettings.rowLabelSettings);
    const dataSource = genSource(
      options.dataViews[0].matrix.rows,
      options.dataViews[0].matrix.valueSources,
      rowLabelSettings,
      this.formattingSettings.rowDetailsSettings,
      measureIndexes,
      rowDetailIndex,
      options.dataViews[0].matrix.rows.levels.length - 1
    );
    return dataSource;
  }

  private getTopLevelValues(options): any {
    if (
      options.dataViews &&
      options.dataViews[0] &&
      options.dataViews[0].matrix &&
      options.dataViews[0].matrix.rows &&
      options.dataViews[0].matrix.rows.root &&
      options.dataViews[0].matrix.rows.root.children
    ) {
      console.log(options.dataViews[0].matrix.rows.root.children);
      const subtotalChild = options.dataViews[0].matrix.rows.root.children.find((d) => d.isSubtotal);

      if (subtotalChild) {
        if (subtotalChild.values) {
          const topLevelValues = Object.values(subtotalChild.values);
          console.log(topLevelValues);

          return topLevelValues;
        } else {
          console.error("A propriedade 'values' não está presente no objeto filtrado.");
        }
      } else {
        console.error("Nenhum elemento com 'isSubtotal' definido como true foi encontrado.");
      }
    } else {
      console.error("A estrutura do objeto não é como esperado.");
    }

    return [];
  }
}
