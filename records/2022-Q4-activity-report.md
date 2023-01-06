---
layout: contact
title: Scala Center Activity Report for 2022 Q4
---

Scala Center team: Quentin Bernet, 100%; Sébastien Doeraene, 100%; Darja Jovanovic, 100%; Anatolii Kmetiuk, 100%;
Guillaume Martres, 100%; Adrien Piquerez, 100%; Julien Richard-Foy, 80%; Jamie Thompson, 100%.
VirtusLab team: Jędrzej Rochala, 100%. Lunatech team: Chris Kipp, 33%.

External contractors, part-time: Adam Goodman, leadership and
governance expert.

## At a Glance
{: .no_toc}

* Table of Contents
{:toc}

## Tooling

### Debugger in Metals

For Scala 2 and Scala 3.

We shipped a new major version of the Scala Debug Adapter in Metals that improves the debugging experience in Scala 2 and Scala 3. In this new version, we improved the debugging steps, we added support for conditional breakpoints, logpoints and more features. See a full list of features in the release notes of the Scala Debug Adapter [3.0.1](https://github.com/scalacenter/scala-debug-adapter/releases/tag/v3.0.1) and [3.0.3](https://github.com/scalacenter/scala-debug-adapter/releases/tag/v3.0.3).

### BSP defaults for Metals

An area of improvement we've identified with Metals and the usage of the Build
Server Protocol (BSP) in general is that it provides many ways to get started
with a Scala project. We'd like to minimize this and revisit the default choices
that Metals makes of using Bloop no matter the build tool. The aim is to make
the experience a newcomer has smoother, abstracting away things like Bloop and
BSP, while still allowing for a powerful user experience for advanced users.
We're still in the experiment and research stage for this which is leading to
creating various issues around the ecosystem. However, the discussion and main
work can be tracked in [metals#4505](https://github.com/scalameta/metals/discussions/4505#discussioncomment-4571546).

### sbt

For Scala 2 and Scala 3

The Maven coordinates of sbt plugins are invalid based on the Maven specifications, as described in [sbt#3410](https://github.com/sbt/sbt/issues/3410)). This is causing a number of issues:
- Maven cannot resolve sbt plugin artifacts.
- Other resolution tools, like Coursier, must implement some sbt-specific hack to resolve them.
- Some Maven proxies cannot check the validity of sbt plugins and they reject them.
- The number of downloads of sbt plugins are unavailable on [oss.sonatype.org](https://oss.sonatype.org/).
- [javadoc.io](https://javadoc.io/) cannot find the scaladoc of sbt plugins.
- And more

We implemented a solution that enables a smooth transition to valid Maven pattern of sbt plugins in [sbt#7096](https://github.com/sbt/sbt/pull/7096). This solution will be available in sbt 1.9.x, with bidirectional compatibility: sbt 1.9.x will publish the valid and legacy artifacts of sbt plugins, and will be able to resolve the valid or legacy artifacts of sbt plugins.

### Language Improvements

For Scala 3.

#### Clause Interleaving

As a reminder, last quarter, [SIP-47 - Clause Interleaving](https://github.com/scala/improvement-proposals/blob/main/content/clause-interleaving.md) proposed by the Center, got accepted for implementation.
As described in the Q3 report, it provides a way to have type parameter bounds be dependent on value parameters.

During this quarter, work has continued on bringing this SIP into the compiler as an experimental feature.

Particular attention has been given to the [pull request](https://github.com/lampepfl/dotty/pull/14019) and commit messages, to make them as easy to read and understand as possible.
This way it will be usable as a guide when writing future SIP implementations.

The code itself also follows this principle, bringing well documented precise changes that make the project simpler.

#### Case Classes that Can Evolve in a Binary-Compatible Way

Case classes are popular to achieve domain modeling. However, they
come with an important drawback: it is impossible to apply any evolution
(adding/removing fields on a case class) in a backward binary compatible way.
This forces library authors to manually re-implement the features of
case classes that they need (typically, structural equality) at the price of
more verbosity. Other solutions include tools generating code (e.g.
contraband), or experimental macro annotations (e.g. data-class, scalameta).

In Q4, we submitted a [proposal](https://github.com/scala/improvement-proposals/pull/50) that has been actively
discussed by the Committee. Ultimately, we decided to withdraw the proposal in favor of documenting a workaround
that supports our use case without changing the language.

### TASTy Manipulation Library (tasty-query)

For Scala 3.

tasty-query is a library to read semantic information from Scala 3 classpaths.
It reads Scala `.tasty` files, Scala 2 pickles and Java `.class` files, and presents the semantic information they contain in a unified API.

tasty-query will be an essential tool for any static analysis involving Scala code.
In particular, it is the basis for TASTy-MiMa.
More information can be found [in the readme of tasty-query](https://github.com/scalacenter/tasty-query#readme).

In this quarter, we made significant progress on tasty-query, and released several in-progress versions, the latest being 0.5.5.
tasty-query is already used in the Scala Debug Adapter to provide smart step-into filters for Scala 3 code, as well as in the in-progress TASTy-MiMa.

### TASTy-MiMa

For Scala 3.

TASTy-MiMa is a new, in-progress tool that checks TASTy-compatibility across library versions.
It is similar to MiMa, which works at the binary compatibility level.

The project can be found at https://github.com/scalacenter/tasty-mima.
It is based on tasty-query.

We implemented most of the core analysis, including:

* Translate types and symbols across two different "contexts" (universes, or classpaths)
* Missing classes and members
* Incompatible changes of the kind of members
* Incompatible changes of the type of term members
* Incompatible changes in the visibility of members, as well as of openness of classes

The only core changes left to implement are class headers and type members.

After that, we will move on to implementing an sbt and/or Mill plugin to make it available to library maintainers.

## Education and Documentation

### Scala Website

For Scala 2 and Scala 3.

The [scala-lang.org](https://scala-lang.org) homepage is an important destination for both Scala users and non-Scala users, it is the most visited page at 44K visitors per month (the overall site receives 240K views per month). Our long term goal is to make the homepage the best destination for both newcomers and returning users to identify the current state of Scala: what it is, what you can do with it, and who is using it.

While we are working on a refreshed front page, we made a usability improvement which was to restore the "Scala versions" to the front page (PR [scala-lang#1435][scala-lang#1435]). This puts at the top of the page the current 3.x and 2.13.x versions and a link to all releases. Previously users would have to go to the "Install" quick link to see this information.

### Scala Documentation Website

For Scala 2 and Scala 3.

The goal of this project is to improve the experience developers have reading the [docs.scala-lang.org website][scala-docs]. We will provide a seamless experience where content users can choose to see content specialised for Scala 2 or Scala 3, or unified when applicable to both. We also want to reduce the number of steps it takes to see content, and offer clear paths to newcomers.

During this quarter, we have continued the migration to using language version tabs across the site. These tabs show content specialised to either version of the language, typically code, and possibly explanations also. The user's preference is remembered so that all tabs are sychronized across the site to show either Scala 2 or Scala 3 by default.

We also made a few requests to the community to aid us in adding version tabs across the website, [e.g. on LinkedIn][LinkedIn-docs-need-you], and creating the issue [docs.scala-lang#2481][docs.scala-lang#2481] to track the progress and ask for contributions. The community reached out with many PRs to assist: to date the entire "Tour of Scala" (english) has been adapted, with many chapters of the Scala 3 Book also adapted (eventually it will become the "Scala Book" that covers all versions).

Some of our own contributions include
- [docs.scala-lang#2579][docs.scala-lang#2579], where we migrated the "tour of scala - package objects" page to discuss ways to achieve "top level definitions" in Scala 2/3;
- [docs.scala-lang#2630][docs.scala-lang#2630] and [docs.scala-lang#2631][docs.scala-lang#2631] to enhance the implicit conversions chapter of the Tour of Scala;
- [docs.scala-lang#2597][docs.scala-lang#2597], where we added version tabs to the [Migration Tutorial](https://docs.scala-lang.org/scala3/guides/migration/tutorial-intro.html);
- [docs.scala-lang#2598][docs.scala-lang#2598], [docs.scala-lang#2599][docs.scala-lang#2599], [docs.scala-lang#2602][docs.scala-lang#2602], [docs.scala-lang#2614][docs.scala-lang#2614], and [docs.scala-lang#2617][docs.scala-lang#2617] for updating various chapters of the Scala 3 book.

In addition, we have also made some improvements to usability of the site:
- [docs.scala-lang#2639][docs.scala-lang#2639] to fix the language dropdown of getting-started guide on translated pages.
- [docs.scala-lang#2637][docs.scala-lang#2637] to ensure all translations have the same layout for the landing page.
- [docs.scala-lang#2634][docs.scala-lang#2637] make the "outdated page" notice sticky so that the link to redirect to the updated page is always visible.

### Scala Toolkit

For Scala 2 and Scala 3.

The goal of this project is to help beginner-to-intermediate-level programmers to learn and use Scala in small projects, such as scripts.
To this end, we will publish a series of written tutorials that focus on common programming tasks, such as testing, reading and writing files, sending HTTP requests, etc.

We started writing a few tutorials for unit-testing using the MUnit library, in [scalacenter/docs.scala-lang#7096](https://github.com/sbt/sbt/pull/7096). The Scala Toolkit series will be published later this year.

### An integrated Scala.js ecosystem

For Scala 2 and Scala 3.

The Scala.js ecosystem contains individual pieces of great quality, from the compiler to the UI libraries. However, it is a challenge for every newcomer to find the pieces that are relevant, to connect them, and to build a good development experience. To address this issue, we want to provide a clear “integrated Scala.js ecosystem”. You can find the complete roadmap [here](https://contributors.scala-lang.org/t/the-scala-centers-roadmap-for-a-unified-scala-js-ecosystem/5568).

The second video in the series, [Getting Started with Scala.js, Laminar and ScalablyTyped](https://www.youtube.com/watch?v=hWUAVrNj65c) was published in December 2022.
We gave talks on the same topic at ScalaIO and ScalaCon (watch it [here](https://www.youtube.com/watch?v=hWUAVrNj65c)).

We prepared a written tutorial version of the above, which is currently an open pull request ([scala-js-website#590](https://github.com/scala-js/scala-js-website/pull/590)).

### Extension School

For Scala 3.

Our partnership with the [Extension School](https://extensionschool.ch/learn/effective-programming-in-scala) allows us to provide more support to people learning Scala online. We have been answering the questions of the learners, and providing feedback on their homework. In addition, we have added subtitles to all our video lectures.

## Communication

### Let’s Talk About Scala 3 Videos

For Scala 3.

We produced a video about debugging Scala 3 in Metals. This video demonstrates the power of the debugger in a multi-threaded Scala 3 application. We show how to use the debugging steps, the debug console, the watches, and the different types of breakpoints. The video will soon be released on the Youtube platform.

### Advent of Code Website

For Scala 3.

One of our goals is to communicate that programming in Scala (with emphasis on Scala 3) can be "simple". We also like to engage the community to bring members together. So to help these goals this year we decided to refresh the [Scala Center Advent of Code][sc-advent-of-code] website for 2022.

With the website we can both engage the community through our [Scala Discord server][discord] (channel `#advent-of-code`), by encouraging them to share their solutions on the 'site, and to curate a high quality collection of articles that detail how to solve each day's challenge using Scala 3 in a "simple" style. i.e. using only the standard library, and favoring readability. This means e.g. that local mutability can be favored when it produces more expressive code.

On day 4 we made a [tweet][aoc-announce-tweet] to announce that we had revived the site, after we had prepared the website to receive community contributions with PRs [scala-advent-of-code#109][scala-advent-of-code#109] and [scala-advent-of-code#110][scala-advent-of-code#110], which added a new section for 2022, preserving 2021's articles; and PR [scala-advent-of-code#143][scala-advent-of-code#143] automated the process of publishing each day's article moments after the day's challenge is published.

After week 1 we also published a [blog][aoc-blog] (the [announcement tweet][aoc-blog-twitter-post]) to continue to direct community members to the Discord channel and our website. We have seen sustained growth in visits week on week to the site, and more community contributed solutions than last year.

## Community, Sustainability, and Governance

### Compiler Academy

For Scala 3.

Scala 3 Compiler Academy is an effort to provide community enthusiasts with a well-defined way to get started contributing to the Scala 3 compiler. We've been incubating it since Summer 2021. The online pair programming sessions at first took place only between the core team members. Throughout 2022, we were welcoming more and more external contributors to participate, but the project was still not open to the public.

In Q4, we're finally opening it to the wider public. We've integrated the project with Scala's official Discord so that everyone present there who is interested in contributing to the compiler will be aware of it and will be able to join.

The significance of the project is to ensure the long-term sustainability of Scala 3. Scala 3's team is smaller than corresponding teams of many other programming languages. We need to ensure that the project is not dependent on a small number of people, but rather on a large number of people who are interested in contributing to the compiler. Compiler Academy is one of the avenues that ensure a stream of new compiler enthusiasts.

You can learn more about the Academy [here](https://compileracademy.carrd.co/). [Here](https://www.scala-lang.org/blog/2022/11/02/compiler-academy.html) is the blog post announcing opening it up.

### Community Expansion

For Scala 2 and 3.

Scala is developed at EPFL, the Polytechnic University of Lausanne, Switzerland. Despite being around for close to 20 years, Scala is still not widely used in the scientific community.

To spark the interest of EPFL scientists and students in Scala, throughout 2022, we developed a workshop that introduces Scala to scientists in a gamified way. The workshop is about programming spacecrafts' trajectories in a game called [Simple Rockets 2](https://www.simplerockets.com/).

In Q4, we finalized this project by conducting the first workshop for the EPFL community. We had around 10 participants, and the workshop was a success. We're tentatively planning to conduct one such workshop per semester to spread awareness about Scala at EPFL and gain more userbase at our home university.

- [EPFL Announcement](https://memento.epfl.ch/event/launching-rockets-with-scala/)
- [Technical blog](https://akmetiuk.com/posts/2022-02-19-launching-rockets.html) to get an idea of what it is all about.

### Google Summer of Code

For Scala 2 and 3.

Google Summer of Code is another initiative by the Scala Center to give Scala users a way to contribute to OSS. Most of the work on the project was done in Q2-Q3 2022, but there was still some work left to be done. in Q4, all the work was finalized, all of the students graduated successfully, and the project is officially over – for this year. You can read more about how it was and the projects we welcomed in the [blog article](https://www.scala-lang.org/blog/2022/11/15/gsoc-report.html) we published.

### Scala Improvement Process

For Scala 3.

The [Scala Improvement Process](https://docs.scala-lang.org/sips/) coordinates the evolution of the language. It
ensures that the decisions are made by taking into account the needs of all the
stakeholders of the language.

We organized three SIP meetings:
- [21 October 2022](https://docs.scala-lang.org/sips/results/2022-10-21-meeting.html)
- [18 November 2022](https://docs.scala-lang.org/sips/results/2022-11-18-meeting.html)
- 16 December 2022 (we mainly discussed about Scala CLI, the summary can be found [here](https://contributors.scala-lang.org/t/sip-46-scala-cli-as-default-scala-command/5996/14))

### Scala Developer Survey

For Scala 2 and Scala 3.

In partnership with VirtusLab, we have created and published a survey to know the community better and learn about the libraries and tools they use.
We published the results of the survey in [blog article](https://www.scala-lang.org/blog/2022/12/14/scala-developer-survey-results-2022.html).

### ScalaCon, October 4-7 2022

Besides being managing and producing the ScalaCon, we participated in ScalaCon 2022 by giving talks:

- Darja Jovanovic and Adam Goodman, [Towards a Healthy and Resilient Scala Community](https://www.youtube.com/watch?v=svWnwU5PXxE)
- Sébastien Doeraene, [Getting started with Scala js, Laminar and Vite](https://www.youtube.com/watch?v=hWUAVrNj65c)
- Adrien Piquerez, [Building a Debugger for Scala 3](https://www.youtube.com/watch?v=IKj2fsbF6b4)

### Scala Sprees and Meetups

For Scala 2 and Scala 3.

With the lift of Covid restrictions, programming events gradually started to happen offline again – which is a great opportunity for the Scala Center to do its part in bringing the community together and also spread awareness about the Scala Center's mission.

In Q4 of 2022, we conducted two visits abroad to present before local Scala communities and organize Scala Sprees for them. The first one was to Paris, to the [ScalaIO](https://scala.io/) conference. The second one was to Warsaw, to the [ScalaWAW meetup](https://www.meetup.com/scalawaw/events/289954053/).

During both visits, we co-located the [Scala Spree](https://github.com/scalacenter/sprees) event ([Paris](https://scala.io/workshops), [Warsaw](https://www.meetup.com/scalawaw/events/289954415/)). Scala Spree is an opportunity for Scala users to contribute to their favorite open-source projects. For the OSS maintainers, it is an opportunity to gain new contributors. Scala Spree is an on-site hackathon event where Scala users are coding on their Scala OSS of choice for 4 hours, and the maintainers of those OSS help them by answering questions and showing the ropes. Ultimately, this is a good way for the community to get to know each other and build fruitful collaborations.

We had around 20 people on both events.

We also participated by giving a talk at the local Lausanne Meetup on 22nd December.

Last, we were happy to have another opportunity to collaborate in person with our close partners, Lightbend Scala team, in October.
These in-person sessions help us even better to sync up and progress with our projects.

### Scala Center's Marketing Materials

For Scala 2 and Scala 3.

Scala Center is a non-profit organisation. A large chunk of its budget comes from the Advisory Board membership fees – which are essentially an investment of the Scala industrial users into the future of the language. We are constantly on the lookout for new partners to join the Advisory Board.

It is not possible to effectively engage the potential partners if we don't have a clear and concise presentation of who we are, what we do and how the partnership with us is a win-win situation for everyone involved. In Q4, we developed a 5-pager PDF that achieves exactly that purpose. Aimed at developers, development team leaders and top-level managers alike, we expect it to give all those target audiences a clear understanding of Scala Center's mission without taking much of their time.

At the time of writing this document, the PDF is still being worked on, but we hope to have it early January 2023.

## Maintenance Work

### Scala 3 Compiler

Every month, about 100 new issues are opened on [the Scala 3
repository](github.com/lampepfl/dotty/), so the project can use all the help it
can get in triaging, bug-fixing, PR reviewing, etc.

Our goal is to solve long-standing issues while keeping up with new ones. We also aim to get
more people involved in working on the compiler to ensure the sustainability of
the project.

We wrote up
[a proposal](https://contributors.scala-lang.org/t/scala-3-macro-annotations-and-code-generation/6035)
regarding macro annotation support to ease the transition from Scala 2 to Scala
3 and implemented a [proof of
concept](https://github.com/lampepfl/dotty/pull/16545) of our proposed pattern.
The discussion related to this proposal is still ongoing.

We reviewed numerous PRs and produced some of our own such as:
- Improved interoperability with Java
  ([dotty#16260](https://github.com/lampepfl/dotty/pull/16260))
- Slight improvements to compiler performance
  ([dotty#16616](https://github.com/lampepfl/dotty/pull/16616))
- Improvements and bug fixes for type inference
  ([dotty#16410](https://github.com/lampepfl/dotty/pull/16410),
  [dotty#16417](https://github.com/lampepfl/dotty/pull/16417),
  [dotty#16492](https://github.com/lampepfl/dotty/pull/16492),
  [dotty#16514](https://github.com/lampepfl/dotty/pull/16514))
- Improvements to pattern matching exhaustiveness checking
  ([dotty#16528](https://github.com/lampepfl/dotty/pull/16528))

Additionally, we streamed several pair-programming sessions with members of the
community which lead to merged PRs, in particular:
- Improved interoperability with Scala 2
  ([dotty#16445](https://github.com/lampepfl/dotty/pull/16445))
- Improved overloading resolution
  ([dotty#16315](https://github.com/lampepfl/dotty/pull/16315))

### Implement JSR-45

For Scala 3.

We have made some progress on the [JSR-45](https://github.com/lampepfl/dotty/pull/15684) project. The project is aimed to provide advanced debugging support for inline methods that come from other files in Scala. Currently, due to the limitations of the class file format, it is not possible to store there information that a given instruction comes from a different file. Since debuggers rely on the information from the class files to do their work, this means they are limited when it comes to inlining.

In Q4, we brought the project closer to maturity for Scala 3. The current status of the project is that all the functionality is implemented, but there are corner cases to work through. Addressing these corner cases will be the main objective of further work on the project, and once it is done, we'll be able to release it.

### Scala.js

For Scala 2 and 3.

We published Scala.js version [1.12.0](https://www.scala-js.org/news/2022/11/23/announcing-scalajs-1.12.0/).
The most important changes in these releases are:

* Support for the ECMAScript 2016 operator `**`
* Better error messages for `ArrayStoreExceptions`s and `NegativeArraySizeException`s.

We also updated Scala.js for the new Scala release 2.13.10.

In addition, we finalized and merged support for better error messages for `NullPointerException`s.
Those will be part of the next release.

### Scastie

For Scala 2 and 3.

The [Scastie](https://scastie.scala-lang.org) code editor is a popular playground used daily by around 1000 people, despite providing basic editor setup. Its simplicity allows users to quickly try libraries or code snippets, and then share them with other people, or just quickly jump into starting coding with Scala for a newcomer. Our goal is to improve the experience by adding "IDE" features straight into the Scastie application.

We are working on providing more advanced editor capabilities ([scastie#655](https://github.com/scalacenter/scastie/pull/655)). For now, Scastie supports completions and hovers, but in the future we will add more features such as go-to definition, signature-help or show references.

### Bloop

For Scala 2 and 3.

The goal of this project is to ease the maintenance burden of Bloop.
Historically Bloop has been difficult to work on due to many custom plugins and
integrations. This has turned off contributors and played a role in the decision
for VL to fork Bloop for scala-cli. By working on simplifying the build we can
ensure an easier onboarding for developers working on Bloop, encourage continual
maintenance and new features, while also hopefully encouraging the fork being
use for scala-cli to converge with the mainline Bloop.

The main contributions for this have been as follows:

- Migrating out the build integrations to be versioned and developed alone.
    - [bloop-maven-plugin#2](https://github.com/scalacenter/bloop-maven-plugin/pull/2)
    - [bloop#1948](https://github.com/scalacenter/bloop/pull/1948)
    - [bloop#1951](https://github.com/scalacenter/bloop/pull/1951)
    - [gradle-bloop#1](https://github.com/scalacenter/gradle-bloop/pull/1)
    - [bloop#1868](https://github.com/scalacenter/bloop/pull/1868)
- Removing the meta-meta build magic
    - [bloop#1956](https://github.com/scalacenter/bloop/pull/1956)
- Updating the release infastructure to use a modern graalvm version and
  release plugin
    - [bloop#1962](https://github.com/scalacenter/bloop/pull/1962)
    - [bloop#1966](https://github.com/scalacenter/bloop/pull/1966)

### Coursier

Coursier is the recommended tool to get started with Scala. It is also used under the hood by many other tools to
resolve Scala libraries. We want to make sure Coursier works well for everyone. In collaboration with Alexandre
Archambault and Tomasz Godzik from VirtusLab, we have prioritized the most important issues to fix and started
working on them.

We fixed the support of Scala 3 libraries in [coursier#2606](https://github.com/coursier/coursier/pull/2606), and
fixed the installation instructions in [coursier#2640](https://github.com/coursier/coursier/pull/2640).

The next step is to streamline the setup process of Coursier by publishing packages that are better integrated
with the various operating systems (Linux, macoOS, and Windows).

### Scala Center Processes Automation

One of the Scala Center's missions is fostering a healthy Scala community. One of our main instruments to achieve it is organisation of events and projects – such as the Scala Sprees, Scala in Science workshop, the Compiler Academy, Let's Talk about Scala 3 videos etc. Anyone who has ever organized an event knows how tedious it is: workflows need to be designed and followed, details need to be tracked, and people need to be messaged. With our small crew of under 10 people, the time spent on the logistical details means time taken away from other important projects.

Luckily, in the third decade of the 21st century, there are a lot of ways to automate processes. There is an entire industry of digital transformation the objective of which is to amplify the output of a single person via the help of technology.

In Q4, we researched and implemented the current industry standards for the digital transformation. We've managed to reduce the human time spent on the Scala 3 Compiler Academy organization and maintenance from 4 hours per week to 20 minutes every 3 weeks, and automated a bunch of other internal processes using the technology.

[LinkedIn-docs-need-you]: https://www.linkedin.com/feed/update/urn:li:activity:6955134448623349761

[docs.scala-lang#2579]: https://github.com/scala/docs.scala-lang/pull/2579
[scala-docs]: https://docs.scala-lang.org/
[docs.scala-lang#2481]: https://github.com/scala/docs.scala-lang/issues/2481
[docs.scala-lang#2597]: https://github.com/scala/docs.scala-lang/pull/2597
[docs.scala-lang#2598]: https://github.com/scala/docs.scala-lang/pull/2598
[docs.scala-lang#2599]: https://github.com/scala/docs.scala-lang/pull/2599
[docs.scala-lang#2602]: https://github.com/scala/docs.scala-lang/pull/2602
[docs.scala-lang#2614]: https://github.com/scala/docs.scala-lang/pull/2614
[docs.scala-lang#2617]: https://github.com/scala/docs.scala-lang/pull/2617

[docs.scala-lang#2630]: https://github.com/scala/docs.scala-lang/pull/2630
[docs.scala-lang#2631]: https://github.com/scala/docs.scala-lang/pull/2631

[docs.scala-lang#2639]: https://github.com/scala/docs.scala-lang/pull/2639
[docs.scala-lang#2637]: https://github.com/scala/docs.scala-lang/pull/2637

[scala-advent-of-code#109]: https://github.com/scalacenter/scala-advent-of-code/pull/109
[scala-advent-of-code#110]: https://github.com/scalacenter/scala-advent-of-code/pull/110
[scala-advent-of-code#143]: https://github.com/scalacenter/scala-advent-of-code/pull/143
[aoc-blog-twitter-post]: https://twitter.com/scala_lang/status/1602294726740398087?s=20&t=VJwBTSBPezFrZUfC_qk92w
[aoc-blog]: https://scala-lang.org/blog/2022/12/12/advent-of-code.html
[aoc-announce-tweet]: https://twitter.com/scala_lang/status/1599776376084914176?s=20&t=VJwBTSBPezFrZUfC_qk92w

[docs.scala-lang#2634]: https://github.com/scala/docs.scala-lang/pull/2634

[sc-advent-of-code]: https://scalacenter.github.io/scala-advent-of-code/2022/

[discord]: https://discord.com/invite/scala

[scala-lang#1435]: https://github.com/scala/scala-lang/pull/1435
