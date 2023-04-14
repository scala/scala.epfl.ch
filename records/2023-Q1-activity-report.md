---
layout: contact
title: Scala Center Activity Report for 2023 Q1
---

Scala Center team: Quentin Bernet, 33%; Sébastien Doeraene, 100%; Darja Jovanovic, 100%; Anatolii Kmetiuk, 100%;
Guillaume Martres, 100%; Adrien Piquerez, 100%; Julien Richard-Foy, 80%; Jamie Thompson, 100%; Johanna Reichen: 80%.
VirtusLab team: Jędrzej Rochala, 100%. Lunatech team: Chris Kipp, 100%.

## At a Glance
{: .no_toc}

* Table of Contents
{:toc}


## Language, Compiler, Standard Library

### Maintaining and Evolving the Scala 3 Compiler

For Scala 3.

Every month, about 100 new issues are opened on [the Scala 3
repository](https://github.com/lampepfl/dotty/). The project welcomes any help it
can get in triaging, bug-fixing, PR reviewing, etc.

Our goal is to solve long-standing issues while keeping up with new ones. We also aim to get
more people involved in working on the compiler to ensure the sustainability of
the project.

We contributed PRs in the follow areas:
- Java interoperability
  [dotty#16882](https://github.com/lampepfl/dotty/pull/16882)
- Typechecking robustness
  [dotty#16989](https://github.com/lampepfl/dotty/pull/16989),
  [dotty#16664](https://github.com/lampepfl/dotty/pull/16664)
- Incremental compilation
  [dotty#16996](https://github.com/lampepfl/dotty/pull/16996)
- Type inference
  [dotty#17025](https://github.com/lampepfl/dotty/pull/17025)
- Implicit search
  [dotty#17088](https://github.com/lampepfl/dotty/pull/17088)

Additionally, our collaborations with members of the community, either
asynchronously or as part of the [Compiler
Academy](https://compileracademy.carrd.co/), led to improvements
in the following areas:
- Type inference
  [dotty#17092](https://github.com/lampepfl/dotty/pull/17092)
- Mixed Scala/Java projects
  [dotty#16762](https://github.com/lampepfl/dotty/pull/16762)
- Runtime performance
  [dotty#17166](https://github.com/lampepfl/dotty/pull/17166)
- Typechecking robustness
  [dotty#15683](https://github.com/lampepfl/dotty/pull/15683),
  [dotty#16988](https://github.com/lampepfl/dotty/pull/16988),
  [dotty#16901](https://github.com/lampepfl/dotty/pull/16901),
  [dotty#17071](https://github.com/lampepfl/dotty/pull/17071)

### Scala Improvement Process

For Scala 3.

The [Scala Improvement Process](https://docs.scala-lang.org/sips/) coordinates the evolution of the language. It
ensures that the decisions are made by taking into account the needs of all the
stakeholders of the language.

We organized three SIP meetings:
- 20 January 2023: we did not vote on proposals but discussed how to move them forward,
- [17 February 2023](https://docs.scala-lang.org/sips/results/2023-02-17-meeting.html),
- [17 March 2023](https://docs.scala-lang.org/sips/results/2023-03-17-meeting.html).

Additionally, we have included a new role in the Scala Improvement Process: the Secretary,
who is responsible for writing the minutes of the regular SIP meetings (these notes are
shared internally only).

### Scala.js maintenance

For Scala 2 and 3.

We published [Scala.js 1.13.0](https://www.scala-js.org/news/2023/01/26/announcing-scalajs-1.13.0/) at the beginning of the quarter.
After consultation [through a highly upvoted RFC](https://github.com/scala-js/scala-js/issues/4759), this release drops support for Scala 2.11.

Notable improvements in this release include:

* Ability to export inner `object`s and `class`es in Scala classes
* Checked exceptions for `NullPointerException`s
* Better optimizations for exported methods and methods in JavaScript classes

During this quarter, we also worked on performance improvements for the incremental linker.
This ties together with the integration of Scala.js and Vite, as the incremental pipeline is essential for a good experience.
These improvements will be released as part of Scala.js 1.13.1.

### Maintenance of Scala 2 Tasty Reader

For Scala 2.

The goal of this project is to ensure that the Scala 2.13 series of compilers are able to use library dependencies compiled by the latest Scala 3 versions.

In PRs [scala#10299](https://github.com/scala/scala/pull/10299) and [scala#10285](https://github.com/scala/scala/pull/10285) we added support for reading library dependencies compiled by Scala 3.3.x. This includes sources that use the [new support](https://github.com/scala/scala-lang/pull/1428) for signature polymorphic methods.


## Documentation and Education

### Scala Toolkit

For Scala 2 and Scala 3.

The Scala Toolkit is a collection of libraries that focus on simplicity over flexibility
or power. Our goal is to make it simpler to use Scala for scripting, to perform some very
common programming tasks such as reading and writing files, sending HTTP requests,
parsing JSON etc. We selected MUnit for testing, OS-Lib for working with files and 
processes, UPickle for handling JSON and sttp for sending HTTP requests. We packaged and
published the Toolkit in the new [scala/toolkit](https://github.com/scala/toolkit)
repository.

We designed the new API of the next major version of sttp, to make it less abstract and
easier to use: it produces better error messages, better scaladoc documentation, more
explicit inferred types. The proposal in [softwaremill/sttp#1703](https://github.com/softwaremill/sttp/pull/1703)
was accepted and released in [sttp 4.0.0-M1](https://github.com/softwaremill/sttp/releases/tag/v4.0.0-M1).

We coordinated the writing of the documentation of the Scala Toolkit. It consists of a 
series of short tutorials that are task-oriented, such as 'How to write a file?', 'How
to serialize an object to JSON?', 'How to send an HTTP request?'. This is still a work
in progress in [scalacenter/docs.scala-lang#7](https://github.com/scalacenter/docs.scala-lang/pull/7).

Besides the documentation side, we also made the following contributions to the technical
side:

- In [toolkit#4](https://github.com/scala/toolkit/pull/4) we included sttp's uPickle integration. This enables the `asJson[Foo]` response handler.
- [toolkit#8](https://github.com/scala/toolkit/pull/8) (part of migration to `org.scala-lang` organisation).

### Scala Documentation Website

For Scala 2 and Scala 3.

The goal of this project is to improve the experience developers have reading the [docs.scala-lang.org website](https://docs.scala-lang.org/). We want to make a consistent experience across content that covers Scala 2 and 3, and also across different natural languages.

During this quarter, we have:
- added a ['Debugging the compiler'](https://docs.scala-lang.org/scala3/guides/contribution/procedures-debugging.html)
  page in the Scala 3 contributing guide to help contributors set up and use
  Metals' debugger in the [lampepfl/dotty](https://github.com/lampepfl/dotty)
  codebase.
- documented a pattern to define
  [case classes that can evolve in a binary compatible way](https://docs.scala-lang.org/overviews/core/binary-compatibility-for-library-authors.html#evolving-code-without-breaking-binary-compatibility)
  ([docs.scala-lang#2760](https://github.com/scala/docs.scala-lang/pull/2760)),
- simplified the “IDE setup” part of the “Getting Started” page
  ([docs.scala-lang#2688](https://github.com/scala/docs.scala-lang/pull/2688)),
- continuously reviewed and merged contributions from the community to update
  all the code examples in all the pages to show both Scala 2 and Scala 3 syntax
  (you can track our progress in
  [docs.scala-lang#2481](https://github.com/scala/docs.scala-lang/issues/2481)),
- improved the language picker so that on a non-english page, other language translations are also visible ([docs.scala-lang#2666](https://github.com/scala/docs.scala-lang/pull/2666)).

### scala-lang.org Homepage

For Scala 2 and 3.

The [scala-lang.org](https://scala-lang.org) homepage is likely one of the first places a Scala newcomer may look to learn about the language. Our long term goal is to make the homepage the best destination for both newcomers and returning users to identify the current state of Scala: what it is, what you can do with it, and who is using it.

In [scala-lang#1462](https://github.com/scala/scala-lang/pull/1462) we achieved our first milestone for 2023: the addition of a carousel of runnable code snippets (with a link to Scastie showing the full context). These snippets give a taste of the things users can achieve with modern Scala, and help to reset expectations about complexity.

### The Scala Center's Advent of Code

For Scala 3.

In December 2022 The Scala Center encouraged the community to participate in the Advent of Code challenge, hosting community contributions on [our own website](https://scalacenter.github.io/scala-advent-of-code/2022/). We believe that programming in Scala (with emphasis on Scala 3) can be "simple", and the solutions on the website reflect this.

On 6th January 2023 we published a [blog post](https://scala-lang.org/blog/2023/01/06/advent-of-code-recap.html) to thank the community for their contributions in December to the Scala Center Advent of Code website. The blog post also celebrated the growth of engagement compared to the previous year's iteration.

### Extension School

For Scala 3.

Our partnership with the
[Extension School](https://extensionschool.ch/learn/effective-programming-in-scala)
allows us to provide more support to people learning Scala online. We have been
answering the questions of the learners, and providing feedback on their homework.
We have also started working on many improvements on the course content (new
assignments, new lessons, better feedback), which we plan to publish before the end
of Q2.

### An integrated Scala.js ecosystem

For Scala 2 and 3.

The Scala.js ecosystem contains individual pieces of great quality, from the compiler to the UI libraries. However, it is a challenge for every newcomer to find the pieces that are relevant, to connect them, and to build a good development experience. To address this issue, we want to provide a clear "integrated Scala.js ecosystem".

With that goal in mind, we previously released videos on how to get started with Scala.js, Vite, Laminar and ScalablyTyped.
In this quarter, we wrote the written tutorial version of that content.
We published it on the Scala.js website at [https://www.scala-js.org/doc/tutorial/](https://www.scala-js.org/doc/tutorial/).

In the process, we developed [vite-plugin-scalajs](https://github.com/scala-js/vite-plugin-scalajs), a Vite plugin to integrate with a Scala.js application with as little configuration as possible.

Together with a reorganization of the top-level documentation pages of Scala.js, we hope that these new tools and tutorials will make getting started with Scala.js easier.
We wrote a blog post about it, which we will publish right after the release of Scala.js 1.13.1.


## Developer Experience

### Stable API for the Scala 3 Presentation Compiler

For Scala 3.

We started an initiative focusing on creation of the new API of the Presentation Compiler to be used by Scala tooling. The main idea behind that project is to create a public, stable API that would stay binary compatible.

For the moment, we have finished the first milestone: separation of shared implementation of presentation compiler between Scala 2 and Scala 3. It allowed us to start implementation inside the compiler itself. The majority of the implementation is done and most of the remaining work is infrastructure such as adding tests and adjusting the pipelines responsible for tests and nightly releases.

More information and current progress can be found on the [Scala Contributors Post](https://contributors.scala-lang.org/t/stable-presentation-compiler-api/6139/1)

### Tooling Summit

We organized an event gathering the main actors of the tooling ecosystem (IntelliJ team,
Metals team, Scala compiler teams, build tools maintainers) to agree on the next steps
for a reliable and seamless integration of the pieces of the tooling ecosystem.

This was an opportunity to touch base, map out current issues and opportunities in the
tooling ecosystem, and re-lay the groundwork for ongoing collaboration. You can find
the detailed outcomes of the summit in this [blog article](https://scala-lang.org/blog/2023/04/11/march-2023-scala-tooling-summit.html).

### sbt-dependency-submission

For Scala 2 and Scala 3.

[scalacenter/sbt-dependency-submission](https://github.com/scalacenter/sbt-dependency-submission) is a Github action that submits all the dependencies of an sbt project to Github for scanning security vulnerabilities.

We made it possible to submit the dependencies of several sbt builds in the same workflow, in [#93](https://github.com/scalacenter/sbt-dependency-submission/pull/93) and [#96](https://github.com/scalacenter/sbt-dependency-submission/pull/96).

### Coursier

For Scala 2 and 3.

[Coursier](https://get-coursier.io/) is a command-line tool and a Scala library for resolving
JVM artifacts and managing the applications of your Scala development environment.

We have performed maintenance tasks on Coursier, as described in this
[discussion](https://contributors.scala-lang.org/t/bugfixes-and-seamless-installation-process-for-coursier/6052).

- We have fixed the documentation to install the command-line tool on ARM64 architecture
  ([coursier#2640](https://github.com/coursier/coursier/pull/2640),
  [docs.scala-lang#2698](https://github.com/scala/docs.scala-lang/pull/2698),
  [docs.scala-lang#2729](https://github.com/scala/docs.scala-lang/pull/2729),
  [scala-lang#1469](https://github.com/scala/scala-lang/pull/1469),
  [scala-lang#1479](https://github.com/scala/scala-lang/pull/1479)),
- We have fixed the generation of the linux AMD64 binaries
  ([coursier#2670](https://github.com/coursier/coursier/pull/2670)),
- We have improved the support of Scala 3 libraries of the `fetch` command
  ([coursier#2606](https://github.com/coursier/coursier/pull/2606)),
- We have improved the user experience of the `update` command when the app to update
  has not been installed first
  ([coursier#2714](https://github.com/coursier/coursier/pull/2714)).

### sbt

For Scala 2 and Scala 3.

[sbt](https://scala-sbt.org/) is the most used build tool in the Scala community.

We have set up a CI workflow to generate native binaries for macOS ARM64
([sbtn-dist#4](https://github.com/sbt/sbtn-dist/pull/4),
[sbt#7149](https://github.com/sbt/sbt/pull/7149)). These binaries will be
available starting from version 1.9.0 of sbt.

sbt server is used by IntelliJ and Metals to import an sbt build and trigger compilations. We are continuously working on making sbt server more reliable for the user. This quarter we fixed the following bugs:
- Deadlock in sbt server, fixed in [#7191](https://github.com/sbt/sbt/pull/7191)
- Forwarding Java diagnostics through BSP, fixed in [#7142](https://github.com/sbt/sbt/pull/7142)

### TASTy-MiMa

For Scala 3.

TASTy-MiMa is a new tool that checks TASTy-compatibility across library versions.
It is similar to MiMa, which works at the binary compatibility level.

The project can be found at [https://github.com/scalacenter/tasty-mima](https://github.com/scalacenter/tasty-mima).
It is based on tasty-query (see below).

We finished the first implementation of TASTy-MiMa, and published it along with an sbt plugin.
It checks all the possible TASTy incompatibilities across API versions.

A few library maintainers have tried the early versions and reported a number of issues.
We fixed all the issues raised so far, and published a few follow-up versions.

This completes the initial development of TASTy-MiMa.
We still intend to encourage library maintainers to use it.
We have also been discussing whether and how to present a unified front-end on top of MiMa and TASTy-MiMa, to simplify their joint usage.

### TASTy Manipulation Library (tasty-query)

For Scala 3.

tasty-query is a library to read semantic information from Scala 3 classpaths.
It reads Scala .tasty files, Scala 2 pickles and Java .class files, and presents the semantic information they contain in a unified API.
It is the basis for TASTy-MiMa (see above) and is used as part of the Scala 3 debugger in VS Code.
Over time, it should become an essential tool for any static analysis involving Scala code.

The project can be found at [https://github.com/scalacenter/tasty-query](https://github.com/scalacenter/tasty-query).

In this quarter, we fixed a number of issues prompted by feedback on the early versions of TASTy-MiMa.
An EPFL student is also working on a TASTy Checker based on tasty-query, which is used to further improve the robustness of the library.

### Scala CLI

For Scala 2 and 3.

- In [scala-cli#1983](https://github.com/VirtusLab/scala-cli/pull/1983) we fixed a bug where the `args` method in scala scripts would not be visible to BSP clients.
- In [scala-cli#1810](https://github.com/VirtusLab/scala-cli/pull/1810) we enabled the `using toolkit`
  on the Scala.js and Scala Native platforms.

### Build Server Protocol (BSP)

For Scala 2 and 3.

We performed the following maintenance work:

- Switch from Algolia to a local search ([build-server-protocol#466](https://github.com/build-server-protocol/build-server-protocol/pull/466))
- Add in a governance structure ([build-server-protocol#465](https://github.com/build-server-protocol/build-server-protocol/pull/465))
- Document release process ([build-server-protocol#431](https://github.com/build-server-protocol/build-server-protocol/pull/431))
- Update documentation to use Docusaurus 2 ([build-server-protocol#420](https://github.com/build-server-protocol/build-server-protocol/pull/420))
- Add detection to CI to see if xtend and generated files are mismatched ([build-server-protocol#419](https://github.com/build-server-protocol/build-server-protocol/pull/419))
- Update CI to use setup-java and caching ([build-server-protocol#411](https://github.com/build-server-protocol/build-server-protocol/pull/411))

### Metals

For Scala 2 and 3.

We performed the following maintenance work:

- Migrate from Ammonite to scala-cli for scripts to help with releases ([metals#5077](https://github.com/scalameta/metals/pull/5077))
- Make Scala RCs easier to work with ([metals#4900](https://github.com/scalameta/metals/pull/4900))
- Fix CI to not run scripted twice on sbt plugin ([metals#4898](https://github.com/scalameta/metals/pull/4898))
- Ensure a new .metals/ dir isn't created where/when it's undesired ([metals#4895](https://github.com/scalameta/metals/pull/4895))
- Make sure doctor reports diagnostics correctly in for sbt targets ([metals#4842](https://github.com/scalameta/metals/pull/4842))
- Include type in the showMessageRequest ([metals#4841](https://github.com/scalameta/metals/pull/4841))
- Improve reporting on SemanticDB from Mill for Java Modules ([metals#4816](https://github.com/scalameta/metals/pull/4816))


## Community and Contributor Experience

### Scaladex

For Scala 2 and Scala 3.

We improved Scaladex by fixing a number of critical bugs:
- Timeouts when logging, fixed in [#1170](https://github.com/scalacenter/scaladex/pull/1170)
- Performance issues of the project page, fixed in [#1165](https://github.com/scalacenter/scaladex/pull/1165)
- Projects not being indexed, fixed in [#1184](https://github.com/scalacenter/scaladex/pull/1184)

### Compiler Academy Evolution

For Scala 2 and 3.

[Compiler Academy](https://www.scala-lang.org/blog/2022/11/02/compiler-academy.html) is a Scala 3 Compiler sustainability project. The goal of the project is to provide a place for enthusiasts from the community to learn and contribute to the Scala 3 Compiler.

In Q1 2023, we addressed the growing concern of lack of mentorship in the project. We successfully collaborated with LAMP to increase the participation of the core compiler people in the compiler sprees. We have also transferred to LAMP the ownership of the Compiler Sprees, while the rest of the project – the YouTube Channel and the expansion of the format to other areas – remains led by the Scala Center.

We have also prepared and conducted a discussion about the Compiler Academy during the Tooling Summit to see how we should develop it in the future. Besides collecting feedback on improving the project's effectiveness, we also discussed the possibility of expanding the format to other Scala OSS projects. We will continue to develop in this direction in Q2.

### Google Summer of Code

For Scala 2 and 3.

Scala Center has a long-standing tradition of participation in Google Summer of Code. This program presents a great opportunity to onboard beginner Scala programmers into the OSS world. In Q1 2023, we registered and were [accepted](https://www.scala-lang.org/blog-detail/2023/02/28/acceptd-to-gsoc-2023.html) for the 2023 iteration of the program. Currently, in collaboration with LAMP, we are working with 5 lead mentors from the Scala OSS world to welcome the new contributors in Summer.

### Scala Lunches at EPFL

For Scala 2 and 3.

Scala Lunches is an internal EPFL program to engage the Scala Community at EPFL. The goal is to bring together the Scala Community at EPFL and to provide a platform for them to share their work and ideas. Fostering the Scala community is one of the key goals of the Scala Center, and EPFL, being one of the major hubs of the programming language and the home of the Scala Center, is high on our list.

In Q1 2023, we held 3 Scala Lunches with 20-30 participants each. Each lunch started with a 15-minute talk by someone from the Scala Community at EPFL, followed by an informal meal.

As the program was a success in Q1, we are planning to continue it in Q2 to further foster connections and collaborations among the Scala users at EPFL.

### Conference Participation and Event Co-Location

For Scala 2 and 3.

The Covid-19 pandemic hit hard on local Scala meetups organized in various cities around the world. Many of them haven't come back online for more than a year after the major relaxation of the restrictions in the Western world.

In 2023, the Scala Center is working to support the local Scala meetups and help them revive by co-locating events with the conferences of 2023 that Scala Center will be attending.

In Q1 2023, we developed a plan for 2023 about such event co-location. While setting everything up is still in progress, we are planning to participate in the Scala Days in Seattle and Madrid, and in Scala.io in Paris. While participating, we are planning to co-locate the [Scala Spree](https://github.com/scalacenter/sprees) event with those conferences. We are also considering using these opportunities to revive local Scala meetups in neighboring cities.

### Sustainability and Responsibility in the Scala Open Source Ecosystem

For Scala 2 and 3.

This project is focused on promoting sustainability and responsibility within the Scala open source ecosystem by developing a comprehensive guide on best practices. An increase in contributions by all stakeholders will ensure greater symbiotic relationships within the Scala open source community and provide a positive impact on the longevity and resilience of the Scala ecosystem.

The project began by researching, and identifying key stakeholders, including organizations and individual contributors actively engaged in the Scala open source community.

An [introductory blog post](https://www.scala-lang.org/blog-detail/2023/03/02/sustainability.html) was published on the Scala-lang blog and LinkedIn that created some motion.

7 Individual contributors applied to take part in the interview series based on the introductory blog article.

A set of interview questions was prepared for companies and one for individual contributors to gather insights and experiences from these stakeholders.

Interview questions have been sent out to 6 companies and dates for interviews have been proposed. At the start of the series we are concentrating on companies that participated in the Scala Tooling Summit, and supporters of Scala.

The project is continuing in Q2.


## Other

### Five Year Impact Report

For Scala 2 and 3.

The Scala Center team was working tirelessly since 2016. One of the most frequent comments
we have received over the years are: “Oh, I didn’t know you existed!” or “You are not
visible enough, you have to work on your communication.”

The [five-year report](/records/first-five-years/) aims to celebrate our continued
achievements, share learnings along the way, and answer the majority of frequent
questions asked over the years. We hope it will also lift the curse of not being
known enough and inspire many people to work closer to us in the next five years to
bring the new vision to life!
