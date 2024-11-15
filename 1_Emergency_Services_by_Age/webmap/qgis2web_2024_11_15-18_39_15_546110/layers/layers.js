var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Pop_dissolved_1 = new ol.format.GeoJSON();
var features_Pop_dissolved_1 = format_Pop_dissolved_1.readFeatures(json_Pop_dissolved_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pop_dissolved_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pop_dissolved_1.addFeatures(features_Pop_dissolved_1);
var lyr_Pop_dissolved_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pop_dissolved_1, 
                style: style_Pop_dissolved_1,
                popuplayertitle: "Pop_dissolved",
                interactive: true,
                title: '<img src="styles/legend/Pop_dissolved_1.png" /> Pop_dissolved'
            });
var format_Medical_Age_intersect_2 = new ol.format.GeoJSON();
var features_Medical_Age_intersect_2 = format_Medical_Age_intersect_2.readFeatures(json_Medical_Age_intersect_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Medical_Age_intersect_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Medical_Age_intersect_2.addFeatures(features_Medical_Age_intersect_2);
var lyr_Medical_Age_intersect_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Medical_Age_intersect_2, 
                style: style_Medical_Age_intersect_2,
                popuplayertitle: "Medical_Age_intersect",
                interactive: true,
                title: '<img src="styles/legend/Medical_Age_intersect_2.png" /> Medical_Age_intersect'
            });
var format_Medical_Services_Only_3 = new ol.format.GeoJSON();
var features_Medical_Services_Only_3 = format_Medical_Services_Only_3.readFeatures(json_Medical_Services_Only_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Medical_Services_Only_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Medical_Services_Only_3.addFeatures(features_Medical_Services_Only_3);
var lyr_Medical_Services_Only_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Medical_Services_Only_3, 
                style: style_Medical_Services_Only_3,
                popuplayertitle: "Medical_Services_Only",
                interactive: true,
                title: '<img src="styles/legend/Medical_Services_Only_3.png" /> Medical_Services_Only'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Pop_dissolved_1.setVisible(true);lyr_Medical_Age_intersect_2.setVisible(true);lyr_Medical_Services_Only_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Pop_dissolved_1,lyr_Medical_Age_intersect_2,lyr_Medical_Services_Only_3];
