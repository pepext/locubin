var size = 0;
var placement = 'point';
function categories_FO_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case '12':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(105,125,216,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '24':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(45,208,146,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '48':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(233,149,39,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '72':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(142,48,134,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(175,216,116,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_FO_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("fibras");
    var labelText = "";
    size = 0;
    var labelFont = "14.3px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("nombre") !== null) {
        labelText = String(feature.get("nombre"));
    }
    
var style = categories_FO_1(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
