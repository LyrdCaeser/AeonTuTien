gdjs.MainSceneCode = {};
gdjs.MainSceneCode.localVariables = [];
gdjs.MainSceneCode.idToCallbackMap = new Map();
gdjs.MainSceneCode.GDPlayerAvatarObjects1= [];
gdjs.MainSceneCode.GDPlayerAvatarObjects2= [];
gdjs.MainSceneCode.GDBackgroundMainObjects1= [];
gdjs.MainSceneCode.GDBackgroundMainObjects2= [];
gdjs.MainSceneCode.GDTextRealmObjects1= [];
gdjs.MainSceneCode.GDTextRealmObjects2= [];
gdjs.MainSceneCode.GDTextCultivationObjects1= [];
gdjs.MainSceneCode.GDTextCultivationObjects2= [];
gdjs.MainSceneCode.GDTextStonesObjects1= [];
gdjs.MainSceneCode.GDTextStonesObjects2= [];
gdjs.MainSceneCode.GDBtnCultivateObjects1= [];
gdjs.MainSceneCode.GDBtnCultivateObjects2= [];
gdjs.MainSceneCode.GDBtnBreakthroughObjects1= [];
gdjs.MainSceneCode.GDBtnBreakthroughObjects2= [];
gdjs.MainSceneCode.GDTextLevelObjects1= [];
gdjs.MainSceneCode.GDTextLevelObjects2= [];
gdjs.MainSceneCode.GDTextBreakReqObjects1= [];
gdjs.MainSceneCode.GDTextBreakReqObjects2= [];
gdjs.MainSceneCode.GDTextBreakNoticeObjects1= [];
gdjs.MainSceneCode.GDTextBreakNoticeObjects2= [];
gdjs.MainSceneCode.GDPetDragonObjects1= [];
gdjs.MainSceneCode.GDPetDragonObjects2= [];
gdjs.MainSceneCode.GDBtnOpenStageObjects1= [];
gdjs.MainSceneCode.GDBtnOpenStageObjects2= [];


