gdjs.BattleSceneCode = {};
gdjs.BattleSceneCode.localVariables = [];
gdjs.BattleSceneCode.idToCallbackMap = new Map();
gdjs.BattleSceneCode.GDTextBattleInfoObjects1= [];
gdjs.BattleSceneCode.GDTextBattleInfoObjects2= [];
gdjs.BattleSceneCode.GDBtnBackStageObjects1= [];
gdjs.BattleSceneCode.GDBtnBackStageObjects2= [];
gdjs.BattleSceneCode.GDBgMapObjects1= [];
gdjs.BattleSceneCode.GDBgMapObjects2= [];
gdjs.BattleSceneCode.GDEnemyNormalObjects1= [];
gdjs.BattleSceneCode.GDEnemyNormalObjects2= [];
gdjs.BattleSceneCode.GDEnemyBossObjects1= [];
gdjs.BattleSceneCode.GDEnemyBossObjects2= [];
gdjs.BattleSceneCode.GDPlayerAvatarObjects1= [];
gdjs.BattleSceneCode.GDPlayerAvatarObjects2= [];
gdjs.BattleSceneCode.GDBtnAttackObjects1= [];
gdjs.BattleSceneCode.GDBtnAttackObjects2= [];
gdjs.BattleSceneCode.GDTextEnemyInfoObjects1= [];
gdjs.BattleSceneCode.GDTextEnemyInfoObjects2= [];
gdjs.BattleSceneCode.GDTextBattleNoticeObjects1= [];
gdjs.BattleSceneCode.GDTextBattleNoticeObjects2= [];
gdjs.BattleSceneCode.GDBarBossHPObjects1= [];
gdjs.BattleSceneCode.GDBarBossHPObjects2= [];
gdjs.BattleSceneCode.GDBarPlayerManaObjects1= [];
gdjs.BattleSceneCode.GDBarPlayerManaObjects2= [];
gdjs.BattleSceneCode.GDBarPlayerHPObjects1= [];
gdjs.BattleSceneCode.GDBarPlayerHPObjects2= [];
gdjs.BattleSceneCode.GDBtnSkill1Objects1= [];
gdjs.BattleSceneCode.GDBtnSkill1Objects2= [];
gdjs.BattleSceneCode.GDBtnSkill2Objects1= [];
gdjs.BattleSceneCode.GDBtnSkill2Objects2= [];
gdjs.BattleSceneCode.GDBtnSkill3Objects1= [];
gdjs.BattleSceneCode.GDBtnSkill3Objects2= [];
gdjs.BattleSceneCode.GDTextSkillInfoObjects1= [];
gdjs.BattleSceneCode.GDTextSkillInfoObjects2= [];
gdjs.BattleSceneCode.GDBtnAttacksObjects1= [];
gdjs.BattleSceneCode.GDBtnAttacksObjects2= [];


