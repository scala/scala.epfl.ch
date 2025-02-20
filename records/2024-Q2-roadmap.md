---
layout: contact
title: Scala Center Roadmap for 2024 Q2
---

This page lists the projects that the Scala Center plans to work on during 2024 Q2.
We also post regular updates about our projects on the [Scala Contributors forum](https://contributors.scala-lang.org/c/scala-center/25).

To have more information about our _completed_ projects, please see the [quarterly activity reports]({% link records.md %}).

## Roadmap for 2024 Q2
{: .no_toc}

The following sections present our plan for the current quarter.
Every project description is followed by the concrete results we will deliver and their expected outcome on the Scala community.

* Table of Contents
{:toc}

### Language, Compiler, Standard Library

Our mission is to reduce the number of bugs in the compiler implementation, to help the community to contribute to these tools, and to make sure they evolve in a way that takes into account the needs of the community.

#### WebAssembly backend for Scala.js

During the first quarter of this year, we implemented an initial WebAssembly backend for Scala.js in collaboration with VirtusLab.
We will now polish it and merge it into Scala.js core.
It will be shipped as part of an upcoming Scala.js version.

Currently, the WebAssembly backend produces correct but unoptimized code.
Further work is necessary to enable the Scala.js optimizer with that backend.

We will also investigate how we can target non-JavaScript WebAssembly hosts.
This will significantly further the reach of the Scala language to new ecosystems.

#### Compiler Performance

In this quarter, we will continue the work we have been doing to improve compiler performance.
In particular, we expect to continue our work on computing metadata in parallel with the main pipeline.

#### Scala Improvement Process

The [Scala Improvement Process](https://docs.scala-lang.org/sips/index.html) is a process for submitting changes to the Scala language.
It aims to evolve Scala openly and collaboratively.

We hold regular committee meetings, which we both coordinate and participate in.

#### Improvement Process for the library

Following the successful launch of the Scala Improvement Process for Scala 3, we are looking to establish a similar process for the Scala Standard Library evolution.
This will be necessary once we effectively implement [SIP-51, Drop Forwards Binary Compatibility of the Scala 2.13 Standard Library](https://docs.scala-lang.org/sips/drop-stdlib-forwards-bin-compat.html).

### Documentation and Education

Our mission is to simplify the structure and content of the website, to create and maintain high-quality online educational content (including online courses), and to help the community to contribute to the website.

#### Getting Started experience with scala-cli

As soon as scala-cli gets officially released as the new Scala command ([SIP-46](https://docs.scala-lang.org/sips/scala-cli.html)), we will update the getting started experience to be based on it.
We will create a new learning path for beginners, recommending the new Scala command.
There will be emphasis on important Scala tooling, and how it helps the developer experience.

#### Continue the fusion of Scala 2 and Scala 3 docs

In the past year, we have progressively fused the documentation of Scala 2 and Scala 3.
In this quarter, we will continue this effort.

#### Standard library API documentation

Compared to other popular languages, the API documentation of our standard library is terse.
While that terseness is somewhat compensated by good collections guides, the Scaladoc remains an important source of documentation, as it is available right in our IDEs.

We will start working on a library-wide review of the API documentation, and will make sure it contains comprehensive, standalone information.

#### Tutorials

We identified tutorials as a form of documentation that is underrepresented in the Scala ecosystem.
As part of the Scala Toolkit effort, we plan to write more tutorials to get things done in Scala.

### Developer Experience

Our mission is to make sure the tools Scala developers use to edit, analyze, navigate through, transform, compile, run, and debug Scala programs are as easy to use as possible, that they work reliably for everyone, and deliver a great developer experience.

#### sbt 2.x

As mentioned in our 2024 Q1 report, work on sbt 2.x is well under way.
One of the main early tasks consists in migrating the existing codebase to Scala 3.

Many tests now pass after the migration, but much remains to be done.
Some macros, in particular, were left behind in the initial migration.
During this quarter, we will contribute to finishing the migration to Scala 3.

In addition, we intend to work on the loading process.
We will investigate how we can make it lighter and faster.

### Community and Contributor Experience

Our mission is to create the best environment for the emergence of a strong Scala ecosystem made of high-quality, reliable, libraries that bring simple solutions to complex problems.

#### Communication

We will conduct actions aiming at communicating a positive image of Scala, and making people excited about it.

- We will regularly share our achievements and engage the community on our projects _via_ our [LinkedIn](https://www.linkedin.com/company/scala-center/) page.
- We will speak at tech conferences and local meetups to encourage people to contribute to the Scala ecosystem, and to let non-Scala programmers know about Scala.

### Maintenance Work

We will also spend a small part of our time reviewing pull requests, triaging issues, and fix issues for the following projects, to make sure important points are addressed:

- Scala 3 compiler
- Scala 2 TASTy reader
- Scala.js
- Scaladex
- Scalafix
- Scastie
- Coursier
- Bloop
- Metals
- sbt
- sbt-dependency-submission
- scala-debug-adapter
- tasty-query
- tasty-mima

## Advisory Board Proposals
{: .no_toc}

For reference, you can see [here](https://github.com/scalacenter/advisoryboard/tree/master/proposals) the list of Advisory Board proposals and their respective status.