gdjs.MainSceneCode.userFunc0xad8e78 = function GDJSInlineCode(runtimeScene) {
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
setText("TextCultivateLabel", "Tu Luyện");
setText("TextBreakthroughLabel", "Đột Phá");

// ENG
if (isEN) {
  setText("TextCultivateLabel", "Cultivate");
  setText("TextBreakthroughLabel", "Breakthrough");
}
};
gdjs.MainSceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.MainSceneCode.userFunc0xad8e78(runtimeScene);

}


};gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDBtnCultivateObjects1Objects = Hashtable.newFrom({"BtnCultivate": gdjs.MainSceneCode.GDBtnCultivateObjects1});
gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDBtnBreakthroughObjects1Objects = Hashtable.newFrom({"BtnBreakthrough": gdjs.MainSceneCode.GDBtnBreakthroughObjects1});
gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDBtnOpenStageObjects1Objects = Hashtable.newFrom({"BtnOpenStage": gdjs.MainSceneCode.GDBtnOpenStageObjects1});
gdjs.MainSceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(100);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(12);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(5260);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)));
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)));
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)));
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnCultivate"), gdjs.MainSceneCode.GDBtnCultivateObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDBtnCultivateObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerAvatar"), gdjs.MainSceneCode.GDPlayerAvatarObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(10);
}
{for(var i = 0, len = gdjs.MainSceneCode.GDPlayerAvatarObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDPlayerAvatarObjects1[i].getBehavior("Animation").setAnimationName("Attack");
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("TextCultivation"), gdjs.MainSceneCode.GDTextCultivationObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextLevel"), gdjs.MainSceneCode.GDTextLevelObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextStones"), gdjs.MainSceneCode.GDTextStonesObjects1);
{for(var i = 0, len = gdjs.MainSceneCode.GDTextLevelObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDTextLevelObjects1[i].getBehavior("Text").setText("Level: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4))) + " / " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5))));
}
}
{for(var i = 0, len = gdjs.MainSceneCode.GDTextCultivationObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDTextCultivationObjects1[i].getBehavior("Text").setText("Tu Vi: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) + " / " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1))));
}
}
{for(var i = 0, len = gdjs.MainSceneCode.GDTextStonesObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDTextStonesObjects1[i].getBehavior("Text").setText("Linh Thạch: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnBreakthrough"), gdjs.MainSceneCode.GDBtnBreakthroughObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDBtnBreakthroughObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)));
}
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextBreakNotice"), gdjs.MainSceneCode.GDTextBreakNoticeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
{runtimeScene.getScene().getVariables().getFromIndex(3).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(500);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)));
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(5).mul(2);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).add(5260);
}
{for(var i = 0, len = gdjs.MainSceneCode.GDTextBreakNoticeObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDTextBreakNoticeObjects1[i].getBehavior("Text").setText("Thiên Đạo Chấp Thuận,Độ Kiếp Thành Công");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)));
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
{runtimeScene.getScene().getVariables().getFromIndex(4).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).mul(2);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("TextBreakReq"), gdjs.MainSceneCode.GDTextBreakReqObjects1);
{for(var i = 0, len = gdjs.MainSceneCode.GDTextBreakReqObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDTextBreakReqObjects1[i].getBehavior("Text").setText("Yêu cầu đột phá:" + gdjs.evtTools.string.newLine() + "Lv " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4))) + "/" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5))) + gdjs.evtTools.string.newLine() + "Tu Vi " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))) + "/" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1))) + gdjs.evtTools.string.newLine() + "Linh Thạch " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))) + "/" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6))));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() >= runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber());
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextRealm"), gdjs.MainSceneCode.GDTextRealmObjects1);
{for(var i = 0, len = gdjs.MainSceneCode.GDTextRealmObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDTextRealmObjects1[i].getBehavior("Text").setText("Cảnh Giới: Phàm Nhân | Lv: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4))));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextRealm"), gdjs.MainSceneCode.GDTextRealmObjects1);
{for(var i = 0, len = gdjs.MainSceneCode.GDTextRealmObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDTextRealmObjects1[i].getBehavior("Text").setText("Cảnh Giới: Luyện Khí | Lv: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4))));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextRealm"), gdjs.MainSceneCode.GDTextRealmObjects1);
{for(var i = 0, len = gdjs.MainSceneCode.GDTextRealmObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDTextRealmObjects1[i].getBehavior("Text").setText("Cảnh Giới: Trúc Cơ | Lv: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4))));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextRealm"), gdjs.MainSceneCode.GDTextRealmObjects1);
{for(var i = 0, len = gdjs.MainSceneCode.GDTextRealmObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDTextRealmObjects1[i].getBehavior("Text").setText("Cảnh Giới: Kim Đan | Lv: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4))));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextRealm"), gdjs.MainSceneCode.GDTextRealmObjects1);
{for(var i = 0, len = gdjs.MainSceneCode.GDTextRealmObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDTextRealmObjects1[i].getBehavior("Text").setText("Cảnh Giới: Nguyên Anh | Lv: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4))));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 5);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextRealm"), gdjs.MainSceneCode.GDTextRealmObjects1);
{for(var i = 0, len = gdjs.MainSceneCode.GDTextRealmObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDTextRealmObjects1[i].getBehavior("Text").setText("Cảnh Giới: Hóa Thần | Lv: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4))));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextBreakNotice"), gdjs.MainSceneCode.GDTextBreakNoticeObjects1);
{for(var i = 0, len = gdjs.MainSceneCode.GDTextBreakNoticeObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDTextBreakNoticeObjects1[i].getBehavior("Text").setText("Chưa đủ tu vi phi thăng,cần tu luyện thêm !");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BreakNoticeHide");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextBreakNotice"), gdjs.MainSceneCode.GDTextBreakNoticeObjects1);
{for(var i = 0, len = gdjs.MainSceneCode.GDTextBreakNoticeObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDTextBreakNoticeObjects1[i].getBehavior("Text").setText("Chưa đạt giới hạn level,cần tăng cấp thêm!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BreakNoticeHide");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextBreakNotice"), gdjs.MainSceneCode.GDTextBreakNoticeObjects1);
{for(var i = 0, len = gdjs.MainSceneCode.GDTextBreakNoticeObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDTextBreakNoticeObjects1[i].getBehavior("Text").setText("Thiếu Linh Thạch,Cần Tìm Kiếm Thêm!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BreakNoticeHide");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "BreakNoticeHide") > 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextBreakNotice"), gdjs.MainSceneCode.GDTextBreakNoticeObjects1);
{for(var i = 0, len = gdjs.MainSceneCode.GDTextBreakNoticeObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDTextBreakNoticeObjects1[i].getBehavior("Text").setText("");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PetDragon"), gdjs.MainSceneCode.GDPetDragonObjects1);
{for(var i = 0, len = gdjs.MainSceneCode.GDPetDragonObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDPetDragonObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}
{for(var i = 0, len = gdjs.MainSceneCode.GDPetDragonObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDPetDragonObjects1[i].setZOrder(6);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(8).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PetSkill");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PetAttack");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PetDragon"), gdjs.MainSceneCode.GDPetDragonObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerAvatar"), gdjs.MainSceneCode.GDPlayerAvatarObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(7).add(120 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
{for(var i = 0, len = gdjs.MainSceneCode.GDPetDragonObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDPetDragonObjects1[i].setX((( gdjs.MainSceneCode.GDPlayerAvatarObjects1.length === 0 ) ? 0 :gdjs.MainSceneCode.GDPlayerAvatarObjects1[0].getCenterXInScene()) + 125);
}
}
{for(var i = 0, len = gdjs.MainSceneCode.GDPetDragonObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDPetDragonObjects1[i].setY((( gdjs.MainSceneCode.GDPlayerAvatarObjects1.length === 0 ) ? 0 :gdjs.MainSceneCode.GDPlayerAvatarObjects1[0].getCenterYInScene()) - 105 + Math.sin(gdjs.toRad(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)))) * 6);
}
}
{for(var i = 0, len = gdjs.MainSceneCode.GDPetDragonObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDPetDragonObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(8).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "PetSkill") > 30;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PetDragon"), gdjs.MainSceneCode.GDPetDragonObjects1);
{for(var i = 0, len = gdjs.MainSceneCode.GDPetDragonObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDPetDragonObjects1[i].getBehavior("Animation").setAnimationName("Attack");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PetAttack");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PetSkill");
}
{runtimeScene.getScene().getVariables().getFromIndex(8).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PetDragon"), gdjs.MainSceneCode.GDPetDragonObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerAvatar"), gdjs.MainSceneCode.GDPlayerAvatarObjects1);
{for(var i = 0, len = gdjs.MainSceneCode.GDPetDragonObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDPetDragonObjects1[i].setX((( gdjs.MainSceneCode.GDPlayerAvatarObjects1.length === 0 ) ? 0 :gdjs.MainSceneCode.GDPlayerAvatarObjects1[0].getCenterXInScene()) + 125);
}
}
{for(var i = 0, len = gdjs.MainSceneCode.GDPetDragonObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDPetDragonObjects1[i].setY((( gdjs.MainSceneCode.GDPlayerAvatarObjects1.length === 0 ) ? 0 :gdjs.MainSceneCode.GDPlayerAvatarObjects1[0].getCenterYInScene()) - 105);
}
}
{for(var i = 0, len = gdjs.MainSceneCode.GDPetDragonObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDPetDragonObjects1[i].getBehavior("Animation").setAnimationName("Attack");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "PetAttack") > 0.8;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PetDragon"), gdjs.MainSceneCode.GDPetDragonObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(8).setNumber(0);
}
{for(var i = 0, len = gdjs.MainSceneCode.GDPetDragonObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDPetDragonObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnOpenStage"), gdjs.MainSceneCode.GDBtnOpenStageObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDBtnOpenStageObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)));
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)));
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)));
}
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)));
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "StageScene", false);
}
}

}


};

