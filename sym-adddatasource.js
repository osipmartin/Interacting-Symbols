window.PIVisualization = window.PIVisualization || {};
(function (PV) {
	'use strict';
	
	function symbolVis() { }
	PV.deriveVisualizationFromBase(symbolVis);
	
	symbolVis.prototype.init = function (scope, elem, displayProvider, $rootScope){
		
		$('head').append('<link rel="stylesheet" type="text/css" href="Scripts/app/editor/symbols/ext/css/sym-adddatasource-style.css">');	
		//console.log($rootScope);
		//console.log(displayProvider);
		
		scope.newdatasource = {
			text: ""
		};
		
		scope.add = function(){
			displayProvider.selectAll();
			displayProvider.getSelectedSymbols().forEach(function(sym){
				//check if this symbol supports multiple datasources
				if(displayProvider.getRuntimeSymbolData(sym).def.datasourceBehavior == PV.Extensibility.Enums.DatasourceBehaviors.Multiple){
					//add the datasource from the textbox
					displayProvider.getSymbolByName(sym).DataSources.push(scope.newdatasource.text);
				}
				//unselect this symbol
				displayProvider.toggleSymbolSelection(sym);
			});
		}
	}
	
	var def = {
		typeName: 'adddatasource',
		datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Single,
		visObjectType: symbolVis,
		inject: ['displayProvider', '$rootScope'],
		getDefaultConfig: function(){
			return{
				DataShape: 'Value',
				Height: 100,
				Width: 450,
			};
		}
	};
	
	PV.symbolCatalog.register(def);
})(window.PIVisualization);