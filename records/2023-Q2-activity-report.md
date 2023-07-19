---
layout: contact
title: Scala Center Activity Report for 2023 Q2
---

Scala Center team: Sébastien Doeraene, 100%; Darja Jovanovic, 100%; Anatolii Kmetiuk, 100%;
Guillaume Martres, 100%; Adrien Piquerez, 100%; Julien Richard-Foy, 80%; Jamie Thompson, 100%; Johanna Reichen: 80%; Lucas Nouguier: 100%.
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
- Polymorphic functions (efficiency and expressiveness)
  [dotty#17548](https://github.com/lampepfl/dotty/pull/17548),
  [dotty#18041](https://github.com/lampepfl/dotty/pull/18041),
  [dotty#18169](https://github.com/lampepfl/dotty/pull/18169) (will be completed by an updated version of the
  [SIP-49](https://docs.scala-lang.org/sips/polymorphic-eta-expansion.html) specification very soon)
- Typechecking robustness
  [dotty#18092](https://github.com/lampepfl/dotty/pull/18092) (affected the
  [port of scalamock to Scala 3](https://github.com/fmonniot/scala3mock)),
  [dotty#18110](https://github.com/lampepfl/dotty/pull/18110), [lampepfl/dotty#17261](https://github.com/lampepfl/dotty/pull/17261) (improved result type of `Expr.ofTupleFromSeq` for sequences greater than 22 elements)
- Error reporting [dotty#17924](https://github.com/lampepfl/dotty/pull/17924), [dotty#17976](https://github.com/lampepfl/dotty/pull/17976)
- Migration from Scala 2. The `-indent` and `-no-indent` rewrites are important tools to safely migrate from the Scala 2 syntax to the Scala 3 brace-less syntax. We found and fixed a number of major bugs, in [dotty#17366](https://github.com/lampepfl/dotty/pull/17366) and [dotty#17522](https://github.com/lampepfl/dotty/pull/17522). To ensure the reliability of those rewrites, we improved the test coverage and we ran them on the community build.
- We also are upgrading the compiler to use the improved Zinc 1.9 API in [lampepfl/dotty#18137](https://github.com/lampepfl/dotty/pull/18137). This will allow the compiler to continue to benefit from improvements in Zinc, such as pipelined compilation of multi-project builds.

Additionally, our collaborations with other developers lead to improvements in the following areas:
- Typechecking robustness
  [dotty#17937](https://github.com/lampepfl/dotty/pull/17937),
- Meta-programming (refactorings to improve maintainability)
  [dotty#17236](https://github.com/lampepfl/dotty/pull/17236)
  [dotty#17342](https://github.com/lampepfl/dotty/pull/17342),
  [dotty#17396](https://github.com/lampepfl/dotty/pull/17396),
  [dotty#17407](https://github.com/lampepfl/dotty/pull/17407),
  [dotty#17424](https://github.com/lampepfl/dotty/pull/17424),
  [dotty#17451](https://github.com/lampepfl/dotty/pull/17451),
  [dotty#17455](https://github.com/lampepfl/dotty/pull/17455),
  [dotty#18104](https://github.com/lampepfl/dotty/pull/18104)
- Meta-programming ([SIP-53](https://docs.scala-lang.org/sips/quote-pattern-type-variable-syntax.html) experimental implementation)
  [dotty#17362](https://github.com/lampepfl/dotty/pull/17362)

Last, there was some work done on the infrastructure and process of contributing to Scala 3 in various ways.

- Archiving the old [feature requests repo](https://github.com/lampepfl/dotty-feature-requests) and setting up/migrating relevant requests to now be managed in [GitHub Discussions](https://github.com/lampepfl/dotty/discussions).
- Cleanup of contributing documentation including migrating all the
  documentation into the actual Dotty contributing website.
  - [Refactor full contributing docs](https://github.com/lampepfl/dotty/pull/17585)
  - [Fix broken links to fewer braces](https://github.com/lampepfl/dotty/pull/17417)
  - [Remove legacy information about core data structures](https://github.com/lampepfl/dotty/pull/17464)
  - [Remove empty changes in typechecking page](https://github.com/lampepfl/dotty/pull/17494)
  - [Show example of how to switch build server](https://github.com/lampepfl/dotty/pull/17628)
  - [Migrate community build docs to contributing guide](https://github.com/lampepfl/dotty/pull/17629)
  - [Update references to discussions](https://github.com/lampepfl/dotty/pull/17787)
  - [Cleanup legacy unused scaladoc stuff](https://github.com/lampepfl/dotty/pull/17967)
  - [Get rid of old e2e tests](https://github.com/lampepfl/dotty/pull/17960)

We also spent time going through the entire backlog adding in regression tests
to close issues that were actually fixed at some point in time: [dotty#17472](https://github.com/lampepfl/dotty/pull/17472), [dotty#17473](https://github.com/lampepfl/dotty/pull/17473), [dotty#17474](https://github.com/lampepfl/dotty/pull/17474), [dotty#17475](https://github.com/lampepfl/dotty/pull/17475), [dotty#17479](https://github.com/lampepfl/dotty/pull/17479), [dotty#17481](https://github.com/lampepfl/dotty/pull/17481), [dotty#17482](https://github.com/lampepfl/dotty/pull/17482), [dotty#17483](https://github.com/lampepfl/dotty/pull/17483), [dotty#17486](https://github.com/lampepfl/dotty/pull/17486), [dotty#17488](https://github.com/lampepfl/dotty/pull/17488), [dotty#17495](https://github.com/lampepfl/dotty/pull/17495), [dotty#17496](https://github.com/lampepfl/dotty/pull/17496), [dotty#17497](https://github.com/lampepfl/dotty/pull/17497), [dotty#17498](https://github.com/lampepfl/dotty/pull/17498), [dotty#17499](https://github.com/lampepfl/dotty/pull/17499), [dotty#17500](https://github.com/lampepfl/dotty/pull/17500), [dotty#17501](https://github.com/lampepfl/dotty/pull/17501), [dotty#17502](https://github.com/lampepfl/dotty/pull/17502), [dotty#17503](https://github.com/lampepfl/dotty/pull/17503), [dotty#17505](https://github.com/lampepfl/dotty/pull/17505), [dotty#17507](https://github.com/lampepfl/dotty/pull/17507), [dotty#17508](https://github.com/lampepfl/dotty/pull/17508), [dotty#17509](https://github.com/lampepfl/dotty/pull/17509), [dotty#17510](https://github.com/lampepfl/dotty/pull/17510), [dotty#17511](https://github.com/lampepfl/dotty/pull/17511), [dotty#17512](https://github.com/lampepfl/dotty/pull/17512), [dotty#17514](https://github.com/lampepfl/dotty/pull/17514), [dotty#17569](https://github.com/lampepfl/dotty/pull/17569), [dotty#17576](https://github.com/lampepfl/dotty/pull/17576), [dotty#17960](https://github.com/lampepfl/dotty/pull/17960).

### Scala Improvement Process

For Scala 3.

The [Scala Improvement Process](https://docs.scala-lang.org/sips/) coordinates the evolution of the language. It
ensures that the decisions are made by taking into account the needs of all the
stakeholders of the language.

We organized three SIP meetings:
- [21 April 2023](https://docs.scala-lang.org/sips/results/2023-04-21-meeting.html),
- 12 May 2023: we did not vote on proposals but discussed how to move them forward,
- [16 June 2023](https://docs.scala-lang.org/sips/results/2023-06-16-meeting.html).

### Better Support for Debugging Inlined Code

For Scala 3.

Debugging a program containing code that has been inlined is difficult because the debugger shows code and positions that don’t match the original source code anymore. The JSR-45 specification provides a solution to this issue. We decided to focus our efforts on implementing JSR-45 in the Scala 3 compiler because `inline` is now part of the language, and any Scala 3 program is likely to have inlined code fragments.

We took over the previous work ([dotty#15684](https://github.com/lampepfl/dotty/pull/15684)), rebased it, and fixed all the remaining implementation issues ([dotty#17055](https://github.com/lampepfl/dotty/pull/17055)). Before we can merge this work, we need to validate that debuggers can leverage the extra information added into the bytecode.


### Scala.js maintenance

For Scala 2 and 3.

We released [Scala.js 1.13.1](https://www.scala-js.org/news/2023/04/10/announcing-scalajs-1.13.1/) and [Scala.js 1.13.2](https://www.scala-js.org/news/2023/06/23/announcing-scalajs-1.13.2/) during this quarter.

The main highlight is that Scala.js 1.13.2 is published with sbt 1.9.0, which allows `sbt-scalajs` to be resolved in strict corporate environments that demand compliance to Maven repository rules.

Scala.js 1.13.1 contained a number of performance improvements to the linker.
Feedback reported up to an order of magnitude improvement to the time taken by `fastLinkJS`, measurably improving developer productivity.

## Documentation and Education

### Scala Toolkit

For Scala 2 and 3.

The Toolkit project is a significant step in our ongoing effort to make Scala more accessible, lightweight, and fun to use. After moving it to the Scala organization, we released the version 0.2.0 and announced it officially in this [blog post](https://scala-lang.org/blog/2023/06/20/toolkit.html).

The Toolkit tutorials are now available on [doc.scala-lang/toolkit](https://docs.scala-lang.org/toolkit/introduction.html).

### Scala Documentation Website

For Scala 2 and Scala 3.

The goal of this project is to improve the experience developers have reading the [docs.scala-lang.org website](https://docs.scala-lang.org/). We want to make a consistent experience across content that covers Scala 2 and 3, and also across different natural languages.

During this quarter:
- we improved the syntax highlighting across the website with several updates ([scala/docs.scala-lang#2845](https://github.com/scala/docs.scala-lang/pull/2845) and [scala/docs.scala-lang#2798](https://github.com/scala/docs.scala-lang/pull/2798)). With these changes, using directives in code are now highlighted, there were also several improvements in highlighting of literals and various definitions. This makes it easier to follow the [new tutorials](https://docs.scala-lang.org/toolkit/introduction.html) for the Scala Toolkit.
- we fixed a minor issue in the rendering of tables [scala/docs.scala-lang#2820](https://github.com/scala/docs.scala-lang/pull/2820).
- we improved the styling of blockquote sections in the Scala 3 reference [lampepfl/dotty#17423](https://github.com/lampepfl/dotty/pull/17423).
- in [highlightjs/highlight.js#3810](https://github.com/highlightjs/highlight.js/pull/3810) our improvements to using directive highlighting was accepted by the highlight.js project, which powers scala-lang.org syntax highlighting. We plan to also submit our other improvements, mentioned above, to the project.
- we rewrote the examples for how to implement type class derivation with the Mirror API. The improvements include compatibility with recursive types, such as List. The documentation also encourages that `derived` should never be `given`, which avoids unexpected generation of code and slower compilation times. [lampepfl/dotty#17414](https://github.com/lampepfl/dotty/pull/17414) and [lampepfl/dotty#17420](https://github.com/lampepfl/dotty/pull/17420).
- in [lampepfl/dotty#18030](https://github.com/lampepfl/dotty/pull/18030) we improved the readability of source compatibility guide in scala 3 reference.

### scala-lang.org Homepage

For Scala 2 and 3.

The [scala-lang.org](https://scala-lang.org) homepage is likely one of the first places a Scala newcomer may look to learn about the language. Our long term goal is to make the homepage the best destination for both newcomers and returning users to identify the current state of Scala: what it is, what you can do with it, and who is using it.

In [scala/scala-lang#1516](https://github.com/scala/scala-lang/pull/1516) we brought the main scala website's syntax highlighting into accordance with the documentation website, including the highlighting of using directives.

In [scala/scala-lang#1518](https://github.com/scala/scala-lang/pull/1518) we changed the homepage significantly. The goal was to make clear the use cases of Scala in the present day, and to make more clear the unique reasons to choose Scala over another programming language. There was also some simplification: the removal of the outdated "Scala in a nutshell" section, the purpose of which is better served by the carousel of code snippets. We also simplified the "ecosystem" section, now there is only a single search box for Scaladex, and no longer popular categories listed, as the popular use-cases are now covered in a dedicated section.

In [scala/scala-lang#1504](https://github.com/scala/scala-lang/pull/1504) we added a section to the [Community](https://www.scala-lang.org/community/) page of scala-lang.org. This lists the processes behind many official Scala projects and organisations and the people who manage them.

Additionally, we have set up a reverse proxy in front of all the websites under the domain scala-lang.org to improve their reachability (see [scala-lang#1456](https://github.com/scala/scala-lang/issues/1456)).

### Scala 3 Language Specification

For Scala 3.

We started an effort to bring the Scala language specification up to date for Scala 3.
Currently, the specification is an implicit combination of [the Scala 2.13 specification](https://scala-lang.org/files/archive/spec/2.13/) and [the Scala 3 reference](https://docs.scala-lang.org/scala3/reference/).
Lack of a unique, all-encompassing document is starting to weigh on the ability for the SIP process to accurately evaluate new proposals.
This project aims to address that problem.

In this quarter, our biggest contribution was to rewrite the type system definition from the ground up so that its foundations are accurate.
In particular, it builds on the higher-kinded, path-dependent nature of the Scala 3 type system, as well as on union and intersection types.
We also introduced the majority of small-scale changes [from the Scala 3 reference](https://docs.scala-lang.org/scala3/reference/).

Major remaining features to be specified are `given` definitions and metaprogramming.

### Online Courses

For Scala 2 and 3.

Our partnership with the
[Extension School](https://extensionschool.ch/learn/effective-programming-in-scala)
allows us to provide more support to people learning Scala online. We have been
answering the questions of the learners, and providing feedback on their homework.

On both Coursera and the Extension School, we have updated the content of the course [Effective Programming in Scala](https://docs.scala-lang.org/online-courses.html#effective-programming-in-scala) to add more code examples, explanations, and assignments, and to improve the quality of the feedback produced by the graders. In two years, more than 10k people enrolled in the course.

We have also updated all our [online courses](https://docs.scala-lang.org/online-courses.html) to the latest release of Scala, version 3.3.0.

### An integrated Scala.js ecosystem

For Scala 2 and 3.

The Scala.js ecosystem contains individual pieces of great quality, from the compiler to the UI libraries. However, it is a challenge for every newcomer to find the pieces that are relevant, to connect them, and to build a good development experience. To address this issue, we want to provide a clear "integrated Scala.js ecosystem".

To conclude this project after the release of Scala.js 1.13.1, we published a summarizing blog post [Faster Scala.js development with front-end tooling and new tutorials](https://www.scala-lang.org/blog/2023/04/18/faster-scalajs-development-with-frontend-tooling.html).

## Developer Experience

### Stable API for the Scala 3 Presentation Compiler

For Scala 3.

The main idea behind that project is to create a public, stable API that would stay binary compatible so that IDEs can easily support a wide range of Scala versions.

In the previous quarter, we started working on the [Stable Presentation Compiler](https://contributors.scala-lang.org/t/stable-presentation-compiler-api/6139/1), and we have finished the main part of the work. From now on, each Scala compiler will be published along with a presentation compiler, thus reducing the amount of work to do to support that version of Scala in IDEs. Additionally, it allowed compiler developers to have proper IDE support while working on certain projects, such as Scaladoc. With these changes, we have created a base implementation that is intended to be used by external tooling, starting with Metals.

We plan to continue working on the presentation compiler in terms of both improved stability and new features throughout the next quarter.

### Bring the Compiler’s Suggestions into the IDEs

For Scala 2 and 3.

We started implementing an infrastructure that allows the Scala compilers to emit errors and warnings in the form of structured information that can be directly consumed by tools such as IDEs.

This project touched many tools involved in the communication between the compilers and IDEs: [metals#5338](https://github.com/scalameta/metals/pull/5338), [dotty#17561](https://github.com/lampepfl/dotty/pull/17561), [sbt#7242](https://github.com/sbt/sbt/pull/7242), [scala#10406](https://github.com/scala/scala/pull/10406) (by Eugene Yokota).

### sbt

For Scala 2 and Scala 3.

[sbt](https://scala-sbt.org/) is the most used build tool in the Scala community.

Eugene Yokota released sbt 1.9.0 which includes our fix of a long-standing issue regarding the POM consistency of sbt plugins. This improves the user experience in many ways:
- Download and upload sbt plugins to Artifactory with POM consistency checks
- Find sbt plugins in `mvnrepository.com`
- Find scaladoc of sbt plugins on `javadoc.io`
- Access download statistics of sbt plugins on Sonatype
- Resolve sbt plugins using Maven

You can read [sbt#7096](https://github.com/sbt/sbt/pull/7096) to get more details about the new Maven pattern of sbt plugins. To publish an sbt plugin to Artifactory, you must set `sbtPluginPublishLegacyMavenStyle := false` (see [sbt#7201](https://github.com/sbt/sbt/pull/7201)).

After the release of sbt 1.9.0, we fixed a few regressions:
- [missing range in BSP diagnostic](https://github.com/sbt/sbt/pull/7298)
- [`publish` should not fail if `publish / skip := true`](https://github.com/sbt/sbt/pull/7295)

We also stepped in after an outage of the sbt community repository. We explained what happened in a [blog post](https://www.scala-lang.org/blog/2023/04/20/sbt-plugins-community-repository.html), and shared our [action plan](https://contributors.scala-lang.org/t/roadmap-for-the-sbt-community-repository/6195) to strengthen the infrastructure that supports the sbt ecosystem. The first tasks were to migrate the most used plugins to Maven Central, and set up a fallback mirror of the repository. The next step is to set up a new way to publish the Linux packages of sbt releases that does not rely on the community repository anymore.

Last, we switched the sbt Contributor License Agreement to the Scala CLA instead of the Lightbend CLA, and we took over the ownership of the domain scala-sbt.org.

### Mill

During this quarter a new version of Mill was released meaning that all plugins
needed to be published for this new version. Here are a list of plugins that we
migrated and published for the new Mill 0.11.x series.

- [mill-giter8](https://github.com/ckipp01/mill-giter8/pull/41)
- [mill-scip](https://github.com/ckipp01/mill-scip/pull/69)
- [mill-github-depdency-graph](https://github.com/ckipp01/mill-github-dependency-graph/pull/88)
- [mill-ci-release](https://github.com/ckipp01/mill-ci-release)

### Metals

For Scala 2 and 3.

We reviewed or contributed the following pull requests:

- [Update scripts to use scala-cli instead of Ammonite](https://github.com/scalameta/metals/pull/5077)
- [Add in some necessary null check for stabalizeType](https://github.com/scalameta/metals/pull/5336)
- [Add checks for .config/mill-version](https://github.com/scalameta/metals/pull/5404)
- [Update Metals to use the new version of millw](https://github.com/scalameta/metals/pull/5353)

### Debugger in Metals

For Scala 2 and 3.

We worked on two major improvements of the debugger: the stack trace formatter and the run-time evaluator.

The stack trace formatter is Scala 3 only. In the stack trace view of the debugger, it prints the Scala signatures of methods instead of the erased Java ones. We are considering implementing a more restricted version for Scala 2. The main PR of the stack trace formatter is [scala-debug-adapter#430](https://github.com/scalacenter/scala-debug-adapter/pull/430).

The run-time evaluator allows developers to evaluate simple Scala expressions without using the compiler. Currently, evaluating expressions while debugging programs is achieved by instantiating a compiler. Although this approach works well, it is slow. Moreover, many expressions don’t require the full power of a compiler to be evaluated. The run-time evaluator is a reflection-based solution that aims to be faster at evaluating simple expressions. The evaluator can access private members, or members that are not known at compile-time, without casting. The debugger decides automatically if it should use the runtime evaluation or the expression compiler depending on the expression itself. The main PR of the runtime evaluator is [scala-debug-adapter#405](https://github.com/scalacenter/scala-debug-adapter/pull/405). According to our benchmarks, the reflection-based evaluation is 6 to 9 times faster on average than the compiler-based evaluation. Several use cases have been tested, such as accessing local variables, fields, methods (with and without overloads), modules, inner types, outer members/classes, etc.

## Community and Contributor Experience

### Scastie

For Scala 2 and 3.

We have improved the stability of Scastie and fixed several issues with the Metals integration ([scastie#856](https://github.com/scalacenter/scastie/pull/856), [scastie#885](https://github.com/scalacenter/scastie/pull/885), [scastie#894](https://github.com/scalacenter/scastie/pull/894), [scastie#895](https://github.com/scalacenter/scastie/pull/895), [scastie#896](https://github.com/scalacenter/scastie/pull/896), [scastie#898](https://github.com/scalacenter/scastie/pull/898), [scastie#899](https://github.com/scalacenter/scastie/pull/899)).

### Compiler Academy Evolution

For Scala 2 and 3.

[The Compiler Academy](https://www.scala-lang.org/blog/2022/11/02/compiler-academy.html) is a Scala 3 Compiler sustainability project. The goal of the project is to provide a place for enthusiasts from the community to learn and contribute to the Scala 3 Compiler.

During the Scala Days event, we gave a talk to describe how the community can bootstrap their own similar events to onboard new contributors. The talk also mentions how the Compiler Academy evolved over time, which provides useful insights at some challenges for such a project and what are good ways to overcome them. This historical information can hopefully help people to avoid mistakes we did with the Academy over the course of its evolution.

### Conference Participation

For Scala 2 and 3.

We've co-located the [Scala Spree](https://github.com/scalacenter/sprees#seattle-usa-monday-5th-of-june-2023) event with the [Scala Days](https://scaladays.org/) conference in Seattle. This event was attended by 16 people with the Scala 2 and 3 compilers, the standard library, Metals, the Scala Toolkit, Bloop, and other Scala projects being represented.

Besides the Scala Days Spree, we have conducted a similar [Spree](https://github.com/scalacenter/sprees#san-francisco-usa-friday-9th-of-june-2023) in San Francisco, hosted by [Tubi](https://tubi.tv). Tubi expressed interest to help us organise this event next year as well, so there is a chance we will have a recurring Spree in San Francisco.

The Scala Center was also speaking at the Scala Days about the ongoing projects and at the Scala Meetup in San Francisco. This participation in events was a great opportunity to meet the community and get valuable feedback on what we do.

The active conference participation and co-location of events with conferences is part of our effort to spread awareness about the Scala Center and its mission, attract funding from companies and individuals to fund Scala Center's work, bring the community together and foster useful connections, and to collect the feedback from the community about what we do.

We gave a talk titled "How does Incremental Compilation Work with Scala 3, Can we Improve it?". In this talk, we explained to viewers how does the incremental compiler [Zinc](https://github.com/sbt/zinc/) work, and showcased two prototype improvements to Scala 3 project compilation speed - pipelined builds, by adapting the Scala 2.13 implementation, and parallel 2-phase compilation: adapting prior work from [Guillaume Martres](https://github.com/lampepfl/dotty/pull/4767).

We presented Scala and the Scala Center in a talk “The Story of Scala” ([video](https://www.youtube.com/watch?v=0e0D7cDm0dc)), at the [Open Science Office](https://www.epfl.ch/research/open-science/), at EPFL.

Darja Jovanovic was invited to give a talk at the Women in IC event about her professional path, no video available.

### Scala in Science Workshop

For Scala 3.

We have conducted the second iteration of the [Scala in Science](https://github.com/scalacenter/simple-rockets-compiler) workshop where participants have an opportunity to get started with Scala in a gamified way by programming a spacecraft's flight in a game called [Simple Rockets 2](https://www.simplerockets.com/). The workshop was attended by 10 EPFL members this time. Due to the game being proprietary, we are currently offering this workshop for free only to EPFL members. This workshop is part of a larger effort we are doing to make Scala more accessible to newcomers.

### Sustainability and Responsibility in the Scala Open Source Ecosystem

For Scala 2 and 3.

This project is focused on promoting sustainability and responsibility within the Scala open source ecosystem by developing a comprehensive guide on best practices. An increase in contributions by all stakeholders will ensure greater symbiotic relationships within the Scala open source community and provide a positive impact on the longevity and resilience of the Scala ecosystem.

The project began by researching, and identifying key stakeholders, including organizations and individual contributors actively engaged in the Scala open source community.

An [introductory blog post](https://www.scala-lang.org/blog-detail/2023/03/02/sustainability.html) was published on the Scala-lang blog and LinkedIn that created some motion.

We interviewed 7 companies and started writing the corresponding blog posts that will go out in the upcoming months. This series of blog posts aims to highlight how different Scala industry stakeholders participate in the open source sustainability and to inspire their peers to make the same steps.
