import { getUserNumber } from '@/libs/actions/user.actions';
import { getWritersNumber } from '@/libs/actions/writer.action';
import AboutBanner from '@/pages/about/AboutBanner';
import AboutMission from '@/pages/about/AboutMissionVision';
import AboutTeam from '@/pages/about/AboutTeam';
import OurHistory from '@/pages/about/OurHistory ';
import PoliciesAchievements from '@/pages/about/PoliciesAchievements';
import TechnologyStack from '@/pages/about/TechnologyStack';
import React from 'react';

const AboutPage = async () => {

  return (
    <div>
      <AboutBanner></AboutBanner>
      <OurHistory></OurHistory>
      <AboutMission></AboutMission>
      <AboutTeam></AboutTeam>
      <TechnologyStack></TechnologyStack>
      <PoliciesAchievements></PoliciesAchievements>

    </div>
  );
};

export default AboutPage;