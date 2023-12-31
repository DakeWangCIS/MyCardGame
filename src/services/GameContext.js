class GameContext {
    constructor() {
        this.currentPlayer = null;  // 当前回合的玩家
        this.players = [];         // 游戏中的所有玩家
        this.cardStack = [];       // 牌堆
        this.phase = null;         // 当前游戏阶段
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

    // discard cards
    discardCards(player, ...cardsToDiscard) {
        // ...the logic of discarding cards
        // for example: remove cards from player's handCards, and then add them to discard pile

    }

    // draw cards
    drawCards(player, numberOfCardsToDraw) {
        // ...the logic of drawing cards
        // for example: get cards from cardStack, and then add them to player's handCards

    }

    // ...其他与游戏状态相关的方法
}
