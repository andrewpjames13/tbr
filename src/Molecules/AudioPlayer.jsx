import React from 'react'
import styles from './AudioPlayer.module.scss'

const AudioPlayer = () => {
  return (
    <>
      <nav className={styles.menu}>
        <input type="checkbox" href="#" className={styles.menuOpen} name="menu-open" id="menu-open"/>
        <label className={styles.menuOpenButton} for="menu-open">
          <span className={`${styles.hamburger} ${styles.hamburgerOne}`}></span>
          <span className={`${styles.hamburger} ${styles.hamburgerTwo}`}></span>
          <span className={`${styles.hamburger} ${styles.hamburgerThree}`}></span>
        </label>
        <a href="#" className={styles.menuItem}> <i className="fa fa-bar-chart"></i> </a>
        <a href="#" className={styles.menuItem}> <i className="fa fa-plus"></i> </a>
        <a href="#" className={styles.menuItem}> <i className="fa fa-heart"></i> </a>
        <a href="#" className={styles.menuItem}> <i className="fa fa-envelope"></i> </a>
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
