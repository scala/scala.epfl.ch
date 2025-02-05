---
layout: contact
title: Scala Center Activity Report for 2024 Q4
---

Scala Center team:
Darja Jovanovic, 100%;
Adrien Piquerez, 80%;
Sébastien Doeraene, 50%;
Guillaume Martres, 20%;
Valérie Meillaud: 30%.
VirtusLab team: Gabriel Kepka, 100%.

## At a Glance
{: .no_toc}

* Table of Contents
{:toc}


## Language, Compiler, Standard Library

### Maintainance of the Scala 3 Compiler

For Scala 3.

Every month, about 100 new issues are opened on [the Scala 3 repository](https://github.com/scala/scala3).
The project welcomes any help it can get in triaging, bug-fixing, PR reviewing, etc.

Our goal is to solve long-standing issues while keeping up with new ones.
We also aim to get more people involved in working on the compiler to ensure the sustainability of the project.

We contributed PRs for bug fixes in various areas, notably match types.
We also invested more in reviewing PRs from external and internal contributors alike.

### Scala.js maintenance

For Scala 2 and 3.

At the beginning of the quarter, we released [Scala.js 1.17.0](https://www.scala-js.org/news/2024/09/28/announcing-scalajs-1.17.0/).
It features the initial implementation of the [experimental WebAssembly backend](https://www.scala-js.org/doc/project/webassembly.html) that we worked on during the previous quarter.

This quarter, we only performed behind-the-scenes maintenance of Scala.js: internal cleanups that will ease future developments.
We added support for recent Scala 2.x releases, which included a last-minute patch for Scala 2.13.16, shipped as part of [Scala.js 1.18.2](https://www.scala-js.org/news/2025/01/23/announcing-scalajs-1.18.2/).

### Scala Improvement Process

For Scala 3.

The [Scala Improvement Process](https://docs.scala-lang.org/sips/) coordinates the evolution of the language.
It ensures that the decisions are made by taking into account the needs of all the stakeholders of the language.

## Developer Experience

### Scala Toolkit

For Scala 2 and Scala 3.

We released a new version of the Toolkit:

- [0.6.0](https://github.com/scala/toolkit/releases/tag/0.6.0): updated library versions

### Documentation

For Scala 2 and Scala 3.

After the release of Scala 3.5.0, we updated the documentation website to use `scala-cli` as the entry point to the language.

We continued our work to simplify the documentation structure.
In particular, the Scala 3 book now contains at least as much information as the Scala 2 book.
Since the Scala 3 book actually documents Scala 2 as much as Scala 3 (with systematic version tabs), we plan to retire the Scala 2 book.

We also worked on documenting features not yet included in the documentation, such as `boundary`/`break`.

### sbt

For Scala 2 and Scala 3.

We continued our efforts to stabilize sbt 2.x.
In addition, we contributed several optimizations ([#7879](https://github.com/sbt/sbt/pull/7879), [#7880](https://github.com/sbt/sbt/pull/7880), [#7882](https://github.com/sbt/sbt/pull/7882)), which will make it significantly faster to load than sbt 1.x and consume less memory.

### Scala 3 specification

For Scala 3.

We finished the following areas of the Scala 3 specification:

* for comprehensions
* match types

## Community and Contributor Experience

For Scala 2 and Scala 3 throughout.

### Scala Highlights

We are about to release the first edition of Scala Highlights, a new quarterly newsletter showcasing technical achievements, online resources, and community news.

The newsletter is a joint effort by the Scala Center, LAMP, Akka, and VirtusLab, the four core organizations involved in the Scala language development.
It also covers our collaborations with other parties, such as the Scala Center's advisory board.

This inaugural issue is special as it offers a recap of 2024, celebrating the year's most significant advancements and their impact on the Scala ecosystem.
Future issues will cover quarterly highlights.

It might be released by the time you read these lines.
If not, you can [read it in the pull request](https://github.com/scala/scala-lang/pull/1744).

### Google Summer of Code

Google Summer of Code (GSoC) has been a long-standing vehicle for the Scala Center to attract newcomers to the Scala OSS world.

The Scala Center acts as an organization shepherding the projects related to Scala.
As such, we perform administrative tasks and mentor several projects.

We concluded the 2024 edition with 10 successfull projects, which is a record high for our organization.
You can learn more about those projects [on the dedicated GSoC page for the Scala Center](https://summerofcode.withgoogle.com/programs/2024/organizations/scala-center).

For the upcoming year, [we are again applying to be an organization in 2025](https://www.scala-lang.org/blog/2025/01/28/gsoc-projects.html).

#### Scala Advent of Code

As in the past two years, we stewarded the participation to [Advent of Code](https://adventofcode.com/) for Scala developers, together with LAMP and Akka.

One of our core priorities is to communicate excitement about Scala.
We participate in the Advent of Code so that we can share to the wider programming community how great Scala is for solving these programming puzzles.

We had 281 solutions submitted to the website this year, increased from 237 last year and 164 the year before, with many first time contributors.
Many external volunteers wrote solution articles, leading to 24 out of the 25 days to be covered.

See the [announcement blog](https://scala-lang.org/blog/2024/12/02/advent-of-code-announce.html) and [recap blog post](https://scala-lang.org/blog/2025/01/16/advent-of-code-recap.html) for more details.

### Compiler Sprees

We maintained our involvement in the [Scala 3 Compiler Academy Issue Spree](https://www.scala-lang.org/blog/2022/11/02/compiler-academy.html).

Since its inception, the compiler spree has helped close [more then a hundred issues](https://github.com/lampepfl/dotty/issues?q=is%3Aissue+sort%3Aupdated-desc+label%3ASpree+is%3Aclosed) with the help of over 80 contributors.

## Scala Center Administration

### Sovereign Tech Fund

We applied for a large grant from the [Sovereign Tech Fund](https://www.sovereigntechfund.de/) (STF), a governmental German fund that "supports the development, improvement, and maintenance of open digital infrastructure."
The STF has significantly contributed to the maintenance of several other open-source programming languages in the past, such as Ruby, Python and Node.js.
We are hopeful that they will choose to support Scala as well.

So far, we passed the first stage of the evaluation process.
Next steps involve scoping more precisely the work that would be covered by the grant.
