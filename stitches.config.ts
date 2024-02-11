import { createStitches } from '@stitches/react'

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      gray700: '#333333',
      gray300: '#989898',

      yellow: '#ffc139',

      white: '#fff',
    },
  },
})