lyr_Pop_dissolved_1.set('fieldAliases', {'DAUID': 'DAUID', 'POP_2011': 'POP_2011', 'AGE_GROUP_': 'AGE_GROUP_', 'AGE_GROUP1': 'AGE_GROUP1', 'AGE_GROU_1': 'AGE_GROU_1', 'AGE_GROU_2': 'AGE_GROU_2', 'AGE_GROU_3': 'AGE_GROU_3', 'AGE_GROU_4': 'AGE_GROU_4', 'AGE_GROU_5': 'AGE_GROU_5', 'AGE_GROU_6': 'AGE_GROU_6', 'AGE_GROU_7': 'AGE_GROU_7', 'AGE_GROU_8': 'AGE_GROU_8', 'AGE_GROU_9': 'AGE_GROU_9', 'AGE_GRO_10': 'AGE_GRO_10', 'AGE_GRO_11': 'AGE_GRO_11', 'AGE_GRO_12': 'AGE_GRO_12', 'AGE_GRO_13': 'AGE_GRO_13', 'AGE_GRO_14': 'AGE_GRO_14', 'AGE_GRO_15': 'AGE_GRO_15', 'AGE_GRO_16': 'AGE_GRO_16', 'AGE_GRO_17': 'AGE_GRO_17', 'AGE_GRO_18': 'AGE_GRO_18', 'AGE_GRO_19': 'AGE_GRO_19', 'AGE_GRO_20': 'AGE_GRO_20', 'AGE_GRO_21': 'AGE_GRO_21', 'AGE_GRO_22': 'AGE_GRO_22', 'AGE_GRO_23': 'AGE_GRO_23', 'AGE_GRO_24': 'AGE_GRO_24', 'AGE_GRO_25': 'AGE_GRO_25', 'AGE_GRO_26': 'AGE_GRO_26', 'AGE_GRO_27': 'AGE_GRO_27', 'AGE_GRO_28': 'AGE_GRO_28', 'AGE_GRO_29': 'AGE_GRO_29', 'AGE_GRO_30': 'AGE_GRO_30', 'AGE_GRO_31': 'AGE_GRO_31', 'AGE_GRO_32': 'AGE_GRO_32', 'AGE_GRO_33': 'AGE_GRO_33', 'AGE_GRO_34': 'AGE_GRO_34', 'AGE_GRO_35': 'AGE_GRO_35', 'AGE_GRO_36': 'AGE_GRO_36', 'AGE_GRO_37': 'AGE_GRO_37', 'AGE_GRO_38': 'AGE_GRO_38', 'AGE_GRO_39': 'AGE_GRO_39', 'AGE_GRO_40': 'AGE_GRO_40', 'AGE_GRO_41': 'AGE_GRO_41', 'AGE_GRO_42': 'AGE_GRO_42', 'AGE_GRO_43': 'AGE_GRO_43', 'AGE_GRO_44': 'AGE_GRO_44', 'AGE_GRO_45': 'AGE_GRO_45', 'AGE_GRO_46': 'AGE_GRO_46', 'AGE_GRO_47': 'AGE_GRO_47', 'AGE_GRO_48': 'AGE_GRO_48', 'AGE_GRO_49': 'AGE_GRO_49', 'AGE_GRO_50': 'AGE_GRO_50', 'AGE_GRO_51': 'AGE_GRO_51', 'AGE_GRO_52': 'AGE_GRO_52', 'AGE_GRO_53': 'AGE_GRO_53', 'AGE_GRO_54': 'AGE_GRO_54', 'AGE_GRO_55': 'AGE_GRO_55', 'AGE_GRO_56': 'AGE_GRO_56', 'AGE_GRO_57': 'AGE_GRO_57', 'AGE_GRO_58': 'AGE_GRO_58', 'AGE_GRO_59': 'AGE_GRO_59', 'AGE_GRO_60': 'AGE_GRO_60', 'AGE_GRO_61': 'AGE_GRO_61', 'AGE_GRO_62': 'AGE_GRO_62', 'AGE_GRO_63': 'AGE_GRO_63', 'AGE_GRO_64': 'AGE_GRO_64', 'AGE_GRO_65': 'AGE_GRO_65', 'AGE_GRO_66': 'AGE_GRO_66', 'AGE_GRO_67': 'AGE_GRO_67', 'AGE_GRO_68': 'AGE_GRO_68', 'AGE_GRO_69': 'AGE_GRO_69', 'AGE_GRO_70': 'AGE_GRO_70', 'AGE_GRO_71': 'AGE_GRO_71', 'AGE_GRO_72': 'AGE_GRO_72', 'AGE_GRO_73': 'AGE_GRO_73', 'AGE_GRO_74': 'AGE_GRO_74', 'AGE_GRO_75': 'AGE_GRO_75', 'AGE_GRO_76': 'AGE_GRO_76', 'AGE_GRO_77': 'AGE_GRO_77', 'AGE_GRO_78': 'AGE_GRO_78', 'AGE_GRO_79': 'AGE_GRO_79', 'AGE_GRO_80': 'AGE_GRO_80', 'AGE_GRO_81': 'AGE_GRO_81', 'AGE_GRO_82': 'AGE_GRO_82', 'AGE_GRO_83': 'AGE_GRO_83', 'AGE_GRO_84': 'AGE_GRO_84', 'AGE_GRO_85': 'AGE_GRO_85', 'AGE_GRO_86': 'AGE_GRO_86', 'DA_NAME': 'DA_NAME', });
lyr_Medical_Age_intersect_2.set('fieldAliases', {'LANDMARKID': 'LANDMARKID', 'LANDMARK': 'LANDMARK', 'CATEGORY': 'CATEGORY', 'CIVIC_NO': 'CIVIC_NO', 'STREET': 'STREET', 'OWNERSHIP': 'OWNERSHIP', 'CREATE_DAT': 'CREATE_DAT', 'UPDATE_DAT': 'UPDATE_DAT', 'SOURCE': 'SOURCE', 'SOURCE_DAT': 'SOURCE_DAT', 'SUBCATEGOR': 'SUBCATEGOR', 'STATUS': 'STATUS', 'STATUS_DAT': 'STATUS_DAT', 'MUNICIPAL_': 'MUNICIPAL_', 'COMMON_LOC': 'COMMON_LOC', 'LOCATION_D': 'LOCATION_D', 'ON_CALL': 'ON_CALL', 'DIVISION_R': 'DIVISION_R', 'ASSOCIATED': 'ASSOCIATED', 'CONSTRUCTI': 'CONSTRUCTI', 'MAP_LABEL': 'MAP_LABEL', });
lyr_Medical_Services_Only_3.set('fieldAliases', {'LANDMARKID': 'LANDMARKID', 'LANDMARK': 'LANDMARK', 'CATEGORY': 'CATEGORY', 'CIVIC_NO': 'CIVIC_NO', 'STREET': 'STREET', 'OWNERSHIP': 'OWNERSHIP', 'CREATE_DAT': 'CREATE_DAT', 'UPDATE_DAT': 'UPDATE_DAT', 'SOURCE': 'SOURCE', 'SOURCE_DAT': 'SOURCE_DAT', 'SUBCATEGOR': 'SUBCATEGOR', 'STATUS': 'STATUS', 'STATUS_DAT': 'STATUS_DAT', 'MUNICIPAL_': 'MUNICIPAL_', 'COMMON_LOC': 'COMMON_LOC', 'LOCATION_D': 'LOCATION_D', 'ON_CALL': 'ON_CALL', 'DIVISION_R': 'DIVISION_R', 'ASSOCIATED': 'ASSOCIATED', 'CONSTRUCTI': 'CONSTRUCTI', 'MAP_LABEL': 'MAP_LABEL', });
lyr_Pop_dissolved_1.set('fieldImages', {'DAUID': 'TextEdit', 'POP_2011': 'TextEdit', 'AGE_GROUP_': 'TextEdit', 'AGE_GROUP1': 'TextEdit', 'AGE_GROU_1': 'TextEdit', 'AGE_GROU_2': 'TextEdit', 'AGE_GROU_3': 'TextEdit', 'AGE_GROU_4': 'TextEdit', 'AGE_GROU_5': 'TextEdit', 'AGE_GROU_6': 'TextEdit', 'AGE_GROU_7': 'TextEdit', 'AGE_GROU_8': 'TextEdit', 'AGE_GROU_9': 'TextEdit', 'AGE_GRO_10': 'TextEdit', 'AGE_GRO_11': 'TextEdit', 'AGE_GRO_12': 'TextEdit', 'AGE_GRO_13': 'TextEdit', 'AGE_GRO_14': 'TextEdit', 'AGE_GRO_15': 'TextEdit', 'AGE_GRO_16': 'TextEdit', 'AGE_GRO_17': 'TextEdit', 'AGE_GRO_18': 'TextEdit', 'AGE_GRO_19': 'TextEdit', 'AGE_GRO_20': 'TextEdit', 'AGE_GRO_21': 'TextEdit', 'AGE_GRO_22': 'TextEdit', 'AGE_GRO_23': 'TextEdit', 'AGE_GRO_24': 'TextEdit', 'AGE_GRO_25': 'TextEdit', 'AGE_GRO_26': 'TextEdit', 'AGE_GRO_27': 'TextEdit', 'AGE_GRO_28': 'TextEdit', 'AGE_GRO_29': 'TextEdit', 'AGE_GRO_30': 'TextEdit', 'AGE_GRO_31': 'TextEdit', 'AGE_GRO_32': 'TextEdit', 'AGE_GRO_33': 'TextEdit', 'AGE_GRO_34': 'TextEdit', 'AGE_GRO_35': 'TextEdit', 'AGE_GRO_36': 'TextEdit', 'AGE_GRO_37': 'TextEdit', 'AGE_GRO_38': 'TextEdit', 'AGE_GRO_39': 'TextEdit', 'AGE_GRO_40': 'TextEdit', 'AGE_GRO_41': 'TextEdit', 'AGE_GRO_42': 'TextEdit', 'AGE_GRO_43': 'TextEdit', 'AGE_GRO_44': 'TextEdit', 'AGE_GRO_45': 'TextEdit', 'AGE_GRO_46': 'TextEdit', 'AGE_GRO_47': 'TextEdit', 'AGE_GRO_48': 'TextEdit', 'AGE_GRO_49': 'TextEdit', 'AGE_GRO_50': 'TextEdit', 'AGE_GRO_51': 'TextEdit', 'AGE_GRO_52': 'TextEdit', 'AGE_GRO_53': 'TextEdit', 'AGE_GRO_54': 'TextEdit', 'AGE_GRO_55': 'TextEdit', 'AGE_GRO_56': 'TextEdit', 'AGE_GRO_57': 'TextEdit', 'AGE_GRO_58': 'TextEdit', 'AGE_GRO_59': 'TextEdit', 'AGE_GRO_60': 'TextEdit', 'AGE_GRO_61': 'TextEdit', 'AGE_GRO_62': 'TextEdit', 'AGE_GRO_63': 'TextEdit', 'AGE_GRO_64': 'TextEdit', 'AGE_GRO_65': 'TextEdit', 'AGE_GRO_66': 'TextEdit', 'AGE_GRO_67': 'TextEdit', 'AGE_GRO_68': 'TextEdit', 'AGE_GRO_69': 'TextEdit', 'AGE_GRO_70': 'TextEdit', 'AGE_GRO_71': 'TextEdit', 'AGE_GRO_72': 'TextEdit', 'AGE_GRO_73': 'TextEdit', 'AGE_GRO_74': 'TextEdit', 'AGE_GRO_75': 'TextEdit', 'AGE_GRO_76': 'TextEdit', 'AGE_GRO_77': 'TextEdit', 'AGE_GRO_78': 'TextEdit', 'AGE_GRO_79': 'TextEdit', 'AGE_GRO_80': 'TextEdit', 'AGE_GRO_81': 'TextEdit', 'AGE_GRO_82': 'TextEdit', 'AGE_GRO_83': 'TextEdit', 'AGE_GRO_84': 'TextEdit', 'AGE_GRO_85': 'TextEdit', 'AGE_GRO_86': 'TextEdit', 'DA_NAME': 'TextEdit', });
lyr_Medical_Age_intersect_2.set('fieldImages', {'LANDMARKID': 'TextEdit', 'LANDMARK': 'TextEdit', 'CATEGORY': 'TextEdit', 'CIVIC_NO': 'TextEdit', 'STREET': 'TextEdit', 'OWNERSHIP': 'TextEdit', 'CREATE_DAT': 'DateTime', 'UPDATE_DAT': 'DateTime', 'SOURCE': 'TextEdit', 'SOURCE_DAT': 'DateTime', 'SUBCATEGOR': 'TextEdit', 'STATUS': 'TextEdit', 'STATUS_DAT': 'DateTime', 'MUNICIPAL_': 'TextEdit', 'COMMON_LOC': 'TextEdit', 'LOCATION_D': 'TextEdit', 'ON_CALL': 'TextEdit', 'DIVISION_R': 'TextEdit', 'ASSOCIATED': 'TextEdit', 'CONSTRUCTI': 'TextEdit', 'MAP_LABEL': 'TextEdit', });
lyr_Medical_Services_Only_3.set('fieldImages', {'LANDMARKID': 'TextEdit', 'LANDMARK': 'TextEdit', 'CATEGORY': 'TextEdit', 'CIVIC_NO': 'TextEdit', 'STREET': 'TextEdit', 'OWNERSHIP': 'TextEdit', 'CREATE_DAT': 'DateTime', 'UPDATE_DAT': 'DateTime', 'SOURCE': 'TextEdit', 'SOURCE_DAT': 'DateTime', 'SUBCATEGOR': 'TextEdit', 'STATUS': 'TextEdit', 'STATUS_DAT': 'DateTime', 'MUNICIPAL_': 'TextEdit', 'COMMON_LOC': 'TextEdit', 'LOCATION_D': 'TextEdit', 'ON_CALL': 'TextEdit', 'DIVISION_R': 'TextEdit', 'ASSOCIATED': 'TextEdit', 'CONSTRUCTI': 'TextEdit', 'MAP_LABEL': 'TextEdit', });
lyr_Pop_dissolved_1.set('fieldLabels', {'DAUID': 'no label', 'POP_2011': 'no label', 'AGE_GROUP_': 'no label', 'AGE_GROUP1': 'no label', 'AGE_GROU_1': 'no label', 'AGE_GROU_2': 'no label', 'AGE_GROU_3': 'no label', 'AGE_GROU_4': 'no label', 'AGE_GROU_5': 'no label', 'AGE_GROU_6': 'no label', 'AGE_GROU_7': 'no label', 'AGE_GROU_8': 'no label', 'AGE_GROU_9': 'no label', 'AGE_GRO_10': 'no label', 'AGE_GRO_11': 'no label', 'AGE_GRO_12': 'no label', 'AGE_GRO_13': 'no label', 'AGE_GRO_14': 'no label', 'AGE_GRO_15': 'no label', 'AGE_GRO_16': 'no label', 'AGE_GRO_17': 'no label', 'AGE_GRO_18': 'no label', 'AGE_GRO_19': 'no label', 'AGE_GRO_20': 'no label', 'AGE_GRO_21': 'no label', 'AGE_GRO_22': 'no label', 'AGE_GRO_23': 'no label', 'AGE_GRO_24': 'no label', 'AGE_GRO_25': 'no label', 'AGE_GRO_26': 'no label', 'AGE_GRO_27': 'no label', 'AGE_GRO_28': 'no label', 'AGE_GRO_29': 'no label', 'AGE_GRO_30': 'no label', 'AGE_GRO_31': 'no label', 'AGE_GRO_32': 'no label', 'AGE_GRO_33': 'no label', 'AGE_GRO_34': 'no label', 'AGE_GRO_35': 'no label', 'AGE_GRO_36': 'no label', 'AGE_GRO_37': 'no label', 'AGE_GRO_38': 'no label', 'AGE_GRO_39': 'no label', 'AGE_GRO_40': 'no label', 'AGE_GRO_41': 'no label', 'AGE_GRO_42': 'no label', 'AGE_GRO_43': 'no label', 'AGE_GRO_44': 'no label', 'AGE_GRO_45': 'no label', 'AGE_GRO_46': 'no label', 'AGE_GRO_47': 'no label', 'AGE_GRO_48': 'no label', 'AGE_GRO_49': 'no label', 'AGE_GRO_50': 'no label', 'AGE_GRO_51': 'no label', 'AGE_GRO_52': 'no label', 'AGE_GRO_53': 'no label', 'AGE_GRO_54': 'no label', 'AGE_GRO_55': 'no label', 'AGE_GRO_56': 'no label', 'AGE_GRO_57': 'no label', 'AGE_GRO_58': 'no label', 'AGE_GRO_59': 'no label', 'AGE_GRO_60': 'no label', 'AGE_GRO_61': 'no label', 'AGE_GRO_62': 'no label', 'AGE_GRO_63': 'no label', 'AGE_GRO_64': 'no label', 'AGE_GRO_65': 'no label', 'AGE_GRO_66': 'no label', 'AGE_GRO_67': 'no label', 'AGE_GRO_68': 'no label', 'AGE_GRO_69': 'no label', 'AGE_GRO_70': 'no label', 'AGE_GRO_71': 'no label', 'AGE_GRO_72': 'no label', 'AGE_GRO_73': 'no label', 'AGE_GRO_74': 'no label', 'AGE_GRO_75': 'no label', 'AGE_GRO_76': 'no label', 'AGE_GRO_77': 'no label', 'AGE_GRO_78': 'no label', 'AGE_GRO_79': 'no label', 'AGE_GRO_80': 'no label', 'AGE_GRO_81': 'no label', 'AGE_GRO_82': 'no label', 'AGE_GRO_83': 'no label', 'AGE_GRO_84': 'no label', 'AGE_GRO_85': 'no label', 'AGE_GRO_86': 'no label', 'DA_NAME': 'no label', });
lyr_Medical_Age_intersect_2.set('fieldLabels', {'LANDMARKID': 'no label', 'LANDMARK': 'no label', 'CATEGORY': 'no label', 'CIVIC_NO': 'no label', 'STREET': 'no label', 'OWNERSHIP': 'no label', 'CREATE_DAT': 'no label', 'UPDATE_DAT': 'no label', 'SOURCE': 'no label', 'SOURCE_DAT': 'no label', 'SUBCATEGOR': 'no label', 'STATUS': 'no label', 'STATUS_DAT': 'no label', 'MUNICIPAL_': 'no label', 'COMMON_LOC': 'no label', 'LOCATION_D': 'no label', 'ON_CALL': 'no label', 'DIVISION_R': 'no label', 'ASSOCIATED': 'no label', 'CONSTRUCTI': 'no label', 'MAP_LABEL': 'no label', });
lyr_Medical_Services_Only_3.set('fieldLabels', {'LANDMARKID': 'no label', 'LANDMARK': 'no label', 'CATEGORY': 'no label', 'CIVIC_NO': 'no label', 'STREET': 'no label', 'OWNERSHIP': 'no label', 'CREATE_DAT': 'no label', 'UPDATE_DAT': 'no label', 'SOURCE': 'no label', 'SOURCE_DAT': 'no label', 'SUBCATEGOR': 'no label', 'STATUS': 'no label', 'STATUS_DAT': 'no label', 'MUNICIPAL_': 'no label', 'COMMON_LOC': 'no label', 'LOCATION_D': 'no label', 'ON_CALL': 'no label', 'DIVISION_R': 'no label', 'ASSOCIATED': 'no label', 'CONSTRUCTI': 'no label', 'MAP_LABEL': 'no label', });
lyr_Medical_Services_Only_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});