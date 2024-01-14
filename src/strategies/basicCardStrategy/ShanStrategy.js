const CardStrategy = require('../CardStrategy');

class ShanStrategy extends CardStrategy {
    execute(player, gameContext, target) {
        const currentPlayer = player; // 当前玩家
        const source = gameContext.actionSource; // 发起攻击的源

        if (source.name === "万箭齐发") {
            // 当闪被打出以响应万箭齐发时，没有特定的目标
            console.log(`${currentPlayer.name} 打出了闪来抵挡 ${source.name}`);
            target = null;
        } else {
            // 当闪用来抵挡杀时，视为对自己使用的
            console.log(`${currentPlayer.name} 对自己使用了闪来躲避来自 ${source.name} 的杀`);
            target = currentPlayer;
            // 激活使用闪的相关技能
            currentPlayer.activateAbilityOnEvent("useShan", { source, gameContext, target });
        }
    }
}

module.exports = ShanStrategy;
