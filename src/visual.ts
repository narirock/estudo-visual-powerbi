"use strict";

import powerbi from "powerbi-visuals-api";
import { formatLocale } from "d3";

import "./../style/visual.less";

import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;

import { select, Selection, style } from "d3";

const ptBR = formatLocale({
  decimal: ",",
  thousands: ".",
  grouping: [3],
  currency: ["R$ ", ""],
});

const f = ptBR.format("($,.0f");



export class Visual implements IVisual {
  private body: Selection<HTMLBodyElement, any, any, any>;
  private table: any;

  constructor(options: VisualConstructorOptions) {
    this.body = select(options.element).append("body");
    console.log("created");
  }


  // eslint-disable-next-line max-lines-per-function
  public update(options: VisualUpdateOptions) {
    console.log(options);
    this.body.html("");

    this.table = this.body.append("table")
      .style('border-collapse', 'collapse')
      .classed('table', true)

    this.table.append("thead")
      .append("tr")
      .selectAll("th")
      .data([{ value: options.dataViews[0].matrix.rows.levels[0].sources[0].displayName }, ...options.dataViews[0].matrix.columns.root.children])
      .enter().append("th")
      .text(function (d: any) {
        return d.value;
      })
      .style('box-shadow', 'inset 0 -6px 0 -5px #FFAC00')
      .style("padding", "10px")
      .style("font-size", "13px");

    this.table.append('tbody')
      .style('overflow', 'auto')

      ;
    this.renderTableBody(options.dataViews[0].matrix.rows.root.children, options);
  }


  private renderTableBody(rows: any, options: any) {
    let tbody = this.table.select('tbody');

    if (tbody.empty()) {
      tbody = this.table.append('tbody').style('overflow', 'auto');
    }

    this.renderRows(rows, options, tbody);
  }

  private renderRows(rows: any, options: any, tbody: Selection<HTMLTableSectionElement, any, any, any>) {


    rows.forEach((row: any) => {
      const values = row.values ? Object.values(row.values) : [];

      const tr = tbody
        .append('tr')
        .selectAll('td')
        .data([{ value: row.value }, ...values])
        .enter()
        .append('td')
        .html(function (d: any, index: number) {
          if (index == 0)
            return row.level > 0 ? `${'&nbsp;&nbsp;&nbsp;&nbsp;'.repeat(row.level)}<span>+</span>&nbsp${d.value}` : `<span>+</span>&nbsp<b>${d.value}</b>`

          if (typeof d.value == 'number')
            return f(d.value);

          return '';
        })
        .style('padding', '0px 5px')
        .style('font-size', '13.3333px')
        .style('text-wrap', 'nowrap')
        .style("color", function (d: { value: any }, index) {
          console.log(d);
          if (typeof (d.value) == "number" && d.value < 0) {
            return "red";
          }
          return "black";
        })
        .style("text-align", function (d: { value: any }, index) {
          return typeof (d.value) == "number" ? "right" : "left";
        })
        .style('border-right', function (_, index) {
          if (index == 0) return '1px solid #FFAC00';
          return '';
        });

      // Chame recursivamente a função para processar as linhas filhas
      if (row.children) {
        this.renderRows(row.children, options, tbody);
      }
    });
  }
}
