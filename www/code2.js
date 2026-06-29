gdjs.StageSceneCode = {};
gdjs.StageSceneCode.localVariables = [];
gdjs.StageSceneCode.idToCallbackMap = new Map();
gdjs.StageSceneCode.GDBtnBackMainObjects1= [];
gdjs.StageSceneCode.GDBtnBackMainObjects2= [];
gdjs.StageSceneCode.GDTextStageInfoObjects1= [];
gdjs.StageSceneCode.GDTextStageInfoObjects2= [];
gdjs.StageSceneCode.GDTextStageNoticeObjects1= [];
gdjs.StageSceneCode.GDTextStageNoticeObjects2= [];
gdjs.StageSceneCode.GDBtnStagePrevObjects1= [];
gdjs.StageSceneCode.GDBtnStagePrevObjects2= [];
gdjs.StageSceneCode.GDBtnStageChallengeObjects1= [];
gdjs.StageSceneCode.GDBtnStageChallengeObjects2= [];
gdjs.StageSceneCode.GDBtnStageNextObjects1= [];
gdjs.StageSceneCode.GDBtnStageNextObjects2= [];
gdjs.StageSceneCode.GDBgStagePanelObjects1= [];
gdjs.StageSceneCode.GDBgStagePanelObjects2= [];
gdjs.StageSceneCode.GDStagePreviewObjects1= [];
gdjs.StageSceneCode.GDStagePreviewObjects2= [];
gdjs.StageSceneCode.GDBgStagePanelsObjects1= [];
gdjs.StageSceneCode.GDBgStagePanelsObjects2= [];
gdjs.StageSceneCode.GDBtnCloseStageObjects1= [];
gdjs.StageSceneCode.GDBtnCloseStageObjects2= [];
gdjs.StageSceneCode.GDBtnMap2Objects1= [];
gdjs.StageSceneCode.GDBtnMap2Objects2= [];
gdjs.StageSceneCode.GDBtnMap3Objects1= [];
gdjs.StageSceneCode.GDBtnMap3Objects2= [];
gdjs.StageSceneCode.GDBtnMap4Objects1= [];
gdjs.StageSceneCode.GDBtnMap4Objects2= [];
gdjs.StageSceneCode.GDBtnMap5Objects1= [];
gdjs.StageSceneCode.GDBtnMap5Objects2= [];
gdjs.StageSceneCode.GDBtnMap6Objects1= [];
gdjs.StageSceneCode.GDBtnMap6Objects2= [];
gdjs.StageSceneCode.GDBtnMap1Objects1= [];
gdjs.StageSceneCode.GDBtnMap1Objects2= [];
gdjs.StageSceneCode.GDBtnStageBubbleObjects1= [];
gdjs.StageSceneCode.GDBtnStageBubbleObjects2= [];
gdjs.StageSceneCode.GDBtnGachaOpenObjects1= [];
gdjs.StageSceneCode.GDBtnGachaOpenObjects2= [];
gdjs.StageSceneCode.GDGachaPanelObjects1= [];
gdjs.StageSceneCode.GDGachaPanelObjects2= [];
gdjs.StageSceneCode.GDBtnGachaCloseObjects1= [];
gdjs.StageSceneCode.GDBtnGachaCloseObjects2= [];
gdjs.StageSceneCode.GDBtnGachaRoll1Objects1= [];
gdjs.StageSceneCode.GDBtnGachaRoll1Objects2= [];
gdjs.StageSceneCode.GDBtnGachaRoll2Objects1= [];
gdjs.StageSceneCode.GDBtnGachaRoll2Objects2= [];
gdjs.StageSceneCode.GDBtnEquipGachaObjects1= [];
gdjs.StageSceneCode.GDBtnEquipGachaObjects2= [];
gdjs.StageSceneCode.GDTextGachaInfoObjects1= [];
gdjs.StageSceneCode.GDTextGachaInfoObjects2= [];
gdjs.StageSceneCode.GDTextGachaResultObjects1= [];
gdjs.StageSceneCode.GDTextGachaResultObjects2= [];
gdjs.StageSceneCode.GDGachaPreviewObjects1= [];
gdjs.StageSceneCode.GDGachaPreviewObjects2= [];


