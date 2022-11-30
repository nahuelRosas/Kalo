import { createIcon } from '@chakra-ui/icons'

// OR using the `d` value of a path (the path definition) directly
export const ColorIcon = createIcon({
  displayName: 'ColorIcon',
  viewBox: '0 0 200 200',
  d: 'M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0',
})