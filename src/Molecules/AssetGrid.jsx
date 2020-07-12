import React, { useState } from 'react';
import styled from 'styled-components'
import { color } from 'styled-system'
import Box from 'Atoms/Box';
import Text from 'Atoms/Text';

function transformImage(image, option) {
  var imageService = '//img2.storyblok.com/'
  var path = image.replace('https://a.storyblok.com', '')
  return imageService + option + path
}

const Button = styled.button`
  ${color}
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: calc(100% - 32px);
  height: 38vh;
  float: left;
  opacity: 0.4;
  transform: scale(1);
  transition: opacity 400ms ease-in-out, transform 200ms ease-in-out;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 1;
    transform: scale(1.05)
  }
  &:focus { outline: none; }

  @media only screen and (min-width: 700px) {
    width: calc(50% - 32px);
  }

  @media only screen and (min-width: 1200px) {
    width: calc(33.33% - 32px);
  }

  @media only screen and (min-width: 1500px) {
    width: calc(25% - 32px);
  }
`

const Close = styled.svg`
  ${color}
`

const Link = ({ onClick, children, active }) => (
  <Text
    variant={active ? 'active' : 'button'}
    onClick={onClick}
    mr={16}
    color='white'
  >
    {children}
  </Text>
)

const AssetGrid = ({ images }) => {
  const [state, setState] = useState(null)
  const [quality, setQuality] = useState('1000x0/filters:quality(100)')

  return (
    <>
      <Box width='100%' style={{ marginTop: '-16px' }}>
        <Text variant='p' mr={2} style={{ display: 'inline' }}>Select Quality:</Text>
        <Link onClick={() => setQuality('1000x0/filters:quality(100)')} active={quality.includes('1000')}>High</Link>
        <Link onClick={() => setQuality('500x0/filters:quality(100)')} active={quality.includes('500')}>Medium</Link>
        <Link onClick={() => setQuality('200x0/filters:quality(100)')} active={quality.includes('200')}>Low</Link>
      </Box>
      {images.map((image) => (
        <Button
          key={`${image._uid}`}
          style={{
            backgroundImage: `url("${transformImage(image.image.filename, 'filters:quality(100)')}")`
          }}
          onClick={() => setState(image.image.filename)}
          backgroundColor='black'
        />
      ))}
      {state && (
        <Box
          backgroundColor='black'
          position='fixed'
          top='0'
          right='0'
          bottom='0'
          left='0'
          opacity='0.9'
          display='flex'
          alignItems='center'
          justifyContent='center'
          style={{ margin: 0, overflowY: 'scroll' }}
          onClick={() => setState(null)}
        >
          <Text variant='a' position='absolute' top='50px' right= '50px'>
            <Close fill='gold' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></Close>
          </Text>
          <img src={transformImage(state, quality)} alt={state} style={{ maxHeight: '80vh' }} />
        </Box>
      )}
    </>
  );
}

export default AssetGrid;