gdjs.StageSceneCode.userFunc0xc7ce60 = function GDJSInlineCode(runtimeScene) {
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
setText("TextBackMainLabel", "Trở Về");
setText("TextStageChallengeLabel", "Vượt Ải");
setText("TextGachaOpenLabel", "Chiêu Mộ");
setText("TextGachaRoll1Label", "Chiêu mộ 1 lần");
setText("TextGachaRoll2Label", "Chiêu mộ 10 lần");
setText("TextEquipGachaLabel", "Trang Bị");
setText("TextGachaInfo", 
  "Gacha Nhân Vật\n" +
  "SSR: Mộc Linh Dao, Quân Thuật\n" +
  "SSS: Nhật Lôi Ảnh, Xích Dương\n" +
  "UR: Thiên Huyền, Nguyệt Tôn Ly"
);
setText("TextStageNotice", "Chọn ải để khiêu chiến.");

// ENG
if (isEN) {
  setText("TextBackMainLabel", "Back");
  setText("TextStageChallengeLabel", "Challenge");
  setText("TextGachaOpenLabel", "Recruit");
  setText("TextGachaRoll1Label", "Recruit x1");
  setText("TextGachaRoll2Label", "Recruit x10");
  setText("TextEquipGachaLabel", "Equip");
  setText("TextGachaInfo", 
    "Hero Gacha\n" +
    "SSR: Moc Linh Dao, Quan Thuat\n" +
    "SSS: Nhat Loi Anh, Xich Duong\n" +
    "UR: Thien Huyen, Nguyet Ton Ly"
  );
  setText("TextStageNotice", "Choose a stage to challenge.");
}
};
gdjs.StageSceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.StageSceneCode.userFunc0xc7ce60(runtimeScene);

}


};gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnBackMainObjects1Objects = Hashtable.newFrom({"BtnBackMain": gdjs.StageSceneCode.GDBtnBackMainObjects1});
gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnStageNextObjects1Objects = Hashtable.newFrom({"BtnStageNext": gdjs.StageSceneCode.GDBtnStageNextObjects1});
gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnStagePrevObjects1Objects = Hashtable.newFrom({"BtnStagePrev": gdjs.StageSceneCode.GDBtnStagePrevObjects1});
gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnStageChallengeObjects1Objects = Hashtable.newFrom({"BtnStageChallenge": gdjs.StageSceneCode.GDBtnStageChallengeObjects1});
gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnStageChallengeObjects1Objects = Hashtable.newFrom({"BtnStageChallenge": gdjs.StageSceneCode.GDBtnStageChallengeObjects1});
gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnStageChallengeObjects1Objects = Hashtable.newFrom({"BtnStageChallenge": gdjs.StageSceneCode.GDBtnStageChallengeObjects1});
gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnStageChallengeObjects1Objects = Hashtable.newFrom({"BtnStageChallenge": gdjs.StageSceneCode.GDBtnStageChallengeObjects1});
gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnStageBubbleObjects1Objects = Hashtable.newFrom({"BtnStageBubble": gdjs.StageSceneCode.GDBtnStageBubbleObjects1});
gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnCloseStageObjects1Objects = Hashtable.newFrom({"BtnCloseStage": gdjs.StageSceneCode.GDBtnCloseStageObjects1});
gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnMap1Objects1Objects = Hashtable.newFrom({"BtnMap1": gdjs.StageSceneCode.GDBtnMap1Objects1});
gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnMap2Objects1Objects = Hashtable.newFrom({"BtnMap2": gdjs.StageSceneCode.GDBtnMap2Objects1});
gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnMap2Objects1Objects = Hashtable.newFrom({"BtnMap2": gdjs.StageSceneCode.GDBtnMap2Objects1});
gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnMap3Objects1Objects = Hashtable.newFrom({"BtnMap3": gdjs.StageSceneCode.GDBtnMap3Objects1});
gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnMap3Objects1Objects = Hashtable.newFrom({"BtnMap3": gdjs.StageSceneCode.GDBtnMap3Objects1});
gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnMap4Objects1Objects = Hashtable.newFrom({"BtnMap4": gdjs.StageSceneCode.GDBtnMap4Objects1});
gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnMap4Objects1Objects = Hashtable.newFrom({"BtnMap4": gdjs.StageSceneCode.GDBtnMap4Objects1});
gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnMap5Objects1Objects = Hashtable.newFrom({"BtnMap5": gdjs.StageSceneCode.GDBtnMap5Objects1});
gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnMap5Objects1Objects = Hashtable.newFrom({"BtnMap5": gdjs.StageSceneCode.GDBtnMap5Objects1});
gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnMap6Objects1Objects = Hashtable.newFrom({"BtnMap6": gdjs.StageSceneCode.GDBtnMap6Objects1});
gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnMap6Objects1Objects = Hashtable.newFrom({"BtnMap6": gdjs.StageSceneCode.GDBtnMap6Objects1});
gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnStagePrevObjects1Objects = Hashtable.newFrom({"BtnStagePrev": gdjs.StageSceneCode.GDBtnStagePrevObjects1});
gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnStagePrevObjects1Objects = Hashtable.newFrom({"BtnStagePrev": gdjs.StageSceneCode.GDBtnStagePrevObjects1});
gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnStageNextObjects1Objects = Hashtable.newFrom({"BtnStageNext": gdjs.StageSceneCode.GDBtnStageNextObjects1});
gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnStageNextObjects1Objects = Hashtable.newFrom({"BtnStageNext": gdjs.StageSceneCode.GDBtnStageNextObjects1});
gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnStageNextObjects1Objects = Hashtable.newFrom({"BtnStageNext": gdjs.StageSceneCode.GDBtnStageNextObjects1});
gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnStageChallengeObjects1Objects = Hashtable.newFrom({"BtnStageChallenge": gdjs.StageSceneCode.GDBtnStageChallengeObjects1});
gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnStageChallengeObjects1Objects = Hashtable.newFrom({"BtnStageChallenge": gdjs.StageSceneCode.GDBtnStageChallengeObjects1});
gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnStageChallengeObjects1Objects = Hashtable.newFrom({"BtnStageChallenge": gdjs.StageSceneCode.GDBtnStageChallengeObjects1});
gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnStageChallengeObjects1Objects = Hashtable.newFrom({"BtnStageChallenge": gdjs.StageSceneCode.GDBtnStageChallengeObjects1});
gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnGachaOpenObjects1Objects = Hashtable.newFrom({"BtnGachaOpen": gdjs.StageSceneCode.GDBtnGachaOpenObjects1});
gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnGachaCloseObjects1Objects = Hashtable.newFrom({"BtnGachaClose": gdjs.StageSceneCode.GDBtnGachaCloseObjects1});
gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnGachaRoll1Objects1Objects = Hashtable.newFrom({"BtnGachaRoll1": gdjs.StageSceneCode.GDBtnGachaRoll1Objects1});
gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnGachaRoll1Objects1Objects = Hashtable.newFrom({"BtnGachaRoll1": gdjs.StageSceneCode.GDBtnGachaRoll1Objects1});
gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnGachaRoll2Objects1Objects = Hashtable.newFrom({"BtnGachaRoll2": gdjs.StageSceneCode.GDBtnGachaRoll2Objects1});
gdjs.StageSceneCode.userFunc0x108d470 = function GDJSInlineCode(runtimeScene) {
"use strict";
const gameVars = runtimeScene.getGame().getVariables();
const sceneVars = runtimeScene.getVariables();

function getG(name) {
  return gameVars.get(name).getAsNumber();
}

function setG(name, value) {
  gameVars.get(name).setNumber(value);
}

function setS(name, value) {
  sceneVars.get(name).setNumber(value);
}

function setText(objectName, text) {
  const objects = runtimeScene.getObjects(objectName);
  for (const obj of objects) {
    obj.setString(text);
  }
}

const cost = getG("G_GachaCost2");
let stones = getG("G_LinhThach");

if (stones < cost) {
  setText("TextGachaResult", "Không đủ Linh Thạch để triệu hồi x10!");
  setS("GachaResultReady", 0);
} else {
  stones -= cost;
  setG("G_LinhThach", stones);

  const pool = {
    1: {
      name: "Quân Thuật",
      title: "Thuật Sĩ Bùa Trắng",
      element: "Bùa Trắng",
      rarity: "SSR",
      score: 1
    },
    2: {
      name: "Mộc Linh Dao",
      title: "Linh Mộc Thiếu Nữ",
      element: "Mộc",
      rarity: "SSR",
      score: 1
    },
    3: {
      name: "Xích Dương",
      title: "Viêm Nhật Chi Tử",
      element: "Hỏa",
      rarity: "SSS",
      score: 2
    },
    4: {
      name: "Nhật Lôi Ảnh",
      title: "Lôi Ảnh Kiếm Khách",
      element: "Lôi",
      rarity: "SSS",
      score: 2
    },
    5: {
      name: "Nguyệt Tôn Ly",
      title: "Âm Dạ Thần Nữ",
      element: "Âm Dạ",
      rarity: "UR",
      score: 3
    },
    6: {
      name: "Thiên Huyền",
      title: "Quang Dạ Thần Quân",
      element: "Quang Dạ",
      rarity: "UR",
      score: 3
    }
  };

  function rollOneCharacter() {
    const roll = Math.floor(Math.random() * 100);

    // 0-59: SSR
    if (roll < 60) {
      return Math.random() < 0.5 ? 1 : 2;
    }

    // 60-89: SSS
    if (roll < 90) {
      return Math.random() < 0.5 ? 3 : 4;
    }

    // 90-99: UR
    return Math.random() < 0.5 ? 5 : 6;
  }

  let resultText = "KẾT QUẢ CHIÊU MỘ x10\n";
  resultText += "-------------------------\n";

  let bestId = 1;
  let bestScore = 0;

  for (let i = 1; i <= 10; i++) {
    const charId = rollOneCharacter();
    const charData = pool[charId];

    setG("G_OwnChar" + charId, 1);

    if (charData.score >= bestScore) {
      bestScore = charData.score;
      bestId = charId;
    }

    resultText += i + ". [" + charData.rarity + "] "
      + charData.name
      + " - Hệ: " + charData.element
      + "\n";
  }

  const bestChar = pool[bestId];

  setG("G_LastGachaChar", bestId);
  setG("G_GachaRoll", 0);
  setS("GachaResultReady", 0);

  resultText += "-------------------------\n";
  resultText += "Tướng đề cử trang bị: [" + bestChar.rarity + "] "
    + bestChar.name
    + "\nHệ: " + bestChar.element
    + " | " + bestChar.title;

  setText("TextGachaResult", resultText);
}
};
gdjs.StageSceneCode.eventsList1 = function(runtimeScene) {

{


gdjs.StageSceneCode.userFunc0x108d470(runtimeScene);

}


};gdjs.StageSceneCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BtnGachaRoll2"), gdjs.StageSceneCode.GDBtnGachaRoll2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnGachaRoll2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(11).getAsNumber() == 1);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.StageSceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.StageSceneCode.eventsList3 = function(runtimeScene) {

