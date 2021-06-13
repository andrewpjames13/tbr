import React, { useEffect, useState, createElement } from 'react';
import axios from 'axios';
import Section from 'Molecules/Section';
import AssetGrid from 'Molecules/AssetGrid';
import AudioPlayer from 'Molecules/AudioPlayer';
import Hero from 'components/Hero/Hero'
import Border from 'components/Border/Border'
import Contact from 'components/Contact/Contact'
import { Flex, Box, Grid, Text, Center, Button, useDisclosure, IconButton, AspectRatio } from '@chakra-ui/react'
import { PlayIcon } from 'Atoms/PlayIcon'
import Fade from 'react-reveal/Fade';
import { CloseIcon } from '@chakra-ui/icons'

const renderableComponents = { Section, Text, AssetGrid, AudioPlayer }

const App = () => {
  const [state, setState] = useState()
  const date = new Date()
  const year = date.getFullYear()
  const { isOpen, onToggle } = useDisclosure()

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(`https://api.storyblok.com/v1/cdn/stories/epk?token=tgsLVrCCmaADrJEmoPu58Att&version=published&cv=${Math.random()}`)
      setState(response)
    }
    fetch()
  }, [])
  const about = state?.data?.story?.content?.body?.[0]
  const heard = state?.data?.story?.content?.body?.[1]
  const articles = state?.data?.story?.content?.body?.[2]
  const assets = state?.data?.story?.content?.body?.[3]
  const audio = state?.data?.story?.content?.body?.[4]

  return (
    <>
      <Hero />
      {/* <Grid templateColumns="repeat(2, 1fr)" gap={20} minH={500} py={20} px={20}>
        <Box position='relative'>
          <Image src='/images/TBR-couch.jpg' opacity={0.75} />
        </Box>
        <Flex
          flexDirection='column'
          justifyContent='center'
        >
          <Text fontSize='6xl' color='brand.gold'>Who we are</Text>
          <Text fontSize='lg' color='brand.gold'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium nisl nec fringilla sollicitudin. Mauris at vehicula augue. Mauris egestas, enim congue porttitor cursus, mauris mauris lobortis sapien, posuere suscipit nibh est ut felis. Duis sit amet tellus nec erat sollicitudin facilisis. Morbi auctor vitae leo eget lobortis. Aliquam fringilla venenatis ipsum, ultricies rhoncus leo ornare egestas. Fusce eu arcu hendrerit, convallis nisl eget, elementum tellus. Vestibulum rhoncus id eros sed dapibus. Duis placerat ornare felis. Vestibulum ut volutpat orci. Vestibulum felis sem, finibus eget mauris nec, molestie rutrum lorem. Ut sollicitudin elit eget nunc pellentesque pulvinar.
          </Text>
        </Flex>
      </Grid> */}

      <Center
        minH='75vh'
        position='relative'
        flexDirection='column'
        _after={{
          bgImage:'/images/TBR-couch.jpg',
          bgSize:'cover',
          opacity: 0.15,
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          zIndex: -1,
          content: '""'
        }}
      >
        <Fade bottom>
          <Text fontSize='6xl' color='brand.gold'>{about?.title}</Text>
          <Text fontSize='lg' color='brand.gold' textAlign='center' maxW={{ base: '75vw', md: '50vw' }}>
            {about?.description}
          </Text>
        </Fade>
      </Center>
      <Center minH='55vh' flexDirection='column'>
        <Fade bottom>
          <Text fontSize='6xl' color='brand.gold'>{heard?.title}</Text>
          <Text fontSize='lg' color='brand.gold'>{heard?.description}</Text>
        </Fade>
        <Flex flexWrap='wrap' justifyContent='center' px={20} py={8}>
          <Fade bottom cascade>
            {heard?.children?.map(child => (
              <Button 
                key={child?._uid}
                onClick={() => window.open(child?.href)}
                bgColor='brand.gold'
                color='brand.black'
                mr={4}
                mb={4}
              >
                {child?.children}
              </Button>
            ))}
          </Fade>
        </Flex>
      </Center>
      {/* Video */}
      <Center
        minH='75vh'
        position='relative'
        flexDirection='column'
        _after={{
          bgImage:'/images/mmhero.jpg',
          bgSize:'cover',
          opacity: 0.15,
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          zIndex: -1,
          content: '""'
        }}
      >
        {isOpen ? (
          <>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/q3r4jCnd_so?rel=0&autoplay=1&cc_load_policy=1&rel=0&showinfo=0"
              frameborder="0"
              allow="autoplay;"
              allowfullscreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen" 
              msallowfullscreen="msallowfullscreen" 
              oallowfullscreen="oallowfullscreen" 
              webkitallowfullscreen="webkitallowfullscreen"
              style={{ height: '75vh', paddingLeft: '25px', paddingRight: '25px' }}
            />
          </>
          ) : (
            <Fade bottom>
              <IconButton
                bg='transparent'
                _hover={{
                  bg: 'transparent'
                }}
                onClick={onToggle}
                icon={
                  <PlayIcon
                    w={100}
                    h={100}
                    fill='brand.gold'
                    transition='all 500ms ease'
                    _hover={{
                      cursor: 'pointer',
                      w: 110,
                      h:110
                    }}
                />
                }
              />
            </Fade>
          )}
      </Center>
      {/* {isOpen && (
        <Center
          bgColor='brand.black'
          position='fixed'
          top={0}
          bottom={0}
          left={0}
          right={0}
          zIndex={1}
          onClick={onToggle}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/q3r4jCnd_so?rel=0&autoplay=1&cc_load_policy=1&rel=0&showinfo=0"
            frameborder="0"
            allow="autoplay;"
            allowfullscreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen" 
            msallowfullscreen="msallowfullscreen" 
            oallowfullscreen="oallowfullscreen" 
            webkitallowfullscreen="webkitallowfullscreen"
          />
        </Center>
      )} */}
      <Center minH='55vh' flexDirection='column'>
        <Fade bottom>
          <Text fontSize='6xl' color='brand.gold'>{articles?.title}</Text>
          <Text fontSize='lg' color='brand.gold'>{articles?.description}</Text>
        </Fade>
        <Flex flexWrap='wrap' justifyContent='center' px={20} py={8}>
          <Fade bottom cascade>
            {articles?.children?.map(child => (
              <Button 
                key={child?._uid}
                onClick={() => window.open(child?.href)}
                bgColor='brand.gold'
                color='brand.black'
                mr={4}
                mb={4}
              >
                {child?.children}
              </Button>
            ))}
          </Fade>
        </Flex>
      </Center>
      
      <Box px={20}>
        <Fade bottom>
          <Text fontSize='6xl' color='brand.gold'>{assets?.title}</Text>
          <Text fontSize='lg' color='brand.gold'>{assets?.description}</Text>
        </Fade>
      </Box>
      <Fade bottom>
        <AssetGrid images={assets?.children?.[0]?.images ?? []} />
      </Fade>
      
      {audio && <AudioPlayer songs={audio} />}
      {/* <Center minH='55vh' flexDirection='column' py={40}>
        <Fade bottom cascade>
          <Text fontSize='6xl' color='brand.gold'>{articles?.title}</Text>
          <Text fontSize='lg' color='brand.gold'>{articles?.description}</Text>
        </Fade>
        <Flex flexWrap='wrap' justifyContent='center' flexDirection='column' px={20} py={8} w='full'>
          <Collapse startingHeight={300} in={isOpen}>
            <Fade bottom>
              <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                {articles?.children?.map(child => (
                  <Link key={child?._uid} href={child?.href}>
                    <Center
                      flexDirection='column'
                      bgColor='brand.black'
                      color='brand.gold'
                      minH='300px'
                      borderRadius={8}
                      opacity={1}
                      transition='all 500ms ease-in-out'
                      _hover={{
                        opacity: 1,
                      }}
                      py={2}
                      px={10}
                    >
                      <Text
                        fontSize="lg"
                        color='brand.gold'
                        position='relative'
                        zIndex={1}
                        _before={{
                          top: '-56px',
                          left: '-23px',
                          position: 'absolute',
                          zIndex: -1,
                          content: `'"'`,
                          fontSize: '115px',
                          color: 'brand.white',
                          opacity: 0.15
                        }}
                        _after={{
                          bottom: '-46px',
                          right: '-13px',
                          position: 'absolute',
                          zIndex: -1,
                          content: `'"'`,
                          fontSize: '115px',
                          color: 'brand.white',
                          opacity: 0.15
                        }}
                      >
                        The sound is exactly the right amount of loose and tight, which is just what this style needs. The guitar tone is perfect, the drums are simple and solid, and the songwriting and vocals are top notch
                      </Text>
                      {child?.children}
                    </Center>
                  </Link>
                ))}
              </Grid>
            </Fade>
          </Collapse>
          <Center>
            <Fade bottom>
              <Button 
                onClick={onToggle}
                bgColor='brand.gold'
                color='brand.black'
                w='120px'
                mt='40px'
              >
                Show more
              </Button>
            </Fade>
          </Center>
        </Flex>
      </Center> */}
      <Box pb={100}>
        {/* {state?.data?.story?.content?.body && (
          <>
            {state?.data?.story?.content?.body.map((data) => (
              createElement(
                renderableComponents[data.component],
                {
                  ...data,
                  key: data._uid,
                  children: data.children?.map((child) => createElement(renderableComponents[child.component], {...child, key: child._uid}))
                }
              )
            ))}
          </>
        )} */}
        <Center pb={20}>
          <Fade bottom>
            <Box width='100%' display='flex' flexDirection='column'>
              <Contact />
              <Box display='flex' justifyContent='center' mt={2}>
                <Text>{`© ${year} The Born Readies. All Rights Reserved.`}</Text>
              </Box>
            </Box>
          </Fade>
        </Center>
      </Box>
      <Border bottom={0} left={0} right={0} height={25} />
      <Border top={0} left={0} right={0} height={25} />
      <Border top={0} bottom={0} right={0} width={25} />
      <Border top={0} bottom={0} left={0} width={25} />
    </>
  );
}

export default App;
