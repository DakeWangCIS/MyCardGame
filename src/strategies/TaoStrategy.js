const CardStrategy = require('./CardStrategy');

class TaoStrategy extends CardStrategy {
    execute(gameContext, target) {
        // 如果目标未指定，则默认为当前玩家
        target = target || gameContext.currentPlayer;

        // 只有在生命值不满或玩家濒死时才能使用桃
        if (target.currentHealth < target.maxHealth || target.isDying) {
            // 恢复一点生命值
            target.recoverHealth(1);
            console.log(`${target.name} 使用了桃恢复了一点生命值。`);
        } else {
            console.log(`无法使用桃：${target.name} 的生命值已满或没有濒死。`);
        }
    }
}

module.exports = TaoStrategy;