{


gdjs.StageSceneCode.eventsList2(runtimeScene);
}


};gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnEquipGachaObjects1Objects = Hashtable.newFrom({"BtnEquipGacha": gdjs.StageSceneCode.GDBtnEquipGachaObjects1});
gdjs.StageSceneCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.StageSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnBackMain"), gdjs.StageSceneCode.GDBtnBackMainObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnBackMainObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
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
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Linh Xuân Cốc");
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Linh Hồ / Thảo Mộc Tinh");
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("Thanh Mộc Xà");
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("Phàm Nhân");
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(4);
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(40);
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(1800);
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(2 + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) * 2);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(20 + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) * 20);
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(1000 + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) * 800);
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
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Linh Xuân Cốc");
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Linh Hồ / Thảo Mộc Tinh");
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("Thanh Mộc Xà");
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("Phàm Nhân");
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
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Hạ Viêm Sơn");
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Hỏa Hồ / Viêm Điểu");
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("Xích Viêm Lang");
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("Luyện Khí");
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
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Thu Nguyệt Lâm");
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Nguyệt Ảnh Hồ / Hồ Điệp Tiên");
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("Thu Nguyệt Yêu Hồ");
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("Luyện Khí II");
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
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Tuyết Sơn Vĩnh Cửu");
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Băng Lang Quân / Tuyết Linh");
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("Băng Long Vĩnh Hằng");
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(2);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("Trúc Cơ");
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
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Rừng U Minh");
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("U Hồn / Hắc Mộc Qủy");
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("U Minh Qủy Vương");
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(3);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("Kim Đan");
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
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Cổng Địa Ngục");
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Huyết Qủy / Địa Hỏa Ma");
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("Diêm Ma Hộ Pháp");
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(4);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("Nguyên Anh");
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("TextStageInfo"), gdjs.StageSceneCode.GDTextStageInfoObjects1);
{for(var i = 0, len = gdjs.StageSceneCode.GDTextStageInfoObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextStageInfoObjects1[i].getBehavior("Text").setText("Ải " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7))) + " / " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8))) + gdjs.evtTools.string.newLine() + "Khu vực: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) + gdjs.evtTools.string.newLine() + "Quái: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) + gdjs.evtTools.string.newLine() + "Boss: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2)) + gdjs.evtTools.string.newLine() + "Yêu cầu: Lv " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4))) + " | " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)) + gdjs.evtTools.string.newLine() + "Thưởng: Tu Vi +" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6))) + " | Linh Thạch +" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7))) + gdjs.evtTools.string.newLine() + "Chỉ số: Lv " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))) + " | Cảnh giới " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnStageNext"), gdjs.StageSceneCode.GDBtnStageNextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnStageNextObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)));
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnStagePrev"), gdjs.StageSceneCode.GDBtnStagePrevObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnStagePrevObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() > 1);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(7).sub(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnStageChallenge"), gdjs.StageSceneCode.GDBtnStageChallengeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnStageChallengeObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)));
}
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "BattleScene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnStageChallenge"), gdjs.StageSceneCode.GDBtnStageChallengeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnStageChallengeObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)));
}
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextStageNotice"), gdjs.StageSceneCode.GDTextStageNoticeObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(3).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)) / 2);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)) / 2);
}
{for(var i = 0, len = gdjs.StageSceneCode.GDTextStageNoticeObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextStageNoticeObjects1[i].getBehavior("Text").setText("Càn quét ải cũ thành công!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "StageNoticeHide");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnStageChallenge"), gdjs.StageSceneCode.GDBtnStageChallengeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnStageChallengeObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)));
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextStageNotice"), gdjs.StageSceneCode.GDTextStageNoticeObjects1);
{for(var i = 0, len = gdjs.StageSceneCode.GDTextStageNoticeObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextStageNoticeObjects1[i].getBehavior("Text").setText("Chưa đủ Level để vượt ải!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "StageNoticeHide");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnStageChallenge"), gdjs.StageSceneCode.GDBtnStageChallengeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnStageChallengeObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)));
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextStageNotice"), gdjs.StageSceneCode.GDTextStageNoticeObjects1);
{for(var i = 0, len = gdjs.StageSceneCode.GDTextStageNoticeObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextStageNoticeObjects1[i].getBehavior("Text").setText("Cảnh giới chưa đủ để vào khu vực này!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "StageNoticeHide");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "StageNoticeHide") > 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextStageNotice"), gdjs.StageSceneCode.GDTextStageNoticeObjects1);
{for(var i = 0, len = gdjs.StageSceneCode.GDTextStageNoticeObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextStageNoticeObjects1[i].getBehavior("Text").setText("");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BtnMap1"), gdjs.StageSceneCode.GDBtnMap1Objects1);
gdjs.copyArray(runtimeScene.getObjects("BtnMap2"), gdjs.StageSceneCode.GDBtnMap2Objects1);
gdjs.copyArray(runtimeScene.getObjects("BtnMap3"), gdjs.StageSceneCode.GDBtnMap3Objects1);
gdjs.copyArray(runtimeScene.getObjects("BtnMap4"), gdjs.StageSceneCode.GDBtnMap4Objects1);
gdjs.copyArray(runtimeScene.getObjects("BtnMap5"), gdjs.StageSceneCode.GDBtnMap5Objects1);
gdjs.copyArray(runtimeScene.getObjects("BtnMap6"), gdjs.StageSceneCode.GDBtnMap6Objects1);
gdjs.copyArray(runtimeScene.getObjects("TextStageNotice"), gdjs.StageSceneCode.GDTextStageNoticeObjects1);
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnMap1Objects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnMap1Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnMap2Objects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnMap2Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnMap3Objects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnMap3Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnMap4Objects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnMap4Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnMap5Objects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnMap5Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnMap6Objects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnMap6Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDTextStageNoticeObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextStageNoticeObjects1[i].setZOrder(35);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BgStagePanels"), gdjs.StageSceneCode.GDBgStagePanelsObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnCloseStage"), gdjs.StageSceneCode.GDBtnCloseStageObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnMap1"), gdjs.StageSceneCode.GDBtnMap1Objects1);
gdjs.copyArray(runtimeScene.getObjects("BtnMap2"), gdjs.StageSceneCode.GDBtnMap2Objects1);
gdjs.copyArray(runtimeScene.getObjects("BtnMap3"), gdjs.StageSceneCode.GDBtnMap3Objects1);
gdjs.copyArray(runtimeScene.getObjects("BtnMap4"), gdjs.StageSceneCode.GDBtnMap4Objects1);
gdjs.copyArray(runtimeScene.getObjects("BtnMap5"), gdjs.StageSceneCode.GDBtnMap5Objects1);
gdjs.copyArray(runtimeScene.getObjects("BtnMap6"), gdjs.StageSceneCode.GDBtnMap6Objects1);
gdjs.copyArray(runtimeScene.getObjects("BtnStageBubble"), gdjs.StageSceneCode.GDBtnStageBubbleObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(8).setNumber(0);
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBgStagePanelsObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBgStagePanelsObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnCloseStageObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnCloseStageObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnMap1Objects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnMap1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnMap2Objects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnMap2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnMap3Objects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnMap3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnMap4Objects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnMap4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnMap5Objects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnMap5Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnMap6Objects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnMap6Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnStageBubbleObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnStageBubbleObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnStageBubble"), gdjs.StageSceneCode.GDBtnStageBubbleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnStageBubbleObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber() == 0);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BgStagePanels"), gdjs.StageSceneCode.GDBgStagePanelsObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnCloseStage"), gdjs.StageSceneCode.GDBtnCloseStageObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnMap1"), gdjs.StageSceneCode.GDBtnMap1Objects1);
gdjs.copyArray(runtimeScene.getObjects("BtnMap2"), gdjs.StageSceneCode.GDBtnMap2Objects1);
gdjs.copyArray(runtimeScene.getObjects("BtnMap3"), gdjs.StageSceneCode.GDBtnMap3Objects1);
gdjs.copyArray(runtimeScene.getObjects("BtnMap4"), gdjs.StageSceneCode.GDBtnMap4Objects1);
gdjs.copyArray(runtimeScene.getObjects("BtnMap5"), gdjs.StageSceneCode.GDBtnMap5Objects1);
gdjs.copyArray(runtimeScene.getObjects("BtnMap6"), gdjs.StageSceneCode.GDBtnMap6Objects1);
/* Reuse gdjs.StageSceneCode.GDBtnStageBubbleObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(8).setNumber(1);
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBgStagePanelsObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBgStagePanelsObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnCloseStageObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnCloseStageObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnMap1Objects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnMap1Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnMap2Objects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnMap2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnMap3Objects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnMap3Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnMap4Objects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnMap4Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnMap5Objects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnMap5Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnMap6Objects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnMap6Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnStageBubbleObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnStageBubbleObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnCloseStage"), gdjs.StageSceneCode.GDBtnCloseStageObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnCloseStageObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber() == 1);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BgStagePanels"), gdjs.StageSceneCode.GDBgStagePanelsObjects1);
/* Reuse gdjs.StageSceneCode.GDBtnCloseStageObjects1 */
gdjs.copyArray(runtimeScene.getObjects("BtnMap1"), gdjs.StageSceneCode.GDBtnMap1Objects1);
gdjs.copyArray(runtimeScene.getObjects("BtnMap2"), gdjs.StageSceneCode.GDBtnMap2Objects1);
gdjs.copyArray(runtimeScene.getObjects("BtnMap3"), gdjs.StageSceneCode.GDBtnMap3Objects1);
gdjs.copyArray(runtimeScene.getObjects("BtnMap4"), gdjs.StageSceneCode.GDBtnMap4Objects1);
gdjs.copyArray(runtimeScene.getObjects("BtnMap5"), gdjs.StageSceneCode.GDBtnMap5Objects1);
gdjs.copyArray(runtimeScene.getObjects("BtnMap6"), gdjs.StageSceneCode.GDBtnMap6Objects1);
gdjs.copyArray(runtimeScene.getObjects("BtnStageBubble"), gdjs.StageSceneCode.GDBtnStageBubbleObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(8).setNumber(0);
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBgStagePanelsObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBgStagePanelsObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnCloseStageObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnCloseStageObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnMap1Objects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnMap1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnMap2Objects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnMap2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnMap3Objects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnMap3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnMap4Objects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnMap4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnMap5Objects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnMap5Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnMap6Objects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnMap6Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnStageBubbleObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnStageBubbleObjects1[i].hide(false);
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
{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(9).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(10);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Linh Xuân Cốc");
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Linh Hồ / Thảo Mộc Tinh");
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("Thanh Mộc Xà");
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("Phàm Nhân");
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
{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(2);
}
{runtimeScene.getScene().getVariables().getFromIndex(9).setNumber(11);
}
{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(20);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Rừng U Minh");
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("U Hồn / Hắc Mộc Quỷ");
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("Luyện Khí");
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
{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(3);
}
{runtimeScene.getScene().getVariables().getFromIndex(9).setNumber(21);
}
{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(30);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Thu Nguyệt Hồ");
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Nguyệt Ảnh Hồ / Hồ Điệp Tiên");
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("Luyện Khí II");
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
{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(4);
}
{runtimeScene.getScene().getVariables().getFromIndex(9).setNumber(31);
}
{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(40);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Tuyết Sơn Vĩnh Cửu");
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Băng Lang / Tuyết Linh");
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(2);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("Trúc Cơ");
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
{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(5);
}
{runtimeScene.getScene().getVariables().getFromIndex(9).setNumber(41);
}
{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(50);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Cổng Địa Ngục");
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Huyết Quỷ / Địa Hỏa Ma");
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(3);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("Kim Đan");
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
{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(6);
}
{runtimeScene.getScene().getVariables().getFromIndex(9).setNumber(51);
}
{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(60);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Hạ Viêm Sơn");
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Hỏa Hồ / Viêm Điểu");
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(4);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("Nguyên Anh");
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() >= 4);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Linh Hồ");
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() >= 10);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Thảo Mộc Tinh");
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("TextStageInfo"), gdjs.StageSceneCode.GDTextStageInfoObjects1);
{for(var i = 0, len = gdjs.StageSceneCode.GDTextStageInfoObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextStageInfoObjects1[i].getBehavior("Text").setText("Map: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) + " | Ải " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(9)) + 1) + "/10" + gdjs.evtTools.string.newLine() + "Ải tổng: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7))) + " / 60" + " | Đã mở: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8))) + gdjs.evtTools.string.newLine() + "Quái: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) + " | Boss: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2)) + gdjs.evtTools.string.newLine() + "Yêu cầu: Lv " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4))) + " | " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)) + "  -  Thưởng: Tu Vi +" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6))) + " | Linh Thạch +" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnMap1"), gdjs.StageSceneCode.GDBtnMap1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnMap1Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextStageNotice"), gdjs.StageSceneCode.GDTextStageNoticeObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(1);
}
{for(var i = 0, len = gdjs.StageSceneCode.GDTextStageNoticeObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextStageNoticeObjects1[i].getBehavior("Text").setText("Đã chọn Linh Xuân Cốc.");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "StageNoticeHide");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnMap2"), gdjs.StageSceneCode.GDBtnMap2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnMap2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextStageNotice"), gdjs.StageSceneCode.GDTextStageNoticeObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(11);
}
{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(2);
}
{for(var i = 0, len = gdjs.StageSceneCode.GDTextStageNoticeObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextStageNoticeObjects1[i].getBehavior("Text").setText("Đã chọn Rừng U Minh.");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "StageNoticeHide");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnMap2"), gdjs.StageSceneCode.GDBtnMap2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnMap2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() < 11);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextStageNotice"), gdjs.StageSceneCode.GDTextStageNoticeObjects1);
{for(var i = 0, len = gdjs.StageSceneCode.GDTextStageNoticeObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextStageNoticeObjects1[i].getBehavior("Text").setText("Rừng U Minh chưa mở. Hãy vượt Ải 10 trước!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "StageNoticeHide");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnMap3"), gdjs.StageSceneCode.GDBtnMap3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnMap3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() >= 21);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextStageNotice"), gdjs.StageSceneCode.GDTextStageNoticeObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(21);
}
{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(3);
}
{for(var i = 0, len = gdjs.StageSceneCode.GDTextStageNoticeObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextStageNoticeObjects1[i].getBehavior("Text").setText("Đã chọn Thu Nguyệt Hồ.");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "StageNoticeHide");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnMap3"), gdjs.StageSceneCode.GDBtnMap3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnMap3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() < 21);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextStageNotice"), gdjs.StageSceneCode.GDTextStageNoticeObjects1);
{for(var i = 0, len = gdjs.StageSceneCode.GDTextStageNoticeObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextStageNoticeObjects1[i].getBehavior("Text").setText("Thu Nguyệt Hồ chưa mở. Hãy vượt Ải 20 trước!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "StageNoticeHide");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnMap4"), gdjs.StageSceneCode.GDBtnMap4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnMap4Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() >= 31);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextStageNotice"), gdjs.StageSceneCode.GDTextStageNoticeObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(31);
}
{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(4);
}
{for(var i = 0, len = gdjs.StageSceneCode.GDTextStageNoticeObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextStageNoticeObjects1[i].getBehavior("Text").setText("Đã chọn Tuyết Sơn Vĩnh Cửu.");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "StageNoticeHide");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnMap4"), gdjs.StageSceneCode.GDBtnMap4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnMap4Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() < 31);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextStageNotice"), gdjs.StageSceneCode.GDTextStageNoticeObjects1);
{for(var i = 0, len = gdjs.StageSceneCode.GDTextStageNoticeObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextStageNoticeObjects1[i].getBehavior("Text").setText("Tuyết Sơn Vĩnh Cửu chưa mở. Hãy vượt Ải 30 trước!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "StageNoticeHide");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnMap5"), gdjs.StageSceneCode.GDBtnMap5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnMap5Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() >= 41);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextStageNotice"), gdjs.StageSceneCode.GDTextStageNoticeObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(41);
}
{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(5);
}
{for(var i = 0, len = gdjs.StageSceneCode.GDTextStageNoticeObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextStageNoticeObjects1[i].getBehavior("Text").setText("Đã chọn Cổng Địa Ngục.");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "StageNoticeHide");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnMap5"), gdjs.StageSceneCode.GDBtnMap5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnMap5Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() < 41);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextStageNotice"), gdjs.StageSceneCode.GDTextStageNoticeObjects1);
{for(var i = 0, len = gdjs.StageSceneCode.GDTextStageNoticeObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextStageNoticeObjects1[i].getBehavior("Text").setText("Cổng Địa Ngục chưa mở. Hãy vượt Ải 40 trước!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "StageNoticeHide");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnMap6"), gdjs.StageSceneCode.GDBtnMap6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnMap6Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() >= 51);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextStageNotice"), gdjs.StageSceneCode.GDTextStageNoticeObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(51);
}
{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(6);
}
{for(var i = 0, len = gdjs.StageSceneCode.GDTextStageNoticeObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextStageNoticeObjects1[i].getBehavior("Text").setText("Đã chọn Hạ Viêm Sơn.");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "StageNoticeHide");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnMap6"), gdjs.StageSceneCode.GDBtnMap6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnMap6Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() < 51);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextStageNotice"), gdjs.StageSceneCode.GDTextStageNoticeObjects1);
{for(var i = 0, len = gdjs.StageSceneCode.GDTextStageNoticeObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextStageNoticeObjects1[i].getBehavior("Text").setText("Hạ Viêm Sơn chưa mở. Hãy vượt Ải 50 trước!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "StageNoticeHide");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnStagePrev"), gdjs.StageSceneCode.GDBtnStagePrevObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnStagePrevObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(9)));
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextStageNotice"), gdjs.StageSceneCode.GDTextStageNoticeObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(7).sub(1);
}
{for(var i = 0, len = gdjs.StageSceneCode.GDTextStageNoticeObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextStageNoticeObjects1[i].getBehavior("Text").setText("");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnStagePrev"), gdjs.StageSceneCode.GDBtnStagePrevObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnStagePrevObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() <= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(9)));
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextStageNotice"), gdjs.StageSceneCode.GDTextStageNoticeObjects1);
{for(var i = 0, len = gdjs.StageSceneCode.GDTextStageNoticeObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextStageNoticeObjects1[i].getBehavior("Text").setText("Đây là ải đầu của map hiện tại.");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "StageNoticeHide");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnStageNext"), gdjs.StageSceneCode.GDBtnStageNextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnStageNextObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10)));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)));
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextStageNotice"), gdjs.StageSceneCode.GDTextStageNoticeObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}
{for(var i = 0, len = gdjs.StageSceneCode.GDTextStageNoticeObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextStageNoticeObjects1[i].getBehavior("Text").setText("");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnStageNext"), gdjs.StageSceneCode.GDBtnStageNextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnStageNextObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10)));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)));
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextStageNotice"), gdjs.StageSceneCode.GDTextStageNoticeObjects1);
{for(var i = 0, len = gdjs.StageSceneCode.GDTextStageNoticeObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextStageNoticeObjects1[i].getBehavior("Text").setText("Ải tiếp theo chưa mở. Hãy vượt ải hiện tại trước!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "StageNoticeHide");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnStageNext"), gdjs.StageSceneCode.GDBtnStageNextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnStageNextObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10)));
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextStageNotice"), gdjs.StageSceneCode.GDTextStageNoticeObjects1);
{for(var i = 0, len = gdjs.StageSceneCode.GDTextStageNoticeObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextStageNoticeObjects1[i].getBehavior("Text").setText("Đây là ải cuối của map hiện tại.");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "StageNoticeHide");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnStageChallenge"), gdjs.StageSceneCode.GDBtnStageChallengeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnStageChallengeObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() <= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() <= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() <= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)));
}
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "BattleScene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnStageChallenge"), gdjs.StageSceneCode.GDBtnStageChallengeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnStageChallengeObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)));
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextStageNotice"), gdjs.StageSceneCode.GDTextStageNoticeObjects1);
{for(var i = 0, len = gdjs.StageSceneCode.GDTextStageNoticeObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextStageNoticeObjects1[i].getBehavior("Text").setText("Ải này chưa mở.");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "StageNoticeHide");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnStageChallenge"), gdjs.StageSceneCode.GDBtnStageChallengeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnStageChallengeObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)));
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextStageNotice"), gdjs.StageSceneCode.GDTextStageNoticeObjects1);
{for(var i = 0, len = gdjs.StageSceneCode.GDTextStageNoticeObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextStageNoticeObjects1[i].getBehavior("Text").setText("Chưa đủ Level để vượt ải!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "StageNoticeHide");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnStageChallenge"), gdjs.StageSceneCode.GDBtnStageChallengeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnStageChallengeObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)));
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextStageNotice"), gdjs.StageSceneCode.GDTextStageNoticeObjects1);
{for(var i = 0, len = gdjs.StageSceneCode.GDTextStageNoticeObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextStageNoticeObjects1[i].getBehavior("Text").setText("Cảnh giới chưa đủ để vào map này!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "StageNoticeHide");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "StageNoticeHide") > 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextStageNotice"), gdjs.StageSceneCode.GDTextStageNoticeObjects1);
{for(var i = 0, len = gdjs.StageSceneCode.GDTextStageNoticeObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextStageNoticeObjects1[i].getBehavior("Text").setText("");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BtnEquipGacha"), gdjs.StageSceneCode.GDBtnEquipGachaObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnGachaClose"), gdjs.StageSceneCode.GDBtnGachaCloseObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnGachaRoll1"), gdjs.StageSceneCode.GDBtnGachaRoll1Objects1);
gdjs.copyArray(runtimeScene.getObjects("BtnGachaRoll2"), gdjs.StageSceneCode.GDBtnGachaRoll2Objects1);
gdjs.copyArray(runtimeScene.getObjects("GachaPanel"), gdjs.StageSceneCode.GDGachaPanelObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextGachaInfo"), gdjs.StageSceneCode.GDTextGachaInfoObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextGachaResult"), gdjs.StageSceneCode.GDTextGachaResultObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(11).setNumber(0);
}
{for(var i = 0, len = gdjs.StageSceneCode.GDGachaPanelObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDGachaPanelObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnGachaCloseObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnGachaCloseObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnGachaRoll1Objects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnGachaRoll1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnGachaRoll2Objects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnGachaRoll2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnEquipGachaObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnEquipGachaObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDTextGachaInfoObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextGachaInfoObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDTextGachaResultObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextGachaResultObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnGachaOpen"), gdjs.StageSceneCode.GDBtnGachaOpenObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnGachaOpenObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BtnEquipGacha"), gdjs.StageSceneCode.GDBtnEquipGachaObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnGachaClose"), gdjs.StageSceneCode.GDBtnGachaCloseObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnGachaRoll1"), gdjs.StageSceneCode.GDBtnGachaRoll1Objects1);
gdjs.copyArray(runtimeScene.getObjects("BtnGachaRoll2"), gdjs.StageSceneCode.GDBtnGachaRoll2Objects1);
gdjs.copyArray(runtimeScene.getObjects("GachaPanel"), gdjs.StageSceneCode.GDGachaPanelObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextGachaInfo"), gdjs.StageSceneCode.GDTextGachaInfoObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextGachaResult"), gdjs.StageSceneCode.GDTextGachaResultObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(11).setNumber(1);
}
{for(var i = 0, len = gdjs.StageSceneCode.GDGachaPanelObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDGachaPanelObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnGachaCloseObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnGachaCloseObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnGachaRoll1Objects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnGachaRoll1Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnGachaRoll2Objects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnGachaRoll2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnEquipGachaObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnEquipGachaObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDTextGachaInfoObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextGachaInfoObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDTextGachaResultObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextGachaResultObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDTextGachaInfoObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextGachaInfoObjects1[i].getBehavior("Text").setText("Gacha Nhân Vật" + gdjs.evtTools.string.newLine() + "Giá: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(16))) + " Linh Thạch / lần" + gdjs.evtTools.string.newLine() + "SSR: Mộc Linh Dao, Quân Thuật" + gdjs.evtTools.string.newLine() + "SSS: Nhật Lôi Ảnh, Xích Dương" + gdjs.evtTools.string.newLine() + "UR: Thiên Huyền, Nguyệt Tôn Ly");
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDTextGachaResultObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextGachaResultObjects1[i].getBehavior("Text").setText("Chưa triệu hồi!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TextGachaResult");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnGachaClose"), gdjs.StageSceneCode.GDBtnGachaCloseObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnGachaCloseObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BtnEquipGacha"), gdjs.StageSceneCode.GDBtnEquipGachaObjects1);
/* Reuse gdjs.StageSceneCode.GDBtnGachaCloseObjects1 */
gdjs.copyArray(runtimeScene.getObjects("BtnGachaRoll1"), gdjs.StageSceneCode.GDBtnGachaRoll1Objects1);
gdjs.copyArray(runtimeScene.getObjects("BtnGachaRoll2"), gdjs.StageSceneCode.GDBtnGachaRoll2Objects1);
gdjs.copyArray(runtimeScene.getObjects("GachaPanel"), gdjs.StageSceneCode.GDGachaPanelObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextGachaInfo"), gdjs.StageSceneCode.GDTextGachaInfoObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextGachaResult"), gdjs.StageSceneCode.GDTextGachaResultObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(11).setNumber(0);
}
{for(var i = 0, len = gdjs.StageSceneCode.GDGachaPanelObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDGachaPanelObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnGachaCloseObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnGachaCloseObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnGachaRoll1Objects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnGachaRoll1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnGachaRoll2Objects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnGachaRoll2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDBtnEquipGachaObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDBtnEquipGachaObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDTextGachaInfoObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextGachaInfoObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDTextGachaResultObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextGachaResultObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnGachaRoll1"), gdjs.StageSceneCode.GDBtnGachaRoll1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnGachaRoll1Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(16)));
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(16)));
}
{runtimeScene.getGame().getVariables().getFromIndex(19).setNumber(1 + gdjs.random(109));
}
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnGachaRoll1"), gdjs.StageSceneCode.GDBtnGachaRoll1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnGachaRoll1Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(16)));
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextGachaResult"), gdjs.StageSceneCode.GDTextGachaResultObjects1);
{for(var i = 0, len = gdjs.StageSceneCode.GDTextGachaResultObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextGachaResultObjects1[i].getBehavior("Text").setText("Không đủ Linh Thạch để triệu hồi x1!");
}
}

