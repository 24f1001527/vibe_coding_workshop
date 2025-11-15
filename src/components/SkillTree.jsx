import React from 'react';

const SkillTree = ({ skillPoints, skills, purchaseSkill }) => {
  const skillCategories = {
    Work: [
      { id: 'work_1', name: 'Productivity Pro', cost: 1, description: '+5% XP from Work tasks' },
      { id: 'work_2', name: 'Gold Getter', cost: 2, description: '+10% Gold from all tasks' },
    ],
    Health: [
      { id: 'health_1', name: 'HP Haven', cost: 1, description: '+10 Max HP' },
      { id: 'health_2', name: 'Regen Rate', cost: 2, description: 'Regenerate 1 HP per hour' },
    ],
    Social: [
      { id: 'social_1', name: 'Charisma Charm', cost: 1, description: 'Unlock special social quests' },
      { id: 'social_2', name: 'Streak Shield', cost: 3, description: 'Protect your streak once per week' },
    ],
    Learning: [
      { id: 'learning_1', name: 'Quick Learner', cost: 1, description: '+5% XP from Learning tasks' },
      { id: 'learning_2', name: 'Skill Point Savant', cost: 5, description: 'Gain an extra skill point every 5 levels' },
    ],
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 mt-4">
      <h2 className="text-2xl font-bold text-yellow-400 mb-4">Skill Tree</h2>
      <p className="text-lg text-gray-400 mb-4">You have <span className="font-bold text-yellow-400">{skillPoints}</span> skill points to spend.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(skillCategories).map(([category, skillsInCategory]) => (
          <div key={category}>
            <h3 className="text-xl font-bold text-cyan-400 mb-2">{category}</h3>
            <ul>
              {skillsInCategory.map((skill) => (
                <li key={skill.id} className="mb-2">
                  <button
                    onClick={() => purchaseSkill(skill.id, skill.cost)}
                    disabled={skillPoints < skill.cost || (skills[skill.id] && skills[skill.id].purchased)}
                    className="w-full text-left bg-gray-700 p-3 rounded-lg hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <p className="font-bold">{skill.name} - {skill.cost} SP</p>
                    <p className="text-sm text-gray-400">{skill.description}</p>
                    {skills[skill.id] && skills[skill.id].purchased && <p className="text-green-500 font-bold">Purchased</p>}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillTree;
