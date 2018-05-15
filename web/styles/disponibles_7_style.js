var size = 0;
var placement = 'point';

var style_disponibles_7 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "10.4px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("nombre") !== null) {
        labelText = String(feature.get("nombre"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.4 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.741176)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(2,4,14,0.453425317647)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];

    return style;
};
