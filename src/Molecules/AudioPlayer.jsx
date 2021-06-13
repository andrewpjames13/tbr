import React, { useState } from 'react'
import styled from 'styled-components'
import { space, layout, color, position, flexbox } from 'styled-system'
import styles from './AudioPlayer.module.scss'
import { useTheme } from '@chakra-ui/react'

const Svg = styled('svg')`
  ${color}
  ${space}
  ${layout}
  ${position}
  ${flexbox}
`

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let songIndex = 0

const AudioPlayer = (props) => {
  const [checked, setChecked] = useState(true)
  const [play, setPlay] = useState(false)
  const [audio, setAudio] = useState(new Audio(props?.songs[songIndex]?.song?.filename))
  audio.onended = () => nextSong()
  const theme = useTheme()
  const songLength = props?.songs?.length - 1

  const playFunc = () => audio.play()

  const pauseFunc = () => audio.pause()

  const playPause = () => {
    if (!play) {
      playFunc()
    } else {
      pauseFunc()
    }
    setPlay(state => !state)
  }

  const updateSongIndex = () => {
    if (songIndex === songLength) {
      songIndex = 0
    } else {
      songIndex = songIndex + 1
    }
  }

  const createAndPlay = () => {
    const newAudio = new Audio(props?.songs[songIndex]?.song?.filename)
    setAudio(newAudio)
    newAudio.play()
    setPlay(true)
  }

  const nextSong = () => {
    pauseFunc()
    updateSongIndex()
    createAndPlay()
  }

  const shuffleSong = () => {
    pauseFunc()
    let rando = randomNumber(0, songLength)
    if (rando === songIndex) {
      updateSongIndex()
    } else {
      songIndex = rando
    }
    createAndPlay()
  }

  if (props?.songs?.length === 0) return null
  console.log(theme)
  return (
    <>
      <nav className={styles.menu}>
        <input type="checkbox" checked={checked} href="#" className={styles.menuOpen} name="menu-open" id="menu-open" onChange={() => {}}/>
        <label className={styles.menuOpenButton} htmlFor="menu-open" onClick={() => setChecked(state => !state)}>
          <span className={`${styles.hamburger} ${styles.hamburgerOne}`} style={{ backgroundColor: theme.colors.brand.black }}></span>
          <span className={`${styles.hamburger} ${styles.hamburgerThree}`} style={{ backgroundColor: theme.colors.brand.black }}></span>
          <Svg class="unMuted" viewBox="0 0 24 24" fill={theme.colors.brand.black} width={22} pt='24px' margin='0 auto'>
            {play ? (
              <path d="M6 7l8-5v20l-8-5v-10zm-6 10h4v-10h-4v10zm20.264-13.264l-1.497 1.497c1.847 1.783 2.983 4.157 2.983 6.767 0 2.61-1.135 4.984-2.983 6.766l1.498 1.498c2.305-2.153 3.735-5.055 3.735-8.264s-1.43-6.11-3.736-8.264zm-.489 8.264c0-2.084-.915-3.967-2.384-5.391l-1.503 1.503c1.011 1.049 1.637 2.401 1.637 3.888 0 1.488-.623 2.841-1.634 3.891l1.503 1.503c1.468-1.424 2.381-3.309 2.381-5.394z"/>
            ) : (
              <path d="M22 1.269l-18.455 22.731-1.545-1.269 3.841-4.731h-1.827v-10h4.986v6.091l2.014-2.463v-3.628l5.365-2.981 4.076-5.019 1.545 1.269zm-10.986 15.926v.805l8.986 5v-16.873l-8.986 11.068z"/>
            )}
          </Svg>
        </label>
        <button className={styles.menuItem} onClick={playPause}>
          {!play ? (
            <Svg viewBox="0 0 8.9 10.3" fill={theme.colors.brand.black} width={20}>
              <polygon points="8.9,5.1 0,0 0,10.3 8.9,5.1 0,0 0,10.3"></polygon>
            </Svg>
          ) : (
            <Svg viewBox="0 0 7.3 9.5" fill={theme.colors.brand.black} width={18}>
              <path d="M2.8,9.5H0V0h2.8V9.5z M7.3,0H4.5v9.5h2.8V0z"></path>
            </Svg>
          )}
        </button>
        <button className={styles.menuItem} onClick={shuffleSong}>
          <Svg viewBox="0 0 16.8 11.5" fill={theme.colors.brand.black} width={25}>
            <path d="M2.1,3H0V1.3h2.1c1.6,0,3.1,0.6,4.2,1.8c0,0.1-0.9,1.5-0.9,1.5C4.6,3.6,3.4,3,2.1,3z
               M16.8,9.3l-3.6-2.3v1.5H12c-1.3,0-2.5-0.6-3.3-1.6c0,0-0.9,1.4-0.9,1.5c1.1,1.2,2.6,1.8,4.2,1.8h1.2l0,1.4L16.8,9.3z M16.8,2.2
              L13.2,0l0,1.4H12c-1.9,0-3.8,1-4.8,2.7L5.6,6.6c-0.7,1.2-2,1.9-3.4,1.9H0v1.6h2.1c1.9,0,3.8-1,4.8-2.7l1.6-2.6C9.3,3.7,10.6,3,12,3
              h1.2l0,1.5L16.8,2.2z">
            </path>
          </Svg>
        </button>
        <button  className={styles.menuItem} onClick={nextSong}>
          <Svg viewBox="0 0 14.4 9.7" fill={theme.colors.brand.black} width={25}>
            <polygon points="6,9.7 6,6.2 0,9.7 0,0 6,3.5 6,0 14.4,4.8"></polygon>
          </Svg>
        </button>
      </nav>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="shadowed-goo">
                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
                <feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow" />
                <feOffset in="shadow" dx="1" dy="1" result="shadow" />
                <feComposite in2="shadow" in="goo" result="goo" />
                <feComposite in2="goo" in="SourceGraphic" result="mix" />
            </filter>
            <filter id="goo">
                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                <feComposite in2="goo" in="SourceGraphic" result="mix" />
            </filter>
          </defs>
      </svg>
    </>
  )
}

export default AudioPlayer
