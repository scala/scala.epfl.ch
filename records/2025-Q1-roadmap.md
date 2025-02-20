---
layout: contact
title: Scala Center Roadmap for 2025 Q1
---

This page lists the projects that the Scala Center plans to work on during 2025 Q1.
We also post regular updates about our projects on the [Scala Contributors forum](https://contributors.scala-lang.org/c/scala-center/25).

To have more information about our _completed_ projects, please see the [quarterly activity reports]({% link records.md %}).

## Roadmap for 2025 Q1
{: .no_toc}

The following sections present our plan for the current quarter.
Every project description is followed by the concrete results we will deliver and their expected outcome on the Scala community.

Our engineering team will soon be reduced to a single half-time employee.
The scope of this roadmap reflects that situation.

* Table of Contents
{:toc}

### Language, Compiler, Standard Library

Our mission is to reduce the number of bugs in the compiler implementation, to help the community to contribute to these tools, and to make sure they evolve in a way that takes into account the needs of the community.

#### Scala Improvement Process

The [Scala Improvement Process](https://docs.scala-lang.org/sips/index.html) is a process for submitting changes to the Scala language.
It aims to evolve Scala openly and collaboratively.

We hold regular committee meetings, which we both coordinate and participate in.

### Documentation and Education

Our mission is to improve the structure and content of the website, to create and maintain high-quality online educational content (including online courses), and to help the community to contribute to the website.

#### Merge the Scala 2 and 3 books

During the previous year, we brought the Scala 3 book up to date with the content available in the Scala 2 book.
It is now time to merge them to simplify the documentation structure.
Moreover, we will replace the Tour of Scala by a single section at the beginning of the common book.

Note that the Scala 3 book covers Scala 2 as well.
Systematic version tabs allow the readers to consult the same documentation in either version.

#### Scala 3 language specification

In 2024, we updated the Scala 3 specification with all the core changes brought by Scala 3.
We will finish the effort of integrating the remaining aspects from the Scala 3 reference.

### Developer Experience

Our mission is to make sure the tools Scala developers use to edit, analyze, navigate through, transform, compile, run, and debug Scala programs are as easy to use as possible, that they work reliably for everyone, and deliver a great developer experience.

#### The Scala 3 expression compiler

For Scala 3 only.

The expression compiler is the underlying technology powering "evaluate expression" features in Metals.
Now that the expression compiler has been stabilized, we will move its Scala 3 support to the Scala 3 compiler repository.

First, this will reduce maintenance efforts.
The expression compiler will be released automatically as part of the Scala 3 release process.
Users of Scala 3 will directly benefit from the full debugging features upon release.

Second, this will add a significant amount of tests for debugging features to the CI process of Scala 3.
It will ensure that changes to the compiler do not break the debugging experience of users.
Besides the expression compiler per se, tests cover debugging info such as line numbers, which IntelliJ relies on as much as Metals.

Similar work for Scala 2 would not have as much impact, as the Scala 2 compilation pipeline changes less often.

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
