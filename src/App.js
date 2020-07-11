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
      {state?.data?.story?.content?.body && (
        <Box maxWidth='80vw' py={100} m='0 auto'>
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
          <Contact />
          <Border bottom={0} left={0} right={0} height={25} />
          <Border top={0} left={0} right={0} height={25} />
          <Border top={0} bottom={0} right={0} width={25} />
          <Border top={0} bottom={0} left={0} width={25} />
        </Box>
      )}
    </>
  );
}

export default App;
