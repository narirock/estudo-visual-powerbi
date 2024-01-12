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

export class Visual implements IVisual {
  private target: HTMLElement;
  private reactRoot: React.ComponentElement<any, any>;
  private formattingSettings: ChartSettingsModel;
  private formattingSettingsService: FormattingSettingsService;

  constructor(options: VisualConstructorOptions) {
    const localizationManager = options.host.createLocalizationManager();
    this.formattingSettingsService = new FormattingSettingsService(localizationManager);
    this.reactRoot = React.createElement(ReactVisual, { text: "Bla" });
    this.target = options.element;
    ReactDOM.render(this.reactRoot, this.target);

    console.log("Visual constructor", options);
  }

  public update(options: VisualUpdateOptions) {
    this.formattingSettings = this.formattingSettingsService.populateFormattingSettingsModel(ChartSettingsModel, options.dataViews[0]);

    if (options.dataViews && options.dataViews[0]) {
      const columns = this.formatData(options);
      console.log("columns", columns);
      const dataSource = this.dataSource(options);
      console.log("datasource", dataSource);
      const data = options.dataViews[0];
      ReactVisual.update({
        text: data.matrix.columns.root.children[0].value.toString(),
      });
    } else {
      this.clear();
    }

    ReactDOM.render(this.reactRoot, this.target);
  }

  private clear() {
    ReactVisual.update(initialState);
  }

  private formatData(options: VisualUpdateOptions) {
    const valueSettings = parseSettings(this.formattingSettings.valueSettings);

    const valueIndex = options.dataViews[0].matrix.valueSources.map((d, i) => ({
      index: i,
      isMeasure: d.roles["measure"] && true,
      isUnit: d.roles["units"] && true,
      isRowDetails: d.roles["rowDetails"] && true,
    }));

    const measureIndexes = valueIndex.filter((d) => d.isMeasure).map((d) => d.index);

    const units = valueIndex.filter((d) => d.isUnit).map((d) => d.index);

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

  private dataSource(options: VisualUpdateOptions) {
    const rowLabelSettings = parseSettings(this.formattingSettings.rowLabelSettings);
    const valueIndex = options.dataViews[0].matrix.valueSources.map((d, i) => ({
      index: i,
      isMeasure: d.roles["measure"] && true,
      isUnit: d.roles["units"] && true,
      isRowDetails: d.roles["rowDetails"] && true,
    }));
    const measureIndexes = valueIndex.filter((d) => d.isMeasure).map((d) => d.index);
    const rowDetailIndex = valueIndex.filter((d) => d.isRowDetails)[0]?.index || null;

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
}
