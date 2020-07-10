import styled from 'styled-components'
import { space, layout, color, position, flexbox } from 'styled-system'

const Box = styled('div')`
  box-sizing: border-box;
  &:focus { outline: none }
  ${color}
  ${space}
  ${layout}
  ${position}
  ${flexbox}
`

export default Box
