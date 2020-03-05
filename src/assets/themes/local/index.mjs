export const vars = {
  link: {
    dark: '#212121',
    light: '#212121',
  },
}

export default v => {
  v = { ...vars, ...v }

  return {
  '.Page': {
    '> div': {
      fontSize: '1.7vw',
    },
  },

  [`@media screen and (min-width: ${v.widths.laptop})`]: {
    '.Page': {
      '> div': {
        fontSize: '1.3vw',
      },
    },
  },
}
}
