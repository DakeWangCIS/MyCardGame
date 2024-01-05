class GameContext {
    constructor() {
        this.currentPlayer = null;  // 当前回合的玩家
        this.players = [];         // 游戏中的所有玩家
        this.cardStack = [];       // 牌堆
        this.discardPile = [];     // 弃牌堆
        this.phase = null;         // 当前游戏阶段
        this.actionSource = null;  // 行动源，比如发起攻击的玩家或锦囊牌
        this.round = 0;            // 轮数
        // ...其他游戏相关状态
    }

    // 设置当前玩家
    setCurrentPlayer(player) {
        this.currentPlayer = player;
    }

    // 设置游戏阶段
    setPhase(phase) {
        this.phase = phase;
    }

    // 设置行动源
    setActionSource(source) {
        this.actionSource = source;
    }

    // 弃牌 discard cards
    discardCards(player, ...cardsToDiscard) {
        // 移除玩家手牌中对应的牌
        player.handCards = player.handCards.filter(card => !cardsToDiscard.includes(card));
        // 将弃牌加入弃牌堆
        this.discardPile.push(...cardsToDiscard);
    }

    // 摸牌 draw cards
    drawCards(player, numberOfCardsToDraw) {
        // 从牌堆顶部摸取指定数量的牌
        const cardsToDraw = this.cardStack.splice(0, numberOfCardsToDraw);
        // 添加到玩家的手牌
        player.handCards.push(...cardsToDraw);
    }

    // 计算距离
    calculateDistance(attacker, defender) {
        // 这里可以添加计算距离的逻辑
        // 基于座位差计算距离
        let distance = this.getSeatDistance(attacker, defender);

        // 考虑坐骑的加成等
        distance = this.applyMountEffects(distance, attacker, defender);

        return distance;
    }

    // 计算两名玩家的座位差
    getSeatDistance(player1, player2) {
        const seat1 = this.players.indexOf(player1);
        const seat2 = this.players.indexOf(player2);

        // 计算两种可能路径的距离
        const directDistance = Math.abs(seat1 - seat2);
        const reverseDistance = this.players.length - directDistance;

        // 返回较短的一条路径的距离
        return Math.min(directDistance, reverseDistance);
    }

    // 应用坐骑效果
    applyMountEffects(distance, attacker, defender) {
        // 这里可以添加计算坐骑效果的逻辑
        // 考虑坐骑的加成等
        return distance;
    }

    // 计算攻击范围
    getAttackRange(attacker, defender) {
        // 这里可以添加计算攻击范围的逻辑
        // 考虑武器距离和坐骑加成
        // 简单起见，这里我们返回1
        return 1;
    }

    // ...其他与游戏状态相关的方法
}

module.exports = GameContext;
