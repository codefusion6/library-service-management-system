import AboutBanner from '@/components/about/AboutBanner';
import AboutMission from '@/components/about/AboutMission';
import AboutTeam from '@/components/about/AboutTeam';
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