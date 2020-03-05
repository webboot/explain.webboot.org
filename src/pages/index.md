<div id="front">

# @webboot - a layer of trust for the web

## Abstract:

#### Integrity guarantees

webboot provides a solution to provably verify the integrity
of any piece of addressible content,
increasing security guarantees for developers and end-users.

#### Social trust

webboot allows social trust chains for public data.
Any entity publishing a piece of publicly addressible data can proof their authorship.

#### User benefits

webboot connects browsers with smart contract enabled distributed hash tables
to provide version management, caching, and subresource integrity guarantees.

#### Byzantine betrayal resistance

<span title="NOT Craig Wright.">Satoshi Nakamoto's</span>
solution to the
[byzantine fault](https://en.wikipedia.org/wiki/Byzantine_fault)
problem enabled trustless transactions of digital currencies,
and this spawned a decentralized ecosystem that is just getting started.

We are bringing "byzantine betrayal resistance" to addressible content,
enabling both the old and the new web to reach previously impossible levels of integrity.

</div>

<div id="introduction">

## Introduction

### webboot is:

A verifiable source of integrity protocol for the web,
utilizing a distributed network of validator nodes
to provide both developers and users with a toolset that verifies the integrity
of any piece of publicly addressable content.

### webboot provides solutions for:

#### Tofu - Trust on first use

By making it possible to verify any published data,
webboot solves the technological half of the tofu problem.

#### Tosu - Trust on subsequent use

Webboot adds functionality to control version updates for both developers and end-users.

#### Phishing

By knowing which homepages you frequent,
webboot will be able to warn you if you visit a url
that has similarities to one you visited the past.

All of that without any information about the content or dns of that url!

</div>

<div id="problems">

## Problems

Homepages, webapps, and dapps
are used to administrate a lot of our public and private lives,
yet most users, and many developers,
do not realize how broken and dangerous the delivery method of those applications is.

#### There are some open, unanswered questions to solve:

How can we trust a homepage before we even load it?

How can we trust a homepage not to send us malicious code,
intentionally or unintentionally?

How can we verify if that public key somebody sent us is the correct key?

This is crucial nowadays,
where a lot of money is exchanged using decentralized public/private key
cryptography without transaction reversability.


## #problems-tofu The Tofu Problem

#### Trust on first use


How can we trust data someone sends us did not get changed on the way?

By adding @webboot as an intermediary to any data exchange workflow,
there suddenly is a third party in the mix,
verifying the integrity of the exchanged data on both ends.

Since there is publicly attestable proof of those transactions too,
future attestation of past proofs is possible,
this allows adding an additional layer
to (de)centralized
[proof of provenance](https://en.wikipedia.org/wiki/Provenance)
applications.

## #problems-tosu The Tosu Problem

#### Trust on subsequent use

TOSU. we made that up.

It being written somewhere on the internet makes it a thing now, though.

Lets assume we solved the TOFU problem;
we loaded the first version of a homepage in a trustable way,
and we have the working application running on our device. w00t!

But what happens when, on second load,
we discover that a piece of data we have loaded has changed?
At the least, we again have to verify the data
and its origin just as we did on the first load.

Simply said:
We
[MUST NOT](https://tools.ietf.org/html/rfc2119#section-2)
trust the server to send us valid code,
on the contrary, we
[SHOULD](https://tools.ietf.org/html/rfc2119#section-3)
assume to receive malicious payloads on every load.

</div>

<div id="problems-threats">

## Threat Vectors

### 2.3.a Hackers

Maybe someone hacked the homepage servers between our first use of the app and now,
established a Man in the Middle (MITM) attack between the server and us,
or the country/company/coffeshop network we just connected to
contains malware or spyware.

### 2.3.b Broken code

The developers of an app might have shipped a version of the code that does not work.
If only the client could go back to the version of 5 minutes ago...
This problem could be solved by making updates
of homepages apps / dapps controllable by us, the users,
and by providing multiple sources of "integrity proofs".

### 2.3.c Malicious developer

The only developer of Acme Corp. has been fired,
finding a replacement will take a week or longer.

Before they left, they decided to hide a mining software on the company page.

### 2.3.d Phishing

Somebody just sent you a link to [mircosoft.com](https://mircosoft.com).

Did you spot the typo?

Will you spot it if it is [miсrosoft.com?](https://miсrosoft.com)

The good news: webboot will warn you if you visited microsoft.com in the past
and then try to visit mircosoft.com

</div>

<div id="status-quo">

## Status Quo

What is currently being done to solve trust issues involving software integrity?

This section describes the current Status Quo of data integrity guarantees we can make.

### Auditing

Human auditing on for every piece of content is not a viable solution,
due to the time it would take.

### Formal verification

Theoretically, every script could be analyzed and proven to do what it should do in every situation.
But testing software is hard.

This would represent millions of man hours of work
- which noone is willing (or able) to pay for.

### Package managers

Some package managers are called app stores.
Most use hash integrity checks as part of the install.
Some also use public/private key cryptography for author verification.

### Version control

(git, svn, mercurial)

Most versioning tools use hashes internally,
some use cryptographic signatures for patches and releases.

### Subresource integrity hashes

Browsers implemented an integriy system for assets.

[SRI hashes](https://en.wikipedia.org/wiki/Subresource_Integrity)
prove that a piece of payload matches the expected hash.

A compromised server can just send compromised scripts and hashes,
breaking the security model.

### Browser extensions

The noscript browser extension uses sri hashes to block javascript.

</div>

<div id="solutions">

## Solutions

### Trust on First Use

Combining subresource integrity hashes with the @webboot database
makes it possible to provide independent integrity verification.

By adding @webboot as the confirming third party,
SRI hashes can suddenly be something we trust.

### Trust on Subsequent Use

#### service worker caching
service workers allow us to cache the contents of a homepage for later use
and make the homepage available offline.

using that caching mechanism in a smart way,
an upgrade and deprecation mechanism can be implemented,
prompting the user to update the homepage scripts to the new version when needed.

this solves parts of the tosu problem,
giving control of homepage versioning to users,
where it should always have been.

### Developer tools

Developers need a way to authorize and verify new hashes
of addressable content they control, using either a
[domain.com/keybase.txt](https://keybase.io)
identity or a domain.com/keys.txt file.

Using those keys, hashes can be cryptographically verified and checked,
making it possible to create chains of trust that end
with the actual developers of the properties.

Additionally, others can audit those changes and add their verification,
making the chain links even stronger.

### Phishing attacks

all addressible data of loaded homepages is cached locally in the user's browser plug in.
this allows us to calculate the difference between known urls and the one being loaded,
which, in return, allows us to warn the user about a possible phishing attack

</div>

<div id="audience">

## Audience

Who does webboot seek to solve problems for?

### B2B
#### developers/hosters of versioned JavaScript/CSS/HTML artifacts

(Microsoft(github)/Amazon/Cloudflare/Google)

#### cryptocurrency exchanges, custodial wallet services, DeFI

(Coinbase, JaXX, MyCryptoWallet, WalletConnect)

#### dapp developers

ethereum, aeternity, parity, bitcoin ...

### B2C

Customers of the following services can greatly benefit from @webboot

* online banking
* e-commerce
* cryptocurrency exchange
* cryptocurrency wallet
* governance platforms for DAO users
* non-secure messaging platforms

</div>

<div id="privacy">

## Privacy Features

The data @webboot collects NEVER includes ip addresses, or other identifying data.

### No user accounts

No login to @webboot servers is possible or necessary.

### Public data

We only collect what we need,
which means that all data @webboot saves is also public by default.

### Debug logs

Debugging data is logged for a maximum of 7 days.

### Data haven

@webboot does not,
under any circumstances,
share information about it's users with
**any**
third parties.

For further information, please visit our
[privacy policy](https://webboot.org/privacy)

</div>

<div id="conclusion">

## Conclusion

By adding an independent source of truth for addressible data,
@webboot can be used in almost any kind of trust based data exchange.

This allows a lot of existing technology to easily be adapted to implement it,
often without changing the application itself.

@webboot is the backbone for the creation of a suite of unique applications,
allowing the secure exchange of data between individuals,
based on public-private key cryptography best practices.

</div>
