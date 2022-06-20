---
layout: contact
---

This page lists the projects that the Scala Center will work on during
the current quarter. You can find more information about our completed
projects in the [quarterly activity reports](./records.html).

## Roadmap for 2022 Q2
{: .no_toc}

The following sections present our plan for the current quarter. Every 
project description is followed by the concrete results we will deliver, and 
their expected outcome on the Scala community.

* Table of Contents
{:toc}

### Make Scala tooling seamless for newcomers, and provide robust foundations for the Scala ecosystem

#### Smarter “Step Into” when debugging

The “step-into” feature in Metals is hard to use because it often goes to
synthetic methods (getter, setter, bridge, mixin-forwarder), that do
not exist in the source code. We will improve the implementation of the
[scala-debug-adapter](https://github.com/scalacenter/scala-debug-adapter) to
address this issue.

#### Implement JSR-45 in Scala 2 and Scala 3 compilers

We want to improve the debugging experience by implementing JSR-45 in both
Scala 2 and Scala 3. This was requested by an
[Advisory Board Proposal](https://github.com/scalacenter/advisoryboard/blob/main/proposals/022-jsr-45.md). Some work
has already been done, but it needs a final push.

#### GitHub Security Alerts

We want to harden the security of the Scala ecosystem by implementing
Security Alerts for Scala projects using the GitHub API. We will publish a
GitHub action that can be used by library maintainers to get notified about
vulnerabilities in their sbt projects.

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

#### Scaladex

[Scaladex](https://index.scala-lang.org) is an index of the Scala ecosystem.

Beside being an index of Scala libraries, we believe scaladex can be a 
place where Scala programmers can find open-source libraries to contribute 
to. We will implement new features on scaladex to allow library authors to 
highlight how new contributors could help them, and for new contributors to 
easily find projects to contribute to.

Last, we would like to formalize the scaladex HTTP API. Scaladex exposes a 
public HTTP API that can be used by third-party tools to search for 
libraries. However, this API is not documented, and it may change. We will 
formalize it, and document it.

#### Metals and Bloop

[Bloop](https://github.com/scalacenter/bloop) has recently been updated to use
the latest version of Zinc. However, in the process we had to remove
“pipelining”, which parallelizes better the compilation process. We will add 
back pipelining to Bloop.

Other than that, we will continue working on the remaining issues towards a 
release of [Metals 1.0.0](https://github.com/scalameta/metals/milestone/36).

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

#### Alternative online learning platform with more support for the learners

As part of our mission to produce high-quality education material, we maintain
a set of [online courses](https://docs.scala-lang.org/online-courses.html) that 
are published on the platform Coursera. These courses can be used by 
individuals to acquire new skills for a job, or by companies to train their 
employees.

We just launched our course Effective Programming in Scala to the
[Extension School platform](https://www.extensionschool.ch/learn/effective-programming-in-scala). This platform allows us to provide
individualized support to the learners, and to offer Scala trainings to companies.

#### Scala Teachers Community

We believe that Scala is a great language for teaching programming in academia.
Several professors already use it, but we would like to grow this community 
of teachers.

We will add a page to the Scala website to present the community of teachers
who use Scala: what are the benefits of using Scala, in which universities
it is taught, etc.

#### Scala Website

We plan to modernize the Scala website, and to integrate better the Scala 2
and Scala 3 documentation.

Following up on [the work]({% link records/2022-Q2-activity-report.md %})
we did in the previous quarter, we plan to polish further the content of the
website.

The next main tasks are:

- make the content more use-case-oriented rather than features-oriented,
- make the code examples available in both Scala 2 and Scala 3,
- reorganize the structure to make it more intuitive according to the reader’s background,
- create new tutorials to document better how to contribute to the Scala open-source
  ecosystem.

#### Scala.js

We will finish the work started in early 2022 to [consolidate the Scala.js
ecosystem](https://contributors.scala-lang.org/t/the-scala-centers-roadmap-for-a-unified-scala-js-ecosystem/5568).

With the help of the community, we plan to document the best practices to 
have a productive development environment in Scala.js.

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
the compiler codebase.

#### Google Summer of Code

The Scala Center has been accepted as a mentor organization for [Google 
Summer of Code 2022](https://summerofcode.withgoogle.com/). We will 
coordinate discussions between mentees and mentors.

#### Scala Improvement Process

The [Scala Improvement Process](https://docs.scala-lang.org/sips/index.html) 
is a process for submitting changes to the Scala language. It aims to evolve 
Scala openly and collaboratively. However, that process was paused in the 
past couple of years. We overhauled the process itself, and we will now enter
the active phase: we will restart the work on reviewing proposals, and we
will restart the regular committee meetings.

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
- Coursier

## Advisory Board Proposals
{: .no_toc}

For reference, you can see
[here](https://github.com/scalacenter/advisoryboard/tree/master/proposals)
the list of Advisory Board proposals and their respective status.
