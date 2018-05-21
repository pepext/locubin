var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_parcelas_0 = new ol.format.GeoJSON();
var features_parcelas_0 = format_parcelas_0.readFeatures(json_parcelas_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parcelas_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_parcelas_0.addFeatures(features_parcelas_0);var lyr_parcelas_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parcelas_0, 
                style: style_parcelas_0,
                title: '<img src="styles/legend/parcelas_0.png" /> parcelas'
            });var format_FO_1 = new ol.format.GeoJSON();
var features_FO_1 = format_FO_1.readFeatures(json_FO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FO_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_FO_1.addFeatures(features_FO_1);var lyr_FO_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FO_1, 
                style: style_FO_1,
    title: 'FO<br />\
    <img src="styles/legend/FO_1_0.png" /> 12<br />\
    <img src="styles/legend/FO_1_1.png" /> 24<br />\
    <img src="styles/legend/FO_1_2.png" /> 48<br />\
    <img src="styles/legend/FO_1_3.png" /> 72<br />\
    <img src="styles/legend/FO_1_4.png" /> <br />'
        });var format_cosido_2 = new ol.format.GeoJSON();
var features_cosido_2 = format_cosido_2.readFeatures(json_cosido_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cosido_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_cosido_2.addFeatures(features_cosido_2);var lyr_cosido_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cosido_2, 
                style: style_cosido_2,
    title: 'cosido<br />\
    <img src="styles/legend/cosido_2_0.png" /> 12<br />\
    <img src="styles/legend/cosido_2_1.png" /> 24<br />\
    <img src="styles/legend/cosido_2_2.png" /> 48<br />\
    <img src="styles/legend/cosido_2_3.png" /> 72<br />\
    <img src="styles/legend/cosido_2_4.png" /> <br />'
        });var format_empalmes_3 = new ol.format.GeoJSON();
var features_empalmes_3 = format_empalmes_3.readFeatures(json_empalmes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_empalmes_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_empalmes_3.addFeatures(features_empalmes_3);var lyr_empalmes_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_empalmes_3, 
                style: style_empalmes_3,
                title: '<img src="styles/legend/empalmes_3.png" /> empalmes'
            });var format_CTO_4 = new ol.format.GeoJSON();
var features_CTO_4 = format_CTO_4.readFeatures(json_CTO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CTO_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CTO_4.addFeatures(features_CTO_4);var lyr_CTO_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CTO_4, 
                style: style_CTO_4,
    title: 'CTO<br />\
    <img src="styles/legend/CTO_4_0.png" /> 1<br />\
    <img src="styles/legend/CTO_4_1.png" /> 1P<br />\
    <img src="styles/legend/CTO_4_2.png" /> 2<br />\
    <img src="styles/legend/CTO_4_3.png" /> 2I<br />\
    <img src="styles/legend/CTO_4_4.png" /> 2P<br />\
    <img src="styles/legend/CTO_4_5.png" /> <br />'
        });var format_cose_5 = new ol.format.GeoJSON();
var features_cose_5 = format_cose_5.readFeatures(json_cose_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cose_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_cose_5.addFeatures(features_cose_5);var lyr_cose_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cose_5, 
                style: style_cose_5,
                title: '<img src="styles/legend/cose_5.png" /> cose'
            });var format_disponibles_6 = new ol.format.GeoJSON();
var features_disponibles_6 = format_disponibles_6.readFeatures(json_disponibles_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_disponibles_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_disponibles_6.addFeatures(features_disponibles_6);var lyr_disponibles_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_disponibles_6, 
                style: style_disponibles_6,
                title: '<img src="styles/legend/disponibles_6.png" /> disponibles'
            });

