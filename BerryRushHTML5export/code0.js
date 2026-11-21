gdjs.start_95screenCode = {};
gdjs.start_95screenCode.localVariables = [];
gdjs.start_95screenCode.idToCallbackMap = new Map();
gdjs.start_95screenCode.GDBlueButtonObjects1= [];
gdjs.start_95screenCode.GDBlueButtonObjects2= [];
gdjs.start_95screenCode.GDNewTextObjects1= [];
gdjs.start_95screenCode.GDNewTextObjects2= [];
gdjs.start_95screenCode.GDNewSprite8Objects1= [];
gdjs.start_95screenCode.GDNewSprite8Objects2= [];
gdjs.start_95screenCode.GDNewSprite12Objects1= [];
gdjs.start_95screenCode.GDNewSprite12Objects2= [];


gdjs.start_95screenCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.start_95screenCode.GDBlueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.start_95screenCode.GDBlueButtonObjects1.length;i<l;++i) {
    if ( gdjs.start_95screenCode.GDBlueButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.start_95screenCode.GDBlueButtonObjects1[k] = gdjs.start_95screenCode.GDBlueButtonObjects1[i];
        ++k;
    }
}
gdjs.start_95screenCode.GDBlueButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}
}

}


};

gdjs.start_95screenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.start_95screenCode.GDBlueButtonObjects1.length = 0;
gdjs.start_95screenCode.GDBlueButtonObjects2.length = 0;
gdjs.start_95screenCode.GDNewTextObjects1.length = 0;
gdjs.start_95screenCode.GDNewTextObjects2.length = 0;
gdjs.start_95screenCode.GDNewSprite8Objects1.length = 0;
gdjs.start_95screenCode.GDNewSprite8Objects2.length = 0;
gdjs.start_95screenCode.GDNewSprite12Objects1.length = 0;
gdjs.start_95screenCode.GDNewSprite12Objects2.length = 0;

gdjs.start_95screenCode.eventsList0(runtimeScene);
gdjs.start_95screenCode.GDBlueButtonObjects1.length = 0;
gdjs.start_95screenCode.GDBlueButtonObjects2.length = 0;
gdjs.start_95screenCode.GDNewTextObjects1.length = 0;
gdjs.start_95screenCode.GDNewTextObjects2.length = 0;
gdjs.start_95screenCode.GDNewSprite8Objects1.length = 0;
gdjs.start_95screenCode.GDNewSprite8Objects2.length = 0;
gdjs.start_95screenCode.GDNewSprite12Objects1.length = 0;
gdjs.start_95screenCode.GDNewSprite12Objects2.length = 0;


return;

}

gdjs['start_95screenCode'] = gdjs.start_95screenCode;
