import React from 'react';

// Components
import HomeNavBar from '../components/Home/HomeNavBar';

// Utilities
import imagePath from '../utilities/imagePath';

const vigorLogoWhite = imagePath('Vigor-Logo-White.svg');

const Home = () => {
  return (
    <>
      <HomeNavBar
        vigorLogoWhite={vigorLogoWhite} />
    </>
  );
};

export default Home;
