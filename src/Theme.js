// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react"
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    black: '#272928',
    white: '#fff',
    gold: '#a29060',
  },
}

export const theme = extendTheme({
  colors,
  fonts: {
    header: 'SeventiesPrinted',
    body: 'helvetica'
  },
  styles: {
    global: {
      body: {
        bg: colors.brand.black,
        color: colors.brand.white,
      },
    },
  },
})

const breakpoints = ['40em', '52em', '64em', '80em']

// aliases
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

export default {
  colors: {
    black: '#272928',
    white: '#fff',
    gold: '#a29060',
  },
  breakpoints,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    header: 'SeventiesPrinted',
    body: 'helvetica'
  }
}
