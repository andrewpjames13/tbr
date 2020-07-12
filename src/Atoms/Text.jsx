import React from 'react'
import styled from 'styled-components'
import { space, layout, color, typography, variant, position } from 'styled-system'

const TextStyled = styled.p`
  line-height: 1.65;
  ${color}
  ${space}
  ${layout}
  ${typography}
  ${position}
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
      button: {
        background: 'none',
        border: 'none',
        color: 'gold',
        fontFamily: 'body',
        fontSize: 20,
        cursor: 'pointer',
        textDecoration: 'underline',
        '&:hover': { color: 'white' },
      },
      subHead: {
        color: 'gold',
        fontFamily: 'body',
        fontSize: 20,
      },
      active: {
        color: 'white',
        fontFamily: 'body',
        fontSize: 20,
        cursor: 'pointer',
        textDecoration: 'underline',
        opacity: .75,
        '&:hover': { opacity: .9 },
      },
    }
  })}
`

function normalizer({ href, variant }) {
  if (!href && variant === 'a') return { variant: 'subHead' }
  let aRet = { as: 'a' }
  if (variant === 'a') aRet = { ...aRet, target: '_blank' }
  if (href || variant === 'active') return aRet
  return { as: variant }
}

const Text = ({ children, ...rest }) => (
  <TextStyled {...rest} {...normalizer(rest)}>{children}</TextStyled>
)

export default Text

Text.defaultProps = { variant: 'p' }