{ //Subevents
gdjs.StageSceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(19).getAsNumber() < 60);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(1 + gdjs.random(1));
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(19).getAsNumber() >= 60);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(19).getAsNumber() < 90);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(3 + gdjs.random(1));
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(19).getAsNumber() >= 110);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(5 + gdjs.random(1));
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsNumber() == 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(19).getAsNumber() < 60);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(1 + gdjs.random(1));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsNumber() == 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(19).getAsNumber() >= 60);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(19).getAsNumber() < 90);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(3 + gdjs.random(1));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsNumber() == 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(19).getAsNumber() >= 100);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(5 + gdjs.random(1));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(18).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextGachaResult"), gdjs.StageSceneCode.GDTextGachaResultObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(1);
}
{for(var i = 0, len = gdjs.StageSceneCode.GDTextGachaResultObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextGachaResultObjects1[i].getBehavior("Text").setText("Nhận được: Quân Thuật" + gdjs.evtTools.string.newLine() + "Hệ: Thuật Pháp | Độ hiếm: SSR");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TextGachaResult");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(18).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextGachaResult"), gdjs.StageSceneCode.GDTextGachaResultObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(13).setNumber(1);
}
{for(var i = 0, len = gdjs.StageSceneCode.GDTextGachaResultObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextGachaResultObjects1[i].getBehavior("Text").setText("Nhận được: Mộc Linh Dao" + gdjs.evtTools.string.newLine() + "Hệ: Mộc | Độ hiếm: SSR");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TextGachaResult");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(18).getAsNumber() == 3);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextGachaResult"), gdjs.StageSceneCode.GDTextGachaResultObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(1);
}
{for(var i = 0, len = gdjs.StageSceneCode.GDTextGachaResultObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextGachaResultObjects1[i].getBehavior("Text").setText("Nhận được: Xích Dương" + gdjs.evtTools.string.newLine() + "Hệ: Hỏa | Độ hiếm: SSS");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TextGachaResult");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(18).getAsNumber() == 4);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextGachaResult"), gdjs.StageSceneCode.GDTextGachaResultObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(1);
}
{for(var i = 0, len = gdjs.StageSceneCode.GDTextGachaResultObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextGachaResultObjects1[i].getBehavior("Text").setText("Nhận được: Nhật Lôi Ảnh" + gdjs.evtTools.string.newLine() + "Hệ: Lôi | Độ hiếm: SSS");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TextGachaResult");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(18).getAsNumber() == 5);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextGachaResult"), gdjs.StageSceneCode.GDTextGachaResultObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber(1);
}
{for(var i = 0, len = gdjs.StageSceneCode.GDTextGachaResultObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextGachaResultObjects1[i].getBehavior("Text").setText("Nhận được: Nguyệt Tôn Ly" + gdjs.evtTools.string.newLine() + "Hệ: Ám Dạ | Độ hiếm: UR");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TextGachaResult");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(18).getAsNumber() == 6);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextGachaResult"), gdjs.StageSceneCode.GDTextGachaResultObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(1);
}
{for(var i = 0, len = gdjs.StageSceneCode.GDTextGachaResultObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextGachaResultObjects1[i].getBehavior("Text").setText("NHẬN ĐƯỢC SSR: Thiên Huyền" + gdjs.evtTools.string.newLine() + "Hệ: Quang Dạ | Độ hiếm: UR");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TextGachaResult");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsNumber() == 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(18).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextGachaResult"), gdjs.StageSceneCode.GDTextGachaResultObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(1);
}
{for(var i = 0, len = gdjs.StageSceneCode.GDTextGachaResultObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextGachaResultObjects1[i].getBehavior("Text").setText("Nhận được: Quân Thuật" + gdjs.evtTools.string.newLine() + "Hệ: Thuật Pháp | Độ hiếm: SSR");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TextGachaResult");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsNumber() == 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(18).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextGachaResult"), gdjs.StageSceneCode.GDTextGachaResultObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(13).setNumber(1);
}
{for(var i = 0, len = gdjs.StageSceneCode.GDTextGachaResultObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextGachaResultObjects1[i].getBehavior("Text").setText("Nhận được: Mộc Linh Dao" + gdjs.evtTools.string.newLine() + "Hệ: Mộc | Độ hiếm: SSR");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TextGachaResult");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsNumber() == 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(18).getAsNumber() == 3);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextGachaResult"), gdjs.StageSceneCode.GDTextGachaResultObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(1);
}
{for(var i = 0, len = gdjs.StageSceneCode.GDTextGachaResultObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextGachaResultObjects1[i].getBehavior("Text").setText("Nhận được: Xích Dương" + gdjs.evtTools.string.newLine() + "Hệ: Hỏa | Độ hiếm: SSS");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TextGachaResult");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsNumber() == 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(18).getAsNumber() == 4);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextGachaResult"), gdjs.StageSceneCode.GDTextGachaResultObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(1);
}
{for(var i = 0, len = gdjs.StageSceneCode.GDTextGachaResultObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextGachaResultObjects1[i].getBehavior("Text").setText("Nhận được: Nhật Lôi Ảnh" + gdjs.evtTools.string.newLine() + "Hệ: Lôi | Độ hiếm: SSS");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TextGachaResult");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsNumber() == 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(18).getAsNumber() == 5);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextGachaResult"), gdjs.StageSceneCode.GDTextGachaResultObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber(1);
}
{for(var i = 0, len = gdjs.StageSceneCode.GDTextGachaResultObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextGachaResultObjects1[i].getBehavior("Text").setText("Nhận được: Nguyệt Tôn Ly" + gdjs.evtTools.string.newLine() + "Hệ: Ám Dạ | Độ hiếm: UR");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TextGachaResult");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsNumber() == 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(18).getAsNumber() == 6);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextGachaResult"), gdjs.StageSceneCode.GDTextGachaResultObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(1);
}
{for(var i = 0, len = gdjs.StageSceneCode.GDTextGachaResultObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextGachaResultObjects1[i].getBehavior("Text").setText("NHẬN ĐƯỢC SSR: Thiên Huyền" + gdjs.evtTools.string.newLine() + "Hệ: Quang Dạ | Độ hiếm: UR");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TextGachaResult");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnEquipGacha"), gdjs.StageSceneCode.GDBtnEquipGachaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StageSceneCode.mapOfGDgdjs_9546StageSceneCode_9546GDBtnEquipGachaObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(18).getAsNumber() > 0);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GachaPreview"), gdjs.StageSceneCode.GDGachaPreviewObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextGachaResult"), gdjs.StageSceneCode.GDTextGachaResultObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(runtimeScene.getGame().getVariables().getFromIndex(18).getAsNumber());
}
{for(var i = 0, len = gdjs.StageSceneCode.GDGachaPreviewObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDGachaPreviewObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) - 1);
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDTextGachaResultObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDTextGachaResultObjects1[i].getBehavior("Text").setText("Đã trang bị nhân vật mới!");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TextGachaResult");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(18).getAsNumber() > 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GachaPreview"), gdjs.StageSceneCode.GDGachaPreviewObjects1);
{for(var i = 0, len = gdjs.StageSceneCode.GDGachaPreviewObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDGachaPreviewObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDGachaPreviewObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDGachaPreviewObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) - 1);
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDGachaPreviewObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDGachaPreviewObjects1[i].setX(73);
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDGachaPreviewObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDGachaPreviewObjects1[i].setY(109);
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDGachaPreviewObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDGachaPreviewObjects1[i].setZOrder(90);
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDGachaPreviewObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDGachaPreviewObjects1[i].getBehavior("Resizable").setWidth(571);
}
}
{for(var i = 0, len = gdjs.StageSceneCode.GDGachaPreviewObjects1.length ;i < len;++i) {
    gdjs.StageSceneCode.GDGachaPreviewObjects1[i].getBehavior("Resizable").setHeight(1016);
}
}
}

}


};