gdjs.MainSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainSceneCode.GDPlayerAvatarObjects1.length = 0;
gdjs.MainSceneCode.GDPlayerAvatarObjects2.length = 0;
gdjs.MainSceneCode.GDBackgroundMainObjects1.length = 0;
gdjs.MainSceneCode.GDBackgroundMainObjects2.length = 0;
gdjs.MainSceneCode.GDTextRealmObjects1.length = 0;
gdjs.MainSceneCode.GDTextRealmObjects2.length = 0;
gdjs.MainSceneCode.GDTextCultivationObjects1.length = 0;
gdjs.MainSceneCode.GDTextCultivationObjects2.length = 0;
gdjs.MainSceneCode.GDTextStonesObjects1.length = 0;
gdjs.MainSceneCode.GDTextStonesObjects2.length = 0;
gdjs.MainSceneCode.GDBtnCultivateObjects1.length = 0;
gdjs.MainSceneCode.GDBtnCultivateObjects2.length = 0;
gdjs.MainSceneCode.GDBtnBreakthroughObjects1.length = 0;
gdjs.MainSceneCode.GDBtnBreakthroughObjects2.length = 0;
gdjs.MainSceneCode.GDTextLevelObjects1.length = 0;
gdjs.MainSceneCode.GDTextLevelObjects2.length = 0;
gdjs.MainSceneCode.GDTextBreakReqObjects1.length = 0;
gdjs.MainSceneCode.GDTextBreakReqObjects2.length = 0;
gdjs.MainSceneCode.GDTextBreakNoticeObjects1.length = 0;
gdjs.MainSceneCode.GDTextBreakNoticeObjects2.length = 0;
gdjs.MainSceneCode.GDPetDragonObjects1.length = 0;
gdjs.MainSceneCode.GDPetDragonObjects2.length = 0;
gdjs.MainSceneCode.GDBtnOpenStageObjects1.length = 0;
gdjs.MainSceneCode.GDBtnOpenStageObjects2.length = 0;

