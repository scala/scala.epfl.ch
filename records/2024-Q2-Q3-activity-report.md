---
layout: contact
title: Scala Center Activity Report for 2024 Q2-Q3
---

Scala Center team:
Darja Jovanovic, 100%;
Adrien Piquerez, 80%;
Jamie Thompson, 100% until July 31st;
Sébastien Doeraene, 100% until June 30th, 50% since then;
Guillaume Martres, 20%;
Valérie Meillaud: 30%.
VirtusLab team: Gabriel Kepka, 100% since July 1st.

## At a Glance
{: .no_toc}

* Table of Contents
{:toc}


## Language, Compiler, Standard Library

### SIP 46 - bundle Scala CLI as the Scala command

For Scala 3.

Starting with Scala 3.5.0, Scala CLI is released in the binary distribution as the `scala` command (PR [scala/scala3#20351](https://github.com/scala/scala3/pull/20351) and PR [scala/scala3#20631](https://github.com/scala/scala3/pull/20631)).
We adapted Scala CLI to support wrapping it in a script that overrides some default options, such as reading from a local classpath.

We also fixed the coursier `install` command to support mixing both JVM and native launchers (PR [coursier/coursier#2975](https://github.com/coursier/coursier/pull/2975)).
This ensured that earlier versions of Scala, including Scala 2, can be used with the newly distributed `scala` command.

### SIP 57 - replace nonsensical `: @unchecked` with `.runtimeChecked`

For Scala 3.

We implemented [SIP 57](https://docs3.scala-lang.org/sips/replace-nonsensical-unchecked-annotation.html) in the PR [scala/scala3#20987](https://github.com/scala/scala3/pull/20987).
It brings a safer and more intuitive way to disable pattern matching exhaustivity checks.
The previous approach could lead to accidental unsoundness issues.

### Maintainance of the Scala 3 Compiler

For Scala 3.

Every month, about 100 new issues are opened on [the Scala 3 repository](https://github.com/lampepfl/dotty/).
The project welcomes any help it can get in triaging, bug-fixing, PR reviewing, etc.

Our goal is to solve long-standing issues while keeping up with new ones.
We also aim to get more people involved in working on the compiler to ensure the sustainability of the project.

We contributed PRs for bug fixes in various areas, notably: `-Xcheck:unused`, annotations, match types, `lazy val`s, named tuples, and the TASTy format.

### Improving Performance of the Scala 3 compiler

For Scala 3.

#### Support for pipelined concurrent compilation

We cleaned up various aspects of the build pipelining implementation based on feedback from users.
Notably, we now write the pipeline tasty in parallel, and detect missing macro dependencies while reporting to the user how to fix the problem (PR [scala/scala3#20139](https://github.com/scala/scala3/pull/20139)).

#### Computing compilation metadata in parallel

We concluded supervision of a student project to compute Zinc metadata in parallel to the compiler using TASTy Query.
The experimental findings suggest that the TASTy Query library has adequate capabilities to perform the task, but has a slow startup due to classpath loading.
We would likely need a layered classpath to share information between repeat compilations for the approach to yield real performance improvements.

### Develocity setup

For Scala 2 and Scala 3.

Gradle is providing us with a [free instance of Develocity](https://develocity.scala-lang.org/) through their [open-source program](https://gradle.com/customers/oss-projects/).
We are partnering with them to integrate Develocity in the Scala 3 compiler build ([#21386](https://github.com/scala/scala3/pull/21386), [#21479](https://github.com/scala/scala3/pull/21479)), with support for:

- Publishing build scans from the CI
- Automatic test retries and flakiness detection
- Build caching (planned for the future)

In parallel, Lukas Rytz from Lightbend started integrating Develocity in the Scala 2 compiler build ([#10848](https://github.com/scala/scala/pull/10848)).

### WebAssembly backend for Scala.js

For Scala 2 and 3.

In Q1, we had developed a proof-of-concept implementation of WebAssembly backend for Scala.js, in collaboration with VirtusLab.
In the past few months, we have polished it and [merged it into Scala.js upstream](https://github.com/scala-js/scala-js/pull/4988).
Huge thanks go to Tobias Schlatter, co-maintainer of Scala.js, for *reviewing* that mega PR of 13,000 lines of code!

In addition to the baseline implementation, we implemented several low-hanging fruit optimizations.
Initial performance measurements are very encouraging, as they show that we can reach a 15% geomean speedup over Scala.js.
We already merged most optimizations into Scala.js.

The WebAssembly backend will be shipped as part of Scala.js 1.17.0.

In order to further improve performance and code size, we will integrate with [`wasm-opt`](https://github.com/WebAssembly/binaryen), a Wasm-to-Wasm optimizer.
We contributed [support for the new Wasm Exception Handling spec in `wasm-opt`](https://github.com/WebAssembly/binaryen/pull/6814), since our backend relies on it.

In parallel, VirtusLab is experimenting with a variant of this backend that targets Wasm runtimes without JavaScript.
This new target will significantly expand the reach of Scala as a language.

### TASTy Reader for Scala 2

For Scala 2.

We added support in Scala 2.13.15 (PR [scala/scala#10811](https://github.com/scala/scala/pull/10811)) for TASTy produced by Scala 3.5.

### Scala Improvement Process

For Scala 3.

The [Scala Improvement Process](https://docs.scala-lang.org/sips/) coordinates the evolution of the language.
It ensures that the decisions are made by taking into account the needs of all the stakeholders of the language.

## Developer Experience

### Scala Toolkit

For Scala 2 and Scala 3.

We released 3 versions of the Toolkit:

- [0.3.0](https://github.com/scala/toolkit/releases/tag/0.3.0): the final version supporting Scala Native 0.4
- [0.4.0](https://github.com/scala/toolkit/releases/tag/0.4.0): dropped support for Scala Native 0.4, and added support for Scala Native 0.5
- [0.5.0](https://github.com/scala/toolkit/releases/tag/0.5.0): updated library versions

### Documentation

For Scala 2 and Scala 3.

We wrote a tutorial on building web servers with Cask, to add to the collection of Toolkit tutorials.
We started adapting the documentation to use `scala-cli` as the new Scala runner, since Scala 3.5.0 is now released.

We also worked on documenting features not yet included in the documentation, such as binding patterns to variables in pattern matching.

### Debugger in Metals

#### The Scala 2 expression compiler

For Scala 2 only.

In the past, we dedicated significantly more time in developing the Scala 3 expression compiler compared to the Scala 2 one.
The Scala 2 expression evaluator barely worked in simple cases, but it could not handle more complex source files.
To resolve this, we rewrote the Scala 2 expression compiler from scratch ([#701](https://github.com/scalacenter/scala-debug-adapter/pull/701)), mirroring the Scala 3 implementation.
The two expression compilers are now aligned closely enough to share the same test suite and be simultaneously maintained.

#### The Scala 3 binary decoder

For Scala 3 only.

We developed the Scala 3 binary decoder to decode stack traces, and printing fully-typed method signatures in the debugger.
In this quarter we extracted it to its own repository ([scalacenter/scala3-binary-decoder](https://github.com/scalacenter/scala3-binary-decoder)), in order to spread its usage to other tools of the ecosystem, such as Scastie and Scala CLI.

Additionally, we made significant progress on decoding fields ([#2](https://github.com/scalacenter/scala3-binary-decoder/pull/2)) and variables ([#3](https://github.com/scalacenter/scala3-binary-decoder/pull/3)), which will be useful for the debugger.

### Scaladex

As part of GSoC, we mentored two Scaladex projects:

* We added an intermediate artifacts page, to list the artifacts of a project by name, ordered by the latest version. For instance, see [cats/artifacts](https://index.scala-lang.org/typelevel/cats/artifacts).
* We extracted additional information from POM files: version scheme, full Scala version and developers. For instance, see [cats/artifacts/cats-core/2.12.0](https://index.scala-lang.org/typelevel/cats/artifacts/cats-core/2.12.0).

### sbt

For Scala 2 and Scala 3.

In addition to addressing various bugs ([#1140](https://github.com/sbt/zinc/pull/1382), [#7568](https://github.com/sbt/sbt/pull/7568)), we actively participated in the development of sbt 2, led by Eugene Yokota.
We centered our efforts on stability ([#7522](https://github.com/sbt/sbt/pull/7522), [#7538](https://github.com/sbt/sbt/pull/7538)) and error reporting ([#7539](https://github.com/sbt/sbt/pull/7539)).
Additionally we investigated straight-to-JAR compilation, which aims to boost performance on Windows and streamline the implementation of cached compilation ([#7592](https://github.com/sbt/sbt/pull/7592)).

## Community and Contributor Experience

For Scala 2 and Scala 3 throughout.

### Google Summer of Code

Google Summer of Code (GSoC) has been a long-standing vehicle for the Scala Center to attract newcomers to the Scala OSS world.

The Scala Center acts as an organization shepherding the projects related to Scala.
As such, we perform administrative tasks and mentor several projects.

The program for this year is coming to an end.
All of this year's 10 projects passed their midterm evaluation several weeks ago.
Final evaluations of students are in progress.

Find our more about the various projects on [the GSoC page for the Scala Center](https://summerofcode.withgoogle.com/programs/2024/organizations/scala-center).

### Scala Matsuri 2024

We presented a talk about build tooling and build performance.
In the talk, we first explained how Scala build tools work.
We then reported on the progress we made in Pipelining and Progress tracking.
Finally, we reviewed the concepts of offloading work via parallel compilation.

### Compiler Sprees

We maintained our involvement in the [Scala 3 Compiler Academy Issue Spree](https://www.scala-lang.org/blog/2022/11/02/compiler-academy.html).

Since its inception, the compiler spree has helped close [more then a hundred issues](https://github.com/lampepfl/dotty/issues?q=is%3Aissue+sort%3Aupdated-desc+label%3ASpree+is%3Aclosed) with the help of over 80 contributors.

## Scala Center Administration

### Sovereign Tech Fund

We applied for a large grant from the [Sovereign Tech Fund](https://www.sovereigntechfund.de/) (STF), a governmental German fund that "supports the development, improvement, and maintenance of open digital infrastructure."
The STF has significantly contributed to the maintenance of several other open-source programming languages in the past, such as Ruby, Python and Node.js.
We are hopeful that they will choose to support Scala as well.
