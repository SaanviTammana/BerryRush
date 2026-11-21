gdjs.gameCode = {};
gdjs.gameCode.localVariables = [];
gdjs.gameCode.idToCallbackMap = new Map();
gdjs.gameCode.GDPlayer1Objects1_1final = [];

gdjs.gameCode.GDPlayer2Objects1_1final = [];

gdjs.gameCode.GDPlayer1Objects1= [];
gdjs.gameCode.GDPlayer1Objects2= [];
gdjs.gameCode.GDNewSprite3Objects1= [];
gdjs.gameCode.GDNewSprite3Objects2= [];
gdjs.gameCode.GDNewSprite4Objects1= [];
gdjs.gameCode.GDNewSprite4Objects2= [];
gdjs.gameCode.GDNewSprite5Objects1= [];
gdjs.gameCode.GDNewSprite5Objects2= [];
gdjs.gameCode.GDNewSprite6Objects1= [];
gdjs.gameCode.GDNewSprite6Objects2= [];
gdjs.gameCode.GDNewSprite7Objects1= [];
gdjs.gameCode.GDNewSprite7Objects2= [];
gdjs.gameCode.GDPlayer2Objects1= [];
gdjs.gameCode.GDPlayer2Objects2= [];
gdjs.gameCode.GDScoreObjects1= [];
gdjs.gameCode.GDScoreObjects2= [];
gdjs.gameCode.GDScore2Objects1= [];
gdjs.gameCode.GDScore2Objects2= [];
gdjs.gameCode.GDNewSprite2Objects1= [];
gdjs.gameCode.GDNewSprite2Objects2= [];
gdjs.gameCode.GDfalling_9595objectsObjects1= [];
gdjs.gameCode.GDfalling_9595objectsObjects2= [];
gdjs.gameCode.GDhealth1Objects1= [];
gdjs.gameCode.GDhealth1Objects2= [];
gdjs.gameCode.GDhealth2Objects1= [];
gdjs.gameCode.GDhealth2Objects2= [];
gdjs.gameCode.GDNewSprite10Objects1= [];
gdjs.gameCode.GDNewSprite10Objects2= [];
gdjs.gameCode.GDLevelObjects1= [];
gdjs.gameCode.GDLevelObjects2= [];
gdjs.gameCode.GDBlueButtonObjects1= [];
gdjs.gameCode.GDBlueButtonObjects2= [];
gdjs.gameCode.GDcamera_9595centerObjects1= [];
gdjs.gameCode.GDcamera_9595centerObjects2= [];
gdjs.gameCode.GDNewSprite8Objects1= [];
gdjs.gameCode.GDNewSprite8Objects2= [];
gdjs.gameCode.GDNewSprite12Objects1= [];
gdjs.gameCode.GDNewSprite12Objects2= [];


gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDPlayer1Objects1Objects = Hashtable.newFrom({"Player1": gdjs.gameCode.GDPlayer1Objects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDNewSprite8Objects1Objects = Hashtable.newFrom({"NewSprite8": gdjs.gameCode.GDNewSprite8Objects1});
gdjs.gameCode.asyncCallback11496876 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.gameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite8"), gdjs.gameCode.GDNewSprite8Objects2);

gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.gameCode.GDScoreObjects2);
{for(var i = 0, len = gdjs.gameCode.GDNewSprite8Objects2.length ;i < len;++i) {
    gdjs.gameCode.GDNewSprite8Objects2[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}
{for(var i = 0, len = gdjs.gameCode.GDScoreObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDScoreObjects2[i].getBehavior("Text").setText("Score: " + runtimeScene.getGame().getVariables().getFromIndex(3).getAsString());
}
}
gdjs.gameCode.localVariables.length = 0;
}
gdjs.gameCode.idToCallbackMap.set(11496876, gdjs.gameCode.asyncCallback11496876);
gdjs.gameCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.gameCode.localVariables);
for (const obj of gdjs.gameCode.GDNewSprite8Objects1) asyncObjectsList.addObject("NewSprite8", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.gameCode.asyncCallback11496876(runtimeScene, asyncObjectsList)), 11496876, asyncObjectsList);
}
}

}


};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDPlayer2Objects1Objects = Hashtable.newFrom({"Player2": gdjs.gameCode.GDPlayer2Objects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDNewSprite8Objects1Objects = Hashtable.newFrom({"NewSprite8": gdjs.gameCode.GDNewSprite8Objects1});
gdjs.gameCode.asyncCallback11494524 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.gameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite8"), gdjs.gameCode.GDNewSprite8Objects2);

gdjs.copyArray(runtimeScene.getObjects("Score2"), gdjs.gameCode.GDScore2Objects2);
{for(var i = 0, len = gdjs.gameCode.GDNewSprite8Objects2.length ;i < len;++i) {
    gdjs.gameCode.GDNewSprite8Objects2[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(4).add(1);
}
{for(var i = 0, len = gdjs.gameCode.GDScore2Objects2.length ;i < len;++i) {
    gdjs.gameCode.GDScore2Objects2[i].getBehavior("Text").setText("Score: " + runtimeScene.getGame().getVariables().getFromIndex(4).getAsString());
}
}
gdjs.gameCode.localVariables.length = 0;
}
gdjs.gameCode.idToCallbackMap.set(11494524, gdjs.gameCode.asyncCallback11494524);
gdjs.gameCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.gameCode.localVariables);
for (const obj of gdjs.gameCode.GDNewSprite8Objects1) asyncObjectsList.addObject("NewSprite8", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.gameCode.asyncCallback11494524(runtimeScene, asyncObjectsList)), 11494524, asyncObjectsList);
}
}

}


};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDfalling_95959595objectsObjects1Objects = Hashtable.newFrom({"falling_objects": gdjs.gameCode.GDfalling_9595objectsObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDPlayer1Objects1Objects = Hashtable.newFrom({"Player1": gdjs.gameCode.GDPlayer1Objects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDfalling_95959595objectsObjects1Objects = Hashtable.newFrom({"falling_objects": gdjs.gameCode.GDfalling_9595objectsObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDPlayer1Objects1Objects = Hashtable.newFrom({"Player1": gdjs.gameCode.GDPlayer1Objects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDfalling_95959595objectsObjects1Objects = Hashtable.newFrom({"falling_objects": gdjs.gameCode.GDfalling_9595objectsObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDPlayer1Objects1Objects = Hashtable.newFrom({"Player1": gdjs.gameCode.GDPlayer1Objects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDfalling_95959595objectsObjects1Objects = Hashtable.newFrom({"falling_objects": gdjs.gameCode.GDfalling_9595objectsObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDPlayer2Objects1Objects = Hashtable.newFrom({"Player2": gdjs.gameCode.GDPlayer2Objects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDfalling_95959595objectsObjects1Objects = Hashtable.newFrom({"falling_objects": gdjs.gameCode.GDfalling_9595objectsObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDPlayer2Objects1Objects = Hashtable.newFrom({"Player2": gdjs.gameCode.GDPlayer2Objects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDfalling_95959595objectsObjects1Objects = Hashtable.newFrom({"falling_objects": gdjs.gameCode.GDfalling_9595objectsObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDPlayer2Objects1Objects = Hashtable.newFrom({"Player2": gdjs.gameCode.GDPlayer2Objects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDfalling_95959595objectsObjects1Objects = Hashtable.newFrom({"falling_objects": gdjs.gameCode.GDfalling_9595objectsObjects1});
gdjs.gameCode.asyncCallback12224180 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.gameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player2"), gdjs.gameCode.GDPlayer2Objects2);

{for(var i = 0, len = gdjs.gameCode.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs.gameCode.GDPlayer2Objects2[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(1);
}
gdjs.gameCode.localVariables.length = 0;
}
gdjs.gameCode.idToCallbackMap.set(12224180, gdjs.gameCode.asyncCallback12224180);
gdjs.gameCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.gameCode.localVariables);
for (const obj of gdjs.gameCode.GDPlayer2Objects1) asyncObjectsList.addObject("Player2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.gameCode.asyncCallback12224180(runtimeScene, asyncObjectsList)), 12224180, asyncObjectsList);
}
}

}


};gdjs.gameCode.asyncCallback12226492 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.gameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player1"), gdjs.gameCode.GDPlayer1Objects2);

{for(var i = 0, len = gdjs.gameCode.GDPlayer1Objects2.length ;i < len;++i) {
    gdjs.gameCode.GDPlayer1Objects2[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(1);
}
gdjs.gameCode.localVariables.length = 0;
}
gdjs.gameCode.idToCallbackMap.set(12226492, gdjs.gameCode.asyncCallback12226492);
gdjs.gameCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.gameCode.localVariables);
for (const obj of gdjs.gameCode.GDPlayer1Objects1) asyncObjectsList.addObject("Player1", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.gameCode.asyncCallback12226492(runtimeScene, asyncObjectsList)), 12226492, asyncObjectsList);
}
}

}


};gdjs.gameCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Level"), gdjs.gameCode.GDLevelObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.gameCode.GDPlayer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("camera_center"), gdjs.gameCode.GDcamera_9595centerObjects1);
gdjs.copyArray(runtimeScene.getObjects("falling_objects"), gdjs.gameCode.GDfalling_9595objectsObjects1);
{for(var i = 0, len = gdjs.gameCode.GDPlayer1Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDPlayer1Objects1[i].getBehavior("Resizable").setSize(145, 137);
}
}
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "first", 0, 0, 0);
}
{for(var i = 0, len = gdjs.gameCode.GDLevelObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDLevelObjects1[i].getBehavior("Text").setText(gdjs.gameCode.GDLevelObjects1[i].getBehavior("Text").getText() + ("  1"));
}
}
{for(var i = 0, len = gdjs.gameCode.GDfalling_9595objectsObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDfalling_9595objectsObjects1[i].getBehavior("Animation").setAnimationName("leaf");
}
}
{for(var i = 0, len = gdjs.gameCode.GDcamera_9595centerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDcamera_9595centerObjects1[i].hide();
}
}
}

}


{

gdjs.gameCode.GDPlayer1Objects1.length = 0;

gdjs.gameCode.GDPlayer2Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.gameCode.GDPlayer1Objects1_1final.length = 0;
gdjs.gameCode.GDPlayer2Objects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.gameCode.GDPlayer1Objects2);
for (var i = 0, k = 0, l = gdjs.gameCode.GDPlayer1Objects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDPlayer1Objects2[i].getBehavior("PlatformerObject").isUsingControl("Jump") ) {
        isConditionTrue_1 = true;
        gdjs.gameCode.GDPlayer1Objects2[k] = gdjs.gameCode.GDPlayer1Objects2[i];
        ++k;
    }
}
gdjs.gameCode.GDPlayer1Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.gameCode.GDPlayer1Objects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDPlayer1Objects1_1final.indexOf(gdjs.gameCode.GDPlayer1Objects2[j]) === -1 )
            gdjs.gameCode.GDPlayer1Objects1_1final.push(gdjs.gameCode.GDPlayer1Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.gameCode.GDPlayer2Objects2);
for (var i = 0, k = 0, l = gdjs.gameCode.GDPlayer2Objects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDPlayer2Objects2[i].getBehavior("PlatformerObject").isUsingControl("Jump") ) {
        isConditionTrue_1 = true;
        gdjs.gameCode.GDPlayer2Objects2[k] = gdjs.gameCode.GDPlayer2Objects2[i];
        ++k;
    }
}
gdjs.gameCode.GDPlayer2Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.gameCode.GDPlayer2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.gameCode.GDPlayer2Objects1_1final.indexOf(gdjs.gameCode.GDPlayer2Objects2[j]) === -1 )
            gdjs.gameCode.GDPlayer2Objects1_1final.push(gdjs.gameCode.GDPlayer2Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.gameCode.GDPlayer1Objects1_1final, gdjs.gameCode.GDPlayer1Objects1);
gdjs.copyArray(gdjs.gameCode.GDPlayer2Objects1_1final, gdjs.gameCode.GDPlayer2Objects1);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 8);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(2).sub(700);
}
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "first", 0, runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber(), 0);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.randomInRange(1, 2));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 8);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(2).sub(700);
}
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "second", 0, runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber(), 0);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.randomInRange(1, 2));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.gameCode.GDNewSprite8Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.gameCode.GDPlayer1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDPlayer1Objects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDNewSprite8Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDNewSprite8Objects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDNewSprite8Objects1[i].getVariableNumber(gdjs.gameCode.GDNewSprite8Objects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDNewSprite8Objects1[k] = gdjs.gameCode.GDNewSprite8Objects1[i];
        ++k;
    }
}
gdjs.gameCode.GDNewSprite8Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDNewSprite8Objects1 */
{for(var i = 0, len = gdjs.gameCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDNewSprite8Objects1[i].returnVariable(gdjs.gameCode.GDNewSprite8Objects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}

{ //Subevents
gdjs.gameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.gameCode.GDNewSprite8Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.gameCode.GDPlayer2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDPlayer2Objects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDNewSprite8Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDNewSprite8Objects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDNewSprite8Objects1[i].getVariableNumber(gdjs.gameCode.GDNewSprite8Objects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDNewSprite8Objects1[k] = gdjs.gameCode.GDNewSprite8Objects1[i];
        ++k;
    }
}
gdjs.gameCode.GDNewSprite8Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDNewSprite8Objects1 */
{for(var i = 0, len = gdjs.gameCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDNewSprite8Objects1[i].returnVariable(gdjs.gameCode.GDNewSprite8Objects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}

{ //Subevents
gdjs.gameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.gameCode.GDPlayer1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDPlayer1Objects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDPlayer1Objects1[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDPlayer1Objects1[k] = gdjs.gameCode.GDPlayer1Objects1[i];
        ++k;
    }
}
gdjs.gameCode.GDPlayer1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDPlayer1Objects1 */
{for(var i = 0, len = gdjs.gameCode.GDPlayer1Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDPlayer1Objects1[i].getBehavior("Animation").setAnimationName("left");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.gameCode.GDPlayer1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDPlayer1Objects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDPlayer1Objects1[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDPlayer1Objects1[k] = gdjs.gameCode.GDPlayer1Objects1[i];
        ++k;
    }
}
gdjs.gameCode.GDPlayer1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDPlayer1Objects1 */
{for(var i = 0, len = gdjs.gameCode.GDPlayer1Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDPlayer1Objects1[i].getBehavior("Animation").setAnimationName("right");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.gameCode.GDPlayer1Objects1);
{for(var i = 0, len = gdjs.gameCode.GDPlayer1Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDPlayer1Objects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.gameCode.GDPlayer2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDPlayer2Objects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDPlayer2Objects1[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDPlayer2Objects1[k] = gdjs.gameCode.GDPlayer2Objects1[i];
        ++k;
    }
}
gdjs.gameCode.GDPlayer2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDPlayer2Objects1 */
{for(var i = 0, len = gdjs.gameCode.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDPlayer2Objects1[i].getBehavior("Animation").setAnimationName("right");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.gameCode.GDPlayer2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDPlayer2Objects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDPlayer2Objects1[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDPlayer2Objects1[k] = gdjs.gameCode.GDPlayer2Objects1[i];
        ++k;
    }
}
gdjs.gameCode.GDPlayer2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDPlayer2Objects1 */
{for(var i = 0, len = gdjs.gameCode.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDPlayer2Objects1[i].getBehavior("Animation").setAnimationName("left");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.gameCode.GDPlayer2Objects1);
{for(var i = 0, len = gdjs.gameCode.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDPlayer2Objects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.gameCode.GDPlayer2Objects1);
{for(var i = 0, len = gdjs.gameCode.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDPlayer2Objects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.gameCode.GDPlayer2Objects1);
{for(var i = 0, len = gdjs.gameCode.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDPlayer2Objects1[i].getBehavior("PlatformerObject").simulateDownKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.gameCode.GDPlayer2Objects1);
{for(var i = 0, len = gdjs.gameCode.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDPlayer2Objects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemySpawn");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "EnemySpawn") >= 0.5;
if (isConditionTrue_0) {
gdjs.gameCode.GDfalling_9595objectsObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDfalling_95959595objectsObjects1Objects, gdjs.randomFloatInRange(387, 946), runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() - 200, "");
}
{for(var i = 0, len = gdjs.gameCode.GDfalling_9595objectsObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDfalling_9595objectsObjects1[i].addPolarForce(90, 300, 1);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemySpawn");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
{isConditionTrue_2 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() >= 20);
}
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() < 40);
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
{isConditionTrue_2 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() >= 20);
}
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() < 40);
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Level"), gdjs.gameCode.GDLevelObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite12"), gdjs.gameCode.GDNewSprite12Objects1);
gdjs.copyArray(runtimeScene.getObjects("falling_objects"), gdjs.gameCode.GDfalling_9595objectsObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(2);
}
{for(var i = 0, len = gdjs.gameCode.GDLevelObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDLevelObjects1[i].getBehavior("Text").setText("L e v e l  o f  H i g h e s t  C h a r a c t e r:" + "  2");
}
}
{for(var i = 0, len = gdjs.gameCode.GDfalling_9595objectsObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDfalling_9595objectsObjects1[i].getBehavior("Animation").setAnimationName("acorn");
}
}
{for(var i = 0, len = gdjs.gameCode.GDfalling_9595objectsObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDfalling_9595objectsObjects1[i].getBehavior("Resizable").setSize(150, 150);
}
}
{for(var i = 0, len = gdjs.gameCode.GDNewSprite12Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDNewSprite12Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() >= 40);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() >= 40);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Level"), gdjs.gameCode.GDLevelObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite12"), gdjs.gameCode.GDNewSprite12Objects1);
gdjs.copyArray(runtimeScene.getObjects("falling_objects"), gdjs.gameCode.GDfalling_9595objectsObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(3);
}
{for(var i = 0, len = gdjs.gameCode.GDLevelObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDLevelObjects1[i].getBehavior("Text").setText("L e v e l  o f  H i g h e s t  C h a r a c t e r:" + "  3");
}
}
{for(var i = 0, len = gdjs.gameCode.GDfalling_9595objectsObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDfalling_9595objectsObjects1[i].getBehavior("Animation").setAnimationName("pinecone");
}
}
{for(var i = 0, len = gdjs.gameCode.GDfalling_9595objectsObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDfalling_9595objectsObjects1[i].getBehavior("Resizable").setSize(80, 80);
}
}
{for(var i = 0, len = gdjs.gameCode.GDNewSprite12Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDNewSprite12Objects1[i].getBehavior("Animation").setAnimationIndex(2);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() >= 60);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "win", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() >= 60);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "win2", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("falling_objects"), gdjs.gameCode.GDfalling_9595objectsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDfalling_9595objectsObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDfalling_9595objectsObjects1[i].getY() >= 849 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDfalling_9595objectsObjects1[k] = gdjs.gameCode.GDfalling_9595objectsObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDfalling_9595objectsObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDfalling_9595objectsObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDfalling_9595objectsObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDfalling_9595objectsObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.gameCode.GDPlayer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("health1"), gdjs.gameCode.GDhealth1Objects1);
{for(var i = 0, len = gdjs.gameCode.GDhealth1Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDhealth1Objects1[i].getBehavior("Scale").setScaleX((( gdjs.gameCode.GDPlayer1Objects1.length === 0 ) ? 0 :gdjs.gameCode.GDPlayer1Objects1[0].getBehavior("Health").Health(null)) / 20);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.gameCode.GDPlayer2Objects1);
gdjs.copyArray(runtimeScene.getObjects("health2"), gdjs.gameCode.GDhealth2Objects1);
{for(var i = 0, len = gdjs.gameCode.GDhealth2Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDhealth2Objects1[i].getBehavior("Scale").setScaleX((( gdjs.gameCode.GDPlayer2Objects1.length === 0 ) ? 0 :gdjs.gameCode.GDPlayer2Objects1[0].getBehavior("Health").Health(null)) / 20);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.gameCode.GDPlayer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("falling_objects"), gdjs.gameCode.GDfalling_9595objectsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDPlayer1Objects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDfalling_95959595objectsObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDfalling_9595objectsObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDfalling_9595objectsObjects1[i].getBehavior("Animation").getAnimationName() == "leaf" ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDfalling_9595objectsObjects1[k] = gdjs.gameCode.GDfalling_9595objectsObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDfalling_9595objectsObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDPlayer1Objects1 */
{for(var i = 0, len = gdjs.gameCode.GDPlayer1Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDPlayer1Objects1[i].getBehavior("Health").Hit(2, true, true, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.gameCode.GDPlayer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("falling_objects"), gdjs.gameCode.GDfalling_9595objectsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDPlayer1Objects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDfalling_95959595objectsObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDfalling_9595objectsObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDfalling_9595objectsObjects1[i].getBehavior("Animation").getAnimationName() == "acorn" ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDfalling_9595objectsObjects1[k] = gdjs.gameCode.GDfalling_9595objectsObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDfalling_9595objectsObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDPlayer1Objects1 */
{for(var i = 0, len = gdjs.gameCode.GDPlayer1Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDPlayer1Objects1[i].getBehavior("Health").Hit(4, true, true, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.gameCode.GDPlayer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("falling_objects"), gdjs.gameCode.GDfalling_9595objectsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDPlayer1Objects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDfalling_95959595objectsObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDfalling_9595objectsObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDfalling_9595objectsObjects1[i].getBehavior("Animation").getAnimationName() == "pinecone" ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDfalling_9595objectsObjects1[k] = gdjs.gameCode.GDfalling_9595objectsObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDfalling_9595objectsObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDPlayer1Objects1 */
{for(var i = 0, len = gdjs.gameCode.GDPlayer1Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDPlayer1Objects1[i].getBehavior("Health").Hit(6, true, true, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.gameCode.GDPlayer2Objects1);
gdjs.copyArray(runtimeScene.getObjects("falling_objects"), gdjs.gameCode.GDfalling_9595objectsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDPlayer2Objects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDfalling_95959595objectsObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDfalling_9595objectsObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDfalling_9595objectsObjects1[i].getBehavior("Animation").getAnimationName() == "leaf" ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDfalling_9595objectsObjects1[k] = gdjs.gameCode.GDfalling_9595objectsObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDfalling_9595objectsObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDPlayer2Objects1 */
{for(var i = 0, len = gdjs.gameCode.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDPlayer2Objects1[i].getBehavior("Health").Hit(2, true, true, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.gameCode.GDPlayer2Objects1);
gdjs.copyArray(runtimeScene.getObjects("falling_objects"), gdjs.gameCode.GDfalling_9595objectsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDPlayer2Objects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDfalling_95959595objectsObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDfalling_9595objectsObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDfalling_9595objectsObjects1[i].getBehavior("Animation").getAnimationName() == "acorn" ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDfalling_9595objectsObjects1[k] = gdjs.gameCode.GDfalling_9595objectsObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDfalling_9595objectsObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDPlayer2Objects1 */
{for(var i = 0, len = gdjs.gameCode.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDPlayer2Objects1[i].getBehavior("Health").Hit(4, true, true, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.gameCode.GDPlayer2Objects1);
gdjs.copyArray(runtimeScene.getObjects("falling_objects"), gdjs.gameCode.GDfalling_9595objectsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDPlayer2Objects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDfalling_95959595objectsObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDfalling_9595objectsObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDfalling_9595objectsObjects1[i].getBehavior("Animation").getAnimationName() == "pinecone" ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDfalling_9595objectsObjects1[k] = gdjs.gameCode.GDfalling_9595objectsObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDfalling_9595objectsObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDPlayer2Objects1 */
{for(var i = 0, len = gdjs.gameCode.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDPlayer2Objects1[i].getBehavior("Health").Hit(6, true, true, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.gameCode.GDPlayer2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDPlayer2Objects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDPlayer2Objects1[i].getBehavior("Health").Health(null) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDPlayer2Objects1[k] = gdjs.gameCode.GDPlayer2Objects1[i];
        ++k;
    }
}
gdjs.gameCode.GDPlayer2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDPlayer2Objects1 */
{for(var i = 0, len = gdjs.gameCode.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDPlayer2Objects1[i].getBehavior("Animation").setAnimationName("dead");
}
}

{ //Subevents
gdjs.gameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.gameCode.GDPlayer1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDPlayer1Objects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDPlayer1Objects1[i].getBehavior("Health").Health(null) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDPlayer1Objects1[k] = gdjs.gameCode.GDPlayer1Objects1[i];
        ++k;
    }
}
gdjs.gameCode.GDPlayer1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDPlayer1Objects1 */
{for(var i = 0, len = gdjs.gameCode.GDPlayer1Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDPlayer1Objects1[i].getBehavior("Animation").setAnimationName("dead");
}
}

{ //Subevents
gdjs.gameCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber() == 1);
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber() == 1);
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game over", false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.gameCode.GDPlayer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.gameCode.GDPlayer2Objects1);
gdjs.copyArray(runtimeScene.getObjects("camera_center"), gdjs.gameCode.GDcamera_9595centerObjects1);
{for(var i = 0, len = gdjs.gameCode.GDcamera_9595centerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDcamera_9595centerObjects1[i].setY(((( gdjs.gameCode.GDPlayer1Objects1.length === 0 ) ? 0 :gdjs.gameCode.GDPlayer1Objects1[0].getPointY("")) + (( gdjs.gameCode.GDPlayer2Objects1.length === 0 ) ? 0 :gdjs.gameCode.GDPlayer2Objects1[0].getPointY(""))) / 2);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("camera_center"), gdjs.gameCode.GDcamera_9595centerObjects1);
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.gameCode.GDcamera_9595centerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDcamera_9595centerObjects1[0].getPointY("")), "", 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.gameCode.GDPlayer2Objects1);
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.gameCode.GDPlayer2Objects1.length === 0 ) ? 0 :gdjs.gameCode.GDPlayer2Objects1[0].getPointY("")), "", 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.gameCode.GDPlayer1Objects1);
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.gameCode.GDPlayer1Objects1.length === 0 ) ? 0 :gdjs.gameCode.GDPlayer1Objects1[0].getPointY("")), "", 0);
}
}

}


};

gdjs.gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameCode.GDPlayer1Objects1.length = 0;
gdjs.gameCode.GDPlayer1Objects2.length = 0;
gdjs.gameCode.GDNewSprite3Objects1.length = 0;
gdjs.gameCode.GDNewSprite3Objects2.length = 0;
gdjs.gameCode.GDNewSprite4Objects1.length = 0;
gdjs.gameCode.GDNewSprite4Objects2.length = 0;
gdjs.gameCode.GDNewSprite5Objects1.length = 0;
gdjs.gameCode.GDNewSprite5Objects2.length = 0;
gdjs.gameCode.GDNewSprite6Objects1.length = 0;
gdjs.gameCode.GDNewSprite6Objects2.length = 0;
gdjs.gameCode.GDNewSprite7Objects1.length = 0;
gdjs.gameCode.GDNewSprite7Objects2.length = 0;
gdjs.gameCode.GDPlayer2Objects1.length = 0;
gdjs.gameCode.GDPlayer2Objects2.length = 0;
gdjs.gameCode.GDScoreObjects1.length = 0;
gdjs.gameCode.GDScoreObjects2.length = 0;
gdjs.gameCode.GDScore2Objects1.length = 0;
gdjs.gameCode.GDScore2Objects2.length = 0;
gdjs.gameCode.GDNewSprite2Objects1.length = 0;
gdjs.gameCode.GDNewSprite2Objects2.length = 0;
gdjs.gameCode.GDfalling_9595objectsObjects1.length = 0;
gdjs.gameCode.GDfalling_9595objectsObjects2.length = 0;
gdjs.gameCode.GDhealth1Objects1.length = 0;
gdjs.gameCode.GDhealth1Objects2.length = 0;
gdjs.gameCode.GDhealth2Objects1.length = 0;
gdjs.gameCode.GDhealth2Objects2.length = 0;
gdjs.gameCode.GDNewSprite10Objects1.length = 0;
gdjs.gameCode.GDNewSprite10Objects2.length = 0;
gdjs.gameCode.GDLevelObjects1.length = 0;
gdjs.gameCode.GDLevelObjects2.length = 0;
gdjs.gameCode.GDBlueButtonObjects1.length = 0;
gdjs.gameCode.GDBlueButtonObjects2.length = 0;
gdjs.gameCode.GDcamera_9595centerObjects1.length = 0;
gdjs.gameCode.GDcamera_9595centerObjects2.length = 0;
gdjs.gameCode.GDNewSprite8Objects1.length = 0;
gdjs.gameCode.GDNewSprite8Objects2.length = 0;
gdjs.gameCode.GDNewSprite12Objects1.length = 0;
gdjs.gameCode.GDNewSprite12Objects2.length = 0;

gdjs.gameCode.eventsList4(runtimeScene);
gdjs.gameCode.GDPlayer1Objects1.length = 0;
gdjs.gameCode.GDPlayer1Objects2.length = 0;
gdjs.gameCode.GDNewSprite3Objects1.length = 0;
gdjs.gameCode.GDNewSprite3Objects2.length = 0;
gdjs.gameCode.GDNewSprite4Objects1.length = 0;
gdjs.gameCode.GDNewSprite4Objects2.length = 0;
gdjs.gameCode.GDNewSprite5Objects1.length = 0;
gdjs.gameCode.GDNewSprite5Objects2.length = 0;
gdjs.gameCode.GDNewSprite6Objects1.length = 0;
gdjs.gameCode.GDNewSprite6Objects2.length = 0;
gdjs.gameCode.GDNewSprite7Objects1.length = 0;
gdjs.gameCode.GDNewSprite7Objects2.length = 0;
gdjs.gameCode.GDPlayer2Objects1.length = 0;
gdjs.gameCode.GDPlayer2Objects2.length = 0;
gdjs.gameCode.GDScoreObjects1.length = 0;
gdjs.gameCode.GDScoreObjects2.length = 0;
gdjs.gameCode.GDScore2Objects1.length = 0;
gdjs.gameCode.GDScore2Objects2.length = 0;
gdjs.gameCode.GDNewSprite2Objects1.length = 0;
gdjs.gameCode.GDNewSprite2Objects2.length = 0;
gdjs.gameCode.GDfalling_9595objectsObjects1.length = 0;
gdjs.gameCode.GDfalling_9595objectsObjects2.length = 0;
gdjs.gameCode.GDhealth1Objects1.length = 0;
gdjs.gameCode.GDhealth1Objects2.length = 0;
gdjs.gameCode.GDhealth2Objects1.length = 0;
gdjs.gameCode.GDhealth2Objects2.length = 0;
gdjs.gameCode.GDNewSprite10Objects1.length = 0;
gdjs.gameCode.GDNewSprite10Objects2.length = 0;
gdjs.gameCode.GDLevelObjects1.length = 0;
gdjs.gameCode.GDLevelObjects2.length = 0;
gdjs.gameCode.GDBlueButtonObjects1.length = 0;
gdjs.gameCode.GDBlueButtonObjects2.length = 0;
gdjs.gameCode.GDcamera_9595centerObjects1.length = 0;
gdjs.gameCode.GDcamera_9595centerObjects2.length = 0;
gdjs.gameCode.GDNewSprite8Objects1.length = 0;
gdjs.gameCode.GDNewSprite8Objects2.length = 0;
gdjs.gameCode.GDNewSprite12Objects1.length = 0;
gdjs.gameCode.GDNewSprite12Objects2.length = 0;


return;

}

gdjs['gameCode'] = gdjs.gameCode;
