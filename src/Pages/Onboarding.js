import React from 'react';
import ImageSlider from './../Components/Mobile/Onboarding/Onboarding';
import Globalstyles from './../app/Globalstyle'

const App = () => {
  const slides = [
    {
      image: '/slider1.svg',
      description: 'Connect With People',
    },
    {
      image: 'slider2.svg',
      description: 'Get Stuff Done',
    },
    {
      image: 'slider3.svg',
      description: 'Celebrate',
    },
    {
        image: 'slider4.svg',
        description: 'Lets Get Started',
      }
    // Add more slides as needed.
  ];

  return (
    <div>
      <Globalstyles/>
      <ImageSlider slides={slides} />
    </div>
  );
};

export default App;