gdjs.BattleSceneCode.userFunc0xacf798 = function GDJSInlineCode(runtimeScene) {
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
setText("TextBackStageLabel", "Trở Về");
setText("TextAttackLabel", "Tấn Công");
setText("TextC1Label", "Chiêu 1");
setText("TextC2Label", "Chiêu 2");
setText("TextC3Label", "Chiêu 3");

// ENG
if (isEN) {
  setText("TextBackStageLabel", "Back");
  setText("TextAttackLabel", "Attack");
  setText("TextC1Label", "Skill 1");
  setText("TextC2Label", "Skill 2");
  setText("TextC3Label", "Skill 3");
}
};
gdjs.BattleSceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.BattleSceneCode.userFunc0xacf798(runtimeScene);

}


};gdjs.BattleSceneCode.mapOfGDgdjs_9546BattleSceneCode_9546GDBtnBackStageObjects1Objects = Hashtable.newFrom({"BtnBackStage": gdjs.BattleSceneCode.GDBtnBackStageObjects1});
gdjs.BattleSceneCode.mapOfGDgdjs_9546BattleSceneCode_9546GDBtnAttackObjects1Objects = Hashtable.newFrom({"BtnAttack": gdjs.BattleSceneCode.GDBtnAttackObjects1});
gdjs.BattleSceneCode.mapOfGDgdjs_9546BattleSceneCode_9546GDBtnAttacksObjects1Objects = Hashtable.newFrom({"BtnAttacks": gdjs.BattleSceneCode.GDBtnAttacksObjects1});
gdjs.BattleSceneCode.mapOfGDgdjs_9546BattleSceneCode_9546GDBtnAttacksObjects1Objects = Hashtable.newFrom({"BtnAttacks": gdjs.BattleSceneCode.GDBtnAttacksObjects1});
gdjs.BattleSceneCode.mapOfGDgdjs_9546BattleSceneCode_9546GDBtnSkill1Objects1Objects = Hashtable.newFrom({"BtnSkill1": gdjs.BattleSceneCode.GDBtnSkill1Objects1});
gdjs.BattleSceneCode.mapOfGDgdjs_9546BattleSceneCode_9546GDBtnSkill1Objects1Objects = Hashtable.newFrom({"BtnSkill1": gdjs.BattleSceneCode.GDBtnSkill1Objects1});
gdjs.BattleSceneCode.mapOfGDgdjs_9546BattleSceneCode_9546GDBtnSkill1Objects1Objects = Hashtable.newFrom({"BtnSkill1": gdjs.BattleSceneCode.GDBtnSkill1Objects1});
gdjs.BattleSceneCode.mapOfGDgdjs_9546BattleSceneCode_9546GDBtnSkill2Objects1Objects = Hashtable.newFrom({"BtnSkill2": gdjs.BattleSceneCode.GDBtnSkill2Objects1});
gdjs.BattleSceneCode.mapOfGDgdjs_9546BattleSceneCode_9546GDBtnSkill2Objects1Objects = Hashtable.newFrom({"BtnSkill2": gdjs.BattleSceneCode.GDBtnSkill2Objects1});
gdjs.BattleSceneCode.mapOfGDgdjs_9546BattleSceneCode_9546GDBtnSkill2Objects1Objects = Hashtable.newFrom({"BtnSkill2": gdjs.BattleSceneCode.GDBtnSkill2Objects1});
gdjs.BattleSceneCode.mapOfGDgdjs_9546BattleSceneCode_9546GDBtnSkill3Objects1Objects = Hashtable.newFrom({"BtnSkill3": gdjs.BattleSceneCode.GDBtnSkill3Objects1});
gdjs.BattleSceneCode.mapOfGDgdjs_9546BattleSceneCode_9546GDBtnSkill3Objects1Objects = Hashtable.newFrom({"BtnSkill3": gdjs.BattleSceneCode.GDBtnSkill3Objects1});
gdjs.BattleSceneCode.mapOfGDgdjs_9546BattleSceneCode_9546GDBtnSkill3Objects1Objects = Hashtable.newFrom({"BtnSkill3": gdjs.BattleSceneCode.GDBtnSkill3Objects1});
gdjs.BattleSceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerAvatar"), gdjs.BattleSceneCode.GDPlayerAvatarObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(10 + gdjs.random(10));
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(20 + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) * 8 + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) * 50);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(60 + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) * 40);
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)));
}
{runtimeScene.getScene().getVariables().getFromIndex(8).setNumber(2200 + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) * 1000);
}
{runtimeScene.getScene().getVariables().getFromIndex(9).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8)));
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setString("");
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setString("");
}
{runtimeScene.getScene().getVariables().getFromIndex(13).setNumber(146 + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) * 50 + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) * 50);
}
{runtimeScene.getScene().getVariables().getFromIndex(14).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(13)));
}
{runtimeScene.getScene().getVariables().getFromIndex(15).setNumber(80 + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) * 20);
}
{runtimeScene.getScene().getVariables().getFromIndex(16).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(15)));
}
{runtimeScene.getScene().getVariables().getFromIndex(28).setNumber((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) - 1) * 5);
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDPlayerAvatarObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDPlayerAvatarObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(28)));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(29).setNumber(20);
}
{runtimeScene.getScene().getVariables().getFromIndex(30).setNumber(35);
}
{runtimeScene.getScene().getVariables().getFromIndex(31).setNumber(60);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("TextBattleInfo"), gdjs.BattleSceneCode.GDTextBattleInfoObjects1);
{for(var i = 0, len = gdjs.BattleSceneCode.GDTextBattleInfoObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDTextBattleInfoObjects1[i].getBehavior("Text").setText("Đang khiêu chiến Ải " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7))) + gdjs.evtTools.string.newLine() + "Level: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))) + gdjs.evtTools.string.newLine() + "Realm: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))) + gdjs.evtTools.string.newLine() + "Tu Vi: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3))) + gdjs.evtTools.string.newLine() + "Linh Thạch: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnBackStage"), gdjs.BattleSceneCode.GDBtnBackStageObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BattleSceneCode.mapOfGDgdjs_9546BattleSceneCode_9546GDBtnBackStageObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "StageScene", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BgMap"), gdjs.BattleSceneCode.GDBgMapObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemyBoss"), gdjs.BattleSceneCode.GDEnemyBossObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemyNormal"), gdjs.BattleSceneCode.GDEnemyNormalObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerAvatar"), gdjs.BattleSceneCode.GDPlayerAvatarObjects1);
{for(var i = 0, len = gdjs.BattleSceneCode.GDBgMapObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDBgMapObjects1[i].setX(0);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDBgMapObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDBgMapObjects1[i].setY(0);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDBgMapObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDBgMapObjects1[i].setZOrder(0);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDPlayerAvatarObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDPlayerAvatarObjects1[i].setX(90);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDPlayerAvatarObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDPlayerAvatarObjects1[i].setY(700);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDPlayerAvatarObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDPlayerAvatarObjects1[i].setZOrder(5);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyNormalObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyNormalObjects1[i].setX(430);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyNormalObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyNormalObjects1[i].setY(650);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyNormalObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyNormalObjects1[i].setZOrder(5);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyBossObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyBossObjects1[i].setX(2000);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyBossObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyBossObjects1[i].setY(540);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyBossObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyBossObjects1[i].setZOrder(6);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() >= 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() <= 10);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BgMap"), gdjs.BattleSceneCode.GDBgMapObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemyBoss"), gdjs.BattleSceneCode.GDEnemyBossObjects1);
{for(var i = 0, len = gdjs.BattleSceneCode.GDBgMapObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDBgMapObjects1[i].getBehavior("Animation").setAnimationName("LinhXuanCoc");
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyBossObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyBossObjects1[i].getBehavior("Animation").setAnimationName("ThanhMocXa");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setString("Thanh Mộc Xà");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() >= 11);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() <= 20);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BgMap"), gdjs.BattleSceneCode.GDBgMapObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemyBoss"), gdjs.BattleSceneCode.GDEnemyBossObjects1);
{for(var i = 0, len = gdjs.BattleSceneCode.GDBgMapObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDBgMapObjects1[i].getBehavior("Animation").setAnimationName("RungUMinh");
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyBossObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyBossObjects1[i].getBehavior("Animation").setAnimationName("UMinhQuyVuong");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setString("U Minh Quỷ Vương");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() >= 21);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() <= 30);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BgMap"), gdjs.BattleSceneCode.GDBgMapObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemyBoss"), gdjs.BattleSceneCode.GDEnemyBossObjects1);
{for(var i = 0, len = gdjs.BattleSceneCode.GDBgMapObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDBgMapObjects1[i].getBehavior("Animation").setAnimationName("ThuNguyetHo");
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyBossObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyBossObjects1[i].getBehavior("Animation").setAnimationName("ThuNguyetYeuHo");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setString("Thu Nguyệt Yêu Hồ");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() >= 31);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() <= 40);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BgMap"), gdjs.BattleSceneCode.GDBgMapObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemyBoss"), gdjs.BattleSceneCode.GDEnemyBossObjects1);
{for(var i = 0, len = gdjs.BattleSceneCode.GDBgMapObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDBgMapObjects1[i].getBehavior("Animation").setAnimationName("TuyetSonVinhCuu");
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyBossObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyBossObjects1[i].getBehavior("Animation").setAnimationName("BangLongVinhHang");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setString("Băng Long Vĩnh Hằng");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() >= 41);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() <= 50);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BgMap"), gdjs.BattleSceneCode.GDBgMapObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemyBoss"), gdjs.BattleSceneCode.GDEnemyBossObjects1);
{for(var i = 0, len = gdjs.BattleSceneCode.GDBgMapObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDBgMapObjects1[i].getBehavior("Animation").setAnimationName("CongDiaNguc");
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyBossObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyBossObjects1[i].getBehavior("Animation").setAnimationName("DiemMaHoPhap");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setString("Diêm Ma Hộ Pháp");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() >= 51);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() <= 60);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BgMap"), gdjs.BattleSceneCode.GDBgMapObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemyBoss"), gdjs.BattleSceneCode.GDEnemyBossObjects1);
{for(var i = 0, len = gdjs.BattleSceneCode.GDBgMapObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDBgMapObjects1[i].getBehavior("Animation").setAnimationName("HaViemSon");
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyBossObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyBossObjects1[i].getBehavior("Animation").setAnimationName("XichViemLang");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setString("Xích Viêm Lang");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() >= 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() <= 4);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyNormal"), gdjs.BattleSceneCode.GDEnemyNormalObjects1);
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyNormalObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyNormalObjects1[i].getBehavior("Animation").setAnimationName("LinhHo");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setString("Linh Hồ");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() >= 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() <= 10);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyNormal"), gdjs.BattleSceneCode.GDEnemyNormalObjects1);
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyNormalObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyNormalObjects1[i].getBehavior("Animation").setAnimationName("ThaoMocTinh");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setString("Thảo Mộc Tinh");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() >= 11);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() <= 14);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyNormal"), gdjs.BattleSceneCode.GDEnemyNormalObjects1);
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyNormalObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyNormalObjects1[i].getBehavior("Animation").setAnimationName("UHon");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setString("U Hồn");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() >= 15);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() <= 20);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyNormal"), gdjs.BattleSceneCode.GDEnemyNormalObjects1);
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyNormalObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyNormalObjects1[i].getBehavior("Animation").setAnimationName("HacMocQuy");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setString("Hắc Môn Quỷ");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() >= 21);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() <= 24);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyNormal"), gdjs.BattleSceneCode.GDEnemyNormalObjects1);
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyNormalObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyNormalObjects1[i].getBehavior("Animation").setAnimationName("NguyetAnhHo");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setString("Nguyệt Ảnh Hồ");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() >= 25);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() <= 30);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyNormal"), gdjs.BattleSceneCode.GDEnemyNormalObjects1);
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyNormalObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyNormalObjects1[i].getBehavior("Animation").setAnimationName("HoDiepTien");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setString("Hồ Điệp Tiên");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() >= 31);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() <= 34);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyNormal"), gdjs.BattleSceneCode.GDEnemyNormalObjects1);
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyNormalObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyNormalObjects1[i].getBehavior("Animation").setAnimationName("BangLang");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setString("Băng Lang");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() >= 35);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() <= 40);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyNormal"), gdjs.BattleSceneCode.GDEnemyNormalObjects1);
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyNormalObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyNormalObjects1[i].getBehavior("Animation").setAnimationName("TuyetLinh");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setString("Tuyết Linh");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() >= 41);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() <= 44);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyNormal"), gdjs.BattleSceneCode.GDEnemyNormalObjects1);
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyNormalObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyNormalObjects1[i].getBehavior("Animation").setAnimationName("HuyetQuy");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setString("Huyết Quỷ");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() >= 45);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() <= 50);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyNormal"), gdjs.BattleSceneCode.GDEnemyNormalObjects1);
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyNormalObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyNormalObjects1[i].getBehavior("Animation").setAnimationName("DiaHoaMa");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setString("Địa Hỏa Ma");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() >= 51);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() <= 54);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyNormal"), gdjs.BattleSceneCode.GDEnemyNormalObjects1);
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyNormalObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyNormalObjects1[i].getBehavior("Animation").setAnimationName("HoaHo");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setString("Hỏa Hồ");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() >= 55);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() <= 60);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyNormal"), gdjs.BattleSceneCode.GDEnemyNormalObjects1);
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyNormalObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyNormalObjects1[i].getBehavior("Animation").setAnimationName("ViemDieu");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setString("Viêm Điểu");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() == 10);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() == 20);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() == 30);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() == 40);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() == 50);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() == 60);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)));
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyNormal"), gdjs.BattleSceneCode.GDEnemyNormalObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextBattleNotice"), gdjs.BattleSceneCode.GDTextBattleNoticeObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextEnemyInfo"), gdjs.BattleSceneCode.GDTextEnemyInfoObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)));
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyNormalObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyNormalObjects1[i].setX(380 + gdjs.random(160));
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyNormalObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyNormalObjects1[i].setY(610 + gdjs.random(120));
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDTextBattleNoticeObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDTextBattleNoticeObjects1[i].getBehavior("Text").setText("Đã tiêu diệt " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(11)) + "! " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1))) + "/" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BattleNoticeHide");
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDTextEnemyInfoObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDTextEnemyInfoObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(11)) + gdjs.evtTools.string.newLine() + "HP: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7))) + " / " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6))) + gdjs.evtTools.string.newLine() + "Đã diệt: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1))) + " / " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TextEnemyInfo");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 0);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextBattleNotice"), gdjs.BattleSceneCode.GDTextBattleNoticeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}
{runtimeScene.getGame().getVariables().getFromIndex(3).add(40 + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) * 30);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).add(1000 + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) * 800);
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDTextBattleNoticeObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDTextBattleNoticeObjects1[i].getBehavior("Text").setText("Đã dọn sạch quái! Vượt ải thành công.");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BattleNoticeHide");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BattleWinBack");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 0);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyBoss"), gdjs.BattleSceneCode.GDEnemyBossObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemyNormal"), gdjs.BattleSceneCode.GDEnemyNormalObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextBattleNotice"), gdjs.BattleSceneCode.GDTextBattleNoticeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(1);
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyNormalObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyNormalObjects1[i].setX(2000);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyBossObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyBossObjects1[i].setX(295);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyBossObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyBossObjects1[i].setY(620);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDTextBattleNoticeObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDTextBattleNoticeObjects1[i].getBehavior("Text").setText("BOSS " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(12)) + " xuất hiện!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BattleNoticeHide");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnAttack"), gdjs.BattleSceneCode.GDBtnAttackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BattleSceneCode.mapOfGDgdjs_9546BattleSceneCode_9546GDBtnAttackObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerAvatar"), gdjs.BattleSceneCode.GDPlayerAvatarObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextBattleNotice"), gdjs.BattleSceneCode.GDTextBattleNoticeObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextEnemyInfo"), gdjs.BattleSceneCode.GDTextEnemyInfoObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(9).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)));
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDPlayerAvatarObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDPlayerAvatarObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(28)) + 1);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDTextBattleNoticeObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDTextBattleNoticeObjects1[i].getBehavior("Text").setText("Tấn công " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(12)) + " -" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5))) + " HP!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BattleNoticeHide");
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDTextEnemyInfoObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDTextEnemyInfoObjects1[i].getBehavior("Text").setText("BOSS: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(12)) + gdjs.evtTools.string.newLine() + "HP: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(9))) + " / " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8))));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PlayerAnim");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TextEnemyInfo");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(9).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 0);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextBattleNotice"), gdjs.BattleSceneCode.GDTextBattleNoticeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}
{runtimeScene.getGame().getVariables().getFromIndex(3).add(80 + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) * 50);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).add(3000 + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) * 1200);
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDTextBattleNoticeObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDTextBattleNoticeObjects1[i].getBehavior("Text").setText("Tiêu diệt Boss thành công! " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(12)) + " đã bị trấn áp.");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BattleNoticeHide");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BattleWinBack");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)));
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(8).add(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "BattleWinBack") > 2;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "StageScene", false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BarPlayerHP"), gdjs.BattleSceneCode.GDBarPlayerHPObjects1);
gdjs.copyArray(runtimeScene.getObjects("BarPlayerMana"), gdjs.BattleSceneCode.GDBarPlayerManaObjects1);
{for(var i = 0, len = gdjs.BattleSceneCode.GDBarPlayerHPObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDBarPlayerHPObjects1[i].SetMaxValue(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(15)), null);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDBarPlayerHPObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDBarPlayerHPObjects1[i].SetMaxValue(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(14)), null);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDBarPlayerManaObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDBarPlayerManaObjects1[i].SetMaxValue(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(15)), null);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDBarPlayerManaObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDBarPlayerManaObjects1[i].SetMaxValue(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)), null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BarBossHP"), gdjs.BattleSceneCode.GDBarBossHPObjects1);
{for(var i = 0, len = gdjs.BattleSceneCode.GDBarBossHPObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDBarBossHPObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BarBossHP"), gdjs.BattleSceneCode.GDBarBossHPObjects1);
{for(var i = 0, len = gdjs.BattleSceneCode.GDBarBossHPObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDBarBossHPObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(16).getAsNumber() < 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(16).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(15).setNumber(146 + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) * 50 + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) * 50);
}
{runtimeScene.getScene().getVariables().getFromIndex(16).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(15)));
}
{runtimeScene.getScene().getVariables().getFromIndex(17).setString("");
}
{runtimeScene.getScene().getVariables().getFromIndex(18).setString("");
}
{runtimeScene.getScene().getVariables().getFromIndex(19).setString("");
}
{runtimeScene.getScene().getVariables().getFromIndex(20).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(21).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(22).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(23).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(24).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(25).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(26).setString("");
}
{runtimeScene.getScene().getVariables().getFromIndex(27).setString("");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(26).setString("Quân Thuật");
}
{runtimeScene.getScene().getVariables().getFromIndex(27).setString("Thuật Pháp");
}
{runtimeScene.getScene().getVariables().getFromIndex(17).setString("Bùa Diệu Tâm");
}
{runtimeScene.getScene().getVariables().getFromIndex(20).setNumber(15);
}
{runtimeScene.getScene().getVariables().getFromIndex(23).setNumber(1.6);
}
{runtimeScene.getScene().getVariables().getFromIndex(18).setString("Trấn Yểm Tà");
}
{runtimeScene.getScene().getVariables().getFromIndex(21).setNumber(25);
}
{runtimeScene.getScene().getVariables().getFromIndex(24).setNumber(2.4);
}
{runtimeScene.getScene().getVariables().getFromIndex(19).setString("Thập Lục Chú");
}
{runtimeScene.getScene().getVariables().getFromIndex(22).setNumber(40);
}
{runtimeScene.getScene().getVariables().getFromIndex(25).setNumber(4);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(26).setString("Mộc Linh Dao");
}
{runtimeScene.getScene().getVariables().getFromIndex(27).setString("Mộc");
}
{runtimeScene.getScene().getVariables().getFromIndex(17).setString("Mộc Đàm");
}
{runtimeScene.getScene().getVariables().getFromIndex(20).setNumber(12);
}
{runtimeScene.getScene().getVariables().getFromIndex(23).setNumber(1.4);
}
{runtimeScene.getScene().getVariables().getFromIndex(18).setString("Sinh Mệnh Chú");
}
{runtimeScene.getScene().getVariables().getFromIndex(21).setNumber(22);
}
{runtimeScene.getScene().getVariables().getFromIndex(24).setNumber(1.8);
}
{runtimeScene.getScene().getVariables().getFromIndex(19).setString("Vạn Mộc Chủ");
}
{runtimeScene.getScene().getVariables().getFromIndex(22).setNumber(38);
}
{runtimeScene.getScene().getVariables().getFromIndex(25).setNumber(3.3);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(26).setString("Xích Dương");
}
{runtimeScene.getScene().getVariables().getFromIndex(27).setString("Hỏa");
}
{runtimeScene.getScene().getVariables().getFromIndex(17).setString("Viêm Cầu");
}
{runtimeScene.getScene().getVariables().getFromIndex(20).setNumber(15);
}
{runtimeScene.getScene().getVariables().getFromIndex(23).setNumber(1.7);
}
{runtimeScene.getScene().getVariables().getFromIndex(18).setString("Hỏa Vũ");
}
{runtimeScene.getScene().getVariables().getFromIndex(21).setNumber(28);
}
{runtimeScene.getScene().getVariables().getFromIndex(24).setNumber(2.6);
}
{runtimeScene.getScene().getVariables().getFromIndex(19).setString("Trấn Hỏa Bạo");
}
{runtimeScene.getScene().getVariables().getFromIndex(22).setNumber(45);
}
{runtimeScene.getScene().getVariables().getFromIndex(25).setNumber(4.6);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber() == 4);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(26).setString("Nhật Lôi Ảnh");
}
{runtimeScene.getScene().getVariables().getFromIndex(27).setString("Lôi");
}
{runtimeScene.getScene().getVariables().getFromIndex(17).setString("Lôi Nhận Thiên");
}
{runtimeScene.getScene().getVariables().getFromIndex(20).setNumber(14);
}
{runtimeScene.getScene().getVariables().getFromIndex(23).setNumber(1.8);
}
{runtimeScene.getScene().getVariables().getFromIndex(18).setString("Nhật Xung Lôi");
}
{runtimeScene.getScene().getVariables().getFromIndex(21).setNumber(30);
}
{runtimeScene.getScene().getVariables().getFromIndex(24).setNumber(3);
}
{runtimeScene.getScene().getVariables().getFromIndex(19).setString("Thiên Lôi Trảm Phá");
}
{runtimeScene.getScene().getVariables().getFromIndex(22).setNumber(50);
}
{runtimeScene.getScene().getVariables().getFromIndex(25).setNumber(5);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber() == 5);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(26).setString("Nguyệt Tôn Ly");
}
{runtimeScene.getScene().getVariables().getFromIndex(27).setString("Ám Dạ");
}
{runtimeScene.getScene().getVariables().getFromIndex(17).setString("Nguyệt Ảnh Dạ");
}
{runtimeScene.getScene().getVariables().getFromIndex(20).setNumber(16);
}
{runtimeScene.getScene().getVariables().getFromIndex(23).setNumber(1.7);
}
{runtimeScene.getScene().getVariables().getFromIndex(18).setString("Huyễn Mộng");
}
{runtimeScene.getScene().getVariables().getFromIndex(21).setNumber(32);
}
{runtimeScene.getScene().getVariables().getFromIndex(24).setNumber(2.9);
}
{runtimeScene.getScene().getVariables().getFromIndex(19).setString("Huyết Thực");
}
{runtimeScene.getScene().getVariables().getFromIndex(22).setNumber(50);
}
{runtimeScene.getScene().getVariables().getFromIndex(25).setNumber(4.8);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber() == 6);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(26).setString("Thiên Huyền Chủ");
}
{runtimeScene.getScene().getVariables().getFromIndex(27).setString("Quang Dạ");
}
{runtimeScene.getScene().getVariables().getFromIndex(17).setString("Quang Kiếm");
}
{runtimeScene.getScene().getVariables().getFromIndex(20).setNumber(18);
}
{runtimeScene.getScene().getVariables().getFromIndex(23).setNumber(2);
}
{runtimeScene.getScene().getVariables().getFromIndex(18).setString("Thánh Linh Ấn");
}
{runtimeScene.getScene().getVariables().getFromIndex(21).setNumber(32);
}
{runtimeScene.getScene().getVariables().getFromIndex(24).setNumber(2.9);
}
{runtimeScene.getScene().getVariables().getFromIndex(19).setString("Thiên Quang Phán Quyết");
}
{runtimeScene.getScene().getVariables().getFromIndex(22).setNumber(60);
}
{runtimeScene.getScene().getVariables().getFromIndex(25).setNumber(6);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BarPlayerMana"), gdjs.BattleSceneCode.GDBarPlayerManaObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextSkillInfo"), gdjs.BattleSceneCode.GDTextSkillInfoObjects1);
{for(var i = 0, len = gdjs.BattleSceneCode.GDBarPlayerManaObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDBarPlayerManaObjects1[i].SetMaxValue(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(15)), null);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDBarPlayerManaObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDBarPlayerManaObjects1[i].SetMaxValue(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(16)), null);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDTextSkillInfoObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDTextSkillInfoObjects1[i].getBehavior("Text").setText("Nhân vật: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(26)) + " | Hệ: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(27)) + gdjs.evtTools.string.newLine() + "Skill 1: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(17)) + " - " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20))) + " Mana" + gdjs.evtTools.string.newLine() + "Skill 2: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(18)) + " - " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21))) + " Mana" + gdjs.evtTools.string.newLine() + "Skill 3: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(19)) + " - " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(22))) + " Mana");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnAttacks"), gdjs.BattleSceneCode.GDBtnAttacksObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BattleSceneCode.mapOfGDgdjs_9546BattleSceneCode_9546GDBtnAttacksObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerAvatar"), gdjs.BattleSceneCode.GDPlayerAvatarObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextBattleNotice"), gdjs.BattleSceneCode.GDTextBattleNoticeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(9).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)));
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDPlayerAvatarObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDPlayerAvatarObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(28)) + 1);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDTextBattleNoticeObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDTextBattleNoticeObjects1[i].getBehavior("Text").setText("Tấn công " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(12)) + " -" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5))) + " HP!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BattleNoticeHide");
}
{runtimeScene.getScene().getVariables().getFromIndex(16).add(12);
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDTextBattleNoticeObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDTextBattleNoticeObjects1[i].getBehavior("Text").setText("Tấn công " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(11)) + " -" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5))) + " HP! Mana +8");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PlayerAnim");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BattleNoticeHide");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnAttacks"), gdjs.BattleSceneCode.GDBtnAttacksObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BattleSceneCode.mapOfGDgdjs_9546BattleSceneCode_9546GDBtnAttacksObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerAvatar"), gdjs.BattleSceneCode.GDPlayerAvatarObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextBattleNotice"), gdjs.BattleSceneCode.GDTextBattleNoticeObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextEnemyInfo"), gdjs.BattleSceneCode.GDTextEnemyInfoObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(9).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)));
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDPlayerAvatarObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDPlayerAvatarObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(28)) + 1);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDTextBattleNoticeObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDTextBattleNoticeObjects1[i].getBehavior("Text").setText("Tấn công " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(12)) + " -" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5))) + " HP!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BattleNoticeHide");
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDTextEnemyInfoObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDTextEnemyInfoObjects1[i].getBehavior("Text").setText("BOSS: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(12)) + gdjs.evtTools.string.newLine() + "HP: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(9))) + " / " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(8))));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TextEnemyInfo");
}
{runtimeScene.getScene().getVariables().getFromIndex(16).add(12);
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDTextEnemyInfoObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDTextEnemyInfoObjects1[i].getBehavior("Text").setText("Tấn công " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(12)) + " -" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5))) + " HP! Mana +8");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PlayerAnim");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BattleNoticeHide");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnSkill1"), gdjs.BattleSceneCode.GDBtnSkill1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BattleSceneCode.mapOfGDgdjs_9546BattleSceneCode_9546GDBtnSkill1Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(16).getAsNumber() >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)));
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyNormal"), gdjs.BattleSceneCode.GDEnemyNormalObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerAvatar"), gdjs.BattleSceneCode.GDPlayerAvatarObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextBattleNotice"), gdjs.BattleSceneCode.GDTextBattleNoticeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(16).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)));
}
{runtimeScene.getScene().getVariables().getFromIndex(7).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(23)));
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDPlayerAvatarObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDPlayerAvatarObjects1[i].setX(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(32)) + 45);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDPlayerAvatarObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDPlayerAvatarObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(28)) + 2);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyNormalObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyNormalObjects1[i].getBehavior("Opacity").setOpacity(120);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDTextBattleNoticeObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDTextBattleNoticeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(17)) + " đánh " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(11)) + " -" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(23))) + " HP!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PlayerBack");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemyHitFlash");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PlayerAnim");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BattleNoticeHide");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnSkill1"), gdjs.BattleSceneCode.GDBtnSkill1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BattleSceneCode.mapOfGDgdjs_9546BattleSceneCode_9546GDBtnSkill1Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(16).getAsNumber() >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)));
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyBoss"), gdjs.BattleSceneCode.GDEnemyBossObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerAvatar"), gdjs.BattleSceneCode.GDPlayerAvatarObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextBattleNotice"), gdjs.BattleSceneCode.GDTextBattleNoticeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(16).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)));
}
{runtimeScene.getScene().getVariables().getFromIndex(7).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(23)));
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDPlayerAvatarObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDPlayerAvatarObjects1[i].setX(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(32)) + 45);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDPlayerAvatarObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDPlayerAvatarObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(28)) + 2);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyBossObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyBossObjects1[i].getBehavior("Opacity").setOpacity(120);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDTextBattleNoticeObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDTextBattleNoticeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(17)) + " đánh " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(12)) + " -" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(23))) + " HP!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PlayerBack");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemyHitFlash");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PlayerAnim");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BattleNoticeHide");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnSkill1"), gdjs.BattleSceneCode.GDBtnSkill1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BattleSceneCode.mapOfGDgdjs_9546BattleSceneCode_9546GDBtnSkill1Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(16).getAsNumber() >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(20)));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < 2);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextBattleNotice"), gdjs.BattleSceneCode.GDTextBattleNoticeObjects1);
{for(var i = 0, len = gdjs.BattleSceneCode.GDTextBattleNoticeObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDTextBattleNoticeObjects1[i].getBehavior("Text").setText("Không đủ Mana để dùng " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(17)) + "!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BattleNoticeHide");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnSkill2"), gdjs.BattleSceneCode.GDBtnSkill2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BattleSceneCode.mapOfGDgdjs_9546BattleSceneCode_9546GDBtnSkill2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(16).getAsNumber() >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21)));
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyNormal"), gdjs.BattleSceneCode.GDEnemyNormalObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerAvatar"), gdjs.BattleSceneCode.GDPlayerAvatarObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextBattleNotice"), gdjs.BattleSceneCode.GDTextBattleNoticeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(16).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21)));
}
{runtimeScene.getScene().getVariables().getFromIndex(7).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(24)));
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDPlayerAvatarObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDPlayerAvatarObjects1[i].setX(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(32)) + 45);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDPlayerAvatarObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDPlayerAvatarObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(28)) + 3);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyNormalObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyNormalObjects1[i].getBehavior("Opacity").setOpacity(120);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDTextBattleNoticeObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDTextBattleNoticeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(18)) + " đánh " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(11)) + " -" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(24))) + " HP!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PlayerBack");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemyHitFlash");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PlayerAnim");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BattleNoticeHide");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnSkill2"), gdjs.BattleSceneCode.GDBtnSkill2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BattleSceneCode.mapOfGDgdjs_9546BattleSceneCode_9546GDBtnSkill2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(16).getAsNumber() >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21)));
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyBoss"), gdjs.BattleSceneCode.GDEnemyBossObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerAvatar"), gdjs.BattleSceneCode.GDPlayerAvatarObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextBattleNotice"), gdjs.BattleSceneCode.GDTextBattleNoticeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(16).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21)));
}
{runtimeScene.getScene().getVariables().getFromIndex(7).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(24)));
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDPlayerAvatarObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDPlayerAvatarObjects1[i].setX(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(32)) + 45);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDPlayerAvatarObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDPlayerAvatarObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(28)) + 3);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyBossObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyBossObjects1[i].getBehavior("Opacity").setOpacity(120);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDTextBattleNoticeObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDTextBattleNoticeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(18)) + " đánh " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(12)) + " -" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(24))) + " HP!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PlayerBack");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemyHitFlash");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PlayerAnim");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BattleNoticeHide");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnSkill2"), gdjs.BattleSceneCode.GDBtnSkill2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BattleSceneCode.mapOfGDgdjs_9546BattleSceneCode_9546GDBtnSkill2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(16).getAsNumber() >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(21)));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < 2);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextBattleNotice"), gdjs.BattleSceneCode.GDTextBattleNoticeObjects1);
{for(var i = 0, len = gdjs.BattleSceneCode.GDTextBattleNoticeObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDTextBattleNoticeObjects1[i].getBehavior("Text").setText("Không đủ Mana để dùng " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(18)) + "!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BattleNoticeHide");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnSkill3"), gdjs.BattleSceneCode.GDBtnSkill3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BattleSceneCode.mapOfGDgdjs_9546BattleSceneCode_9546GDBtnSkill3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(16).getAsNumber() >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(22)));
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyNormal"), gdjs.BattleSceneCode.GDEnemyNormalObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerAvatar"), gdjs.BattleSceneCode.GDPlayerAvatarObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextBattleNotice"), gdjs.BattleSceneCode.GDTextBattleNoticeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(16).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(22)));
}
{runtimeScene.getScene().getVariables().getFromIndex(7).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(25)));
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDPlayerAvatarObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDPlayerAvatarObjects1[i].setX(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(32)) + 45);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDPlayerAvatarObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDPlayerAvatarObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(28)) + 4);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyNormalObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyNormalObjects1[i].getBehavior("Opacity").setOpacity(120);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDTextBattleNoticeObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDTextBattleNoticeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(19)) + " đánh " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(11)) + " -" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(25))) + " HP!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PlayerBack");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemyHitFlash");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PlayerAnim");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BattleNoticeHide");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnSkill3"), gdjs.BattleSceneCode.GDBtnSkill3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BattleSceneCode.mapOfGDgdjs_9546BattleSceneCode_9546GDBtnSkill3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(16).getAsNumber() >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(22)));
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyBoss"), gdjs.BattleSceneCode.GDEnemyBossObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerAvatar"), gdjs.BattleSceneCode.GDPlayerAvatarObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextBattleNotice"), gdjs.BattleSceneCode.GDTextBattleNoticeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(16).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(22)));
}
{runtimeScene.getScene().getVariables().getFromIndex(7).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(25)));
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDPlayerAvatarObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDPlayerAvatarObjects1[i].setX(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(32)) + 45);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDPlayerAvatarObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDPlayerAvatarObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(28)) + 4);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyBossObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyBossObjects1[i].getBehavior("Opacity").setOpacity(120);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDTextBattleNoticeObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDTextBattleNoticeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(19)) + " đánh " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(12)) + " -" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(25))) + " HP!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PlayerBack");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemyHitFlash");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PlayerAnim");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BattleNoticeHide");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnSkill3"), gdjs.BattleSceneCode.GDBtnSkill3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BattleSceneCode.mapOfGDgdjs_9546BattleSceneCode_9546GDBtnSkill3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(16).getAsNumber() >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(22)));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < 2);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextBattleNotice"), gdjs.BattleSceneCode.GDTextBattleNoticeObjects1);
{for(var i = 0, len = gdjs.BattleSceneCode.GDTextBattleNoticeObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDTextBattleNoticeObjects1[i].getBehavior("Text").setText("Không đủ Mana để dùng " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(19)) + "!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BattleNoticeHide");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ManaRegen") > 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(16).getAsNumber() < runtimeScene.getScene().getVariables().getFromIndex(15).getAsNumber());
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(16).add(3);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ManaRegen");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(16).getAsNumber() > runtimeScene.getScene().getVariables().getFromIndex(15).getAsNumber());
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(16).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(15)));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "PlayerAnim") > 0.7;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextBattleNotice"), gdjs.BattleSceneCode.GDTextBattleNoticeObjects1);
{for(var i = 0, len = gdjs.BattleSceneCode.GDTextBattleNoticeObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDTextBattleNoticeObjects1[i].getBehavior("Text").setText("");
}
}
}

}


};

