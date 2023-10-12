---
layout: contact
title: Scala Center Roadmap for 2023 Q4
---

This page lists the projects that the Scala Center plans to work on during 2023 Q4.
We also post regular updates about our projects on the [Scala Contributors forum](https://contributors.scala-lang.org/c/scala-center/25).

To have more information about our _completed_ projects, please see the [quarterly activity reports]({% link records.md %}).

## Roadmap for 2023 Q4
{: .no_toc}

The following sections present our plan for the current quarter.
Every project description is followed by the concrete results we will deliver and their expected outcome on the Scala community.

* Table of Contents
{:toc}

### Language, Compiler, Standard Library

Our mission is to reduce the number of bugs in the compiler implementation, to help the community to contribute to these tools, and to make sure they evolve in a way that takes into account the needs of the community.

#### Evolve the Standard Library

The standard library has not changed (except for bug fixes or some performance improvements) since Scala 2.13, which was released almost four years ago.
The compatibility policy of the standard library forbids the addition of new features (new classes or methods).
Furthermore, some bug fixes or performance improvements can not be applied because those compatibility guarantees.

[Dropping the forwards binary compatibility requirement](https://github.com/scala/improvement-proposals/pull/54) is a first step to allow the introduction of new classes or the addition of new members to the existing classes.

We will implement the technical changes in build tools and in Scala.js to make this possible:

* in build tools, make sure that we get the most recent `scala-library` among the library dependencies, like any other library, instead of the one matching the version number of the compiler, and
* in Scala.js, rearrange the distribution mechanism of the `scalalib`, so that we can back-publish newer versions of it for existing versions of Scala.js.

#### Scala Improvement Process

The [Scala Improvement Process](https://docs.scala-lang.org/sips/index.html) is a process for submitting changes to the Scala language.
It aims to evolve Scala openly and collaboratively.

We hold regular committee meetings, which we both coordinate and participate in.

#### Compiler Performance

In this quarter, we will continue the work we have been doing to improve compiler performance.
In particular, we expect to polish our work on pipelining, and further optimize large areas in CPU and memory profiles.

#### Better Compilation Error Messages

The compiler should help developers write correct code instead of "just complaining" about incorrect code.
The compiler should also guide you to write maintainable code, i.e., it should provide linting features.

We started [a request for feedback on compile error messages](https://contributors.scala-lang.org/t/feedback-wanted-confusing-unhelpful-error-messages/6346).
We will then address, to the extent possible, the reported confusing messages, in order to make them better help the developer.

#### Global property renaming for Scala.js

Currently, global property renaming is delegated to GCC -- the Google Closure Compiler.
However, relying on GCC has become increasingly problematic, as they have no intention to support ECMAScript modules the way we need them to.
This means that when emitting ES modules, we deactivate GCC, resulting in larger bundle sizes.

Local and global variable renaming can be performed by other front-end tooling, such as Rollup through Vite.
For property renaming, however, working at the JavaScript semantics level is not enough.
We have to leverage the type information and the closed world assumptions of Scala.js to achieve a similar effect.

We will implement global property renaming in the Scala.js linker, when emitting for `fullLinkJS`, to address those issues.

### Documentation and Education

Our mission is to simplify the structure and content of the website, to create and maintain high-quality online educational content (including online courses), and to help the community to contribute to the website.

#### Scala Website

During this quarter, we will complete the consolidation of the Scala 2 and Scala 3 documentations as a single, unified one.
We are going to provide documentation across the website that reflects the reality of mixed Scala 2.13 and Scala 3 usage.
In each page, we either mark the whole page as specific to either version; or when describing a broader topic, for each code example, we provide tabs that show equivalent examples in either Scala 2.13 or 3.

#### Language Specification

In the past two quarters, we developed and published a first iteration of a [specification for Scala 3](https://scala-lang.org/files/archive/spec/3.4/).
Although the fundamentals are ready (notably a complete rewrite of the type system, compared to Scala 2), there are still a number of Scala 3-only features that we need to integrate.

In this quarter, we plan to integrate the following remaining pieces:

* `extension` methods
* `given` and `using` contextual abstractions
* behavior of structural types based on `Selectable`

Stretch goals include type class derivation with `derives` and meta-programming with `inline def`s and quotes.

### Developer Experience

Our mission is to make sure the tools Scala developers use to edit, analyze, navigate through, transform, compile, run, and debug Scala programs are as easy to use as possible, that they work reliably for everyone, and deliver a great developer experience.

#### Better Stack Traces

The stack traces we get from the JVM are not ideal for Scala developers.
The contain a lot of compiler-generated helpers, and only display the JVM erased types of parameters and result.
These issues make them hard to read and correlate to the source code.

With the help of tasty-query, we are developing a library that links run-time JVM classes and methods to the original TASTy symbols, corresponding to the source code, which we will release during this quarter.
This allows to build better stack traces, where compiler-generated helpers (synthetic methods) are hidden, and where types are the full, original Scala types.

#### Scastie

[Scastie](https://scastie.scala-lang.org) is an online Scala playground that allows everyone to write, run, and share Scala programs from their web browser.
We are continuously improving it.

First, we are going to refactor some aspects of Scastie to build on new foundations that came out of the Tooling Summits.
We will adapt Scastie to use the new stable API for the Presentation Compiler.
We will also coordinate with the other projects that provide worksheets to use a common implementation.

We are going to improve the rendering of types in the Scastie output.
Instead of systematically printing fully qualified types, we will minify them to match the source code for better readability.

We will also finish and ship the support of scala-cli-based snippets, including with multiple files.

Finally, we will keep improving the stability of the integration with Metals and the compiler.

#### sbt 2.x

By design, sbt 1.x uses Scala 2.12.x as for its build scripts.
As Scala 3 matures, we will eventually want a new version of sbt that leverages Scala 3.
The jump will require a new, binary incompatible version of sbt, which will be 2.x.
This is the opportunity to revisit and simplify some of sbt's design to improve the developer experience.

Eugene Yokota wrote a post with [ideas of sbt 2.x](https://eed3si9n.com/sbt-2.0-ideas) about six months ago, and wrote [an initial PR that switches to Scala 3](https://github.com/sbt/sbt/pull/6746).
Those ideas, and others from the community, have also been [discussed on GitHub](https://github.com/sbt/sbt/discussions/7174).

We have started coordinating and evaluating all those ideas at the Scala Center.
We are going to categorize them according to various criteria, in order to effectively prioritize them.
We will also start working on some internal simplifications of the codebase after the switch the Scala 3.

We do not intend to work on all the ideas that are listed, but we plan to create enough favorable conditions for contributors to effectively work on them.
In particular, we will work towards merging that initial PR to switch to Scala 3, as it is impractical for any work to be done before that.

As a stretch goal for this quarter, we will look into the ideas that would contribute to making loading sbt builds faster and lighter, from profile-based optimizations to reducing the number of settings and tasks to resolve and compute.

#### Unblock Scala Steward support for Scala CLI projects

[Scala Steward](https://github.com/scala-steward-org/scala-steward) is a widely used bot that automatically sends PRs to upgrade dependencies in Scala projects.
Currently, its support for scala-cli-based projects is limited.
For example, it is currently not complete enough to be adopted within the Scala Toolkit repository.

We will make sure that support for scala-cli in Scala Steward is complete, in order to improve the developer experience of scala-cli-based projects.

#### Twirl support in Metals

An EPFL student drafted [support for Twirl in Metals](https://github.com/scalacenter/student-projects/issues/7) last semester.
We will polish their work and get it to a state where it can be fully reviewed and merged.

### Community and Contributor Experience

Our mission is to create the best environment for the emergence of a strong Scala ecosystem made of high-quality, reliable, libraries that bring simple solutions to complex problems.

#### Ambassador Program

We are going to develop a set of supportive tools to empower Scala enthusiasts who want to promote Scala better in their workplace and communities.

#### Communication

We will conduct actions aiming at communicating a positive image of Scala, and making people excited about it.

- We will regularly share our achievements and engage the community on our projects _via_ our [LinkedIn](https://www.linkedin.com/company/scala-center/) page,
- We will create an online shop where individuals will be able to give donations to the Scala Center in exchange for goodies,
- We will speak at tech conferences and local meetups to encourage people to contribute to the Scala ecosystem, and to let non-Scala programmers know about Scala,
- We will publish two new videos (already recorded) in the series [Let’s talk about Scala 3](https://www.youtube.com/playlist?list=PLTx-VKTe8yLxYQfX_eGHCxaTuWvvG28Ml) to highlight the strengths of Scala 3.

#### Scala Advent of Code

As in the past two years, we will steward the participation to [Advent of Code](https://adventofcode.com/) for Scala developers.
We will keep [our Scala Advent of Code](https://scalacenter.github.io/scala-advent-of-code/) website updated and encourage community members to submit articles with their solutions.
If necessary, we will also contribute our own.

Our objective is to provide the community with short articles that showcase Scala for the kind of problem-solving proposed by Advent of Code.
In addition, it is a fun way to build a sense of belonging to the Scala community.

#### Fundraising Campaign

We are continuing the fundraising campaing that we started last quarter, and widely announced around Scala Days Madrid.

### Maintenance Work

We will also spend a small part of our time reviewing pull requests, triaging issues, and fix issues for the following projects, to make sure important points are addressed:

- Scala 3 compiler
- Scala 2 TASTy reader
- Scala.js
- Scaladex
- Scastie
- Coursier
- sbt
- scala-debug-adapter
- tasty-query
- tasty-mima

## Advisory Board Proposals
{: .no_toc}

For reference, you can see [here](https://github.com/scalacenter/advisoryboard/tree/master/proposals) the list of Advisory Board proposals and their respective status.
