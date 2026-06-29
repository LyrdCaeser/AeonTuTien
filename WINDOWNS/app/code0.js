gdjs.AuthSceneCode = {};
gdjs.AuthSceneCode.localVariables = [];
gdjs.AuthSceneCode.idToCallbackMap = new Map();
gdjs.AuthSceneCode.GDBgAuthObjects1= [];
gdjs.AuthSceneCode.GDBgAuthObjects2= [];
gdjs.AuthSceneCode.GDAuthPanelObjects1= [];
gdjs.AuthSceneCode.GDAuthPanelObjects2= [];
gdjs.AuthSceneCode.GDBtnLoginObjects1= [];
gdjs.AuthSceneCode.GDBtnLoginObjects2= [];
gdjs.AuthSceneCode.GDNameGameObjects1= [];
gdjs.AuthSceneCode.GDNameGameObjects2= [];
gdjs.AuthSceneCode.GDTextAuthNoticeObjects1= [];
gdjs.AuthSceneCode.GDTextAuthNoticeObjects2= [];
gdjs.AuthSceneCode.GDChe_9595Ph_957847n_9595Th_957915aObjects1= [];
gdjs.AuthSceneCode.GDChe_9595Ph_957847n_9595Th_957915aObjects2= [];
gdjs.AuthSceneCode.GDBtnEnterGameObjects1= [];
gdjs.AuthSceneCode.GDBtnEnterGameObjects2= [];
gdjs.AuthSceneCode.GDAvatarGameObjects1= [];
gdjs.AuthSceneCode.GDAvatarGameObjects2= [];


