---
layout: contact
---

This page lists the projects that the Scala Center will work on during
the current quarter. We also post regular updates about our projects on the
[Scala Contributors forum](https://contributors.scala-lang.org/c/scala-center/25).

To have more information about our _completed_ projects, please see the
[quarterly activity reports](./records.html).

## Roadmap for 2022 Q4
{: .no_toc}

The following sections present our plan for the current quarter. Every 
project description is followed by the concrete results we will deliver, and 
their expected outcome on the Scala community.

* Table of Contents
{:toc}

### Make Scala tooling seamless for newcomers, and provide robust foundations for the Scala ecosystem

#### Polish sbt and Coursier

Most of the Scala projects are built with sbt, which uses Coursier under the hood.
The Coursier CLI is also the recommended way to get started in Scala. We want to make sure these tools
work well for everyone. In collaboration with the current maintainers Eugene Yokota and Alexandre Archambault, we will
address the most important issues that are currently opened.

#### Smarter “Step Into” when debugging

The “step-into” feature in Metals is hard to use because it often goes to
synthetic methods (getter, setter, bridge, mixin-forwarder), that do
not exist in the source code. We will improve the implementation of the
[scala-debug-adapter](https://github.com/scalacenter/scala-debug-adapter) to
address this issue.

#### Implement JSR-45 in the Scala 3 compiler

We want to improve the debugging experience by implementing JSR-45 in Scala 3. This was requested by an
[Advisory Board Proposal](https://github.com/scalacenter/advisoryboard/blob/main/proposals/022-jsr-45.md).
You can follow our progress in [#15684](https://github.com/lampepfl/dotty/pull/15684).

#### TASTy-query and TASTy-MiMa

[TASTy-query](https://github.com/scalacenter/tasty-query) is a work-in-progress
library to read TASTy files, explore them, and ask semantic questions about
them. It is independent from the compiler, and can be used as a building 
block to implement tools performing static analyses of Scala programs. An
example is TASTY-MiMa, an upcoming tool “like
[MiMa](https://github.com/lightbend/mima), but for TASTy”.

We plan to implement support for semantic queries such as “are two types 
equivalent?”, “is a type a subtype of another one?”, etc., and to publish a 
prototype of TASTy-MiMa.

You can read the full roadmap
[here](https://contributors.scala-lang.org/t/the-scala-centers-roadmap-for-tasty-query/5564).

#### Add IDE features to Scastie

We want to improve the developer experience for 1000 daily programmers writing code snippets
via [Scastie](https://scastie.scala-lang.org).

We would like to bring IDE features to Scastie, such as reporting diagnostics,
“go to definition”, “type on hover”, and “find references” actions. This requires
running Metals on the server-side, and communicating with it from the client-side.

#### Add Support for Binary Compatible Evolutions to Case Classes

Case classes are popular to achieve domain modeling. However, they 
come with an important drawback: it is impossible to apply any evolution 
(adding/removing fields on a case class) in a backward binary compatible way.
This forces library authors to manually re-implement the features of 
case classes that they need (typically, structural equality) at the price of 
more verbosity. Other solutions include tools generating code (e.g. 
contraband), or experimental macro annotations (e.g. data-class, scalameta).

We started a [“pre-SIP” discussion](https://contributors.scala-lang.org/t/pre-sip-structural-data-structures-that-can-evolve-in-a-binary-compatible-way/5684),
which received some support and comments from the community. Based on the collected
feedback, we will submit a concrete Scala Improvement Proposal to support, at
the language-level, data types with structural equality that can evolve in a
binary compatible way.

### Education and Documentation

#### Scala Website

We plan to modernize the Scala website, and to integrate better the Scala 2
and Scala 3 documentation.

Following up on [the work]({% link records/2022-Q3-activity-report.md %})
we did in the previous quarter, we plan to polish further the content of the
website.

The next main tasks are:

- make the content more use-case-oriented rather than features-oriented,
- reorganize the structure to make it more intuitive according to the reader’s background,
- create new tutorials to document better how to contribute to the Scala open-source
  ecosystem.

#### Scala.js

We will finish the work started in early 2022 to [consolidate the Scala.js
ecosystem](https://contributors.scala-lang.org/t/the-scala-centers-roadmap-for-a-unified-scala-js-ecosystem/5568).

With the help of the community, we plan to document the best practices to 
have a productive development environment in Scala.js.

#### Language Specification

Currently, there is no proper language specification for Scala 3. A specification would be useful for
developers, when they want to quickly check something about a feature they are using. It would also
be useful to the [Scala Improvement Process](https://docs.scala-lang.org/sips), to provide a basis
for discussions and proposals.

Some pieces of specification
are available in the [Scala 3 Reference](https://docs.scala-lang.org/scala3/reference), but these
pieces are mostly about the differences compared to Scala 2. We will complete them, and publish a
proper language specification for Scala 3.

### Communication

We will conduct many actions aiming at communicating a positive image of Scala,
and making people excited about it.

- We will publish a five-year report detailing the activities and impact of 
  the Scala Center during the past five years!
- We will regularly share our achievements and engage the community on our 
  projects _via_ our [LinkedIn](https://www.linkedin.com/company/scala-center/)
  page,
- We will create an online shop where individual will be able to give 
  donations to the Scala Center in exchange for goodies,
- We will speak at tech conferences and local meetups to encourage people to contribute to the 
  Scala ecosystem, and to let non-Scala programmers know about Scala,
- Currently, Scala doesn't have much presence in fields other than backend
  development and data engineering. Given our positioning at EPFL, there are
  opportunities for collaborations with scientists and industries to expand in
  other domains. We plan to organize a workshop to introduce Scala to a team
  of scientists in the field of space. We expect to learn more about the
  possible barriers to the adoption of Scala to conduct scientific experiments,
- We will publish two new videos in the series [Let’s talk about Scala
  3](https://www.youtube.com/playlist?list=PLTx-VKTe8yLxYQfX_eGHCxaTuWvvG28Ml)
  to highlight the strengths of Scala 3.

### Community, Sustainability, and Governance

#### Scala 3 Compiler Academy

We believe that the pool of knowledgeable people about the Scala 3 compiler 
implementation is too small. We will create a self-sustaining knowledge hub 
for the compiler where others can come and be effectively mentored to be 
compiler contributors.

We are continuously adding content to the
[Scala 3 Compiler Academy](https://www.youtube.com/channel/UCIH0OgqE54-KEvYDg4LRhKQ)
YouTube channel, and we run regular events to onboard external contributors on
the compiler codebase. In case you are interested in contributing to the Scala 3
compiler, please register by [filling this form](https://forms.gle/DfoSuHFm3T6MA3L59).

#### Scala Improvement Process

The [Scala Improvement Process](https://docs.scala-lang.org/sips/index.html) 
is a process for submitting changes to the Scala language. It aims to evolve 
Scala openly and collaboratively. We have restarted the process in 2022, and
we now have regular committee meetings.

#### Promote Simple Scala Solutions

We feel that, currently, the Scala ecosystem has a focus on advanced
expert-level tools and libraries, favouring power and flexibility over
familiarity and ease of onboarding. We believe that newcomers don’t need to
learn advanced concepts such as pure functional programming or reactive
programming to be productive in Scala.

In partnership with VirtusLab, we will contribute to the creation of tutorials
demonstrating how to solve typical programming tasks in a more approachable
programming style.

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
