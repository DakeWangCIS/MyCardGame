const Card = require('./Card');

class MagicalCard extends Card {
    constructor(name, suit, value, isVirtual = false, attribute = null) {
        super(name, '锦囊牌', suit, value, isVirtual);
        this.attribute = attribute;
    }
}

module.exports = MagicalCard;