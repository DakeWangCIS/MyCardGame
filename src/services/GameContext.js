class GameContext {
    constructor() {
        this.currentPlayer = null;  // 当前回合的玩家
        this.players = [];         // 游戏中的所有玩家
        this.cardStack = [];       // 牌堆
        // ...其他游戏相关状态
    }

    // 设置当前玩家
    setCurrentPlayer(player) {
        this.currentPlayer = player;
    }

    // ...其他与游戏状态相关的方法
}
