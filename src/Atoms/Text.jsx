import React from 'react'
import styled from 'styled-components'
import { space, layout, color, typography } from 'styled-system'

const TextStyled = styled('p')(
  color,
  space,
  layout,
  typography
)

const Text = ({ children, ...rest }) => (
  <TextStyled {...rest}>{children}</TextStyled>
)

export default Text
