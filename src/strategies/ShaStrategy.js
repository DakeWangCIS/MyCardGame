const CardStrategy = require('./CardStrategy');

class ShaStrategy extends CardStrategy {
    execute(gameContext, target) {
        // check the phase
        if (gameContext.phase !== "playing") {
            console.log("不能使用杀：不在出牌阶段。");
            return;
        }

        const currentPlayer = gameContext.currentPlayer;
        const canAttack = currentPlayer && currentPlayer.canUseSha();

        if (!canAttack) {
            console.log(`${currentPlayer.name} 无法再次使用杀。`);
            return;
        }

        // check the target is existed and alive
        if (!target || !target.isAlive) {
            console.log("不能使用杀：目标不存在或已死亡。");
            return;
        }

        // check the distance
        const distanceToTarget = gameContext.calculateDistance(currentPlayer, target);
        const attackRange = currentPlayer.getAttackRange();
        if (distanceToTarget > attackRange) {
            console.log(`${target.name} 超出了 ${currentPlayer.name} 的攻击范围。`);
            return;
        }

        const willUseShan = target.decideToUseShanAgainSha();
        if (willUseShan) {
            console.log(`${target.name} 使用了闪躲 ${currentPlayer.name} 的杀。`);
            target.activateCardEffect("闪", currentPlayer);
        } else {
            console.log(`${currentPlayer.name} 使用了杀攻击 ${target.name}。`);
            target.takeDamage(1, currentPlayer);
        }

        //activate the ability of using sha
        currentPlayer.activateAbilityOnEvent("useSha", { target, gameContext });

    }
}

module.exports = ShaStrategy;