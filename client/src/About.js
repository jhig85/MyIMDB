import React, { useEffect, useState } from "react";
import AboutStyles from "./About.styled";
const About = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/api/about")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <AboutStyles>
      {" "}
      {data ? (
        <>
          <h1>{data.headline}</h1>
          <p>{data.message}</p>
        </>
      ) : (
        <p>Loading data...</p>
      )}{" "}
    </AboutStyles>
  );
};

export default About;
