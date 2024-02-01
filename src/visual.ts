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
  currency: ["", ""],
});

const f = ptBR.format("-$,.0f");

export class Visual implements IVisual {
  private body: Selection<HTMLBodyElement, any, any, any>;
  private table: any;

  constructor(options: VisualConstructorOptions) {
    this.body = select(options.element).append("body");
  }

  // eslint-disable-next-line max-lines-per-function
  public update(options: VisualUpdateOptions) {
    console.log(options);
    this.body.html("");
    this.table = this.body.append("table")
      .style('border-collapse', 'collapse')
      .classed('table', true);

    this.renderHeader(options);
    this.table.append('tbody')
      .style('overflow', 'auto');

    this.renderTableBody(options.dataViews[0].matrix.rows.root.children, options);
  }


  private renderHeader(options: VisualUpdateOptions) {
    try {
      const matrix = options.dataViews[0].matrix;
      console.log(matrix);
      if (!matrix.rows) return;
      const headerData = [{ displayName: matrix.rows?.levels[0].sources[0].displayName || '' }, ...matrix.columns.levels[0].sources];

      headerData.push({ displayName: '%' });

      this.table.append("thead")
        .append("tr")
        .selectAll("th")
        .data(headerData)
        .enter().append("th")
        .style('position', 'sticky')
        .text(function (d: any) {
          return d.displayName;
        });
    } catch (e) {
      console.log(e);
    }
  }


  private renderTableBody(rows: any, options: any) {
    let tbody = this.table.select('tbody');

    if (tbody.empty()) {
      tbody = this.table.append('tbody');
    }

    this.renderRows(rows, options, tbody);
  }

  private renderRows(rows: any, options: any, tbody: Selection<HTMLTableSectionElement, any, any, any>, parentTotal?: number | null) {

    const lastRowValues = rows[rows.length - 1].values;
    const levelTotal = Object.values(lastRowValues).pop() as { value: number };

    rows.forEach((row: any) => {
      if (row.isSubtotal && row.level > 0) return

      if (row.isSubtotal) {
        this.renderFooter(row, parentTotal || levelTotal.value);
        return;
      }

      if (!row.value) return;

      const subtotals = row.children?.find((r) => r.isSubtotal);
      const values: any[] = subtotals ? Object.values(subtotals.values) : row.values ? Object.values(row.values) : [];
      const currentTotal = values[values.length - 1]?.value || null;
      let percent = 0;
      if (parentTotal) {
        percent = (currentTotal || 0) * 100 / parentTotal;
      } else {
        percent = currentTotal * 100 / (levelTotal.value || 0);
      }
      values.push({ value: !isNaN(percent) ? percent : null });

      const tr = tbody
        .append('tr')
        .selectAll('td')
        .data([{ value: row.value }, ...values])
        .enter()
        .append('td')
        .html(function (d: any, index: number) {
          if (index == values.length && d.value != null) return `${d.value.toFixed(0)} % `;
          if (typeof d.value == 'number')
            return f(d.value);

          if (index == 0) {
            const signal = row.isCollapsed ? "+" : "-";
            return row.level > 0 ? `${'&nbsp;&nbsp;&nbsp;&nbsp;'.repeat(row.level)}<span>${signal}</span>&nbsp${d.value}` : `<span>${signal}</span>&nbsp<b>${d.value}</b>`
          }
          return '';
        })
        .style('text-wrap', 'nowrap')
        .style("color", function (d: { value: any }, index) {
          if (typeof (d.value) == "number") {
            return d.value < 0 ? "red" : "#1A1F91";
          }
          return "black";
        })
        .style("font-family", function (_, index) {
          return index > 0 ? "'Segoe UI Bold', wf_segoe-ui_bold, helvetica, arial, sans-serif" : "'Segoe UI Semibold', wf_segoe - ui_semibold, helvetica, arial, sans-serif"
        })
        .style("font-weight", function (_, index) {
          return index != 0 ? "600" : "normal";
        })
        .style("text-align", function (d: { value: any }, index) {
          return typeof (d.value) == "number" ? "right" : "left";
        })
        .style('border-right', function (_, index) {
          return '1px solid #fff';
        })

      if (row.children) {
        this.renderRows(row.children, options, tbody, currentTotal);
      }
    });
  }

  private renderFooter(row: any, parentTotal: number) {

    const values: { value: number }[] = Object.values(row.values);
    const currentTotal = values[values.length - 1]?.value || null;
    const percent: number = currentTotal * 100 / (parentTotal || 0);
    values.push({ value: percent });
    const tfooter = this.table.append('tfoot');
    tfooter.append('tr')
      .selectAll('td')
      .data([{ value: 'Total' }, ...values])
      .enter()
      .append('td')
      .html(function (d: any, index: number,) {
        if (index == values.length) return `${d.value.toFixed(0)} % `;
        if (typeof d.value == 'number')
          return `<b>${f(d.value)}</b>`;

        if (index == 0)
          return `<b>${d.value}</b>`
        return '';
      })
      .style('padding', function (d: any) {
        return typeof (d.value) == "number" ? '0px 5px' : '6px 6px 20px 6px'
      })
      .style('text-wrap', 'nowrap')
      .style("color", function (d: { value: any }, index) {
        if (typeof (d.value) == "number" && d.value < 0) {
          return "red";
        }
        return "#1A1F91";
      })
      .style("text-align", function (d: { value: any }, index) {
        return typeof (d.value) == "number" ? "right" : "left";
      })
      .style('border-right', function (_, index) {
        if (index == 0) return '1px solid #FFAC00';
        return '';
      });
  }
}
