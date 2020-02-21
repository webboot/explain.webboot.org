export const View = (props = {}, children = []) => {
  CHECK_PROPS(props, propTypes, 'Header')

  const { logo, menu, title, root, ...state } = props
  if (!logo && !menu && !logotext) {
    return
  }

  let { branding } = state
  if (!Array.isArray(branding)) {
    branding = [branding]
  }

  const [first, second, ...rest] = branding

  return header({ class: 'Header' }, [
    div({ class: 'BrandContainer' }, [
      div([
        Logo({ root }),
        branding && Link({ to: root, class: 'branding' }, [first, span(second), rest]),
      ]),
    ]),
    div({ class: 'Toc' }, [
      h3({ title: 'Table of Contents' }, Link({ to: '/' }, 'ToC')),
      menu && Menu({ state, items: menu, collapse: false }),
    ]),
  ])
}

export const style = vars => ({
  padding: '.5em 0 0',
  width: '100%',

  '.BrandContainer': {
    width: '100%',
    textAlign: 'center',

    '> div': {
      display: 'inline-block',
    },
  },

  '.branding': {
    color: vars.neutral,
    float: 'left',
    fontSize: '1.5em',
    lineHeight: '1',
    margin: '0.4em 0 0 0.2em',
    textDecoration: 'none',

    span: {
      color: vars.primary.neutral,
      fontSize: '1em',
      margin: '0',
    },
  },

  '> div': {
    margin: '0 auto',
    maxWidth: '1000px',
    padding: '0 5%',
  },
})

export const propTypes = {
  Header: [
    { key: 'logo', type: 'string' },
    { key: 'logotext', type: 'string' },
    { key: 'menu', type: 'array' },
  ],
}
