export const View = state => [
  div({ id: 'front' }, [
    h1('@webboot - a layer of trust for the web'),

    h2('Abstract:'),

    h4('Integrity guarantees'),
    p([
      'webboot provides a solution to provably verify the integrity',
      ' of any piece of addressible content,',
      ' increasing security guarantees for developers and end-users.',
    ]),

    h4('Social trust'),
    p([
      'webboot allows social trust chains for public data.',
      ' Any entity publishing a piece of publicly addressible data can proof their authorship.',
    ]),

    h4('User benefits'),
    p([
      'webboot connects browsers with smart contract enabled distributed hash tables',
      ' to provide version management, caching, and subresource integrity guarantees.',
    ]),

    h4('Byzantine betrayal resistance'),
    p([
      span({ title: 'NOT Craig Wright.' }, "Satoshi Nakamoto's"),
      ' solution to the ',
      Link({ to: 'https://en.wikipedia.org/wiki/Byzantine_fault' }, 'byzantine fault'),
      ' problem enabled trustless transactions of digital currencies,',
      ' and this spawned a decentralized ecosystem that is just getting started.',
    ]),

    p([
      'We are bringing "byzantine betrayal resistance" to addressible content,',
      ' enabling both the old and the new web to reach previously impossible levels of integrity.',
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
      'By knowing which homepages you frequent,',
      ' webboot will be able to warn you if you visit a url',
      ' that has similarities to one you visited the past.',
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
      'But what happens when, on second load,',
      ' we discover that a piece of data we have loaded has changed?',
      ' At the least, we again have to verify the data',
      ' and its origin just as we did on the first load.',
    ]),

    p([
      'Simply said:',
      ' We ',
      Link({ to: 'https://tools.ietf.org/html/rfc2119#section-2' }, 'MUST NOT'),
      ' trust the server to send us valid code,',
      ' on the contrary, we ',
      Link({ to: 'https://tools.ietf.org/html/rfc2119#section-3' }, 'SHOULD'),
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

  div({ id: 'status-quo' }, [
    h2('Status Quo'),

    p('What is currently being done to solve trust issues involving software integrity?'),

    p('This section describes the current Status Quo of data integrity guarantees we can make.'),

    h3('Auditing'),

    p([
      'Human auditing on for every piece of content is not a viable solution,',
      ' due to the time it would take.',
    ]),

    h3('Formal verification'),
    p([
      'Theoretically, every script could be analyzed and proven to do what it should do in every situation.',
      'But testing software is hard.',
    ]),

    p([
      'This would represent millions of man hours of work',
      ' - which noone is willing (or able) to pay for.',
    ]),

    h3('Package managers'),
    p([
      'Some package managers are called app stores.',
      ' Most use hash integrity checks as part of the install.',
      ' Some also use public/private key cryptography for author verification.',
    ]),

    h3('Version control'),
    p('(git, svn, mercurial)'),
    p([
      'most versioning tools use hashes internally,',
      ' some use cryptographic signatures for patches and releases.',
    ]),

    h3('Subresource integrity hashes'),
    p('Browsers implemented an integriy system for assets.'),

    p([
      Link({ text: 'SRI hashes', to: 'https://en.wikipedia.org/wiki/Subresource_Integrity' }),
      ' prove that a piece of payload matches the expected hash.',
      ' A compromised server can just send compromised scripts and hashes,',
      ' breaking the security model.',
    ]),

    h3('Browser extensions'),
    p('The noscript browser extension uses sri hashes to block javascript.'),
  ]),

  div({ id: 'solutions' }, [
    h2('Solutions'),

    h3('Trust on First Use'),

    p([
      'Combining subresource integrity hashes with the @webboot database',
      ' makes it possible to provide independent integrity verification.',
    ]),

    p([
      'By adding @webboot as the confirming third party,',
      ' SRI hashes can suddenly be something we trust.',
    ]),

    h3('Trust on Subsequent Use'),

    h4('service worker caching'),
    p(
      'service workers allow us to cache the contents of a homepage for later use and make the homepage available offline.',
    ),

    p([
      'using that caching mechanism in a smart way,',
      ' an upgrade and deprecation mechanism can be implemented,',
      ' prompting the user to update the homepage scripts to the new version when needed.',
    ]),

    p([
      'this solves parts of the tosu problem,',
      ' giving control of homepage versioning to users,',
      ' where it should always have been.',
    ]),

    h3('Developer tools'),

    p([
      'Developers need a way to authorize and verify new hashes',
      ' of addressable content they control, using either a ',
      Link({ to: 'https://keybase.io' }, 'domain.com/keybase.txt'),
      ' identity or a domain.com/keys.txt file.',
    ]),

    p([
      'Using those keys, hashes can be cryptographically verified and checked,',
      ' making it possible to create chains of trust that end',
      ' with the actual developers of the properties.',
    ]),

    p([
      'Additionally, others can audit those changes and add their verification,',
      ' making the chain links even stronger.',
    ]),

    h3('Phishing attacks'),

    p([
      "all addressible data of loaded homepages is cached locally in the user's browser plug in.",
      ' this allows us to calculate the difference between known urls and the one being loaded,',
      ' which, in return, allows us to warn the user about a possible phishing attack',
    ]),
  ]),

  div({ id: 'audience' }, [
    h2('Audience'),

    p('Who does webboot seek to solve problems for?'),

    h3('B2B'),
    h4('developers/hosters of versioned JavaScript/CSS/HTML artifacts'),
    p('(Microsoft(github)/Amazon/Cloudflare/Google)'),

    h4('cryptocurrency exchanges, custodial wallet services, DeFI'),
    p('(Coinbase, JaXX, MyCryptoWallet, WalletConnect)'),

    h4('dapp developers'),
    p('ethereum, aeternity, ...'),

    h3('B2C'),

    p('Customers of the following services can greatly benefit from @webboot'),

    p('online banking'),
    p('e-commerce'),
    p('cryptocurrency exchange'),
    p('cryptocurrency wallet'),
    p('governance platforms for DAO users'),
    p('non-secure messaging platforms'),
  ]),

  div({ id: 'privacy' }, [
    h2('Privacy Features'),

    p('The data @webboot collects NEVER includes ip addresses, or other identifying data.'),

    h3('No user accounts'),
    p('No login to @webboot servers is possible or necessary.'),

    h3('Public data'),
    p([
      'We only collect what we need,',
      ' which means that all data @webboot saves is also public by default.',
    ]),

    h3('Debug logs'),
    p('Debugging data is logged for a maximum of 7 days.'),

    h3('Data haven'),
    p([
      '@webboot does not,',
      ' under any circumstances,',
      " share information about it's users with ",
      b(i('any')),
      ' third parties.',
    ]),

    p([
      'For further information, please visit our ',
      Link({ to: 'https://webboot.org/privacy' }, 'privacy policy'),
      '.',
    ]),
  ]),

  div({ id: 'conclusion' }, [
    h2('Conclusion'),

    p([
      'By adding an independent source of truth for addressible data,',
      ' @webboot can be used in almost any kind of trust based data exchange.',
    ]),

    p([
      'This allows a lot of existing technology to easily be adapted to implement it,',
      ' often without changing the application itself.',
    ]),

    p([
      '@webboot is the backbone for the creation of a suite of unique applications,',
      ' allowing the secure exchange of data between individuals,',
      ' based on public-private key cryptography best practices.',
    ]),
  ]),
]
