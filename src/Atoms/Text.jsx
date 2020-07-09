import React from 'react'
import styled from 'styled-components'
import { space, layout, color, typography, variant } from 'styled-system'

const TextStyled = styled.p`
  line-height: 1.65;
  ${color}
  ${space}
  ${layout}
  ${typography}
  ${variant({
    variants: {
      h1: {
        color: 'gold',
        fontFamily: 'body',
        fontSize: '48.83px',
      },
      p: {
        color: 'gold',
        fontFamily: 'body',
        fontSize: 16
      },
      a: {
        color: 'gold',
        fontFamily: 'body',
        fontSize: 20,
        cursor: 'pointer',
        textDecoration: 'underline',
        '&:hover': { color: 'white' },
      },
    }
  })}
`

const Text = ({ children, ...rest }) => (
  <TextStyled as={rest.variant} {...rest}>{children}</TextStyled>
)

export default Text
