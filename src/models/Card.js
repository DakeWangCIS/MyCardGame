class Card {
    constructor(name, type, suit, value, isVirtual = false, strategy = null) {
        this.name = name;   // Name(如：杀，闪，桃)
        this.type = type;   // Type(基本牌basic，锦囊牌magical，装备牌equipment)
        this.suit = suit;   // Suit(黑spade，红heart，梅club，方diamond)
        this.value = value; // Value(A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K)
        this.isVirtual = isVirtual; // 是否为虚拟牌
        this.strategy = strategy;   // 策略
    }

    // get color
    getColor() {
        return this.suit === 'spade' || this.suit === 'club' ? 'black' : 'red';
    }

    // get Info
    getInfo() {
        return {
            name: this.name,
            type: this.type,
            suit: this.suit,
            value: this.value,
            isVirtual: this.isVirtual,
            color: this.getColor(),
        }
    }

    // activate card
    activateEffect(gameContext, target) {
        if (this.strategy) {
            this.strategy.execute(gameContext, target);
        } else {
            throw new Error(`No strategy defined for ${this.name}`);
        }
    }
}

module.exports = Card;
