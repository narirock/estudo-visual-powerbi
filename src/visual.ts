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

const f = ptBR.format("($.2f");



export class Visual implements IVisual {
  private body: Selection<HTMLBodyElement, any, any, any>;

  constructor(options: VisualConstructorOptions) {
    this.body = select(options.element).append("body");
    console.log("created");
  }

  // eslint-disable-next-line max-lines-per-function
  public update(options: VisualUpdateOptions) {
    console.log(options.dataViews[0].matrix.columns.root.children);
    this.body.html("");

    const  table = this.body.append("table")
    .style('border-collapse', 'collapse')
    .style('border', '2px #cfc7bb solid ')
    table.append("thead")
        .append("tr")
        .selectAll("th")
        .data(options.dataViews[0].matrix.columns.root.children)
        .enter().append("th")
        .text(function (d:any) {
            //console.log(d);
            return d.value;
        })
        .style("border", "1px black solid")
        .style("padding", "10px")
        .style("background-color", "lightgray")
        .style("font-weight", "bold")
        .style("text-transform", "uppercase");
    // const produtos: ProdutoType[] = options.dataViews[0].matrix.rows.root.children.map(produto => {
    //     const totalValue = produto.children[0].children.reduce(
    //         (acc, estado) => typeof estado.children[0].value == "number" ? acc + estado.children[0].value : acc
    //         , 0);
    //     const estados = produto.children[0].children.map(estado => {
    //         const vendaEstado = typeof estado.children[0].value == "number" ? estado.children[0].value : 0;
    //         return {
    //             name: estado.value,
    //             value: vendaEstado,
    //             percent: vendaEstado / totalValue * 100
    //             ,
    //         }
    //     });

    //     return {
    //         name: produto.value,
    //         value: totalValue,
    //         estados
    //     } as ProdutoType
    // });

    // const totalVendas = produtos.reduce((acc, produto) => acc + produto.value, 0)

    // let table = this.body.append("table")
    //     .style("border-collapse", "collapse")
    //     .style("border", "2px black solid")
    //     .style("width", "100%");
    // table.append("thead").append("tr")
    //     .selectAll("th")
    //     .data(["Nome", "Vendas", "%"])
    //     .enter().append("th")
    //     .text(function (d) { return d })
    //     .style("border", "1px black solid")
    //     .style("padding", "10px")
    //     .style("background-color", "lightgray")
    //     .style("font-weight", "bold")
    //     .style("text-transform", "uppercase");

    // produtos.forEach((produto, index) => {
    //     table.append("tbody").append("tr")
    //         .selectAll("td")
    //         .data(function () { return [produto.name, produto.value, (produto.value / totalVendas * 100)] })
    //         .enter().append("td")
    //         .text(function (d, index) {
    //             if (typeof d == "number") {
    //                 if (index == 1) return f(d)
    //                 return d.toFixed(2) + "%"
    //             }
    //             return d
    //         })
    //         .style("border", "1px black solid")
    //         .style("padding", "10px")
    //         .style("text-align", function (d) {
    //             if (typeof d == "number") {
    //                 return "right";
    //             }
    //             return "left";
    //         })
    //         .style("background-color", "gray")
    //         .style("cursor", "pointer")
    //         .on("click", function (d) {
    //             const childRows = document.querySelectorAll(`.child-product-${index}`);

    //             childRows.forEach(row => {
    //                 const element = row as HTMLElement;
    //                 if (element.style.display === "none" || element.style.display === "") {
    //                     element.style.display = "table-row";
    //                 } else {
    //                     element.style.display = "none";
    //                 }
    //             });
    //         });

    //     produto.estados.forEach((estado) => {
    //         table.append("tbody")
    //             .append("tr")
    //             .attr("class", `child-product-${index}`)
    //             .style("display", "none")
    //             .selectAll("td")
    //             .data(function () { return [estado.name, estado.value, estado.percent] })
    //             .enter().append("td")
    //             .text(function (d, index) {
    //                 if (typeof d == "number") {
    //                     if (index == 1) return f(d)
    //                     return d.toFixed(2) + "%"

    //                 }
    //                 return d
    //             })
    //             .style("border", "1px black solid")
    //             .style("padding", "10px 3px")
    //             .style("background-color", function (d, index) {
    //                 if (index == 1 && typeof d == "number" && d < 10) {
    //                     return "red";
    //                 }
    //                 return "white";
    //             })
    //             .style("text-align", function (d) {
    //                 if (typeof d == "number") {
    //                     return "right";
    //                 }
    //                 return "left";
    //             })
    //     });
    // })
  }
}
