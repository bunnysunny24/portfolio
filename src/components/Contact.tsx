import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact: React.FC = () => (
  <div className="flex justify-center space-x-6 mt-10">
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="text-6xl hover:text-blue-500 transition duration-300" />
    </a>
    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
      <FaGithub className="text-6xl hover:text-gray-500 transition duration-300" />
    </a>
  </div>
);

export default Contact;
