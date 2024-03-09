var wms_layers = [];


        var lyr_positron_0 = new ol.layer.Tile({
            'title': 'positron',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
            })
        });
var format_distritosciudad_1 = new ol.format.GeoJSON();
var features_distritosciudad_1 = format_distritosciudad_1.readFeatures(json_distritosciudad_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_distritosciudad_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_distritosciudad_1.addFeatures(features_distritosciudad_1);
var lyr_distritosciudad_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_distritosciudad_1, 
                style: style_distritosciudad_1,
                interactive: true,
    title: 'distritos ciudad<br />\
    <img src="styles/legend/distritosciudad_1_0.png" /> 23 - 26<br />\
    <img src="styles/legend/distritosciudad_1_1.png" /> 26 - 31<br />\
    <img src="styles/legend/distritosciudad_1_2.png" /> 31 - 34<br />\
    <img src="styles/legend/distritosciudad_1_3.png" /> 34 - 41<br />'
        });

lyr_positron_0.setVisible(true);lyr_distritosciudad_1.setVisible(true);
var layersList = [lyr_positron_0,lyr_distritosciudad_1];
lyr_distritosciudad_1.set('fieldAliases', {'fid': 'fid', 'CODBDT': 'CODBDT', 'GEOCODIGO': 'GEOCODIGO', 'DESBDT': 'DESBDT', 'podemosp': 'podemosp', 'abstencionp': 'abstencionp', });
lyr_distritosciudad_1.set('fieldImages', {'fid': 'TextEdit', 'CODBDT': 'Range', 'GEOCODIGO': 'TextEdit', 'DESBDT': 'TextEdit', 'podemosp': 'Range', 'abstencionp': 'Range', });
lyr_distritosciudad_1.set('fieldLabels', {'fid': 'inline label', 'CODBDT': 'no label', 'GEOCODIGO': 'no label', 'DESBDT': 'no label', 'podemosp': 'inline label', 'abstencionp': 'inline label', });
lyr_distritosciudad_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});