gdjs.MainSceneCode.eventsList1(runtimeScene);
gdjs.MainSceneCode.GDPlayerAvatarObjects1.length = 0;
gdjs.MainSceneCode.GDPlayerAvatarObjects2.length = 0;
gdjs.MainSceneCode.GDBackgroundMainObjects1.length = 0;
gdjs.MainSceneCode.GDBackgroundMainObjects2.length = 0;
gdjs.MainSceneCode.GDTextRealmObjects1.length = 0;
gdjs.MainSceneCode.GDTextRealmObjects2.length = 0;
gdjs.MainSceneCode.GDTextCultivationObjects1.length = 0;
gdjs.MainSceneCode.GDTextCultivationObjects2.length = 0;
gdjs.MainSceneCode.GDTextStonesObjects1.length = 0;
gdjs.MainSceneCode.GDTextStonesObjects2.length = 0;
gdjs.MainSceneCode.GDBtnCultivateObjects1.length = 0;
gdjs.MainSceneCode.GDBtnCultivateObjects2.length = 0;
gdjs.MainSceneCode.GDBtnBreakthroughObjects1.length = 0;
gdjs.MainSceneCode.GDBtnBreakthroughObjects2.length = 0;
gdjs.MainSceneCode.GDTextLevelObjects1.length = 0;
gdjs.MainSceneCode.GDTextLevelObjects2.length = 0;
gdjs.MainSceneCode.GDTextBreakReqObjects1.length = 0;
gdjs.MainSceneCode.GDTextBreakReqObjects2.length = 0;
gdjs.MainSceneCode.GDTextBreakNoticeObjects1.length = 0;
gdjs.MainSceneCode.GDTextBreakNoticeObjects2.length = 0;
gdjs.MainSceneCode.GDPetDragonObjects1.length = 0;
gdjs.MainSceneCode.GDPetDragonObjects2.length = 0;
gdjs.MainSceneCode.GDBtnOpenStageObjects1.length = 0;
gdjs.MainSceneCode.GDBtnOpenStageObjects2.length = 0;


return;

}

gdjs['MainSceneCode'] = gdjs.MainSceneCode;
