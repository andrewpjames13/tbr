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
    <Box {...rest}>
      <Text variant='h1'>{title}</Text>
      <Text variant='p'>{description}</Text>
      <ChildBox my={3} display='flex' flexWrap='wrap'>
        {children}
      </ChildBox>
    </Box>
  );
}

export default Section;

Section.defaultProps = {
  mb: 100
}
