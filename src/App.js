import React, { useEffect, useState, createElement } from 'react';
import axios from 'axios';
import Box from 'Atoms/Box';
import Text from 'Atoms/Text';
import Section from 'Molecules/Section/Section';
import Hero from 'components/Hero/Hero'

const renderableComponents = { Section, Text }
const App = () => {
  const [state, setState] = useState()

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(`https://api.storyblok.com/v1/cdn/stories/epk?token=tgsLVrCCmaADrJEmoPu58Att&version=published&cv=${Math.random()}`)
      setState(response)
    }
    fetch()
  }, [])
  console.log(state)
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
        </Box>
      )}
    </>
  );
}

export default App;
