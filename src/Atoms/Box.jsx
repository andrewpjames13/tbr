import styled from 'styled-components'
import { space, layout, color } from 'styled-system'

const Box = styled('div')(
  { boxSizing: 'border-box' },
  color,
  space,
  layout
)

export default Box
