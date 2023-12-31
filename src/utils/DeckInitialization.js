import {createMultipleCards} from './CardFactory';

// 定义每种类型卡牌的详细信息
const basicCardDetails = [
    // 杀
    // 黑桃
    { name: "杀", suit: "黑桃", value: "4", attribute: "雷", isVirtual: false },
    { name: "杀", suit: "黑桃", value: "5", attribute: "雷", isVirtual: false },
    { name: "杀", suit: "黑桃", value: "6", attribute: "雷", isVirtual: false },
    { name: "杀", suit: "黑桃", value: "7", attribute: "雷", isVirtual: false },
    { name: "杀", suit: "黑桃", value: "7", attribute: "普通", isVirtual: false },
    { name: "杀", suit: "黑桃", value: "8", attribute: "雷", isVirtual: false },
    { name: "杀", suit: "黑桃", value: "8", attribute: "普通", isVirtual: false },
    { name: "杀", suit: "黑桃", value: "8", attribute: "普通", isVirtual: false },
    { name: "杀", suit: "黑桃", value: "9", attribute: "普通", isVirtual: false },
    { name: "杀", suit: "黑桃", value: "9", attribute: "普通", isVirtual: false },
    { name: "杀", suit: "黑桃", value: "10", attribute: "普通", isVirtual: false },
    { name: "杀", suit: "黑桃", value: "10", attribute: "普通", isVirtual: false },
    // 红桃
    { name: "杀", suit: "红桃", value: "3", attribute: "火", isVirtual: false },
    { name: "杀", suit: "红桃", value: "7", attribute: "火", isVirtual: false },
    { name: "杀", suit: "红桃", value: "10", attribute: "火", isVirtual: false },
    { name: "杀", suit: "红桃", value: "10", attribute: "普通", isVirtual: false },
    { name: "杀", suit: "红桃", value: "10", attribute: "普通", isVirtual: false },
    { name: "杀", suit: "红桃", value: "11", attribute: "普通", isVirtual: false },

    // 梅花
    { name: "杀", suit: "梅花", value: "2", attribute: "普通", isVirtual: false },
    { name: "杀", suit: "梅花", value: "3", attribute: "普通", isVirtual: false },
    { name: "杀", suit: "梅花", value: "4", attribute: "普通", isVirtual: false },
    { name: "杀", suit: "梅花", value: "5", attribute: "雷", isVirtual: false },
    { name: "杀", suit: "梅花", value: "5", attribute: "普通", isVirtual: false },
    { name: "杀", suit: "梅花", value: "6", attribute: "雷", isVirtual: false },
    { name: "杀", suit: "梅花", value: "6", attribute: "普通", isVirtual: false },
    { name: "杀", suit: "梅花", value: "7", attribute: "雷", isVirtual: false },
    { name: "杀", suit: "梅花", value: "7", attribute: "普通", isVirtual: false },
    { name: "杀", suit: "梅花", value: "8", attribute: "雷", isVirtual: false },
    { name: "杀", suit: "梅花", value: "8", attribute: "普通", isVirtual: false },
    { name: "杀", suit: "梅花", value: "8", attribute: "普通", isVirtual: false },
    { name: "杀", suit: "梅花", value: "9", attribute: "普通", isVirtual: false },
    { name: "杀", suit: "梅花", value: "9", attribute: "普通", isVirtual: false },
    { name: "杀", suit: "梅花", value: "10", attribute: "普通", isVirtual: false },
    { name: "杀", suit: "梅花", value: "10", attribute: "普通", isVirtual: false },
    { name: "杀", suit: "梅花", value: "11", attribute: "普通", isVirtual: false },
    { name: "杀", suit: "梅花", value: "11", attribute: "普通", isVirtual: false },

    // 方块
    { name: "杀", suit: "方块", value: "4", attribute: "火", isVirtual: false },
    { name: "杀", suit: "方块", value: "5", attribute: "火", isVirtual: false },
    { name: "杀", suit: "方块", value: "6", attribute: "普通", isVirtual: false },
    { name: "杀", suit: "方块", value: "7", attribute: "普通", isVirtual: false },
    { name: "杀", suit: "方块", value: "8", attribute: "普通", isVirtual: false },
    { name: "杀", suit: "方块", value: "9", attribute: "普通", isVirtual: false },
    { name: "杀", suit: "方块", value: "10", attribute: "普通", isVirtual: false },
    { name: "杀", suit: "方块", value: "13", attribute: "普通", isVirtual: false },

    // 闪
    // 红桃
    { name: "闪", suit: "红桃", value: "2", attribute: "普通", isVirtual: false },
    { name: "闪", suit: "红桃", value: "2", attribute: "普通", isVirtual: false },
    { name: "闪", suit: "红桃", value: "8", attribute: "普通", isVirtual: false },
    { name: "闪", suit: "红桃", value: "9", attribute: "普通", isVirtual: false },
    { name: "闪", suit: "红桃", value: "11", attribute: "普通", isVirtual: false },
    { name: "闪", suit: "红桃", value: "12", attribute: "普通", isVirtual: false },
    { name: "闪", suit: "红桃", value: "13", attribute: "普通", isVirtual: false },

    // 方片
    { name: "闪", suit: "方片", value: "2", attribute: "普通", isVirtual: false },
    { name: "闪", suit: "方片", value: "2", attribute: "普通", isVirtual: false },
    { name: "闪", suit: "方片", value: "3", attribute: "普通", isVirtual: false },
    { name: "闪", suit: "方片", value: "4", attribute: "普通", isVirtual: false },
    { name: "闪", suit: "方片", value: "5", attribute: "普通", isVirtual: false },
    { name: "闪", suit: "方片", value: "6", attribute: "普通", isVirtual: false },
    { name: "闪", suit: "方片", value: "6", attribute: "普通", isVirtual: false },
    { name: "闪", suit: "方片", value: "7", attribute: "普通", isVirtual: false },
    { name: "闪", suit: "方片", value: "7", attribute: "普通", isVirtual: false },
    { name: "闪", suit: "方片", value: "8", attribute: "普通", isVirtual: false },
    { name: "闪", suit: "方片", value: "8", attribute: "普通", isVirtual: false },
    { name: "闪", suit: "方片", value: "9", attribute: "普通", isVirtual: false },
    { name: "闪", suit: "方片", value: "10", attribute: "普通", isVirtual: false },
    { name: "闪", suit: "方片", value: "10", attribute: "普通", isVirtual: false },
    { name: "闪", suit: "方片", value: "11", attribute: "普通", isVirtual: false },
    { name: "闪", suit: "方片", value: "11", attribute: "普通", isVirtual: false },
    { name: "闪", suit: "方片", value: "11", attribute: "普通", isVirtual: false },

    // 桃
    // 红桃
    { name: "桃", suit: "红桃", value: "3", attribute: "普通", isVirtual: false },
    { name: "桃", suit: "红桃", value: "4", attribute: "普通", isVirtual: false },
    { name: "桃", suit: "红桃", value: "5", attribute: "普通", isVirtual: false },
    { name: "桃", suit: "红桃", value: "6", attribute: "普通", isVirtual: false },
    { name: "桃", suit: "红桃", value: "6", attribute: "普通", isVirtual: false },
    { name: "桃", suit: "红桃", value: "7", attribute: "普通", isVirtual: false },
    { name: "桃", suit: "红桃", value: "8", attribute: "普通", isVirtual: false },
    { name: "桃", suit: "红桃", value: "9", attribute: "普通", isVirtual: false },
    { name: "桃", suit: "红桃", value: "12", attribute: "普通", isVirtual: false },

    // 方片
    { name: "桃", suit: "方片", value: "2", attribute: "普通", isVirtual: false },
    { name: "桃", suit: "方片", value: "3", attribute: "普通", isVirtual: false },
    { name: "桃", suit: "方片", value: "12", attribute: "普通", isVirtual: false },

    // 酒
    // 黑桃
    { name: "酒", suit: "黑桃", value: "3", attribute: "普通", isVirtual: false },
    { name: "酒", suit: "黑桃", value: "9", attribute: "普通", isVirtual: false },

    // 梅花
    { name: "酒", suit: "梅花", value: "3", attribute: "普通", isVirtual: false },
    { name: "酒", suit: "梅花", value: "9", attribute: "普通", isVirtual: false },

    // 方片
    { name: "酒", suit: "方片", value: "9", attribute: "普通", isVirtual: false },
];

