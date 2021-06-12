import React, { useState } from 'react'
import { Box, Text, Center, Spinner, Image } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import { transformImage } from './AssetGrid'

export const OpenAsset = ({ state, quality, close }) => {
    const [loaded, setLoaded] = useState(false)
   
    return (
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
          onClick={close}
        >
          <Text variant='a' position='absolute' top='50px' right= '50px'>
            <CloseIcon color='brand.gold' width="8" height="8" />
          </Text>
          {!loaded && (
            <Center color='gold' size='lg' position='fixed'>
                <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="brand.black"
                color="brand.gold"
                size="xl"
                />
            </Center>
        )}
          <Image
            id={state}
            src={transformImage(state, quality)}
            smaxHeight='80vh'
            zIndex={1}
            color='brand.black'
            onLoad={() => setLoaded(true)}
          />
        </Box>
    )
}