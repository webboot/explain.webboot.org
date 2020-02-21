export const View = (props = {}) =>
  div({ class: 'Burger', onclick: props.onclick }, [span(), span(), span()])

export const style = vars => ({
  position: 'absolute',
  top: '0.5em',
  right: '-1em',

  span: {
    height: '5px',
    width: '2em',
    display: 'block',
    margin: '4px 0',
    backgroundColor: vars.background.light,
    borderRadius: '3px',

    '.light &&': {
      backgroundColor: vars.background.dark,
    },
  },

  [`@media screen and (min-width: ${vars.widths.laptop})`]: {
    display: 'none',
  },
})
