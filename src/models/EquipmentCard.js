const Card = require('./Card');

class EquipmentCard extends Card {
    constructor(name, suit, value, isVirtual = false, equipmentType) {
        super(name, '装备牌', suit, value, isVirtual);
        this.equipmentType = equipmentType;
    }
}

module.exports = EquipmentCard;