import { FaReact, FaNodeJs, FaJava, FaPython, FaHtml5, FaCss3 } from 'react-icons/fa';

const skills = [
  { icon: <FaReact />, name: 'React' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  // ... other skills
];

const SkillsSection: React.FC = () => (
  <div className="grid grid-cols-4 gap-4 p-8">
    {skills.map((skill, idx) => (
      <div key={idx} className="p-4 transform transition duration-300 hover:scale-110">
        <div className="text-6xl">{skill.icon}</div>
        <p>{skill.name}</p>
      </div>
    ))}
  </div>
);

export default SkillsSection;
