export const state = config => ({
  title: '@webboot explainer',
  description: 'solving the tofu problem, one boot at a time.',

  branding: ['explain.', 'web', 'boot'],

  seo: {
    name: '@webboot',
    url: `https://${config.URL}`,
    about: 'solving the tofu problem, one boot at a time.',
    image: `https://${config.URL}${config.WEB_ROOT}webboot-preview.png`,
    author: {
      '@type': 'person',
      name: 'Jascha Ehrenreich',
      jobTitle: 'Technomancer',
      image: 'https:/jaeh.at/img/jascha.ehrenreich.jpg',
      url: 'https://jaeh.at',
    },
  },

  menu: [
    { to: '/#introduction', text: 'Introduction' },
    {
      to: '/#problems',
      text: 'Problems',
      items: [
        { to: '-tofu', text: 'Tofu', title: 'Trust on first use' },
        { to: '-tosu', text: 'Tosu', title: 'Trust on subsequent use' },
        { to: '-threats', text: 'Threat Vectors' },
      ],
    },
    { to: '/#status-quo', text: 'Status Quo' },
    { to: '/#solutions', text: 'Solutions' },
    { to: '/#audience', text: 'Audience' },
    // {
    //   to: '/#tech-stack',
    //   text: 'Tech stack',
    //   items: [
    //     { to: '/tech/magic/', text: 'Magic' },
    //     { to: '/tech/grundstein/', text: 'Grundstein' },
    //     { to: '/tech/tor/', text: 'Tor' },
    //     { to: '/tech/gnupg/', text: 'Gnupg' },

    //     { to: '/tech/aeternity/', text: 'Aeternity' },
    //     { to: '/tech/bitcoin/', text: 'Bitcoin' },
    //     { to: '/tech/ethereum', text: 'Ethereum' },
    //   ],
    // },
    { to: '/#privacy', text: 'User Rights' },
    { to: '/#conclusion', text: 'Conclusion' },
  ],

  footer: {
    one: {
      title: '@webboot',
      before: ['trust on every step.', 'created by the @webboot dao.'],
      menu: [
        { to: 'https://webboot.org/privacy/', text: 'privacy notice' },
        { to: 'https://webboot.org/canary/', text: 'warrant canary' },
      ],
    },
    two: {
      title: 'projects',
      menu: [
        { to: 'https://webboot.org', text: 'webboot' },
        { to: 'https://docs.webboots.org', text: 'webboot docs' },
        { to: 'https://magic.github.io', text: 'magic' },
        { to: 'https://grundstein.github.io', text: 'grundstein' },
      ],
    },
    three: {
      title: 'social links',
      menu: [
        { to: 'https://www.npmjs.com/org/webboot', text: 'npm' },
        { to: 'https://twitter.com/webbootorg', text: 'twitter' },
        { to: 'https://keybase.io/webboot', text: 'keybase' },
        { to: 'https://github.com/webboot', text: 'github' },
        { to: 'https://gitlab.com/webboot', text: 'gitlab' },
      ],
    },
  },
})
