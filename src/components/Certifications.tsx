import React, { useState } from 'react';

const Certifications: React.FC = () => {
  const [showCerts, setShowCerts] = useState(false);

  return (
    <div className="p-6 bg-black text-white hover:bg-gray-900 transition duration-300">
      <button onClick={() => setShowCerts(!showCerts)}>Show Certifications</button>
      {showCerts && (
        <ul>
          <li>Certification 1</li>
          <li>Certification 2</li>
          {/* Add more certifications */}
        </ul>
      )}
    </div>
  );
};

export default Certifications;
