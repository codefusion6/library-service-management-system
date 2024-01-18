import AboutBanner from '@/pages/about/AboutBanner';
import AboutMission from '@/pages/about/AboutMission';
import AboutTeam from '@/pages/about/AboutTeam';
import React from 'react';

const AboutPage = () => {
  return (
    <div>
      <div>About Us</div>
      <AboutBanner></AboutBanner>
      <AboutMission></AboutMission>
      <AboutTeam></AboutTeam>
    </div>
  );
};

export default AboutPage;