gdjs.BattleSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BattleSceneCode.GDTextBattleInfoObjects1.length = 0;
gdjs.BattleSceneCode.GDTextBattleInfoObjects2.length = 0;
gdjs.BattleSceneCode.GDBtnBackStageObjects1.length = 0;
gdjs.BattleSceneCode.GDBtnBackStageObjects2.length = 0;
gdjs.BattleSceneCode.GDBgMapObjects1.length = 0;
gdjs.BattleSceneCode.GDBgMapObjects2.length = 0;
gdjs.BattleSceneCode.GDEnemyNormalObjects1.length = 0;
gdjs.BattleSceneCode.GDEnemyNormalObjects2.length = 0;
gdjs.BattleSceneCode.GDEnemyBossObjects1.length = 0;
gdjs.BattleSceneCode.GDEnemyBossObjects2.length = 0;
gdjs.BattleSceneCode.GDPlayerAvatarObjects1.length = 0;
gdjs.BattleSceneCode.GDPlayerAvatarObjects2.length = 0;
gdjs.BattleSceneCode.GDBtnAttackObjects1.length = 0;
gdjs.BattleSceneCode.GDBtnAttackObjects2.length = 0;
gdjs.BattleSceneCode.GDTextEnemyInfoObjects1.length = 0;
gdjs.BattleSceneCode.GDTextEnemyInfoObjects2.length = 0;
gdjs.BattleSceneCode.GDTextBattleNoticeObjects1.length = 0;
gdjs.BattleSceneCode.GDTextBattleNoticeObjects2.length = 0;
gdjs.BattleSceneCode.GDBarBossHPObjects1.length = 0;
gdjs.BattleSceneCode.GDBarBossHPObjects2.length = 0;
gdjs.BattleSceneCode.GDBarPlayerManaObjects1.length = 0;
gdjs.BattleSceneCode.GDBarPlayerManaObjects2.length = 0;
gdjs.BattleSceneCode.GDBarPlayerHPObjects1.length = 0;
gdjs.BattleSceneCode.GDBarPlayerHPObjects2.length = 0;
gdjs.BattleSceneCode.GDBtnSkill1Objects1.length = 0;
gdjs.BattleSceneCode.GDBtnSkill1Objects2.length = 0;
gdjs.BattleSceneCode.GDBtnSkill2Objects1.length = 0;
gdjs.BattleSceneCode.GDBtnSkill2Objects2.length = 0;
gdjs.BattleSceneCode.GDBtnSkill3Objects1.length = 0;
gdjs.BattleSceneCode.GDBtnSkill3Objects2.length = 0;
gdjs.BattleSceneCode.GDTextSkillInfoObjects1.length = 0;
gdjs.BattleSceneCode.GDTextSkillInfoObjects2.length = 0;
gdjs.BattleSceneCode.GDBtnAttacksObjects1.length = 0;
gdjs.BattleSceneCode.GDBtnAttacksObjects2.length = 0;

