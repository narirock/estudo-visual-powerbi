"use strict";

import powerbi from "powerbi-visuals-api";
import { formatLocale } from "d3"
import "./../style/visual.less";

import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;

import { select, Selection, style } from 'd3';

const ptBR = formatLocale({
    decimal: ",",
    thousands: ".",
    grouping: [3],
    currency: ["R$ ", ""]
});
const f = ptBR.format("($.2f");

export class Visual implements IVisual {
    private body: Selection<HTMLBodyElement, any, any, any>;




    constructor(options: VisualConstructorOptions) {
        this.body = select(options.element).append('body');
        console.log("created")
    }

    public update(options: VisualUpdateOptions) {
        console.log("Data", options.dataViews);
        this.body.html("");
        let table = this.body.append("table")
            .style("border-collapse", "collapse")
            .style("border", "2px black solid")
            .style("width", "100%");

        table.append("thead").append("tr")
            .selectAll("th")
            .data(options.dataViews[0].metadata.columns)
            .enter().append("th")
            .text(function (d) { return d.displayName })
            .style("border", "1px black solid")
            .style("padding", "10px")
            .style("background-color", "lightgray")
            .style("font-weight", "bold")
            .style("text-transform", "uppercase");

        table.append("tbody")
            .selectAll("tr")
            .data(options.dataViews[0].table.rows)
            .enter()
            .append("tr")
            .selectAll("td")
            .data(function (d) { return d; })
            .enter().append("td")
            .text(function (d) {
                if (typeof (d) == "number") {
                    return f(d);
                }
                return d.toString();
            })
            .style("background-color", function (d, index) {
                if (options.dataViews[0].metadata.columns[index].queryName == "produtos.valor_venda" && typeof (d) == "number" && d < 10) {
                    return "red";
                }
                return "white";

            })
            .style("text-align", function (d) {
                if (typeof (d) == "number") {
                    return "right";
                }
                return "left";

            })
            .style("border", "1px black solid")
            .style("padding", "5px");
    }

}