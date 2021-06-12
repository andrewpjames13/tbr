import React, { useState } from 'react';
import styled from 'styled-components'
import { color } from 'styled-system'
import Box from 'Atoms/Box';
import Text from 'Atoms/Text';
import { OpenAsset } from './OpenAsset'

export function transformImage(image, option) {
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
        <OpenAsset state={state} quality={quality} close={() => setState(null)}/>
      )}
    </>
  );
}

export default AssetGrid;
