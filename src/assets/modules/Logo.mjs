export const View = state =>
  Link({ to: state.root, class: 'Logo' }, [
    svg({ viewBox: '0 0 640 500' }, [
      path({
        class: 'upper',
        d: `
M 6 415
c 213 -43 414 78 627 21 7 -136 -21 -129 -64 -129 -103 7 -167 9 -207 -64 -78 19 -77 21 -85 7 -11 -19 -9 -13 78 -35
l -7 -29
c -85 27 -90 23 -92 14 -8 -18 -5 -19 85 -42
l -7 -29
c -96 24 -87 25 -92 14 -4 -23 4 -23 89 -43
l -4 -29
c -85 21 -92 28 -92 14 0 -21 0 -21 92 -42 0 -43 9 -43 -27 -43
C 200 7 63 1 35 30 63 151 -8 265 6 415
z
`.trim(),
        fill: '#ea4444',
      }),
      path({
        class: 'sole',
        d: `
M 5 429
c -5 36 -5 42 -1 71
h 206
c -57 -93 79 0 250 0 164 0 180 -14 180 -50 -220 64 -415 -64 -635 -21
z
`.trim(),
        fill: '#5a5a5a',
      }),
    ]),
  ])

export const style = {
  float: 'left',

  svg: {
    backgroundColor: 'transparent',
    borderRadius: 0,
    padding: '0.3em',
    width: '2.6em',

    '.light &&': {
      backgroundColor: 'transparent',
    },
  },
}
