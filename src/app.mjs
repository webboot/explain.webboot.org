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
    {
      to: '/#status-quo',
      text: 'Status Quo',
      items: [
        {
          to: '-social',
          text: 'Social / Manual',
        },
        {
          to: '-tech',
          text: 'Automated',
        },
      ],
    },
    {
      to: '/#solution',
      text: 'Solutions',
      items: [
        { to: '-tofu', text: 'Tofu' },
        { to: '-tosu', text: 'Tosu' },
        { to: '-phishing', text: 'Phishing' },
      ],
    },
    {
      to: '/#tech-stack',
      text: 'Tech stack',
      items: [
        { to: '/tech/magic/', text: 'Magic' },
        { to: '/tech/grundstein/', text: 'Grundstein' },
        { to: '/tech/tor/', text: 'Tor' },
        { to: '/tech/gnupg/', text: 'Gnupg' },

        { to: '/tech/aeternity/', text: 'Aeternity' },
        { to: '/tech/bitcoin/', text: 'Bitcoin' },
        { to: '/tech/ethereum', text: 'Ethereum' },
      ],
    },
    { to: '/#user-rights', text: 'User rights' },
    { to: '/#conclusion', text: 'Conclusion' },
    { to: '/#references', text: 'References' },
  ],
})
