import React from 'react';
import Box from 'Atoms/Box';

function Hero() {
  return (
    <>
      <Box bg="white" position='relative'>
        <Box
          bg="white"
          style={{
            width: '100vw',
            height: '100vh',
            backgroundImage: 'url("/images/ricepaper-texture.png")',
            opacity: .15,
          }}
        />
        <Box
          position='absolute'
          top='50%'
          left='50%'
          style={{ transform: 'translate(-50%, -50%)'}}
          width='30vw'
        >
          <img
            src="/images/the-born-readies-logo.png"
            alt="The Born Readies It's Just Rock & Roll"
            style={{ width: '100%' }}
          />
        </Box>
      </Box>
    </>
  );
}

export default Hero;
