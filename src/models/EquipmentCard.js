class EquipmentCard extends Card {
    constructor(name, suit, value, isVirtual = false, equipmentType) {
        super(name, '装备牌', suit, value, isVirtual);
        this.equipmentType = equipmentType;
    }

    // activate card
    // attractive function
    activateEffect(gameContext, target) {
        // 装备牌通常不需要在这里激活，而是在玩家装备时处理
        console.log(`${this.name} 已装备到 ${target.name}`);
        // ...根据装备类型执行效果
    }
}

module.exports = EquipmentCard;