import Ability from '../models/Ability';

export const abilities = {
    JieSunQuanZhiHeng: new Ability(
        "制衡",
        "主动技",
        "出牌阶段限⼀次，你可以弃置任意张牌，然后摸等量的牌（若你以此法弃置了所有的⼿牌，则多摸⼀张牌）。",
        (general, gameContext, ...cardsToDiscard) => {
            // ...the logic of this ability
            const player = gameContext.currentPlayer;
            if (!player || player.general !== general || gameContext.phase !== "playing"  || player.hasUsedAbility("制衡")) {
                console.error("不能使用制衡：不在出牌阶段或已使用过制衡。");
                return;
            }

            // discard cards
            gameContext.discardCards(player, ...cardsToDiscard);

            // draw cards according to the number of cards discarded
            const numberOfCardsDiscarded = cardsToDiscard.length;
            const isAllCardsDiscarded = numberOfCardsDiscarded === player.handCards.length;
            const numberOfCardsToDraw = isAllCardsDiscarded ? numberOfCardsDiscarded + 1 : numberOfCardsDiscarded;

            gameContext.drawCards(player, numberOfCardsToDraw);

            // mark JieSunQuanZhiHeng as used
            player.markAbilityAsUsed("制衡");
        }
    ),

};