gdjs.BattleSceneCode.eventsList1(runtimeScene);
gdjs.BattleSceneCode.GDTextBattleInfoObjects1.length = 0;
gdjs.BattleSceneCode.GDTextBattleInfoObjects2.length = 0;
gdjs.BattleSceneCode.GDBtnBackStageObjects1.length = 0;
gdjs.BattleSceneCode.GDBtnBackStageObjects2.length = 0;
gdjs.BattleSceneCode.GDBgMapObjects1.length = 0;
gdjs.BattleSceneCode.GDBgMapObjects2.length = 0;
gdjs.BattleSceneCode.GDEnemyNormalObjects1.length = 0;
gdjs.BattleSceneCode.GDEnemyNormalObjects2.length = 0;
gdjs.BattleSceneCode.GDEnemyBossObjects1.length = 0;
gdjs.BattleSceneCode.GDEnemyBossObjects2.length = 0;
gdjs.BattleSceneCode.GDPlayerAvatarObjects1.length = 0;
gdjs.BattleSceneCode.GDPlayerAvatarObjects2.length = 0;
gdjs.BattleSceneCode.GDBtnAttackObjects1.length = 0;
gdjs.BattleSceneCode.GDBtnAttackObjects2.length = 0;
gdjs.BattleSceneCode.GDTextEnemyInfoObjects1.length = 0;
gdjs.BattleSceneCode.GDTextEnemyInfoObjects2.length = 0;
gdjs.BattleSceneCode.GDTextBattleNoticeObjects1.length = 0;
gdjs.BattleSceneCode.GDTextBattleNoticeObjects2.length = 0;
gdjs.BattleSceneCode.GDBarBossHPObjects1.length = 0;
gdjs.BattleSceneCode.GDBarBossHPObjects2.length = 0;
gdjs.BattleSceneCode.GDBarPlayerManaObjects1.length = 0;
gdjs.BattleSceneCode.GDBarPlayerManaObjects2.length = 0;
gdjs.BattleSceneCode.GDBarPlayerHPObjects1.length = 0;
gdjs.BattleSceneCode.GDBarPlayerHPObjects2.length = 0;
gdjs.BattleSceneCode.GDBtnSkill1Objects1.length = 0;
gdjs.BattleSceneCode.GDBtnSkill1Objects2.length = 0;
gdjs.BattleSceneCode.GDBtnSkill2Objects1.length = 0;
gdjs.BattleSceneCode.GDBtnSkill2Objects2.length = 0;
gdjs.BattleSceneCode.GDBtnSkill3Objects1.length = 0;
gdjs.BattleSceneCode.GDBtnSkill3Objects2.length = 0;
gdjs.BattleSceneCode.GDTextSkillInfoObjects1.length = 0;
gdjs.BattleSceneCode.GDTextSkillInfoObjects2.length = 0;
gdjs.BattleSceneCode.GDBtnAttacksObjects1.length = 0;
gdjs.BattleSceneCode.GDBtnAttacksObjects2.length = 0;


return;

}

gdjs['BattleSceneCode'] = gdjs.BattleSceneCode;
