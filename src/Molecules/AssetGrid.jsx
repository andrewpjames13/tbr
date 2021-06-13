import React, { useState } from 'react';
import styled from 'styled-components'
import { color } from 'styled-system'
import { OpenAsset } from './OpenAsset'
import { Grid, HStack, Text, Link as CLink } from '@chakra-ui/react'

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
  width: 100%;
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
`

const Link = ({ onClick, children, active }) => (
  <CLink
    onClick={onClick}
    color={active ? 'brand.white' : 'brand.gold' }
    _hover={{
      textDecoration: active ? 'none' : 'underline',
      cursor: active ? 'default' : 'pointer' 
    }}
  >
    {children}
  </CLink>
)

const AssetGrid = ({ images }) => {
  const [state, setState] = useState(null)
  const [quality, setQuality] = useState('1000x0/filters:quality(100)')

  return (
    <>
      <HStack width='100%' mt='16px' px={20}>
        <Text mr={2} color='brand.gold'>Select Quality:</Text>
        <Link onClick={() => setQuality('1000x0/filters:quality(100)')} active={quality.includes('1000')}>High</Link>
        <Link onClick={() => setQuality('500x0/filters:quality(100)')} active={quality.includes('500')}>Medium</Link>
        <Link onClick={() => setQuality('200x0/filters:quality(100)')} active={quality.includes('200')}>Low</Link>
      </HStack>
      <Grid templateColumns="repeat(4, 1fr)" gap={10} minH={500} py={20} px={20}>
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
      </Grid>

      {state && (
        <OpenAsset state={state} quality={quality} close={() => setState(null)}/>
      )}
    </>
  );
}

export default AssetGrid;
