// 卡牌效果策略
const cardEffects = {
    "杀": {
        execute(gameContext, target) {
            // 实现"杀"的效果
            console.log(`${gameContext.currentPlayer.name} uses 杀 on ${target.name}`);
            // ...具体逻辑
        }
    },
    "闪": {
        execute(gameContext, source) {
            // 实现"闪"的效果
            console.log(`${gameContext.currentPlayer.name} uses 闪`);
            // ...具体逻辑
        }
    },
    "桃": {
        execute(gameContext) {
            // 实现"桃"的效果
            console.log(`${gameContext.currentPlayer.name} uses 桃`);
            // ...具体逻辑
        }
    },
    "酒": {
        execute(gameContext) {
            // 实现"酒"的效果
            console.log(`${gameContext.currentPlayer.name} uses 酒`);
            // ...具体逻辑
        }
    }
    // ...其他卡牌效果
};


class Card {
    constructor(name, type, suit, value, isVirtual = false) {
        this.name = name;   // Name(如：杀，闪，桃)
        this.type = type;   // Type(基本牌basic，锦囊牌magical，装备牌equipment)
        this.suit = suit;   // Suit(黑spade，红heart，梅club，方diamond)
        this.value = value; // Value(A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K)
        this.isVirtual = isVirtual; // 是否为虚拟牌
    }

    // get color
    getColor() {
        return this.suit === 'spade' || this.suit === 'club' ? 'black' : 'red';
    }

    // activate card
    activateEffect(gameContext, target) {
        const effect = cardEffects[this.name];
        if (effect) {
            effect.execute(gameContext, target);
        } else {
            throw new Error(`Unknown card effect for ${this.name}`);
        }
    }

}