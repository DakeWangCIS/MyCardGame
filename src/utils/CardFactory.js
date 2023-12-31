import Card from '../models/Card';
import shaStrategy from '../strategies/ShaStrategy';
import shanStrategy from '../strategies/ShanStrategy';

// map the strategy to the card based on the card name
const strategies = {
    '杀': shaStrategy,
    '闪': shanStrategy,
    // ...other strategies...
};

function createCard(cardType, name, suit, value, attribute, isVirtual = false) {
    const strategy = strategies[name];
    if (!strategy) {
        throw new Error(`No strategy defined for card ${name}`);
    }
    return new Card(name, cardType, suit, value, attribute, isVirtual, strategy);
}

// CardFactory
export function createMultipleCards(cardType, cardDetails) {
    return cardDetails.map(({ name, suit, value, attribute, isVirtual }) =>
        createCard(cardType, name, suit, value, attribute, isVirtual)
    );
}