gdjs.StageSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StageSceneCode.GDBtnBackMainObjects1.length = 0;
gdjs.StageSceneCode.GDBtnBackMainObjects2.length = 0;
gdjs.StageSceneCode.GDTextStageInfoObjects1.length = 0;
gdjs.StageSceneCode.GDTextStageInfoObjects2.length = 0;
gdjs.StageSceneCode.GDTextStageNoticeObjects1.length = 0;
gdjs.StageSceneCode.GDTextStageNoticeObjects2.length = 0;
gdjs.StageSceneCode.GDBtnStagePrevObjects1.length = 0;
gdjs.StageSceneCode.GDBtnStagePrevObjects2.length = 0;
gdjs.StageSceneCode.GDBtnStageChallengeObjects1.length = 0;
gdjs.StageSceneCode.GDBtnStageChallengeObjects2.length = 0;
gdjs.StageSceneCode.GDBtnStageNextObjects1.length = 0;
gdjs.StageSceneCode.GDBtnStageNextObjects2.length = 0;
gdjs.StageSceneCode.GDBgStagePanelObjects1.length = 0;
gdjs.StageSceneCode.GDBgStagePanelObjects2.length = 0;
gdjs.StageSceneCode.GDStagePreviewObjects1.length = 0;
gdjs.StageSceneCode.GDStagePreviewObjects2.length = 0;
gdjs.StageSceneCode.GDBgStagePanelsObjects1.length = 0;
gdjs.StageSceneCode.GDBgStagePanelsObjects2.length = 0;
gdjs.StageSceneCode.GDBtnCloseStageObjects1.length = 0;
gdjs.StageSceneCode.GDBtnCloseStageObjects2.length = 0;
gdjs.StageSceneCode.GDBtnMap2Objects1.length = 0;
gdjs.StageSceneCode.GDBtnMap2Objects2.length = 0;
gdjs.StageSceneCode.GDBtnMap3Objects1.length = 0;
gdjs.StageSceneCode.GDBtnMap3Objects2.length = 0;
gdjs.StageSceneCode.GDBtnMap4Objects1.length = 0;
gdjs.StageSceneCode.GDBtnMap4Objects2.length = 0;
gdjs.StageSceneCode.GDBtnMap5Objects1.length = 0;
gdjs.StageSceneCode.GDBtnMap5Objects2.length = 0;
gdjs.StageSceneCode.GDBtnMap6Objects1.length = 0;
gdjs.StageSceneCode.GDBtnMap6Objects2.length = 0;
gdjs.StageSceneCode.GDBtnMap1Objects1.length = 0;
gdjs.StageSceneCode.GDBtnMap1Objects2.length = 0;
gdjs.StageSceneCode.GDBtnStageBubbleObjects1.length = 0;
gdjs.StageSceneCode.GDBtnStageBubbleObjects2.length = 0;
gdjs.StageSceneCode.GDBtnGachaOpenObjects1.length = 0;
gdjs.StageSceneCode.GDBtnGachaOpenObjects2.length = 0;
gdjs.StageSceneCode.GDGachaPanelObjects1.length = 0;
gdjs.StageSceneCode.GDGachaPanelObjects2.length = 0;
gdjs.StageSceneCode.GDBtnGachaCloseObjects1.length = 0;
gdjs.StageSceneCode.GDBtnGachaCloseObjects2.length = 0;
gdjs.StageSceneCode.GDBtnGachaRoll1Objects1.length = 0;
gdjs.StageSceneCode.GDBtnGachaRoll1Objects2.length = 0;
gdjs.StageSceneCode.GDBtnGachaRoll2Objects1.length = 0;
gdjs.StageSceneCode.GDBtnGachaRoll2Objects2.length = 0;
gdjs.StageSceneCode.GDBtnEquipGachaObjects1.length = 0;
gdjs.StageSceneCode.GDBtnEquipGachaObjects2.length = 0;
gdjs.StageSceneCode.GDTextGachaInfoObjects1.length = 0;
gdjs.StageSceneCode.GDTextGachaInfoObjects2.length = 0;
gdjs.StageSceneCode.GDTextGachaResultObjects1.length = 0;
gdjs.StageSceneCode.GDTextGachaResultObjects2.length = 0;
gdjs.StageSceneCode.GDGachaPreviewObjects1.length = 0;
gdjs.StageSceneCode.GDGachaPreviewObjects2.length = 0;

