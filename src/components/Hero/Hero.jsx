import React from 'react';
import Box from 'Atoms/Box';
import Text from 'Atoms/Text';

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
        >
          <Text color='gold' as='h1' fontFamily="SeventiesPrinted">EPK</Text>
        </Box>
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
