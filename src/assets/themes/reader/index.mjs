export const vars = {
  pageBackground: {
    dark: '#bbbbbb',
    light: '#f0f0f0',
  },

  link: {
    dark: '#ea4444',
    light: '#ea4444',

    hover: {
      dark: '#c4c4c4',
      light: '#212121',
    },
  },
}

export default (v = {}) => {
  v = { ...vars, ...v }

  return {
    body: {
      fontFamily: [
        '"Ubuntu Narrow"',
        'Ubuntu',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'Helvetica',
        'sans-serif',
      ].join(', '),

      lineHeight: '2',
    },

    '#Magic': {
      backgroundColor: v.background.dark,
      color: v.text.dark,
      transition: `color ${v.fadeDuration}, background-color ${v.fadeDuration}`,

      '&.light': {
        backgroundColor: v.background.light,
        color: v.text.light,
      },
    },

    '.Page': {
      '> div': {
        fontSize: '1.55vw',
        padding: '5%',
        width: '100%',
        maxWidth: 'inherit',
        width: '80vw',
        height: '113vw',
        backgroundColor: v.pageBackground.dark,
        color: v.text.light,
        margin: '0 auto 2em',
        boxShadow: `6px 6px 3px 1px ${v.neutral}`,

        '.light &&': {
          backgroundColor: v.pageBackground.light,
        },
      },
    },

    'h1,h2,h3': { color: v.primary.neutral },
    h1: { fontSize: '1.5em' },
    h2: { fontSize: '1.4em' },
    h3: { fontSize: '1.3em' },
    h4: { fontSize: '1.2em' },
    h5: { fontSize: '1.1em', padding: 0 },

    ul: {
      width: '100%',
    },

    p: {
      margin: '0 0 0.4em',
    },

    a: {
      color: v.link.dark,
      transition: `color ${v.fadeDuration}`,

      '&:hover': {
        color: v.link.hover.dark,
      },

      '.light &&': {
        color: v.link.light,

        '&:hover': {
          color: v.link.hover.light,
        },
      },
    },

    i: {
      fontStyle: 'italic',
    },

    b: {
      fontWeight: 700,
    },

    'img, svg': {
      maxWidth: '100%',
      maxHeight: '100%',
    },

    '.Wrapper': {
      width: '100%',
      maxWidth: 'inherit',
    },

    '.Header': {
      position: 'relative',
      zIndex: 1,

      '.Toc': {
        padding: '0',
        position: 'fixed',
        left: '-180px',
        top: 0,
        width: '200px',
        height: '100vh',
        backgroundColor: v.neutral,
        transition: `left ${v.fadeDuration}`,

        '.Menu': {
          direction: 'rtl',
          height: '80vh',
          overflowY: 'auto',
          padding: '0 0 0 .5em',
          scrollbarColor: `${v.background.dark} ${v.neutral}`,
          scrollbarWidth: 'thin',

          ul: {
            direction: 'ltr',
          },
        },

        '&:hover, &:focus': {
          left: 0,
        },
      },

      h3: {
        margin: 0,
        padding: '0 0 0 .3em',
      },

      '.Menu': {
        margin: 0,
        lineHeight: 1,
        float: 'none',

        li: {
          float: 'none',
          margin: '0 0 1em',
        },

        ul: {
          ul: {
            position: 'relative',
            margin: '0.5em 0 0 5%',
          },
        },

        a: {
          color: v.link.hover.dark,

          '&:hover': {
            color: v.primary.neutral,
          },
        },
      },
    },

    '.Footer': {
      zIndex: 0,

      '.Container': {
        width: '80vw',
        maxWidth: 'inherit',
      },
    },

    '.LightSwitch': {
      position: 'fixed',
      bottom: '0.5em',
      right: '0.5em',
    },

    '.Gdpr': {
      left: 'auto',
      right: '0.5em',

      '.ShowHide': {
        left: 'auto',
        bottom: '3em',
        right: '0.5em',
      },
    },

    [`@media screen and (min-width: ${v.widths.laptop})`]: {
      '.Page': {
        '> div': {
          width: '55vw',
          height: '77.7vw',
          fontSize: '1vw',
        },
      },

      '.Header': {
        '.Toc': {
          left: 0,
        },
        '.Menu': {
          li: {
            margin: '0 0 0.5em',
          },
        },
      },

      '.Footer': {
        '.Container': {
          width: '55vw',
        },
      },
    },
  }
}