const equipmentCardDetails = [
    // 武器
    // 诸葛连弩
    { name: "诸葛连弩", suit: "梅花", value: "1", attribute: null, isVirtual: false },
    { name: "诸葛连弩", suit: "方片", value: "1", attribute: null, isVirtual: false },

    // 雌雄双股剑
    { name: "雌雄双股剑", suit: "黑桃", value: "2", attribute: null, isVirtual: false },

    // 青钢剑
    { name: "青钢剑", suit: "黑桃", value: "6", attribute: null, isVirtual: false },

    // 古锭刀
    { name: "古锭刀", suit: "黑桃", value: "1", attribute: null, isVirtual: false },

    // 寒冰箭
    { name: "寒冰箭", suit: "黑桃", value: "2", attribute: null, isVirtual: false },

    // 青龙偃月刀
    { name: "青龙偃月刀", suit: "黑桃", value: "5", attribute: null, isVirtual: false },

    // 丈八蛇矛
    { name: "丈八蛇矛", suit: "黑桃", value: "12", attribute: null, isVirtual: false },

    // 贯石斧
    { name: "贯石斧", suit: "方片", value: "5", attribute: null, isVirtual: false },

    // 方天画戟
    { name: "方天画戟", suit: "方片", value: "12", attribute: null, isVirtual: false },

    // 朱雀羽扇
    { name: "朱雀羽扇", suit: "方片", value: "1", attribute: null, isVirtual: false },

    // 麒麟弓
    { name: "麒麟弓", suit: "红桃", value: "5", attribute: null, isVirtual: false },

    // 防具
    // 八卦阵
    { name: "八卦阵", suit: "黑桃", value: "2", attribute: null, isVirtual: false },
    { name: "八卦阵", suit: "梅花", value: "2", attribute: null, isVirtual: false },

    // 仁王盾
    { name: "仁王盾", suit: "梅花", value: "2", attribute: null, isVirtual: false },

    // 藤甲
    { name: "藤甲", suit: "梅花", value: "2", attribute: null, isVirtual: false },
    { name: "藤甲", suit: "黑桃", value: "2", attribute: null, isVirtual: false },

    // 白银狮子
    { name: "白银狮子", suit: "梅花", value: "1", attribute: null, isVirtual: false },

    // 坐骑
    // 绝影
    { name: "绝影", suit: "黑桃", value: "5", attribute: null, isVirtual: false },

    // 的卢
    { name: "的卢", suit: "梅花", value: "5", attribute: null, isVirtual: false },

    // 爪黄飞电
    { name: "爪黄飞电", suit: "红桃", value: "13", attribute: null, isVirtual: false },

    // 骅骝
    { name: "骅骝", suit: "方片", value: "13", attribute: null, isVirtual: false },

    // 赤兔
    { name: "赤兔", suit: "红桃", value: "5", attribute: null, isVirtual: false },

    // 大宛
    { name: "大宛", suit: "黑桃", value: "13", attribute: null, isVirtual: false },

    // 紫骍
    { name: "紫骍", suit: "方片", value: "13", attribute: null, isVirtual: false },
];

