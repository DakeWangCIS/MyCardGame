const CardStrategy = require('../CardStrategy');

class ShaStrategy extends CardStrategy {
    execute(player, gameContext, target) {
        // 获取当前玩家和行动源
        const currentPlayer = player;
        const source = gameContext.actionSource;

        if (source && (source.name === "决斗" || source.name === "南蛮入侵")) {
            // 当杀被打出以响应决斗或南蛮入侵时，没有特定的目标
            console.log(`${currentPlayer.name} 打出了杀来响应 ${source.name}`);
            target = null;
        } else {
            // 在其他情况下，执行常规的杀逻辑
            if (gameContext.phase !== "playing") {
                console.log("不能使用杀：不在出牌阶段。");
                return;
            }

            if (!currentPlayer.canUseSha()) {
                console.log(`${currentPlayer.name} 无法再次使用杀。`);
                return;
            }

            if (!target || !target.isAlive) {
                console.log("不能使用杀：目标不存在或已死亡。");
                return;
            }

            const distanceToTarget = gameContext.calculateDistance(currentPlayer, target);
            const attackRange = currentPlayer.getAttackRange();
            if (distanceToTarget > attackRange) {
                console.log(`${target.name} 超出了 ${currentPlayer.name} 的攻击范围。`);
                return;
            }

            if (target.decideToUseShanAgainstSha()) {
                console.log(`${target.name} 使用了闪躲避了 ${currentPlayer.name} 的杀。`);
            } else {
                console.log(`${currentPlayer.name} 使用了杀攻击 ${target.name}。`);
                target.takeDamage(1, currentPlayer);
            }
        }

        // 激活使用杀的相关技能
        currentPlayer.activateAbilityOnEvent("useSha", { target, gameContext });
    }
}

module.exports = ShaStrategy;
