import styled from 'styled-components'
import { space, layout, color, position, flexbox } from 'styled-system'

const Box = styled('div')(
  { boxSizing: 'border-box' },
  color,
  space,
  layout,
  position,
  flexbox
)

export default Box
