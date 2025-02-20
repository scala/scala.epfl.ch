---
layout: contact
title: Scala Center Roadmap for 2024 Q1
---

This page lists the projects that the Scala Center plans to work on during 2024 Q1.
We also post regular updates about our projects on the [Scala Contributors forum](https://contributors.scala-lang.org/c/scala-center/25).

To have more information about our _completed_ projects, please see the [quarterly activity reports]({% link records.md %}).

## Roadmap for 2024 Q1
{: .no_toc}

The following sections present our plan for the current quarter.
Every project description is followed by the concrete results we will deliver and their expected outcome on the Scala community.

* Table of Contents
{:toc}

### Language, Compiler, Standard Library

Our mission is to reduce the number of bugs in the compiler implementation, to help the community to contribute to these tools, and to make sure they evolve in a way that takes into account the needs of the community.

#### Scala.js-specific minifier

At the beginning of this year, we implemented an initial version of a global property renamer for the Scala.js linker.
The results are very promising, but they are not enough to be on par with what the Google Closure Compiler offers.

In this quarter, we will improve on what we have to get a generalized Scala.js-specific minifier.
Strategies we are looking into include prototype compression, code factorization, and better dead code elimination based on a purity analysis.

We intend to ship this new minifier in the first half of this quarter, as part of Scala.js 1.15.1.

#### Compiler Performance

In this quarter, we will continue the work we have been doing to improve compiler performance.
In particular, we expect to continue our work on pipelining.

#### Scala Improvement Process

The [Scala Improvement Process](https://docs.scala-lang.org/sips/index.html) is a process for submitting changes to the Scala language.
It aims to evolve Scala openly and collaboratively.

We hold regular committee meetings, which we both coordinate and participate in.

### Improvement Process for the library

Following the successful launch of the Scala Improvement Process for Scala 3, we are looking to establish a similar process for the Scala Standard Library evolution.
This will be necessary once we effectively implement [SIP-51, Drop Forwards Binary Compatibility of the Scala 2.13 Standard Library](https://docs.scala-lang.org/sips/drop-stdlib-forwards-bin-compat.html).

#### Better Compilation Error Messages

The compiler should help developers write correct code instead of "just complaining" about incorrect code.
The compiler should also guide you to write maintainable code, i.e., it should provide linting features.

As follow-up to our work on match types from the past 6 months, we will work on improving diagnostics for errors involving match types.

### Documentation and Education

Our mission is to simplify the structure and content of the website, to create and maintain high-quality online educational content (including online courses), and to help the community to contribute to the website.

#### Getting Started experience with scala-cli

As soon as scala-cli gets officially released as the new Scala command ([SIP-46](https://docs.scala-lang.org/sips/scala-cli.html)), we will update the getting started experience to be based on it.
We will create a new learning path for beginners, recommending the new Scala command.
There will be emphasis on important Scala tooling, and how it helps the developer experience.

#### Standard library API documentation

Compared to other popular languages, the API documentation of our standard library is terse.
While that terseness is somewhat compensated by good collections guides, the Scaladoc remains an important source of documentation, as it is available right in our IDEs.

We will start working on a library-wide review of the API documentation, and will make sure it contains comprehensive, standalone information.

### Developer Experience

Our mission is to make sure the tools Scala developers use to edit, analyze, navigate through, transform, compile, run, and debug Scala programs are as easy to use as possible, that they work reliably for everyone, and deliver a great developer experience.

#### Better Stack Traces

The stack traces we get from the JVM are not ideal for Scala developers.
The contain a lot of compiler-generated helpers, and only display the JVM erased types of parameters and result.
These issues make them hard to read and correlate to the source code.

With the help of tasty-query, we have beend developing a library that links run-time JVM classes and methods to the original TASTy symbols, corresponding to the source code, which we will release during this quarter.
This allows to build better stack traces, where compiler-generated helpers (synthetic methods) are hidden, and where types are the full, original Scala types.

As we are getting close to completion of that library, we are now going to release it, and start leveraging it in various tools: the debugger, scala-cli, etc.

#### ExplicitResultTypes in scalafix for Scala 3

Most rules in scalafix are based on Scalameta trees and SemanticDB information, which makes them portable across Scala 2 and 3.
ExplicitResultType is a significant exception, because it directly uses the Scala presentation compiler.
We will work on porting that rule to Scala 3 to bring scalafix support on par with Scala 2.

#### sbt 2.x

As mentioned in our 2023 Q4 report, work on sbt 2.x has started.
One of the main early tasks consists in migrating the existing codebase to Scala 3.

The initial PR landed in the past quarter, but much remains to be done.
Some macros, in particular, were left behind in the initial migration.
During this quarter, we will contribute to finishing the migration to Scala 3.

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
- sbt
- scala-debug-adapter
- tasty-query
- tasty-mima

## Advisory Board Proposals
{: .no_toc}

For reference, you can see [here](https://github.com/scalacenter/advisoryboard/tree/master/proposals) the list of Advisory Board proposals and their respective status.
