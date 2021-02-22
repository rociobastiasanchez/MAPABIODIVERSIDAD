'use strict'


require([
    "esri/map",
    "esri/arcgis/utils",
    "esri/dijit/Legend",

    "dojo/ready",
    "dojo/parser",

], function(
    Map, 
    arcgisUtils, 
    Legend,
    ready,
    parser,
){
    ready(function(){

        parser.parse();

        var mimapa = new Map ("mapa", {
            basemap: "topo",
        });

        arcgisUtils.createMap('95a0746db08c4659a4b9aee3fc30b985', "mapa").then(function(response){

            var mapa = response.mapa;

            var legendLayers = arcgisUtils.getLegendLayers(response);

            var legend = new Legend({
                map: mapa,
                layerInfo: legendLayers,
            }, "Leyenda");
            legend.startup();

        })
    })
    
});