gdjs.AuthSceneCode.userFunc0xad8e78 = function GDJSInlineCode(runtimeScene) {
"use strict";
const lang = (navigator.language || navigator.userLanguage || "vi").toLowerCase();
const isEN = lang.startsWith("en");

function setText(objectName, value) {
  const obj = runtimeScene.getObjects(objectName)[0];
  if (obj && typeof obj.setString === "function") {
    obj.setString(value);
  }
}

// VN mặc định
setText("TextAuthNotice", "Đăng nhập để vào thế giới Aeon!");
setText("TextLoginLabel", "Đăng Nhập");
setText("TextEnterLabel", "Vào Game");

// Nếu máy English thì ghi đè ENG
if (isEN) {
  setText("TextAuthNotice", "Sign in to enter the world of Aeon!");
  setText("TextLoginLabel", "Sign In");
  setText("TextEnterLabel", "Enter Game");
}
};
gdjs.AuthSceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.AuthSceneCode.userFunc0xad8e78(runtimeScene);

}


};gdjs.AuthSceneCode.mapOfGDgdjs_9546AuthSceneCode_9546GDBtnLoginObjects1Objects = Hashtable.newFrom({"BtnLogin": gdjs.AuthSceneCode.GDBtnLoginObjects1});
gdjs.AuthSceneCode.mapOfGDgdjs_9546AuthSceneCode_9546GDBtnEnterGameObjects1Objects = Hashtable.newFrom({"BtnEnterGame": gdjs.AuthSceneCode.GDBtnEnterGameObjects1});
gdjs.AuthSceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.AuthSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.playerAuthentication.hasLoggedIn());
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BtnEnterGame"), gdjs.AuthSceneCode.GDBtnEnterGameObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnLogin"), gdjs.AuthSceneCode.GDBtnLoginObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextAuthNotice"), gdjs.AuthSceneCode.GDTextAuthNoticeObjects1);
{for(var i = 0, len = gdjs.AuthSceneCode.GDTextAuthNoticeObjects1.length ;i < len;++i) {
    gdjs.AuthSceneCode.GDTextAuthNoticeObjects1[i].getBehavior("Text").setText("Đăng nhập để vào thế giới Aeon !");
}
}
{for(var i = 0, len = gdjs.AuthSceneCode.GDBtnEnterGameObjects1.length ;i < len;++i) {
    gdjs.AuthSceneCode.GDBtnEnterGameObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.AuthSceneCode.GDBtnLoginObjects1.length ;i < len;++i) {
    gdjs.AuthSceneCode.GDBtnLoginObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.AuthSceneCode.GDTextAuthNoticeObjects1.length ;i < len;++i) {
    gdjs.AuthSceneCode.GDTextAuthNoticeObjects1[i].hide(false);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(20).setNumber(0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnLogin"), gdjs.AuthSceneCode.GDBtnLoginObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.AuthSceneCode.mapOfGDgdjs_9546AuthSceneCode_9546GDBtnLoginObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextAuthNotice"), gdjs.AuthSceneCode.GDTextAuthNoticeObjects1);
{gdjs.playerAuthentication.openAuthenticationWindow(runtimeScene);
}
{for(var i = 0, len = gdjs.AuthSceneCode.GDTextAuthNoticeObjects1.length ;i < len;++i) {
    gdjs.AuthSceneCode.GDTextAuthNoticeObjects1[i].getBehavior("Text").setText("Đang mở cửa sổ đăng nhập...");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.isAuthenticationWindowOpen();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextAuthNotice"), gdjs.AuthSceneCode.GDTextAuthNoticeObjects1);
{for(var i = 0, len = gdjs.AuthSceneCode.GDTextAuthNoticeObjects1.length ;i < len;++i) {
    gdjs.AuthSceneCode.GDTextAuthNoticeObjects1[i].getBehavior("Text").setText("Hoàn tất đăng nhập trong cửa sổ xác thực.");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.hasLoggedIn();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(20).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BtnEnterGame"), gdjs.AuthSceneCode.GDBtnEnterGameObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnLogin"), gdjs.AuthSceneCode.GDBtnLoginObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextAuthNotice"), gdjs.AuthSceneCode.GDTextAuthNoticeObjects1);
{for(var i = 0, len = gdjs.AuthSceneCode.GDTextAuthNoticeObjects1.length ;i < len;++i) {
    gdjs.AuthSceneCode.GDTextAuthNoticeObjects1[i].getBehavior("Text").setText("Đăng nhập thành công !");
}
}
{for(var i = 0, len = gdjs.AuthSceneCode.GDBtnEnterGameObjects1.length ;i < len;++i) {
    gdjs.AuthSceneCode.GDBtnEnterGameObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.AuthSceneCode.GDBtnLoginObjects1.length ;i < len;++i) {
    gdjs.AuthSceneCode.GDBtnLoginObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TextAuthNotice");
}
{runtimeScene.getGame().getVariables().getFromIndex(20).setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnEnterGame"), gdjs.AuthSceneCode.GDBtnEnterGameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.AuthSceneCode.mapOfGDgdjs_9546AuthSceneCode_9546GDBtnEnterGameObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.hasLoggedIn();
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainScene", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.hasLoggedIn();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BtnEnterGame"), gdjs.AuthSceneCode.GDBtnEnterGameObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnLogin"), gdjs.AuthSceneCode.GDBtnLoginObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextAuthNotice"), gdjs.AuthSceneCode.GDTextAuthNoticeObjects1);
{for(var i = 0, len = gdjs.AuthSceneCode.GDTextAuthNoticeObjects1.length ;i < len;++i) {
    gdjs.AuthSceneCode.GDTextAuthNoticeObjects1[i].getBehavior("Text").setText("Bạn đã đăng nhập sẵn trước đó. Sẵn sàng vào game !");
}
}
{for(var i = 0, len = gdjs.AuthSceneCode.GDBtnEnterGameObjects1.length ;i < len;++i) {
    gdjs.AuthSceneCode.GDBtnEnterGameObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.AuthSceneCode.GDBtnLoginObjects1.length ;i < len;++i) {
    gdjs.AuthSceneCode.GDBtnLoginObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TextAuthNotice");
}
{runtimeScene.getGame().getVariables().getFromIndex(20).setNumber(1);
}
}

}


};

gdjs.AuthSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.AuthSceneCode.GDBgAuthObjects1.length = 0;
gdjs.AuthSceneCode.GDBgAuthObjects2.length = 0;
gdjs.AuthSceneCode.GDAuthPanelObjects1.length = 0;
gdjs.AuthSceneCode.GDAuthPanelObjects2.length = 0;
gdjs.AuthSceneCode.GDBtnLoginObjects1.length = 0;
gdjs.AuthSceneCode.GDBtnLoginObjects2.length = 0;
gdjs.AuthSceneCode.GDNameGameObjects1.length = 0;
gdjs.AuthSceneCode.GDNameGameObjects2.length = 0;
gdjs.AuthSceneCode.GDTextAuthNoticeObjects1.length = 0;
gdjs.AuthSceneCode.GDTextAuthNoticeObjects2.length = 0;
gdjs.AuthSceneCode.GDChe_9595Ph_957847n_9595Th_957915aObjects1.length = 0;
gdjs.AuthSceneCode.GDChe_9595Ph_957847n_9595Th_957915aObjects2.length = 0;
gdjs.AuthSceneCode.GDBtnEnterGameObjects1.length = 0;
gdjs.AuthSceneCode.GDBtnEnterGameObjects2.length = 0;
gdjs.AuthSceneCode.GDAvatarGameObjects1.length = 0;
gdjs.AuthSceneCode.GDAvatarGameObjects2.length = 0;

gdjs.AuthSceneCode.eventsList1(runtimeScene);
gdjs.AuthSceneCode.GDBgAuthObjects1.length = 0;
gdjs.AuthSceneCode.GDBgAuthObjects2.length = 0;
gdjs.AuthSceneCode.GDAuthPanelObjects1.length = 0;
gdjs.AuthSceneCode.GDAuthPanelObjects2.length = 0;
gdjs.AuthSceneCode.GDBtnLoginObjects1.length = 0;
gdjs.AuthSceneCode.GDBtnLoginObjects2.length = 0;
gdjs.AuthSceneCode.GDNameGameObjects1.length = 0;
gdjs.AuthSceneCode.GDNameGameObjects2.length = 0;
gdjs.AuthSceneCode.GDTextAuthNoticeObjects1.length = 0;
gdjs.AuthSceneCode.GDTextAuthNoticeObjects2.length = 0;
gdjs.AuthSceneCode.GDChe_9595Ph_957847n_9595Th_957915aObjects1.length = 0;
gdjs.AuthSceneCode.GDChe_9595Ph_957847n_9595Th_957915aObjects2.length = 0;
gdjs.AuthSceneCode.GDBtnEnterGameObjects1.length = 0;
gdjs.AuthSceneCode.GDBtnEnterGameObjects2.length = 0;
gdjs.AuthSceneCode.GDAvatarGameObjects1.length = 0;
gdjs.AuthSceneCode.GDAvatarGameObjects2.length = 0;


return;

}

gdjs['AuthSceneCode'] = gdjs.AuthSceneCode;
