import React from 'react';
import styled from 'styled-components';
import Text from 'Atoms/Text';
import Box from 'Atoms/Box';

const ChildBox = styled(Box)`
  margin-left: -16px;
  margin-right: -16px;
  > * {
    margin: 16px;
    white-space: nowrap;
  }
`

const Section = ({ title, description, children, ...rest }) => {
  return (
    <Box
      maxWidth={{ _: '70vw', sm: '80vw' }}
      m='0 auto'
      {...rest}
    >
      <Text variant='h1'>{title}</Text>
      {description && <Text variant='p'>{description}</Text>}
      {children && <ChildBox my={3} display='flex' flexWrap='wrap'>
        {children}
      </ChildBox>}
    </Box>
  );
}

export default Section;

Section.defaultProps = {
  py: { _: 25, sm: 100 }
}

// <div style={{position: 'fixed', zIndex: 99, width: '100%', height: '100%', top: 0, left: 0 }}>
//   <iframe frameborder="0" height="100%" width="100%"
//     src="https://youtube.com/embed/q3r4jCnd_so?autoplay=1&controls=0&showinfo=0&autohide=1&mute=1">
//   </iframe>
// </div>
