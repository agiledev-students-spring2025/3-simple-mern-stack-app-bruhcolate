import { useState, useEffect } from 'react';
import axios from 'axios';

const AboutUs = () => {
  const [aboutInfo, setAboutInfo] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/aboutus`)
      .then(response => {
        console.log(response.data);
        setAboutInfo(response.data);
      })
      .catch(err => {
        const errorMessage = JSON.stringify(err, null, 2);
        setError(errorMessage);
      });
  }, []);

  return (
    <>
      <h1>About Me</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {aboutInfo && (
        <div style={{ maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
          <p>{aboutInfo.about}</p>
          {aboutInfo.image && (
            <img src={aboutInfo.image} alt="Me" style={{ width: '100%', borderRadius: '8px', marginTop: '10px' }} />
          )}
        </div>
      )}
    </>
  );
};

export default AboutUs;
