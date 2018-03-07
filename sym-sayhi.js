window.PIVisualization = window.PIVisualization || {};
(function (PV) {
	'use strict';
	
	function symbolVis() { }
	PV.deriveVisualizationFromBase(symbolVis);
	
	symbolVis.prototype.init = function (scope, elem){
		$('head').append('<link rel="stylesheet" type="text/css" href="Scripts/app/editor/symbols/ext/css/sym-sayhi-style.css">');
		
		var name = this.runtime.name;
		
		scope.message = {
			receiver: "",
			text: ""
		};
		
		scope.receiverboxclicked = function(){
			scope.message.receiver = scope.message.receiver.replace(' says:','');
			scope.message.text = '';
		}
		
		scope.sayhi = function(){
			var receiver = $('#'+scope.message.receiver);
			if(receiver.length > 0){
				var receiver_scope = receiver.scope();
				if(receiver_scope.message){
					receiver_scope.message.receiver = name + " says:";
					receiver_scope.message.text = scope.message.text;
				}
				else{
					alert(name + "'s receiver, " + scope.message.receiver + ", is not of type 'sayhi' ");
				}
			}
			else{
				alert(name + "'s receiver," +scope.message.receiver + ", does not exist");
			}
		}
	}
	
	var def = {
		typeName: 'sayhi',
		datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Single,
		visObjectType: symbolVis,
		inject: [],
		getDefaultConfig: function(){
			return{
				DataShape: 'Value',
				Height: 150,
				Width: 300,
			};
		}
	};
	
	PV.symbolCatalog.register(def);
})(window.PIVisualization);