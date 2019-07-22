am4core.useTheme(am4themes_animated);
var chart = am4core.create("chartdiv", am4charts.PieChart);
chart.data = [ {
  "ropa": "Pantalones",
  "unidades": 500
}, {
  "ropa": "Camisetas",
  "unidades": 300
}, {
  "ropa": "Abrigos",
  "unidades": 200
}, {
  "ropa": "Cazadoras",
  "unidades": 165
}, {
  "ropa": "Relojes",
  "unidades": 139
}, {
  "ropa": "Pañuelos",
  "unidades": 128
}, {
  "ropa": "Paraguas",
  "unidades": 99
}, {
  "ropa": "Bolsos",
  "unidades": 60
} ];
					
var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "unidades";
pieSeries.dataFields.category = "ropa";
pieSeries.slices.template.stroke = am4core.color("#fff");
pieSeries.slices.template.strokeWidth = 2;
pieSeries.slices.template.strokeOpacity = 1;

pieSeries.hiddenState.properties.opacity = 1;
pieSeries.hiddenState.properties.endAngle = -90;
pieSeries.hiddenState.properties.startAngle = -90;