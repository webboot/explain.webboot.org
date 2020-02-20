export const vars = {
  background: {
    dark: '#212121',
    light: '#c0c0c0',
  },

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

  neutral: '#5a5a5a',

  primary: {
    dark: '#c82222',
    light: '#ff7070',
    neutral: '#ea4444',
  },

  secondary: {
    dark: '#22c822',
    light: '#70ff70',
    neutral: '#44ea44',
  },

  text: {
    dark: '#c4c4c4',
    light: '#212121',
  },
  white: '#ffffff',

  maxWidth: '1000px',

  fadeDuration: '500ms',

  widths: {
    tablet: '500px',
    laptop: '1024px',
    desktop: '1600px',
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
        padding: '5%',
        width: '100%',
        maxWidth: v.maxWidth,
        width: '210mm',
        height: '297mm',
        backgroundColor: v.pageBackground.dark,
        color: v.text.light,
        margin: '0 auto 2em',

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
      '.Toc': {
        padding: '0 1em',
        position: 'fixed',
        left: 0,
        top: 0,
        width: '280px',
        overflowY: 'auto',
        overflowX: 'hidden',
        height: '100vh',
        backgroundColor: v.background.dark,
      },

      h3: {
        margin: 0,
      },

      '.Menu': {
        margin: 0,
        lineHeight: 1,
        float: 'none',

        li: {
          float: 'none',
          margin: '0 0 0.5em',
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
  }
}