gdjs.StageSceneCode.eventsList4(runtimeScene);
gdjs.StageSceneCode.GDBtnBackMainObjects1.length = 0;
gdjs.StageSceneCode.GDBtnBackMainObjects2.length = 0;
gdjs.StageSceneCode.GDTextStageInfoObjects1.length = 0;
gdjs.StageSceneCode.GDTextStageInfoObjects2.length = 0;
gdjs.StageSceneCode.GDTextStageNoticeObjects1.length = 0;
gdjs.StageSceneCode.GDTextStageNoticeObjects2.length = 0;
gdjs.StageSceneCode.GDBtnStagePrevObjects1.length = 0;
gdjs.StageSceneCode.GDBtnStagePrevObjects2.length = 0;
gdjs.StageSceneCode.GDBtnStageChallengeObjects1.length = 0;
gdjs.StageSceneCode.GDBtnStageChallengeObjects2.length = 0;
gdjs.StageSceneCode.GDBtnStageNextObjects1.length = 0;
gdjs.StageSceneCode.GDBtnStageNextObjects2.length = 0;
gdjs.StageSceneCode.GDBgStagePanelObjects1.length = 0;
gdjs.StageSceneCode.GDBgStagePanelObjects2.length = 0;
gdjs.StageSceneCode.GDStagePreviewObjects1.length = 0;
gdjs.StageSceneCode.GDStagePreviewObjects2.length = 0;
gdjs.StageSceneCode.GDBgStagePanelsObjects1.length = 0;
gdjs.StageSceneCode.GDBgStagePanelsObjects2.length = 0;
gdjs.StageSceneCode.GDBtnCloseStageObjects1.length = 0;
gdjs.StageSceneCode.GDBtnCloseStageObjects2.length = 0;
gdjs.StageSceneCode.GDBtnMap2Objects1.length = 0;
gdjs.StageSceneCode.GDBtnMap2Objects2.length = 0;
gdjs.StageSceneCode.GDBtnMap3Objects1.length = 0;
gdjs.StageSceneCode.GDBtnMap3Objects2.length = 0;
gdjs.StageSceneCode.GDBtnMap4Objects1.length = 0;
gdjs.StageSceneCode.GDBtnMap4Objects2.length = 0;
gdjs.StageSceneCode.GDBtnMap5Objects1.length = 0;
gdjs.StageSceneCode.GDBtnMap5Objects2.length = 0;
gdjs.StageSceneCode.GDBtnMap6Objects1.length = 0;
gdjs.StageSceneCode.GDBtnMap6Objects2.length = 0;
gdjs.StageSceneCode.GDBtnMap1Objects1.length = 0;
gdjs.StageSceneCode.GDBtnMap1Objects2.length = 0;
gdjs.StageSceneCode.GDBtnStageBubbleObjects1.length = 0;
gdjs.StageSceneCode.GDBtnStageBubbleObjects2.length = 0;
gdjs.StageSceneCode.GDBtnGachaOpenObjects1.length = 0;
gdjs.StageSceneCode.GDBtnGachaOpenObjects2.length = 0;
gdjs.StageSceneCode.GDGachaPanelObjects1.length = 0;
gdjs.StageSceneCode.GDGachaPanelObjects2.length = 0;
gdjs.StageSceneCode.GDBtnGachaCloseObjects1.length = 0;
gdjs.StageSceneCode.GDBtnGachaCloseObjects2.length = 0;
gdjs.StageSceneCode.GDBtnGachaRoll1Objects1.length = 0;
gdjs.StageSceneCode.GDBtnGachaRoll1Objects2.length = 0;
gdjs.StageSceneCode.GDBtnGachaRoll2Objects1.length = 0;
gdjs.StageSceneCode.GDBtnGachaRoll2Objects2.length = 0;
gdjs.StageSceneCode.GDBtnEquipGachaObjects1.length = 0;
gdjs.StageSceneCode.GDBtnEquipGachaObjects2.length = 0;
gdjs.StageSceneCode.GDTextGachaInfoObjects1.length = 0;
gdjs.StageSceneCode.GDTextGachaInfoObjects2.length = 0;
gdjs.StageSceneCode.GDTextGachaResultObjects1.length = 0;
gdjs.StageSceneCode.GDTextGachaResultObjects2.length = 0;
gdjs.StageSceneCode.GDGachaPreviewObjects1.length = 0;
gdjs.StageSceneCode.GDGachaPreviewObjects2.length = 0;


return;

}

gdjs['StageSceneCode'] = gdjs.StageSceneCode;
