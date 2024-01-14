class Player {
    constructor(name, general) {
        this.name = name;
        this.general = general; // 武将对象
        this.currentHealth = general.maxHealth; // 当前生命值
        this.handCards = []; // 手牌
        this.equipment = {}; // 装备牌
        this.judgementCards = []; // 判定牌
        this.usedAbilities = {}; // 已使用的技能
        this.isKing = false; // 是否为主公
        this.isChained = false; // 是否处于连环状态
        this.shaUsed = 0; // 记录在当前回合已使用杀的次数
        this.jiuUsed = 0; // 记录在当前回合已使用酒的次数
        this.isAlive = true; // 是否存活
        this.filpOver = false; // 是否翻面
    }

    // take damage
    takeDamage(damage, source) {
        this.currentHealth -= damage;
        if (this.currentHealth <= 0) {
            this.handleDeath(source);
        }
    }

    // lose health
    loseHealth(amount) {
        this.currentHealth -= amount;
        if (this.currentHealth <= 0) {
            this.handleDeath();
        }
    }

    // isDying
    isDying() {
        return this.currentHealth <= 0;
    }

    // recover health
    recoverHealth(amount) {
        this.currentHealth = Math.min(this.currentHealth + amount, this.general.maxHealth);
    }

    // handle death
    handleDeath(source) {
        this.isAlive = false;
        // ...处理死亡逻辑
    }

    // check has used ability
    hasUsedAbility(abilityName) {
        return !!this.usedAbilities[abilityName];
    }

    // mark ability as used
    markAbilityAsUsed(abilityName) {
        this.usedAbilities[abilityName] = true;
    }

    // reset used abilities in a new round
    resetUsedAbilities() {
        this.usedAbilities = {};
    }

    // 检查是否可以使用杀
    canUseSha() {
        const shaLimit = this.getShaLimit();
        return this.shaUsed < shaLimit;
    }

    // 获取杀的次数限制
    getShaLimit() {
        if (this.hasWeapon('诸葛连弩')) {
            return Infinity;
        }
        return 1;
    }

    // 重制杀的使用次数
    resetShaUsed() {
        this.shaUsed = 0;
    }

    // 是否已经使用过酒
    hasUsedJiu() {
        return this.jiuUsed;
    }

    // 标记已经使用过酒
    markJiuAsUsed() {
        this.jiuUsed = 0;
    }

    // 重置已使用过酒的标记
    resetJiuUsed() {
        this.jiuUsed = false;
    }

    // 设置酒的效果
    setJiuEffect(effect) {
        this.jiuEffect = effect;
    }

    // 检查是否装备了特定武器
    hasWeapon(weaponName) {
        return this.equipment.weapon?.name === weaponName;
    }

    activateAbilityOnEvent(eventType, context) {
        for (const ability of this.general.abilities) {
            if (ability.isTriggeredBy(eventType)) {
                ability.execute(this, context);
            }
        }
    }

    // 决策方法：决定是否使用 "闪"
    decideToUseShanAgainstSha() {
        // 这里可以根据实际情况进行交互式询问或 AI 决策
        // 现在我们只是返回一个布尔值作为示例
        return true; // 假设玩家总是选择使用 "闪"
    }

    // 决策方法：决定是否使用 "无懈可击"
    decideToUseWuXie() {
        // 类似 decideToUseShan 方法的实现
        return true; // 假设玩家总是选择使用 "无懈可击"
    }

    // 出牌
    playCard(card, target) {
        // ...执行出牌的逻辑
        if (card.strategy) {
            card.strategy.execute(this, card, target);
        } else {
            console.error(`Card ${card.name} has no strategy.`)
        }
    }

    // ...其他方法，如装备武器、使用其他卡牌等
}
