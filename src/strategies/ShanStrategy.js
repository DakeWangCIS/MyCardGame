const CardStrategy = require('./CardStrategy');

class ShanStrategy extends CardStrategy {
    execute(gameContext, target) {
        const currentPlayer = gameContext.currentPlayer;
        console.log(`${currentPlayer.name} 使用了闪躲了来自 ${source.name} 的杀。`);

        //activate the ability of using shan
        currentPlayer.activateAbilityOnEvent("useShan", {source, gameContext });
    }
}

module.exports = ShanStrategy;