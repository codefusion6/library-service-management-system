import AboutBanner from '@/pages/about/AboutBanner';
import AboutMission from '@/pages/about/AboutMission';
import AboutTeam from '@/pages/about/AboutTeam';
import AboutVision from '@/pages/about/AboutVision';
import PoliciesAchievements from '@/pages/about/PoliciesAchievements';
import TechnologyStack from '@/pages/about/TechnologyStack';
import React from 'react';

const AboutPage = async () => {
  return (
    <div>
      <AboutBanner></AboutBanner>
      <AboutMission></AboutMission>
      <AboutVision></AboutVision>
      <AboutTeam></AboutTeam>
      <TechnologyStack></TechnologyStack>
      <PoliciesAchievements></PoliciesAchievements>

    </div>
  );
};

export default AboutPage;