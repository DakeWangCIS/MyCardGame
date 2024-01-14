const Card = require('./Card');

class BasicCard extends Card {
    constructor(name, suit, value, isVirtual = false, attribute = null) {
        super(name, '基本牌', suit, value, isVirtual);
        this.attribute = attribute;
    }
}

module.exports = BasicCard;