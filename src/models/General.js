/*
    General class
    Used to create general objects
 */
class General {
    constructor(name, maxHealth, gender, abilities = [], group) {
        this.name = name;
        this.maxHealth = maxHealth;
        this.gender = gender;
        this.abilities = abilities;
        this.originalGroup = group; // Group(Wei, Shu, Wu, Qun, God)
    }

    // add ability
    addAbility(ability) {
        this.abilities.push(ability);
    }

    // remove ability
    removeAbility(ability) {
        this.abilities = this.abilities.filter(a => a !== ability);
    }

    // remove all abilities
    removeAllAbilities() {
        this.abilities = [];
    }

    // activate abilities
    activateAbility(abilityName, gameContext, ...args) {
        let ability = this.abilities.find(ability => ability.name === abilityName);
        if (ability) {
            ability.execute(this, gameContext, ...args);
        }
    }

    // God group choose the final group
    selectGroupForGod(finalGroup) {
        if (this.originalGroup === 'God') {
            this.group = finalGroup;
        }
    }

    // get Info
    getInfo() {
        return {
            name: this.name,
            maxHealth: this.maxHealth,
            gender: this.gender,
            group: this.group,
        }
    }
}

module.exports = General;