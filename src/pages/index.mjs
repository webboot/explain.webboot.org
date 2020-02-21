export const View = state => [
  div({ id: 'front' }, [
    h1('@webboot - a layer of trust for the web'),

    h2('Abstract:'),

    p([
      span({ title: 'NOT Craig Wright.' }, "Satoshi Nakamoto's"),
      ' solution to the ',
      Link({ to: 'https://en.wikipedia.org/wiki/Byzantine_fault' }, 'byzantine fault'),
      ' problem enabled the secure and trustless transaction of digital currency tokens.',
    ]),

    p([
      'The Bitcoin Protocol simply provided the glue stitching together',
      ' many existing technologies into a new ecosystem of usecases.',
    ]),

    p([
      '@webboot integrates smart contract enabled distributed hash tables with browsers',
      ' to facilitate client-side version management, caching, and subresource integrity guarantees',
      ' for any type of publicly addressible data.',
    ]),

    p([
      '@webboot provides a solution to provably verify the integrity of any',
      ' piece of addressible content,',
      ' increasing privacy and security guarantees for developers and end-users.',
    ]),
  ]),

  div({ id: 'introduction' }, [
    h2('Introduction'),

    h3('webboot is:'),

    p([
      'A verifiable source of integrity protocol for the web,',
      ' utilizing a distributed network of validator nodes',
      ' to provide both developers and users with a toolset that verifies the integrity',
      ' of any piece of publicly addressable content.',
    ]),

    h3('webboot provides solutions for:'),

    h4('Tofu - Trust on first use'),
    p([
      'By making it possible to verify any published data,',
      ' webboot solves the technological half of the tofu problem.',
    ]),

    h4('Tosu - Trust on subsequent use'),
    p('Webboot adds functionality to control version updates for both developers and end-users.'),

    h4('Phishing'),
    p([
      'By knowing which homepages you visited in the past,',
      ' webboot will be able to warn you if you visit a url',
      ' that is very similar to one you visited in the past.',
    ]),
    p('All of that without any information about the content or dns of that url!'),
  ]),

  div({ id: 'problems' }, [
    h2('Problems'),

    p([
      'Homepages, webapps, and dapps',
      ' are used to administrate a lot of our public and private lives,',
      ' yet most users, and many developers,',
      ' do not realize how broken and dangerous the delivery method of those applications is.',
    ]),

    h4('There are some open, unanswered questions to solve:'),

    p('How can we trust a homepage before we even load it?'),

    p([
      'How can we trust a homepage not to send us malicious code,',
      ' intentionally or unintentionally?',
    ]),

    p([
      'How can we verify if that public key somebody sent us is the correct key?',
      ' This is crucial nowadays,',
      ' where a lot of money is exchanged using decentralized public/private key',
      ' cryptography without transaction reversability.',
    ]),
  ]),

  div({ id: 'problems-tofu' }, [
    h2('The Tofu Problem'),

    h4('Trust on first use'),

    p('How can we trust data someone sends us did not get changed on the way?'),

    p([
      'By adding @webboot as an intermediary to any data exchange workflow,',
      ' there suddenly is a third party in the mix,',
      ' verifying the integrity of the exchanged data on both ends.',
    ]),

    p([
      'Since there is publicly attestable proof of those transactions too,',
      ' future attestation of past proofs is possible,',
      ' this allows adding an additional layer',
      'to (de)centralized ',
      Link({ to: 'https://en.wikipedia.org/wiki/Provenance' }, 'proof of provenance'),
      ' applications.',
    ]),
  ]),

  div({ id: 'problems-tosu' }, [
    h2('The Tosu Problem'),

    h4('Trust on subsequent use'),

    p('TOSU. we made that up.'),
    p('Being written somewhere on the internet makes it a thing now, though.'),

    p([
      'Lets assume we solved the TOFU problem;',
      ' we loaded the first version of a homepage in a trustable way,',
      ' and we have the working application running on our device. w00t!',
    ]),

    p([
      'But what happens when on second load,',
      ' we discover that a piece of data we have loaded has changed?',
      ' At the least, we again have to verify the data',
      ' and its origin just as we did on the first load.',
    ]),

    p([
      'Simply said:',
      ' We ',
      Link({ to: 'TODO: rfc2119#MUSTNOT' }, 'MUST NOT'),
      ' trust the server to send us valid code,',
      ' on the contrary, we ',
      Link({ to: 'TODO: rfc2119#SHOULD' }, 'SHOULD'),
      ' assume to receive malicious payloads on every load.',
    ]),

    p('TODO: add paragraph explaining user updating'),
  ]),

  div({ id: 'problems-threats' }, [
    h2('Threat Vectors'),

    h3('2.3.a Hackers'),
    p([
      'Maybe someone hacked the homepage servers between our first use of the app and now,',
      ' established a Man in the Middle (MITM) attack between the server and us,',
      ' or the country/company/coffeshop network we just connected to',
      ' contains malware or spyware.',
    ]),

    h3('2.3.b Broken code'),
    p([
      'The developers of an app might have shipped a version of the code that does not work.',
      ' If only the client could go back to the version of 5 minutes ago...',
      ' This problem could be solved by making updates',
      ' of homepages apps / dapps controllable by us, the users,',
      ' and by providing multiple sources of "integrity proofs".',
    ]),

    h3('2.3.c Malicious developer'),
    p([
      'The only developer of Acme Corp. has been fired,',
      ' finding a replacement will take a week or longer.',
    ]),
    p('Before they left, they decided to hide a mining software on the company page.'),

    h3('2.3.d Phishing'),
    p('Somebody just sent you a link to [mircosoft.com](https://mircosoft.com).'),
    p('Did you spot the typo?'),

    p('Will you spot it if it is [miсrosoft.com](https://miсrosoft.com)?'),
    p('The good news: webboot will warn you if you visited microsoft.com in the past.'),
  ]),
]
