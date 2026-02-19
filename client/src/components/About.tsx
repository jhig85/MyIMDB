import React, { useEffect, useState } from 'react';
import AboutStyles from './About.styled';

interface AboutProps {
  headline?: string;
  message?: string;
}

const About = () => {
  const [data, setData] = useState<AboutProps>({});

  useEffect(() => {
    fetch('/api/about')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <AboutStyles>
      {' '}
      {data ? (
        <>
          <h1>{data.headline}</h1>
          <p>{data.message}</p>
        </>
      ) : (
        <p>Loading data...</p>
      )}{' '}
    </AboutStyles>
  );
};

export default About;