lyr_parcelas_0.setVisible(true);lyr_FO_1.setVisible(true);lyr_cosido_2.setVisible(true);lyr_empalmes_3.setVisible(true);lyr_CTO_4.setVisible(true);lyr_cose_5.setVisible(true);lyr_disponibles_6.setVisible(true);
var layersList = [baseLayer,lyr_parcelas_0,lyr_FO_1,lyr_cosido_2,lyr_empalmes_3,lyr_CTO_4,lyr_cose_5,lyr_disponibles_6];
lyr_parcelas_0.set('fieldAliases', {});
lyr_FO_1.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'fibras': 'fibras', 'dist': 'dist', 'troncal': 'troncal', 'LONG': 'LONG', });
lyr_cosido_2.set('fieldAliases', {'id': 'id', 'long': 'long', 'nombre': 'nombre', 'fibras': 'fibras', 'dist': 'dist', 'troncal': 'troncal', });
lyr_empalmes_3.set('fieldAliases', {'id': 'id', 'anota': 'anota', 'nombre': 'nombre', });
lyr_CTO_4.set('fieldAliases', {'SP8': 'SP8', 'nombre': 'nombre', 'pedestal': 'pedestal', 'ZONA': 'ZONA', 'NUMPOINTS': 'NUMPOINTS', 'ley': 'ley', });
lyr_cose_5.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'fibras': 'fibras', 'dist': 'dist', 'troncal': 'troncal', 'LONG': 'LONG', });
lyr_disponibles_6.set('fieldAliases', {'SP8': 'SP8', 'nombre': 'nombre', 'pedestal': 'pedestal', 'ZONA': 'ZONA', 'NUMPOINTS': 'NUMPOINTS', 'ley': 'ley', });
lyr_parcelas_0.set('fieldImages', {});
lyr_FO_1.set('fieldImages', {'id': 'TextEdit', 'nombre': 'TextEdit', 'fibras': 'TextEdit', 'dist': 'TextEdit', 'troncal': 'TextEdit', 'LONG': 'TextEdit', });
lyr_cosido_2.set('fieldImages', {'id': 'TextEdit', 'long': 'TextEdit', 'nombre': 'TextEdit', 'fibras': 'TextEdit', 'dist': 'TextEdit', 'troncal': 'TextEdit', });
lyr_empalmes_3.set('fieldImages', {'id': 'TextEdit', 'anota': 'TextEdit', 'nombre': 'TextEdit', });
lyr_CTO_4.set('fieldImages', {'SP8': 'TextEdit', 'nombre': 'TextEdit', 'pedestal': 'TextEdit', 'ZONA': 'TextEdit', 'NUMPOINTS': 'TextEdit', 'ley': 'TextEdit', });
lyr_cose_5.set('fieldImages', {'id': 'TextEdit', 'nombre': 'TextEdit', 'fibras': 'TextEdit', 'dist': 'TextEdit', 'troncal': 'TextEdit', 'LONG': 'TextEdit', });
lyr_disponibles_6.set('fieldImages', {'SP8': 'TextEdit', 'nombre': 'TextEdit', 'pedestal': 'TextEdit', 'ZONA': 'TextEdit', 'NUMPOINTS': 'TextEdit', 'ley': 'TextEdit', });
lyr_parcelas_0.set('fieldLabels', {});
lyr_FO_1.set('fieldLabels', {'id': 'no label', 'nombre': 'header label', 'fibras': 'inline label', 'dist': 'no label', 'troncal': 'no label', 'LONG': 'no label', });
lyr_cosido_2.set('fieldLabels', {'id': 'no label', 'long': 'no label', 'nombre': 'header label', 'fibras': 'inline label', 'dist': 'no label', 'troncal': 'no label', });
lyr_empalmes_3.set('fieldLabels', {'id': 'no label', 'anota': 'no label', 'nombre': 'header label', });
lyr_CTO_4.set('fieldLabels', {'SP8': 'no label', 'nombre': 'header label', 'pedestal': 'no label', 'ZONA': 'no label', 'NUMPOINTS': 'no label', 'ley': 'no label', });
lyr_cose_5.set('fieldLabels', {'id': 'no label', 'nombre': 'header label', 'fibras': 'inline label', 'dist': 'no label', 'troncal': 'no label', 'LONG': 'no label', });
lyr_disponibles_6.set('fieldLabels', {'SP8': 'no label', 'nombre': 'header label', 'pedestal': 'no label', 'ZONA': 'no label', 'NUMPOINTS': 'no label', 'ley': 'no label', });
lyr_disponibles_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});