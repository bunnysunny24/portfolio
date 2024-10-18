import React, { useState } from 'react'; // Import useState along with React
import './SkillsSection.css';
const skills = [
  { icon: (
      // Set icon size to 8rem (32 units)
      <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt="React" className="w-32 h-32 mx-auto" />
      </a>
    ), name: 'React' 
  },
  { icon: (
      <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" className="w-32 h-32 mx-auto" />
      </a>
    ), name: 'Node.js' 
  },
  { icon: (
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" className="w-32 h-32 mx-auto" />
      </a>
    ), name: 'HTML' 
  },
  { icon: (
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" className="w-32 h-32 mx-auto" />
      </a>
    ), name: 'CSS' 
  },
  { icon: (
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-32 h-32 mx-auto" />
      </a>
    ), name: 'JavaScript' 
  },
  { icon: (
      <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-32 h-32 mx-auto" />
      </a>
    ), name: 'TypeScript' 
  },
  { icon: (
      <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="w-32 h-32 mx-auto" />
      </a>
    ), name: 'Tailwind CSS' 
  },
  { icon: (
      <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" className="w-32 h-32 mx-auto" />
      </a>
    ), name: 'Git' 
  },
  { icon: (
      <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" className="w-32 h-32 mx-auto" />
      </a>
    ), name: 'Docker' 
  },
  { icon: (
      <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg" alt="Vercel" className="w-32 h-32 mx-auto" />
      </a>
    ), name: 'Vercel' 
  },
  { icon: (
      <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" className="w-32 h-32 mx-auto" />
      </a>
    ), name: 'MySQL' 
  },
  { icon: (
      <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-32 h-32 mx-auto" />
      </a>
    ), name: 'MongoDB' 
  },
  { icon: (
      <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" alt="Express" className="w-32 h-32 mx-auto" />
      </a>
    ), name: 'Express' 
  },
  { icon: (
      <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" alt="C" className="w-32 h-32 mx-auto" />
      </a>
    ), name: 'C' 
  },
  { icon: (
      <a href="https://en.wikipedia.org/wiki/C%2B%2B" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-32 h-32 mx-auto" />
      </a>
    ), name: 'C++' 
  },
  { icon: (
      <a href="https://www.oracle.com/java/" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" className="w-32 h-32 mx-auto" />
      </a>
    ), name: 'Java' 
  },
  { icon: (
      <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="w-32 h-32 mx-auto" />
      </a>
    ), name: 'Python' 
  },
  { icon: (
      <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" alt="FastAPI" className="w-32 h-32 mx-auto" />
      </a>
    ), name: 'FastAPI' 
  },
  { icon: (
      <a href="https://www.canva.com/" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" alt="Canva" className="w-32 h-32 mx-auto" />
      </a>
    ), name: 'Canva' 
  },
  { icon: (
      <a href="https://learn.microsoft.com/en-us/powershell/" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-original.svg" alt="PowerShell" className="w-32 h-32 mx-auto" />
      </a>
    ), name: 'PowerShell' 
  },
];
const SkillsSection: React.FC = () => {
  const [hoveredBoxPosition, setHoveredBoxPosition] = useState({ top: 0, left: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setHoveredBoxPosition({
      top: y - 80,
      left: x - 80,
    });
  };

  return (
    <div className="relative p-6" onMouseMove={handleMouseMove} style={{ backgroundColor: '#121212' }}> {/* Black background */}
      {/* Title Box */}
      <div className="mb-6">
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg flex justify-center items-center transition-transform duration-300 transform group hover:scale-110 font-bold">
          <span className="transition-transform duration-300 transform group-hover:scale-400 group-hover:font-bold">
            My Skill Set
          </span>
        </div>
      </div>

      {/* Movable box */}
      <div
        className="absolute bg-blue-500 opacity-20 rounded-lg"
        style={{
          width: '170px',
          height: '170px',
          top: `${hoveredBoxPosition.top}px`,
          left: `${hoveredBoxPosition.left}px`,
          transition: 'top 0.1s, left 0.1s',
          pointerEvents: 'none',
        }}
      />
      
      {/* Skills Grid */}
      <div className="grid grid-cols-5 gap-6">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
            style={{ width: '160px', height: '160px' }} 
          >
            <div className="flex items-center justify-center mb-1">
              {skill.icon}
            </div>
            <p className="text-white text-center transition-transform duration-300 transform hover:translate-y-[-10px] hover:scale-110">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;