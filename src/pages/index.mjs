export const View = state => [
  div({ id: 'front' }, [
    h1('@webboot - a layer of trust for the web'),

    h2('Abstract:'),

    p([
      "satoshi's solution to the ",
      Link({ to: 'https://en.wikipedia.org/wiki/Byzantine_fault' }, 'byzantine fault'),
      ' problem enabled the secure and trustless transaction of digital currencies.',
    ]),
    p([
      'The Bitcoin Protocol was simply the glue stitching together',
      ' many existing technologies into a new ecosystem of usecases.',
    ]),

    p([
      '@webboot integrates smart contract enabled distributed hash tables with browsers',
      ' to provide client-side version management, caching, and subresource integrity',
      " guarantees for the code being executed on end-users' devices.",
    ]),

    p([
      "@webboot's provable verification of the integrity of any piece",
      ' of addressible content aims to increase privacy and security guarantees',
      ' for developers and end-users.',
    ]),
  ]),

  div({ id: 'introduction' }, [
    h2('@webboot'),

    p([
      Link({ to: 'https://webboot.org' }, '@webboot'),
      ' aims to make ',
      Link({ to: 'https://en.wikipedia.org/wiki/Trust_on_first_use' }, 'tofu - trust on first use'),
      ' a bit less scary.',
    ]),

    h3('webboot is:'),

    p([
      'The missing source of integrity protocol for the web,',
      ' utilizing a distributed network of validator nodes to provide both developers and users',
      ' with a toolset to verify the integrity of any piece of publicly addressable content,',
      ' including homepages, webapps, and dapps.',
    ]),

    h3('webboot solves:'),

    h4('Tofu - Trust on first use'),
    p([
      'By making it possible to verify any published data,',
      'webboot solves the technological half of the tofu problem.',
    ]),

    h4('Tosu - Trust on subsequent use'),
    p('Webboot adds functionality to control version updates for both developers and endusers.'),

    h3('webboot helps mitigating'),

    h4('Social Engineering / Phishing attacks'),
    p([
      'By saving your security critical homepages in @webboot,',
      ' the browser extension can warn you if you load a url that',
      ' looks similar to one you already saved.',
    ]),

    p([
      'Utilising that knowledge of the past,',
      ' clicking on a link in a phishing email will show a webboot error.',
    ]),
  ]),

  div({ id: 'problem' }, [
    h2('Problem'),

    p([
      'Homepages, webapps, and dapps',
      ' are used to administrate a lot of our public and private lives,',
      ' yet most users, and many developers,',
      ' do not realize how broken and dangerous the delivery method of those applications is.',
    ]),

    h4('There are some open, unanswered questions to solve:'),

    p('How can we trust a homepage before we even load it?'),

    p(
      'How can we trust a homepage not to send us malicious code, intentionally or unintentionally?',
    ),

    p([
      'How can we verify',
      ' that public wallet key somebody sent us is the correct key?',
      ' This is especially crucial nowadays,',
      ' where a lot of money is exchanged using decentralized public/private key',
      ' cryptography without transaction reversability.',
    ]),
  ]),

  div({ id: 'problem-tofu' }, [h2('The Tofu Problem')]),

  div({ id: 'problem-tosu' }, [h2('The Tosu Problem')]),

  div({ id: 'problem-threat' }, [h2('Threat Vectors')]),
]
