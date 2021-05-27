import React from 'react';
import Title from '../Components/Title';
import ImageSection from '../Components/ImageSection';

const AboutPage = () => {
  return (
    <div className="AboutPage">
      <Title title={'About Me'} span={'About Me'}></Title>
      <ImageSection />
    </div>
  );
};

export default AboutPage;
