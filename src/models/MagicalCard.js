class MagicalCard extends Card {
    constructor(name, suit, value, isVirtual = false, attribute = null) {
        super(name, '锦囊牌', suit, value, isVirtual);
        this.attribute = attribute;
    }

    // activate card
    // attractive function
    activateEffect(gameContext, target) {
        // 锦囊牌可能需要根据属性和特定规则来触发效果
        if (this.name === "火攻") {
            gameContext.handleHuoGongEffect(this, target);
        } else if (this.name === "闪电") {
            gameContext.handleShanDianEffect(this);
        } // ...其他锦囊牌的处理
    }
}

module.exports = MagicalCard;