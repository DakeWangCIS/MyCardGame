// src/components/Skill.js

class Skill {
    constructor(name, description, execution) {
        this.name = name;
        this.description = description;
        this.execution = execution; // 技能的执行逻辑
    }

    execute() {
        // 执行技能
        this.execution.apply(this, arguments);
    }
}

module.exports = Skill;
