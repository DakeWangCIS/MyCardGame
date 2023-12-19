class Player {
    constructor(name, general) {
        this.name = name;
        this.general = general; // 武将对象
        this.health = general.maxHealth; // 生命值
        this.handCards = []; // 手牌
        this.equipment = {}; // 装备牌
        this.judgementCards = []; // 判定牌
        this.isKing = general.isKing; // 是否为主公
        this.isChained = false; // 是否处于连环状态
        this.shaUsed = 0; // 记录在当前回合已使用杀的次数
        this.isAlive = true; // 是否存活
    }

    // 使用杀
    useSha(target) {
        if (!this.canUseSha()) {
            console.log(`${this.name} cannot use 杀 anymore this turn.`);
            return;
        }

        this.shaUsed++;
        console.log(`${this.name} uses 杀 on ${target.name}`);
        // ...执行使用杀的逻辑
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

    // 检查是否装备了特定武器
    hasWeapon(weaponName) {
        return this.equipment.weapon?.name === weaponName;
    }

    // ...其他方法，如装备武器、使用其他卡牌等
}
