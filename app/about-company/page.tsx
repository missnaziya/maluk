"use client"

import React from 'react';
import AboutUs from '@/components/AboutUs';
import Achievements from '@/components/Achievements';
import Banner from '@/components/Banner';
import VisionMission from '@/components/VisionMission';
import TeamMembers from '@/components/TeamMembers';
import WhyChooseUs from '@/components/WhyChooseUS';
import OurCertificate from '@/components/OurCertificate';

const page = () => {
  return (
    <>
     <Banner bg="url('/bread-about.jpg')" />
      <AboutUs />
      <Achievements />
      <VisionMission />
      <TeamMembers />
      <WhyChooseUs/>
      <OurCertificate />
    </>
  );
  
};

export default page;
