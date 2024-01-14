const CardStrategy = require('../CardStrategy');

class JiuStrategy extends CardStrategy {
    execute(player, gameContext, target) {

        // set target to current player
        target = target || player;

        // check if already used jiu
        if (target.hasUsedJiu()) {
            console.log(`${target.name} 已经使用过酒了, 不能再使用酒。`);
            return;
        }

        // check if target is dying
        if (target.isDying()) {
            console.log(`${target.name} 使用了酒，恢复了一点体力值。`);
            target.recoverHealth(1);
        } else {
            // check if in playing phase
            if (gameContext.phase !== "playing") {
                console.log(`${target.name} 使用酒，下一张杀造成的伤害+1。`);
                target.setJiuEffect(true);
            } else {
                console.error('酒只能在出牌阶段内使用。');
                return;
            }
        }

        // mark jiu as used
        target.markJiuAsUsed();

        // activate useJiu ability
        target.activateAbilityOnEvent("useJiu", { target, gameContext });
    }
}

module.exports = JiuStrategy;