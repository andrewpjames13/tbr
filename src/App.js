import React, { useEffect, useState, createElement } from 'react';
import axios from 'axios';
import Box from 'Atoms/Box';
import Text from 'Atoms/Text';
import Section from 'Molecules/Section';
import AssetGrid from 'Molecules/AssetGrid';
import Hero from 'components/Hero/Hero'
import Border from 'components/Border/Border'
import Contact from 'components/Contact/Contact'

const renderableComponents = { Section, Text, AssetGrid }

const App = () => {
  const [state, setState] = useState()
  const date = new Date()
  const year = date.getFullYear()

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(`https://api.storyblok.com/v1/cdn/stories/epk?token=tgsLVrCCmaADrJEmoPu58Att&version=published&cv=${Math.random()}`)
      setState(response)
    }
    fetch()
  }, [])

  return (
    <>
      <Hero />
      <Box py={100}>
        {state?.data?.story?.content?.body && (
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
        )}
        <Section>
          <Box width='100%' display='flex' flexDirection='column'>
            <Contact />
            <Box display='flex' justifyContent='center' mt={2}>
              <Text>{`© ${year} The Born Readies. All Rights Reserved.`}</Text>
            </Box>
          </Box>
        </Section>
      </Box>
      <Border bottom={0} left={0} right={0} height={25} />
      <Border top={0} left={0} right={0} height={25} />
      <Border top={0} bottom={0} right={0} width={25} />
      <Border top={0} bottom={0} left={0} width={25} />
    </>
  );
}

export default App;
