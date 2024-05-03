import React, { useState } from 'react';

const Profile = () => {
  // Initialize profile sections with default values
  const [sections, setSections] = useState([
    {
      personalInfo: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        location: 'New York',
      },
    },
    {
      experience: [
        {
          company: 'ABC Inc.',
          position: 'Software Engineer',
          duration: '2018-2020',
        },
        {
          company: 'XYZ Corp.',
          position: 'Senior Developer',
          duration: '2020-2022',
        },
      ],
    },
    {
      education: [
        {
          institution: 'University of ABC',
          degree: "Bachelor's in Computer Science",
          graduationYear: 2017,
        },
        {
          institution: 'Tech Institute XYZ',
          degree: "Master's in Software Engineering",
          graduationYear: 2019,
        },
      ],
    },
    {
      skills: ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS'],
    },
  ]);

  // Function to reset all sections
  const resetSections = () => {
    setSections([
      {
        personalInfo: {
          name: '',
          email: '',
          location: '',
        },
      },
      {
        experience: [],
      },
      {
        education: [],
      },
      {
        skills: [],
      },
    ]);
  };

  return (
    <div>
      <h1>My LinkedIn Profile</h1>
      {/* Render profile sections */}
      {sections.map((section, index) => (
        <div key={index}>
          {/* Render each section */}
          <h2>Section {index + 1}</h2>
          {/* Additional rendering logic for each section */}
          {Object.keys(section).map((key) => (
            <div key={key}>
              <h3>{key}</h3>
              {/* Render section data */}
              {Array.isArray(section[key]) ? (
                // If section data is an array (like experience, education, skills)
                <ul>
                  {section[key].map((item, i) => (
                    <li key={i}>{JSON.stringify(item)}</li>
                  ))}
                </ul>
              ) : (
                // If section data is an object (like personalInfo)
                <ul>
                  {Object.keys(section[key]).map((field) => (
                    <li key={field}>
                      <strong>{field}:</strong> {section[key][field]}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ))}
      {/* Button to reset all sections */}
      <button onClick={resetSections}>Reset All Sections</button>
    </div>
  );
};

export default Profile;
