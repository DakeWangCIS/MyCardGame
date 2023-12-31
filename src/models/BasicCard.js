class BasicCard extends Card {
    constructor(name, suit, value, isVirtual = false, attribute = null) {
        super(name, '基本牌', suit, value, isVirtual);
        this.attribute = attribute;
    }

    // activate card
    // attractive function
    activateEffect(gameContext, target) {
        // 假设 gameContext 提供了方法来处理 "杀" 和 "闪" 的逻辑
        if (this.name === "杀") {
            gameContext.handleShaEffect(this, target);
        } else if (this.name === "闪") {
            gameContext.handleShanEffect(this, target);
        } // ...其他基本牌的处理
    }
}

module.exports = BasicCard;