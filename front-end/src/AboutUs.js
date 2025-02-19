import React, { useEffect, useState } from 'react';

const AboutUs = () => {
  const [aboutInfo, setAboutInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/aboutus')
      .then(response => response.json())
      .then(data => setAboutInfo(data))
      .catch(err => setError('Failed to load about information'));
  }, []);

  if (error) return <p>{error}</p>;
  if (!aboutInfo) return <p>Loading...</p>;

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
      <h2>About Me</h2>
      <p>{aboutInfo.about}</p>
      {aboutInfo.image && <img src={aboutInfo.image} alt="About Me" style={{ width: '100%', borderRadius: '8px' }} />}
    </div>
  );
};

export default AboutUs;