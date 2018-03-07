window.PIVisualization = window.PIVisualization || {};
(function (PV) {
	'use strict';
	
	function symbolVis() { }
	PV.deriveVisualizationFromBase(symbolVis);
	
	symbolVis.prototype.init = function (scope, elem, displayProvider){
		var originalDisplayProvider = displayProvider['selectSymbol'];
		
		function allowClick(){	
			if(scope.config.Enabled){
				displayProvider['selectSymbol'] = originalDisplayProvider;
			}
			else{
				displayProvider['selectSymbol'] = function(){};
			}				 		
		}
		
		setTimeout(function() { 
			allowClick();
		}, 1000);
		
		scope.toggled = function(){
			allowClick();
		}
	}
	
	var def = {
		typeName: 'disableselection',
		datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Single,
		visObjectType: symbolVis,
		iconUrl: 'Scripts/app/editor/symbols/ext/Icons/toggleswitch.png',
		inject: ['displayProvider'],
		getDefaultConfig: function(){
			return{
				DataShape: 'Value',			
				Enabled: true,		
				Height: 70,
				Width: 70,
				BackgroundColor: 'rgb(0,0,0)',
				TextColor: 'rgb(0,255,0)',
			};
		}
	};
	
	PV.symbolCatalog.register(def);
})(window.PIVisualization);