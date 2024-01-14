System.register("chunks:///_virtual/en.ts",["cc"],(function(e){var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"ca21aUgHudFZKJ4cz/fdIqc","en",void 0);var o=window,a=e("languages",{login:{noAccount:"No account,please create!"},sign:{"double rewards":"Sharing Award X2","day%{value}":"Day%{value}"},fight:{fightStartAdAsk:"Watch ads to get bonuses?",fightOverAdAsk:"watch ads to get 5 extra steps?",highest:"highest: ",propExceedMaxTimes:"Reach the limit. No more effects for this round.",propNoEnough:"The props have been used up!",needCollect:"You still need to collect"},lottery:{lotteryNotEnoughGetLotteries:"No enough tickets! Click the button below to get more tickets.",noChargePleaseWait:"Coming soon",waitForLoadingAds:"Ads loading...","still%{value}winLottery":"<color=#ffffff>还有<color=#7dd5ff>%{value}</color>次获得奖券的机会</color>"},pve:{cannotSkipLastLevel:"Please finish the previous checkpoints first!",highest:"Highest",unLockProp:"Congratulations on unlocking the prop."},task:{notExist:"Task not existed",succeed:"Task completed",fail:"Task not completed"},prop:{prop:"Get props",lackGold:"lack of gold",hammer:"hammer",magic:"magic",refresh:"refresh",infinite:"infinite",get:"obtain %{name} x%{num}"},table_prop:{"锤子":"Hammer","魔法棒":"Magic","刷新":"Refresh","无限":"infinite","消除选择的1个蛋糕，每局限用3个":"Remove the selected cake. 3 times each game.","赋予选择的1个蛋糕直线特效，每局限用1个":"Give the cake a straight line effect. 1 times each game.","重新排列游戏区内所有蛋糕，每局限用3次":"Refresh. 3 times each game.","使用后本关不再限制游戏步数,每局限用1个":"The steps will be infinite, 1 times each game."},rank:{shareTitle:"Cake Crush"},onlineReward:{receive:"Receive it"},shop:{receive:"Receive it"}});o.languages||(o.languages={}),o.languages.en=a,t._RF.pop()}}}));

System.register("chunks:///_virtual/resources",["./en.ts","./zh.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/zh.ts",["cc"],(function(e){var o;return{setters:[function(e){o=e.cclegacy}],execute:function(){o._RF.push({},"f5034jWLxVDm6kdhgPzlihH","zh",void 0);var t=window,a=e("languages",{login:{noAccount:"没有账户,请创建"},sign:{"double rewards":"Награда X2","day%{value}":"День %{value}"},fight:{fightStartAdAsk:"Бонусы за рекламу？",fightOverAdAsk:"Дополнительные шаги за рекламу？",highest:"Рекорд: ",propExceedMaxTimes:"Достигнут лимит",propNoEnough:"Реквизит был израсходован",needCollect:"Нужно собрать еще"},lottery:{lotteryNotEnoughGetLotteries:"Недостаточно билетов",noChargePleaseWait:"Вскоре обновится",waitForLoadingAds:"Загрузка рекламы...","still%{value}winLottery":"<color=#ffffff><color=#7dd5ff>%{value}</color> Шанс</color>"},pve:{cannotSkipLastLevel:"Завершите предыдущие уровни!",highest:"Рекорд",unLockProp:"Реквизит разблокирован"},task:{notExist:"Задача не существует",succeed:"Задача выполнена",fail:"Задача не выполнена"},prop:{prop:"Реквизит",lackGold:"Недостаточно золота",hammer:"Молоток",magic:"Магия",refresh:"Обновление",infinite:"Бесконечность",get:"Получить %{name}x%{num}"},table_prop:{"锤子":"Молоток","魔法棒":"Магия","刷新":"Обновление","无限":"Бесконечность","消除选择的1个蛋糕，每局限用3个":"Удалите выбранный торт.","赋予选择的1个蛋糕直线特效，每局限用1个":"Придайте торту эффект прямой линии. ","重新排列游戏区内所有蛋糕，每局限用3次":"Обновить поле.","使用后本关不再限制游戏步数,每局限用1个":"Шаги будут бесконечными."},rank:{shareTitle:"Пироженка"},onlineReward:{receive:"Получить"},shop:{receive:"Получить"}});t.languages||(t.languages={}),t.languages.zh=a,o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/resources', 'chunks:///_virtual/resources'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});