---
layout: contact
title: Scala Center Activity Report for 2023 Q3
---

Scala Center team:
Darja Jovanovic, 100%;
Anatolii Kmetiuk, 100%;
Adrien Piquerez, 80%;
Jamie Thompson, 100%;
Sébastien Doeraene, 100%;
Guillaume Martres, 100% until August 31, 20% since;
VirtusLab team: Jędrzej Rochala, 100%
Julien Richard-Foy, 80% until August 31;
Lucas Nouguier: 100% until August 31;
Ayman Lamyaghri, intern July 3 - August 25.
Sylvie Buchard: 30% until August 31;
Valérie Meillaud: 30% since September 1;
Shiv Verkaran: 80% September 1 - October 12;


## At a Glance
{: .no_toc}

* Table of Contents
{:toc}


## Language, Compiler, Standard Library

### Maintaining and Evolving the Scala 3 Compiler

For Scala 3.

Every month, about 100 new issues are opened on [the Scala 3 repository](https://github.com/lampepfl/dotty/).
The project welcomes any help it can get in triaging, bug-fixing, PR reviewing, etc.

Our goal is to solve long-standing issues while keeping up with new ones.
We also aim to get more people involved in working on the compiler to ensure the sustainability of the project.

We contributed PRs in various areas, but want to highlight our work on compiler performance.

While before the compiler could depend upon the latest Zinc 1.9 API, it only called the methods that were available in Zinc 1.3 and earlier.
Using this old API added a performance hit which we removed.
This also allowed us to fully support Zinc VirtualFiles in Scala 3.
See [lampepfl/dotty#18137](https://github.com/lampepfl/dotty/pull/18137) for details.

We improved both speed and allocation rate of the dependency extraction phase (used in incremental compilation).
We removed a performance bottleneck in code performing file IO, and massively reduced allocation rate by using more efficient caching.
When compiling the compiler itself, compared to Scala 3.3.0, we were able to reduce allocations in the phase by 80% (translating to a 6% reduction across the whole compiler pipeline) and improve the speed of the phase.
These improvements were delivered in [lampepfl/dotty#18266](https://github.com/lampepfl/dotty/pull/18266) and [lampepfl/dotty#18403](https://github.com/lampepfl/dotty/pull/18403).

Other important compiler contributions include:

* Soundness of the type system and of TASTy:
  * [Fix #17467: Limit isNullable widening to stable TermRefs; remove under explicit nulls.](https://github.com/lampepfl/dotty/pull/17470)
  * [Fix #18649: Use loBound of param types when materializing a context function.](https://github.com/lampepfl/dotty/pull/18651)
* Match types:
  * [Fix #17115: Try to normalize while computing typeSize.](https://github.com/lampepfl/dotty/pull/18386)
* Optimizations of the generated code:
  * [Get rid of the LiftTry phase; instead handle things in the back-end.](https://github.com/lampepfl/dotty/pull/18619) (could be backported to Scala 2)
* Tooling integration:
  * [Improve SemanticDB generation by tracking symbol occurrences for class primary constructors](https://github.com/lampepfl/dotty/pull/18325)

### Scala Improvement Process

For Scala 3.

The [Scala Improvement Process](https://docs.scala-lang.org/sips/) coordinates the evolution of the language.
It ensures that the decisions are made by taking into account the needs of all the stakeholders of the language.

We organized two SIP meetings, on July 21 and September 11, 2023.

### Better Foundations for Match Types

For Scala 3.

Currently, the behavior of match types is neither well specified nor implemented in a resilient way.
They cannot be explained without relying on the compiler's `TypeComparer` blackbox.
The actual behavior is inherently implementation-specific.
This is at odds with the requirement for TASTy to have a stable elaboration, and undermines the compatibility guarantees provided by TASTy.

The lack of a good specification also has immediate practical concerns.
Questions about the expected or appropriate behavior of match types are a recurring theme, and it is sometimes hard to answer them.
Developers have a hard time knowing what they can or cannot rely on in terms of match types.

In order to solve these problems, we analyzed the actual use cases of match types in the entire open source library ecosystem.
We then designed a new specification for match types reduction, which [we submitted as a SIP](https://github.com/scala/improvement-proposals/pull/65).
We also implemented that new specification to validate it.

The last remaining step is for the SIP committee to review and accept it, after which we will be able to merge the new implementation.

### Scala 3 Language Specification

For Scala 3.

We continued our work on writing a full specification for Scala 3, notably in the area of `enum`s and `opaque type` aliases.

We published our work-in-progress [Scala 3 specification](https://scala-lang.org/files/archive/spec/3.4/), and [wrote a blog post](https://www.scala-lang.org/blog/2023/09/25/work-in-progress-scala-3-specification.html) about it.
We already received some feedback on it, which we partially addressed.

Further work is still needed to complete the set of Scala 3 features.
However, this work-in-progress specification can already be used as a good foundation to evaluate new SIP proposals, and to answer some core questions.

### Scala.js maintenance

For Scala 2 and 3.

We released [Scala.js 1.14.0](https://www.scala-js.org/news/2023/09/25/announcing-scalajs-1.14.0/) during this quarter.

Other than bugfixes, the main highlights of this release come from external contributors:

* Further improvements to the performance of the linker.
* Better ergonomics for `js.UndefOr` as seen from Scala 3 (bringing it on par with Scala 2).
* New ECMAScript core types.

We continue to receive very positive feedback about the linker performance improvements from 1.13.1 and now this release.

## Documentation and Education

### Scala 3 Migration

For migration from Scala 2 to 3.

We released [version 0.6.2](https://github.com/scalacenter/scala3-migrate/releases/tag/v0.6.2) of sbt-scala3-migrate, the Scala 3 migration assistant plugin for sbt, on the latest Scala 3 LTS version, with up-to-date scalac options conversion.
We revamped the output messages of the plugin to improve their clarity and readability, and updated the [Scala 3 migration tutorial](https://docs.scala-lang.org/scala3/guides/migration/scala3-migrate.html) accordingly.

We created the [scala3-migration-course](https://github.com/scalacenter/scala3-migration-course), a step-by-step course about the migration to Scala 3.
Based on the [Course Management Tools](https://github.com/eloots/course-management-tools), it guides the learner through the migration of a tailored Scala 2.13 project.
It demonstrates a number of migration issues and teaches how to solve them.
The course is self-contained and freely available online.
We used it the first time at Scala Days, during the "Moving from Scala 2 to Scala 3" workshop, to train about 10 professional programmers.

### Scala Documentation Website

For Scala 2 and Scala 3.

We continued our work on migrating the website to support Scala 2 and Scala 3 syntaxes.
The purpose of this project is to provide documentation across the website that reflects the reality of mixed Scala 2.13 and Scala 3 usage.
In each page, we either mark the whole page as specific to one version version; or when describing a broader topic, for each code example, we provide tabs that show equivalent examples in either Scala 2.13 or 3.

This quarter we added further clarifications, tabs and more to guides across the scala documentation.
Relevant PRs include: [scala/docs.scala-lang#2863](https://github.com/scala/docs.scala-lang/pull/2863), [scala/docs.scala-lang#2864](https://github.com/scala/docs.scala-lang/pull/2864), [scala/docs.scala-lang#2865](https://github.com/scala/docs.scala-lang/pull/2865), [scala/docs.scala-lang#2866](https://github.com/scala/docs.scala-lang/pull/2866), [scala/docs.scala-lang#2867](https://github.com/scala/docs.scala-lang/pull/2867), [scala/docs.scala-lang#2872](https://github.com/scala/docs.scala-lang/pull/2872), and [scala/docs.scala-lang#2873](https://github.com/scala/docs.scala-lang/pull/2873).

## Developer Experience

### Stable API for the Scala 3 Presentation Compiler

For Scala 3.

Last quarter, we had published and integrated a stable interface and implementation for the presentation compiler -- a module responsible for providing interactive features to IDEs.
Since then, we have been improving its stability, reliability and adding missing cases.

### sbt

For Scala 2 and Scala 3.

We fixed the Apache Ivy External Entity Reference vulnerability ([CVE-2022-46751](https://github.com/advisories/GHSA-2jc4-r94c-rp7h)) in [sbt/ivy#46](https://github.com/sbt/ivy/pull/46) and [coursier/coursier#2823](https://github.com/coursier/coursier/pull/2823).

We announced the ownership transfer of sbt from Lightbend to the Scala Center in a [scala-lang.org blog post](https://scala-lang.org/news/2023/08/25/sbt-license-transfer.html).

Following the ["sbt 2 ideas" blog post](https://eed3si9n.com/sbt-2.0-ideas) and [discussion](https://github.com/sbt/sbt/discussions/7174) initiated by Eugene Yokota, we collected all the ideas and started shaping a roadmap for sbt 2.
The roadmap was presented and discussed at the Scala Days co-located Tooling Summit.
We also started the review of sbt in Scala 3 ([sbt/sbt#](https://github.com/sbt/sbt/pull/6746)) opened by Eugene Yokota earlier this year.

### Migration of the last packages published to the JFrog artifactory

For Scala 2 and Scala 3.

Since the JFrog artifactory incident on April 7, 2023, we have implemented several measures to mitigate such accidents in future.
Most of the work is now finished, and we migrated all crucial packages away from the JFrog repository.
The last remaining packages are sbt native binaries.
We implemented a new repository which will serve the remaining packages to complete this project, although that is not released.

### Debugger in Metals

For Scala 2 and 3.

We continued working on the stack trace view of the debugger, to print the Scala signatures of methods instead of the erased Java ones.
To do so, we are building a binary to TASTy decoder of all the classes and methods produced by the compiler.
The work-in-progress PR is [scalacenter/scala-debug-adapter#599](https://github.com/scalacenter/scala-debug-adapter/pull/599).
We tested this decoder on the class files of the Scala 3 compiler itself and we managed to decode all the classes and about 85% of the methods.
We are confident about reaching 99% coverage in the next few weeks.
We will then release the better stack traces in the debugger, and the binary to TASTy decoder as a separate library.

## Community and Contributor Experience

For Scala 2 and Scala 3 throughout.

### Scastie

The highlight of this quarter for Scastie is that it now supports autocompletion.
We improved the logic so that it works more reliably.

Another major update is the new syntax highlighting based on tree-sitter, which is currently under review.
It is a major improvement from the previous `lezer`-based parser.

We also improved the stability of Scastie and fixed several issues with the Metals integration ([scastie#856](https://github.com/scalacenter/scastie/pull/856), [scastie#885](https://github.com/scalacenter/scastie/pull/885), [scastie#894](https://github.com/scalacenter/scastie/pull/894), [scastie#895](https://github.com/scalacenter/scastie/pull/895), [scastie#896](https://github.com/scalacenter/scastie/pull/896), [scastie#898](https://github.com/scalacenter/scastie/pull/898), [scastie#899](https://github.com/scalacenter/scastie/pull/899)).

### Improving the Getting Started Experience for OSS Contibutors

We want to make contributing to Scala a more friendly and welcoming experience.
Building on our work in 2022 to improve the getting started steps for contributors [described on docs.scala-lang.org](https://docs.scala-lang.org/contribute/), we added more visible links, including to join the Scala Sprees, co-hosted with events such as Scala Days.
Relevant PRs: [scala/docs.scala-lang#2894](https://github.com/scala/docs.scala-lang/pull/2894) and [scala/docs.scala-lang#2896](https://github.com/scala/docs.scala-lang/pull/2896)

### Scala Days and Co-Located Events

In collaboration with Xebia Functional, we organized the Scala Days conference in Madrid and a number of co-located events around it:

* [Scala Bridge](https://scaladays.org/madrid-2023/scala-bridge), lead by Zainab Ali and Noel Welsh - a Scala workshop for beginners to attract more newcomers without programming background to the Scala community.
* [Scala Spree](https://github.com/scalacenter/sprees), lead by Jamie Thompson - a hackathon for the Scala developers to hack on OSS projects together with the maintainers of those projects.
* Tooling Summit, lead by Chris Kipp - a meeting of the Scala tooling stakeholders to get to the same page on the future of the Scala tooling ecosystem.
* In-person [SIP](https://docs.scala-lang.org/sips/process-specification.html) meeting, lead by Anatolii Kmetiuk, where the SIP committee members got a chance to speak to each other in person and otherwise do an ordinary SIP meeting.

In addition, we held a booth, focused on our fundraising campain (see below), and gave a few talks during the main conference:

* "Choose your own Scala Center Roadmap": an interactive talk by the whole team where attendees selected what topics of our roadmap they wanted to hear about.
* "10 years of Scala.js", by Sébastien Doeraene
* "Polymorphic function types in Scala 3", by Guillaume Martres

### Scala Center Fundraising Initiative

For the first time since its inception in 2016, the Scala Center is organizing a [fundraising campaign](https://www.scala-lang.org/blog/2023/09/11/scala-center-fundraising.html).
The campaign involves attracting new [corporate sponsors](https://scala.epfl.ch/corporate-membership.html) as well as individual donors to ensure we keep [serving Scala and its ecosystem](https://scala.epfl.ch/records/first-five-years/).
Our participation to Scala Days with our booth and roadmap talk was a significant part of spreading the word and speaking to people from the community and industry who might be interested in joining the Advisory Board.

### Governance

We made a second iteration of the Governance page for the scala-lang.org website, and added navigation links to it in the page footer.
The changes include addition of further links, clarifications of the roles of various organisations, and more precise descriptions of various elements.
These changes were delivered in PRs [scala/scala-lang#1547](https://github.com/scala/scala-lang/pull/1547), [scala/scala-lang#1548](https://github.com/scala/scala-lang/pull/1548), [scala/docs.scala-lang#2902](https://github.com/scala/docs.scala-lang/pull/2902), and [scala/scala-lang#1553](https://github.com/scala/scala-lang/pull/1553).

### Sustainability and Responsibility in the Scala Open Source Ecosystem

During the last quarter, we had published [introductory blog post](https://www.scala-lang.org/blog-detail/2023/03/02/sustainability.html) about a series of interviews related the sustainability in the Scala Open Source ecosystem.

We now published the first [interview in the series, with Goldman Sachs](https://www.scala-lang.org/blog/2023/08/23/goldman-sachs-leader-open-source-contributions.html).
We finalized several more interviews, whose releases will roll out in the coming weeks and months.
