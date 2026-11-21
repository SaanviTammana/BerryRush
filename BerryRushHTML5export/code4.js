gdjs.win2Code = {};
gdjs.win2Code.localVariables = [];
gdjs.win2Code.idToCallbackMap = new Map();


gdjs.win2Code.eventsList0 = function(runtimeScene) {

};

gdjs.win2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.win2Code.eventsList0(runtimeScene);


return;

}

gdjs['win2Code'] = gdjs.win2Code;
