import Typography from 'typography'

import 'normalize.css'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Libre Baskerville',
      styles: ['400'],
    },
    {
      name: 'IBM Plex Mono',
      styles: ['400'],
    },
    {
      name: 'Heebo',
      styles: ['400'],
    },
  ],
  headerFontFamily: ['Georgia', 'serif'],
  bodyFontFamily: ['Libre Baskerville', 'serif'],
})

export default typography
