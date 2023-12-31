class Ability {
    /**
     * Create a new ability.
     * @param {string} name
     * @param {string} description
     * @param {string} type
     * @param {Function} execution
     */
    constructor(name, type, description, execution) {
        this.name = name;
        this.type = type; // 限定技、锁定技
        this.description = description;
        this.execution = execution; // 技能的执行逻辑
    }

    /**
     * Execute the ability.
     * @param {General} general
     * @param {GameContext} gameContext
     * @param {...any} args
     */
    execute(general, gameContext, ...args) {
        try{
            // 执行技能
            this.execution.apply(this, [general, gameContext, ...args]);
        } catch (error) {
            // 执行失败
            console.error(`Error executing ability '${this.name}':`, error);
        }
    }
}

module.exports = Ability;
