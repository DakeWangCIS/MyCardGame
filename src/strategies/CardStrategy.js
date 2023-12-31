class CardStrategy {
    execute(gameContext, target) {
        throw new Error('CardStrategy#execute must be implemented by subclass');
    }
}

module.exports = CardStrategy;