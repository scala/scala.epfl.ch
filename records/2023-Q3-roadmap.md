---
layout: contact
title: Scala Center Roadmap for 2023 Q3
---

This page lists the projects that the Scala Center are working on during
the current quarter. We also post regular updates about our projects on the
[Scala Contributors forum](https://contributors.scala-lang.org/c/scala-center/25).

To have more information about our _completed_ projects, please see the
[quarterly activity reports]({% link records.md %}).

## Roadmap for 2023 Q3
{: .no_toc}

The following sections present our plan for the current quarter. Every
project description is followed by the concrete results we will deliver and
their expected outcome on the Scala community.

* Table of Contents
{:toc}

### Language, Compiler, Standard Library

Our mission is to reduce the number of bugs in the compiler implementation,
to help the community to contribute to these tools, and to make sure they
evolve in a way that takes into account the needs of the community.

#### Improve the Support of Polymorphic Functions

Scala has been supporting polymorphic methods for a long time. Scala 3 introduced support for [polymorphic functions](https://docs.scala-lang.org/scala3/reference/new-types/polymorphic-function-types.html), but they are still inconvenient to use today due to their verbosity.

In the previous quarter, we contributed several improvements to the ergonomics of polymorphic functions ([dotty#17548](https://github.com/lampepfl/dotty/pull/17548), [dotty#18041](https://github.com/lampepfl/dotty/pull/18041)). Earlier this year, we proposed [SIP-49: Polymorphic Eta-Expansion](https://github.com/scala/improvement-proposals/pull/49) to automatically convert partially applied polymorphic methods into polymorphic functions. Since then, we have developed the more general approach of [type parameter clause inference](https://github.com/lampepfl/dotty/pull/18169) which we intend to submit to the SIP committee this quarter.

#### Stronger Foundations for Match Types

Currently, the behavior of match types is neither well specified nor implemented in a resilient way. Known issues include:

* incoherent behavior in the presence of contravariant type constructors
* non-determinism in the presence of union and intersection types
* unpredictable interactions with type inference and type variables

Above all, the underlying issue is that they do not have a specifiable way to reduce without relying on the compiler's `TypeComparer` blackbox. The actual behavior is inherently implementation-specific. This would not be a problem if it all happened before elaboration. Unfortunately, the implementation-specific behavior leaks across TASTy and hence across separate compilation. This is at odds with the requirement for TASTy to have a stable elaboration, and undermines the compatibility guarantees provided by TASTy.

The lack of a good specification also has immediate practical concerns. Questions about the expected or appropriate behavior of match types are a recurring theme, and it is sometimes hard to answer them. Developers have a hard time knowing what they can or cannot rely on in terms of match types.

We have already analyzed the entire open source Scala 3 ecosystem to find how match types. We have identified a small number of reliable ways that they are used. Based on that, we have an informal proposal for a spec, as well as implementation changes to the compiler that would uphold that spec while preserving--to the extent possible--compatibility with already compiled match types.

#### Evolve the Standard Library

The standard library has not changed (except for bug fixes or some performance
improvements) since Scala 2.13, which was released almost four years ago.
The compatibility policy of the standard library forbids the addition of new
features (new classes or methods). Furthermore, some bug fixes or performance
improvements can not be applied because those compatibility guarantees.

[Dropping
the forwards binary compatibility requirement](https://github.com/scala/improvement-proposals/pull/54)
would be a first step to allow the introduction of new classes or the addition of
new members to the existing classes. Then, we will create a process to validate
what should be in the standard library and what should stay outside of it.

#### Scala Improvement Process

The [Scala Improvement Process](https://docs.scala-lang.org/sips/index.html)
is a process for submitting changes to the Scala language. It aims to evolve
Scala openly and collaboratively. We have restarted the process in 2022, and
we now have regular committee meetings.

#### Generalized _Vararg_ Expansion

Currently, vararg methods can be passed either several arguments, or a single
collection of values. We believe it would be useful to also be able to pass
a mix of collections and individual argument values:

~~~ scala
List(1, 2, 3)         // several individual arguments
List((1 to 3)*)       // a single collection
List((1 to 3)*, 4, 5) // a collection and several individual arguments
~~~

We currently have a basic implementation of the feature, we now need to open
a PR and a SIP.

### Documentation and Education

Our mission is to simplify the structure and content of the website, to create
and maintain high-quality online educational content (including online courses),
and to help the community to contribute to the website.

#### Scala Website

We plan to modernize the Scala website, and to integrate better the Scala 2
and Scala 3 documentation.

Following up on [the work]({% link records/2023-Q2-activity-report.md %})
we did in the previous quarter, we plan to polish further the content of the
website.

The next main tasks are:

- Include testimonials from adopters of Scala,
- Polish and complete the integration of both Scala 2 and Scala 3 content
  (track our progress in [docs.scala-lang#2481](https://github.com/scala/docs.scala-lang/issues/2481)).

#### Language Specification

Currently, there is no proper language specification for Scala 3. A specification would be useful for
developers, when they want to quickly check something about a feature they are using. It would also
be useful to the [Scala Improvement Process](https://docs.scala-lang.org/sips), to provide a basis
for discussions and proposals.

Some pieces of specification
are available in the [Scala 3 Reference](https://docs.scala-lang.org/scala3/reference), but these
pieces are mostly about the differences compared to Scala 2. We will complete them, and publish a
proper language specification for Scala 3.

### Developer Experience

Our mission is to make sure the tools Scala developers use to edit, analyze, navigate
through, transform, compile, run, and debug Scala programs are as easy to use as
possible, that they work reliably for everyone, and deliver a great developer experience.

#### Reduce Compilation Times

We implemented two prototype improvements to Scala 3 project compilation speed - pipelined builds, by adapting the Scala 2.13 implementation, and parallel 2-phase compilation: adapting prior work from [Guillaume Martres](https://github.com/lampepfl/dotty/pull/4767). By adopting sbt pipelining, projects such as [lichess-org/lila](https://github.com/lichess-org/lila) could achieve 31% improvement in time to complete the build. And with two-pass compilation, the Scala 3 compiler could compile 34% faster as well. We hope to continue to develop and ship these improvements over the coming months.

#### Reduce the Number of Ways to Import Scala Projects in IDEs

Currently, when starting new projects in Metals the build server that is used by default is Bloop. Part of this is for historical reasons, but part of it is also due to the speed of Bloop and the integrations that exist for it. Bloop has been incredibly important in the Build Server arena. However, there is also BSP implementation in sbt and in Mill and even when a `.bsp/<build-tool>.json` entry exists, Metals will still force Bloop on the user unless they manually switch. This can cause confusion and also may add extra steps into choosing a build server that shouldn't be needed.

This problem also exists in a different way in IntelliJ when you open for example an sbt project that has an existing `.bsp/sbt.json` file you'll be prompted to import the project either as a BSP project or an sbt project. Arguably, newcomers have no idea what BSP is, and they shouldn't have to.

We'd like to minimize the number of ways to import projects and revisit the default choices
that Metals makes of using Bloop no matter the build tool. The aim is to make
the experience a newcomer has smoother, abstracting away things like Bloop and
BSP, while still allowing for a powerful user experience for advanced users. Read the full roadmap and progress
reports [here](https://contributors.scala-lang.org/t/revisiting-the-default-build-server-for-metals-roadmap/6054).

#### Bring the Compiler’s Suggestions into the IDEs

Currently, IDEs such as IntelliJ and Metals provide “Quick fix” actions able to
fix some types of errors in Scala programs. The way these actions are currently
implemented relies on parsing and analyzing the text output of the compiler.
This is not efficient because any new “Quick fix” requires additional work in both
IntelliJ and Metals.

In the past months, we started applying the necessary changes to the tool chain to provide structured information that can directly be consumed by IDEs to provide such “Quick fixes”.

In Q3, we will continue this effort. You can follow our progress [here](https://github.com/lampepfl/dotty/issues/14904).

#### Scala Debugger

The [scala-debug-adapter](https://github.com/scalacenter/scala-debug-adapter)
is an implementation of the Debug Adapter Protocol for Scala. It allows users
of VSCode to debug their Scala programs, using features such as breakpoints,
conditional breakpoints, debug console, log-points and more.

We will improve the expression evaluator and the rendering of the call-stack. You can follow our progress [here](https://github.com/scalacenter/scala-debug-adapter/milestone/4)

#### Adoption of the Stable API for the Scala 3 Presentation Compiler

Currently, Metals works only for a limited subset of Scala 3 versions. Furthermore, we need to publish
a new release of Metals after every new release of the compiler to support it.

During the previous quarter, we implemented a new, stable, API for the presentation compiler that will allow Metals to work with new releases of Scala without having to change anything in Metals itself.

The next milestone is to start using this API in Metals, which we will work on during this quarter.

#### Strengthen the Infrastructure that Supports the sbt Community Repository

Every day, thousands of developers (and CI platforms) download artifacts from `https://repo.scala-sbt.org`. In April, we [reported](https://www.scala-lang.org/blog/2023/04/20/sbt-plugins-community-repository.html) on an outage that impacted many developers. Shortly after, Eugene Yokota submitted a [proposal](https://github.com/scalacenter/advisoryboard/blob/main/proposals/029-sbt-community-repository.md) to formalize the management of the artifacts hosted in the repository.

We published a [plan](https://contributors.scala-lang.org/t/roadmap-for-the-sbt-community-repository/6195) to reduce the dependency of the Scala ecosystem on the sbt community repository (by migrating the sbt plugins to Maven Central) and to set up a fallback solution in case of outage.

The next step consists of publishing the Linux packages of sbt releases in a different place than the community repository.

### Community and Contributor Experience

Our mission is to create the best environment for the emergence of a strong Scala
ecosystem made of high-quality, reliable, libraries that bring simple solutions to
complex problems.

#### Scastie

[Scastie](https://scastie.scala-lang.org) is an online Scala playground that allows
everyone to write, run, and share Scala programs from their web browser.

Currently, the dependencies and compiler options of a Scastie program are modeled
as an sbt build definition. This approach has some drawbacks: the configuration of
the program is separate from its code, and in order to run a Scastie program locally,
users have to download a zip file containing an sbt project definition and then
use `sbt`, and, last, the loading time of sbt creates a significant overhead.

As an alternative, we would like to allow the users to configure their programs
via [configuration directives embedded in comments](https://scala-cli.virtuslab.org/docs/guides/introduction/using-directives).

You can track the progress of this project [here](https://github.com/scalacenter/student-projects/issues/10).

Another current limitation of Scastie is that programs have to be contained in
a single file. This can be an issue when using macros, which require separate
compilation, or when working on a large program.

We would like to add support for multiple files to fix those issues. This has
impacts on many levels, including the UI design. You can track the progress of
this project [here](https://github.com/scalacenter/student-projects/issues/12).

#### sbt

In June 2023, the Scala Center took over the stewardship of sbt. According to many developer surveys, sbt is the most used build tool for Scala projects. Until 2020, the project was managed by Lightbend. Since then, sbt was led by Eugene Yokota on his free time. Given the importance of the project in the ecosystem, we decided to take over its stewardship.

Our goal is to ensure the stability of the project. We want to make sure the thousands of projects that use sbt will continue to work in the future. At the same time, we want to bring as many improvements as possible (see the ideas suggested by Eugene Yokota [here](https://eed3si9n.com/sbt-2.0-ideas)).

Last, we will investigate ways to secure the resources needed to work on the maintenance and evolution of sbt.

#### Scala Contributors Academy

We have been organizing for almost two years now recurring Sprees to onboard
new contributors to the Scala 3 compiler. In a [blog post](https://www.scala-lang.org/blog/2022/11/02/compiler-academy.html)
in Fall, we explained how we were creating small teams of 2-3 contributors hacking
together, remotely, on the Scala 3 compiler. We also shared the YouTube channel of
the [Scala 3 Compiler Academy](https://www.youtube.com/channel/UCIH0OgqE54-KEvYDg4LRhKQ),
where we regularly post educational videos about how the compiler works.

We would like to expand the scope of the academy to projects outside the compiler,
and outside the Scala Center. We will train local Scala user groups to conduct their
own iterations of the Sprees in their city, offline.

#### Communication

We will conduct many actions aiming at communicating a positive image of Scala,
and making people excited about it.

- We will regularly share our achievements and engage the community on our
  projects _via_ our [LinkedIn](https://www.linkedin.com/company/scala-center/)
  page,
- We will create an online shop where individual will be able to give
  donations to the Scala Center in exchange for goodies,
- We will speak at tech conferences and local meetups to encourage people to contribute to the
  Scala ecosystem, and to let non-Scala programmers know about Scala,
- We will publish two new videos in the series [Let’s talk about Scala
  3](https://www.youtube.com/playlist?list=PLTx-VKTe8yLxYQfX_eGHCxaTuWvvG28Ml)
  to highlight the strengths of Scala 3.

### Maintenance Work

We will also spend a small part of our time reviewing pull requests,
triaging issues, and sometimes implementing pull requests for the following
projects, to make sure important points are addressed:

- Scala 3 compiler
- Scala 2 TASTy reader
- Scaladex
- Scastie
- Coursier
- sbt

## Advisory Board Proposals
{: .no_toc}

For reference, you can see
[here](https://github.com/scalacenter/advisoryboard/tree/master/proposals)
the list of Advisory Board proposals and their respective status.
