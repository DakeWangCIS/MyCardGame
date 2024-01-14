const CardStrategy = require('../CardStrategy');

class WuZhongShengYouStrategy extends CardStrategy {
    execute(player, gameContext, target) {
        // the target is the player who use this card by default
        target = target || player;

        // check it is in playing phase
        if (gameContext.phase !== "playing") {
            console.error('无中生有只能在出牌阶段内使用。');
            return;
        }

        // Use the card to draw two cards
        console.log(`${target.name} 使用了无中生有，摸了两张牌。`)
        gameContext.drawCards(target, 2);

        // activate useWuZhongShengYou ability
        target.activateAbilityOnEvent("useWuZhongShengYou", { target, gameContext });
    }
}

module.exports = WuZhongShengYouStrategy;