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

#### “setup-scala” GitHub action

The way to set up GitHub Actions for the CI of Scala projects is unclear at
the moment. There used to be [olafurpg/setup-scala](https://github.com/olafurpg/setup-scala)
but that project is not maintained anymore. There are other alternatives
such as [japgolly/setup-everything-scala](https://github.com/japgolly/setup-everything-scala)
or [coursier/setup-action](https://github.com/coursier/setup-action).
Furthermore, it turns out that the official
[actions/setup-java](https://github.com/actions/setup-java) does support sbt
project. What should Scala project maintainers use? What is currently
recommended in
[the library author guide](https://docs.scala-lang.org/overviews/contributors/index.html#setup-continuous-integration)
is to use setup-java. However, this action does not support coursier caching 
and sbt caching out of the box. It does not support Scala.js either. We
will make sure there is a simple way to set up GitHub actions for typical
Scala projects, and that this action is the recommended choice in the
documentation and in the GitHub UI.

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

Currently, every Scala “project” has a dedicated page on Scaladex. This page
lists the project releases and their artifacts. However, the user interface is 
hard to use because it mixes several types of information at the same place 
(project-related information, and artifact-related information). We plan to
address this problem by introducing a separate page for the artifacts.

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

We would like to start a discussion to assess whether this use case 
(defining data types with structural equality, and convenient `toString` 
implementation, but that can evolve in a binary compatible way) should be 
supported at the language level, and what could be the possible design 
solutions.

### Education and Documentation

#### Alternative online learning platform with more support for the learners

As part of our mission to produce high-quality education material, we maintain
a set of [online courses](https://docs.scala-lang.org/online-courses.html) that 
are published on the platform Coursera. These courses can be used by 
individuals to acquire new skills for a job, or by companies to train their 
employees.

Our courses provide a cost-effective training (you can get a certificate 
of completion for about $100). However, in the current format they require a 
lot of autonomy from the learners. The whole experience is self-paced, and 
instructors can’t provide much feedback to the learners. We want to provide 
an alternative way of learning, where learners could get 1-on-1 meetings 
with Scala instructors to get more personalized feedback.

#### Scala teachers summit

We believe that Scala is a great language for teaching programming in academia.
Several professors already use it, but we would like to grow this community 
of teachers. We will organize a summit where several teachers will meet and 
brainstorm about solutions to increase the number of Scala adopters for 
teaching.

#### Scala Website

We plan to modernize the Scala website, and to integrate better the Scala 2
and Scala 3 documentation.

Following up on [the work]({% link records/2022-Q1-activity-report.md %})
we did in the previous quarter, we plan to polish further the content of the
website to make it more use-case-oriented rather than features-oriented. The
next big task will be to finalize the [documentation website](https://docs.scala-lang.org).
Currently, there is a division between the Scala 2 content and the Scala 3
content, although lots of content is effectively independent of the actual
version of Scala. We plan to unify better the Scala 2 and Scala 3 content to
make it easier to navigate through the website. Last, the Scala 3 compiler
team would like to have the ability to edit (some of) the documentation from
within the same Git repository as the compiler implementation (currently,
the documentation lives in the repository
[scala/docs.scala-lang](https://github.com/scala/docs.scala-lang)
whereas the compiler implementation lives in the repository
[lampepfl/dotty](https://github.com/lampepfl/dotty)).
With the help of VirtusLab, we will provide a technical solution to this
problem.

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
- We will continue to spread the word about our
  [MOOCs](https://docs.scala-lang.org/online-courses.html),
- We will speak at tech conferences to encourage people to contribute to the 
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

More generally, we will publish a collection of best practices in the area 
of making open source projects sustainable.

#### Google Summer of Code

The Scala Center has been accepted as a mentor organization for [Google 
Summer of Code 2022](https://summerofcode.withgoogle.com/). We will 
coordinate discussions between mentees and mentors, review proposals, assign 
them to mentors, and submit them to the Google Summer of Code organization.

#### Scala Improvement Process (SIP)

The [Scala Improvement Process](https://docs.scala-lang.org/sips/index.html) 
is a process for submitting changes to the Scala language. It aims to evolve 
Scala openly and collaboratively. However, that process was paused in the 
past couple of years. We will overhaul the process to make it more 
sustainable. This will ensure that proposals from the community always get 
feedback, and move on throughout the process.

#### Scala Developer Survey

We will publish a survey to collect facts about the current trends and 
habits within the Scala community.

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
