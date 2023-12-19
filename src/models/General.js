/*
    General class
    Used to create general objects
 */
class General {
    constructor(name, health, gender, abilities = [], group, isChain, isKing) {
        this.name = name;
        this.maxHealth = health;
        this.currentHealth = health;
        this.health = health;
        this.gender = gender;
        this.abilities = abilities;
        this.group = group; // Group(Wei, Shu, Wu, Qun, God)
        this.isChain = isChain; // 是否为连环
        this.isKing = isKing; // 是否为主公
    }

    // add ability
    addAbility(ability) {
        this.abilities.push(ability);
    }

    // activate ability
    activateAbility(abilityName, ...args) {
        let ability = this.abilities.find(ability => ability.name === abilityName);
        if (ability) {
            ability.execute(this, ...args);
        }
    }

    // take damage
    takeDamage(damage, source) {
        this.currentHealth -= damage;

        //could add some logic here, like trigger some ability

        if (this.currentHealth <= 0) {
            this.handleDeath(source);
        }
    }

    //lose health
    loseHealth(amount) {
        this.currentHealth = Math.max(this.currentHealth - amount, 0);

        //could add some logic here, like trigger some ability

        if (this.currentHealth <= 0) {
            this.handleDeath();
        }
    }

    //recover health
    recoverHealth(amount) {
        this.currentHealth = Math.min(this.currentHealth + amount, this.maxHealth);
    }

    // handle death
    handleDeath(source) {
        if (source) {
            console.log(`${this.name} has been slain by ${source.name}.`);
            // 死亡逻辑，当有伤害来源时执行
        } else {
            console.log(`${this.name} has died due to health depletion.`);
            // 死亡逻辑，当没有伤害来源时执行
        }

        // 通用的死亡逻辑，无论死因如何都会执行
    }

}

module.exports = General;