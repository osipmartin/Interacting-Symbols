window.PIVisualization = window.PIVisualization || {};
(function (PV) {
	'use strict';
	
	function symbolVis() { }
	PV.deriveVisualizationFromBase(symbolVis);
	
	symbolVis.prototype.init = function (scope, elem, displayProvider, $rootScope){
		
		$('head').append('<link rel="stylesheet" type="text/css" href="Scripts/app/editor/symbols/ext/css/sym-bigredbutton-style.css">');
		
		scope.pressed = function(){			
			displayProvider.selectAll();
			displayProvider.getSelectedSymbols().forEach(function(sym){
				displayProvider.removeSymbol(sym);
			});
		}
	}
	
	var def = {
		typeName: 'bigredbutton',
		datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Single,
		visObjectType: symbolVis,
		inject: [ 'displayProvider', '$rootScope'],
		getDefaultConfig: function(){
			return{
				DataShape: 'Value',
				Height: 150,
				Width: 150
			};
		}
	};
	
	PV.symbolCatalog.register(def);
})(window.PIVisualization);