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
      maxWidth='80vw'
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
  py: 100
}
