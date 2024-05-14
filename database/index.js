const Skill = require('./models/skill');
const SkillType = require('./models/skill-type');
const SkillDetail = require('./models/skill-detail');
const Rank = require('./models/rank');
const QuestType = require('./models/quest-type');
const DecorationType = require('./models/decoration-type');
const SlotType = require('./models/slot-type');

async function initializeDatabase() {
    SkillType.createSkillType('normal');
    SkillType.createSkillType('rampage');

    Rank.createRank('low');
    Rank.createRank('high');
    Rank.createRank('master');

    QuestType.createQuestType('event');
    QuestType.createQuestType('anomaly');
    QuestType.createQuestType('collab');
    QuestType.createQuestType('hub');
    QuestType.createQuestType('village');
    QuestType.createQuestType('arena');
    QuestType.createQuestType('training');

    DecorationType.createDecorationType('normal');
    DecorationType.createDecorationType('rampage');

    SlotType.createSlotType('normal');
    SlotType.createSlotType('rampage');

}

async function initializeAssosiations() {
}

initializeDatabase();
initializeAssosiations();