import React, { useState } from 'react';
import styled from 'styled-components'
import { color } from 'styled-system'
import { OpenAsset } from './OpenAsset'
import { Grid, HStack, Text, Link as CLink, Center, GridItem } from '@chakra-ui/react'

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
    fontSize='lg'
  >
    {children}
  </CLink>
)

const AssetGrid = ({ images }) => {
  const [state, setState] = useState(null)
  const [quality, setQuality] = useState('1000x0/filters:quality(100)')

  const gridSpanner = (index) => {
    const remainder = images.length % 4
    if (remainder === 1 && index === (images.length - 1)) return 4
    if (remainder === 2 && (index === (images.length - 1) || index === (images.length - 2))) return 2
    if (remainder === 3 && index === (images.length - 1)) return 2
    return 1
  }

  return (
    <>
      <Center>
        <HStack mb={4}>
          <Text mr={2} color='brand.gold'>Select Quality:</Text>
          <Link onClick={() => setQuality('1000x0/filters:quality(100)')} active={quality.includes('1000')}>High</Link>
          <Link onClick={() => setQuality('500x0/filters:quality(100)')} active={quality.includes('500')}>Medium</Link>
          <Link onClick={() => setQuality('200x0/filters:quality(100)')} active={quality.includes('200')}>Low</Link>
        </HStack>
      </Center>
      
      <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)"}} gap={{ base: 5, md: 10 }} minH={500}>
        {images.map((image, index) => (
          <GridItem key={`${image._uid}`} colSpan={gridSpanner(index)}>
            <Button
              style={{
                backgroundImage: `url("${transformImage(image.image.filename, 'filters:quality(100)')}")`
              }}
              onClick={() => setState(image.image.filename)}
              backgroundColor='black'
            />
          </GridItem>
        ))}
      </Grid>

      {state && (
        <OpenAsset state={state} quality={quality} close={() => setState(null)}/>
      )}
    </>
  );
}

export default AssetGrid;