const magicalCardDetails = [
    // 过河拆桥
    { name: "过河拆桥", suit: "黑桃", value: "3", attribute: null, isVirtual: false },
    { name: "过河拆桥", suit: "黑桃", value: "4", attribute: null, isVirtual: false },
    { name: "过河拆桥", suit: "黑桃", value: "12", attribute: null, isVirtual: false },
    { name: "过河拆桥", suit: "红桃", value: "12", attribute: null, isVirtual: false },
    { name: "过河拆桥", suit: "梅花", value: "3", attribute: null, isVirtual: false },
    { name: "过河拆桥", suit: "梅花", value: "4", attribute: null, isVirtual: false },

    // 顺手牵羊
    { name: "顺手牵羊", suit: "黑桃", value: "3", attribute: null, isVirtual: false },
    { name: "顺手牵羊", suit: "黑桃", value: "4", attribute: null, isVirtual: false },
    { name: "顺手牵羊", suit: "黑桃", value: "J", attribute: null, isVirtual: false },
    { name: "顺手牵羊", suit: "方片", value: "3", attribute: null, isVirtual: false },
    { name: "顺手牵羊", suit: "方片", value: "4", attribute: null, isVirtual: false },

    // 无中生有
    { name: "无中生有", suit: "红桃", value: "7", attribute: null, isVirtual: false },
    { name: "无中生有", suit: "红桃", value: "8", attribute: null, isVirtual: false },
    { name: "无中生有", suit: "红桃", value: "9", attribute: null, isVirtual: false },
    { name: "无中生有", suit: "红桃", value: "11", attribute: null, isVirtual: false },

    // 决斗
    { name: "决斗", suit: "黑桃", value: "1", attribute: null, isVirtual: false },
    { name: "决斗", suit: "梅花", value: "1", attribute: null, isVirtual: false },
    { name: "决斗", suit: "方片", value: "1", attribute: null, isVirtual: false },

    // 借刀杀人
    { name: "借刀杀人", suit: "梅花", value: "12", attribute: null, isVirtual: false },
    { name: "借刀杀人", suit: "梅花", value: "13", attribute: null, isVirtual: false },

    // 桃园结义
    { name: "桃园结义", suit: "红桃", value: "1", attribute: null, isVirtual: false },

    // 五谷丰登
    { name: "五谷丰登", suit: "红桃", value: "3", attribute: null, isVirtual: false },
    { name: "五谷丰登", suit: "红桃", value: "4", attribute: null, isVirtual: false },

    // 南蛮入侵
    { name: "南蛮入侵", suit: "黑桃", value: "1", attribute: null, isVirtual: false },
    { name: "南蛮入侵", suit: "黑桃", value: "1", attribute: null, isVirtual: false },
    { name: "南蛮入侵", suit: "黑桃", value: "1", attribute: null, isVirtual: false },

    // 万箭齐发
    { name: "万箭齐发", suit: "红桃", value: "1", attribute: null, isVirtual: false },

    // 无懈可击
    { name: "无懈可击", suit: "黑桃", value: "11", attribute: null, isVirtual: false },
    { name: "无懈可击", suit: "黑桃", value: "13", attribute: null, isVirtual: false },
    { name: "无懈可击", suit: "红桃", value: "1", attribute: null, isVirtual: false },
    { name: "无懈可击", suit: "红桃", value: "13", attribute: null, isVirtual: false },
    { name: "无懈可击", suit: "梅花", value: "12", attribute: null, isVirtual: false },
    { name: "无懈可击", suit: "梅花", value: "13", attribute: null, isVirtual: false },
    { name: "无懈可击", suit: "方片", value: "12", attribute: null, isVirtual: false },

    // 火攻
    { name: "火攻", suit: "红桃", value: "2", attribute: "火", isVirtual: false },
    { name: "火攻", suit: "红桃", value: "4", attribute: "火", isVirtual: false },
    { name: "火攻", suit: "方片", value: "12", attribute: "火", isVirtual: false },

    // 铁锁连环
    { name: "铁锁连环", suit: "黑桃", value: "11", attribute: "连环", isVirtual: false },
    { name: "铁锁连环", suit: "黑桃", value: "12", attribute: "连环", isVirtual: false },
    { name: "铁锁连环", suit: "梅花", value: "10", attribute: "连环", isVirtual: false },
    { name: "铁锁连环", suit: "梅花", value: "11", attribute: "连环", isVirtual: false },
    { name: "铁锁连环", suit: "梅花", value: "12", attribute: "连环", isVirtual: false },
    { name: "铁锁连环", suit: "梅花", value: "13", attribute: "连环", isVirtual: false },

    // 闪电
    { name: "闪电", suit: "黑桃", value: "1", attribute: "雷", isVirtual: false },
    { name: "闪电", suit: "红桃", value: "12", attribute: "雷", isVirtual: false },

    // 乐不思蜀
    { name: "乐不思蜀", suit: "黑桃", value: "6", attribute: null, isVirtual: false },
    { name: "乐不思蜀", suit: "红桃", value: "6", attribute: null, isVirtual: false },
    { name: "乐不思蜀", suit: "梅花", value: "6", attribute: null, isVirtual: false },
];

// 创建卡牌
const basicCards = createMultipleCards('基本牌', basicCardDetails);
const equipmentCards = createMultipleCards('装备牌', equipmentCardDetails);
const magicalCards = createMultipleCards('锦囊牌', magicalCardDetails);

// 合并所有卡牌成为完整的牌堆
const deck = [...basicCards, ...equipmentCards, ...magicalCards];

export default deck;