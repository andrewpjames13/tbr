import React from 'react';
import Box from 'Atoms/Box';

const Border = props => (
  <Box position='fixed' backgroundColor='white' {...props}>
    <Box
      bg="white"
      style={{
        width: '100%',
        height: '100%',
        backgroundImage: 'url("/images/ricepaper-texture.png")',
        opacity: .15,
      }}
    />
  </Box>
);

export default Border;
