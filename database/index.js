const Skill = require('./models/skill');
const SkillType = require('./models/skill-type');
const SkillDetail = require('./models/skill-detail');

async function initializeDatabase() {
    SkillType.createSkillType('normal');
    SkillType.createSkillType('rampage');
}

initializeDatabase();