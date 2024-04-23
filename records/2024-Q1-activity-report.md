---
layout: contact
title: Scala Center Activity Report for 2024 Q1
---

Scala Center team:
Darja Jovanovic, 100%;
Anatolii Kmetiuk, 100% until March 15;
Adrien Piquerez, 80%;
Jamie Thompson, 100%;
Sébastien Doeraene, 100%;
Guillaume Martres, 20%;
Valérie Meillaud: 30%.
VirtusLab team: Jędrzej Rochala, 100%.

## At a Glance
{: .no_toc}

* Table of Contents
{:toc}


## Language, Compiler, Standard Library

### Maintainance of the Scala 3 Compiler

For Scala 3.

Every month, about 100 new issues are opened on [the Scala 3 repository](https://github.com/lampepfl/dotty/).
The project welcomes any help it can get in triaging, bug-fixing, PR reviewing, etc.

Our goal is to solve long-standing issues while keeping up with new ones.
We also aim to get more people involved in working on the compiler to ensure the sustainability of the project.

We contributed PRs for bug fixes in various areas.

### Improving Performance of the Scala 3 compiler

For Scala 3.

#### Support for pipelined concurrent compilation

We merged PRs [scala/scala3#18880] and [scala/scala3#20153], which from Scala 3.5.0 enable support for pipelined builds in sbt (pipelined Scala 2 builds are supported since 2020).
Pipelining enables multi-project builds to increase throughput by compiling upstream sub-projects in parallel with a downstream sub-project.
In the contributors forum, [early testers report](https://contributors.scala-lang.org/t/try-out-pipelined-builds-in-scala-3-5-nightly/6627) improvements from 10%-30% in build times.
The maximum potential for improvements really depends on each individual build layout.

The pipeline compilation mode will act as the basis for further compilation modes that can increase parallelism in builds, such as an initial outline typing mode, currently incubating in PR [scala/scala3#19589].

We also improved the Java type checker in the compiler (PR [scala/scala3#19747]), which is necessary for pipeline builds which export Java definitions to TASTy format.

#### Computing compilation metadata in parallel.

Another way to potentially improve compilation times is move computation of various data formats used by Scala tooling to a separate thread.
We are currently supervising a student project at EPFL to compute Zinc metadata using TASTy Query -- which can be offloaded to a separate thread after the pickler phase is completed.
Typically, computation of Zinc metadata adds 10% time to the build of a single project.
We hope to reduce that overhead.

### Scala.js-specific Minifier

For Scala 2 and 3.

During this quarter, we implemented various optimizations reducing code size of Scala.js projects.
The main ingredient was a global property renamer for the Scala.js linker, which we call the minifier.
The minifier is enabled by default when the Google Closure Compiler cannot be used, which is notably the case when emitting ECMAScript modules.

Other optimizations apply in all configurations, and include:

* purity analysis of constructors in order to better elide unused fields and modules
* dealiasing of `val`s in top-level objects when their right-hand-sides are constants, references to other objects, or references to fields of other objects
* "inlining" of local `val`s that are used only once

We shipped all of these as part of [Scala.js 1.16.0](https://www.scala-js.org/news/2024/03/19/announcing-scalajs-1.16.0/).
Most feedback reports from users suggest converge on 35-40% code size reduction for real-world applications.

### WebAssembly backend for Scala.js

For Scala 2 and 3.

In collaboration with VirtusLab, we have developed an initial version of a [WebAssembly backend for Scala.js](https://github.com/tanishiking/scala-wasm).
The implementation already passes the full test suite of Scala.js, with the exception of `@JSExport`ed members in Scala classes.

The code produced is not yet optimized.
Code size is however comparable to the minified output for JavaScript.
This suggests that after optimizations, we will reach significantly smaller bundles.
We do not know yet what the performance profiles will look like.

The next steps on this project are to merge the work into Scala.js core and ship it as part of the next release.
We will then look into enabling the Scala.js optimizer in the WebAssembly backend.

### TASTy Reader for Scala 2

For Scala 2.

We added support in Scala 2.13.13 (PR [scala/scala#10670][scala/scala#10670]) for TASTy produced by Scala 3.4.
This update integrates support for two major changes:

* the ability to read from classpath entries that only contain TASTy files, such as when using pipeline compilation.
* the ability to read Java definitions from TASTy.

### Scala Improvement Process

For Scala 3.

The [Scala Improvement Process](https://docs.scala-lang.org/sips/) coordinates the evolution of the language.
It ensures that the decisions are made by taking into account the needs of all the stakeholders of the language.

Several SIPs were approved for Implementation in the past quarter.
The binary literals SIP made it all the way to final approval, and will ship in Scala 3.5.0.

## Developer Experience

### Debugger in Metals

For Scala 2 and 3.

We released the [4.x major version](https://github.com/scalacenter/scala-debug-adapter/releases/tag/v4.0.0) of the Scala Debug Adapter, which features pretty stack traces, run-time evaluation and hot-code replace:

* In the pretty stack traces (scala 3 only) we print the fully typed Scala signatures instead of the erased Java ones.
* The run-time evaluator (Scala 2 and 3) is able to evaluate Java-like expressions using run-time information of the program. It speeds up the watches and the debug console, and allows to access members without casting. The compiler-based evaluation is still used as a fall-back to evaluate Scala expressions: overload resolution, pattern matching, lambdas, implicit resolution, macro expansion, etc.
* The hot-code replace feature (Scala 2 and 3) allows to re-compile code during the debug session and to load it. It changes the implementation of methods that are already loaded by the debugged JVM.

This new version of the Scala Debug Adapter is available in Metals since version 1.3.0.

### Presentation Compiler

For Scala 3.

We are always working on improving the IDE experience.
During this quarter, we fixed a number of issues in the presentation compiler, which powers autocompletion, signature hints, etc.

We also invested some time into a significant refactoring in the autocompletion implementation.
That refactoring helped us bring two improvements:

* introducing fuzzy search for completions, making them more resilient to user input, and
* improving the heuristic for completions of constructors and `apply` methods to classes and values.

They will be shipped in Scala 3.3.4 in the LTS line, and 3.5.0 in the Next line.

### sbt 2

For Scala 2 and Scala 3.

We pursued the migration of sbt to Scala 3:

* We cleaned up parts of the sbt codebase: [reducing abstraction in Execute](https://github.com/sbt/sbt/pull/7444), [using Tuple.Map instead of AList](https://github.com/sbt/sbt/pull/7456), [removing usage of Manifest](https://github.com/sbt/sbt/pull/7490).
* We fixed many of the pending tests: mostly in [#7522](https://github.com/sbt/sbt/pull/7522), but also in [#7492](https://github.com/sbt/sbt/pull/7492), [#7494](https://github.com/sbt/sbt/pull/7494), [#7517](https://github.com/sbt/sbt/pull/7517), [#7519](https://github.com/sbt/sbt/pull/7519), [#7521](https://github.com/sbt/sbt/pull/7521), and [#7538](https://github.com/sbt/sbt/pull/7538).

We use the [#7462 meta issue](https://github.com/sbt/sbt/issues/7462) to track the progress of porting sbt to Scala 3.

Additionally, we are supporting the development of remote caching in sbt 2 by reviewing pull requests ([#7464](https://github.com/sbt/sbt/pull/7464), [#7525](https://github.com/sbt/sbt/pull/7525)) and contributing ([#7539](https://github.com/sbt/sbt/pull/7539)).

### Zed Editor Support for Scala

For Scala 2 and 3.

The Zed text editor become open source in early 2024, and gathered a lot of attention across the industry.
We investigated adding support for Scala with Metals as an LSP extension.
In the process, we identified and reported a bug in Zed's LSP client implementation (see issue [zed-industries/zed#7091][zed-industries/zed#7091]).
We also coordinated with other community members.
A Scala plugin has now been accepted to the Zed extension store.

### Metals maintenance

For Scala 2 and 3.

We are generally working on improving the stability of Metals.
One major difficulty is that effectively reporting issues is difficult for users, notably in the presence of crashes.

To get better insight into everyday issues, we are implementing a telemetry system inside Metals.
It will allow users to opt in to automatically sending reports in the event of crashes.
We expect that these additional data will help us make Metals more robust in the future.

## Community and Contributor Experience

For Scala 2 and Scala 3 throughout.

### Ambassador Program

We incubated the [Scala Ambassador program](https://github.com/scalacenter/ambassadors).
This is a program to foster a new generation of Scala community leaders, able to competently answer community questions.
Those people will also be empowered to organize local community events and otherwise help their local communities thrive.

Currently, the program is in its early stages, as we welcome our first Ambassadors on an invitation basis.
The program is meant to recognize and support the independent work of active community leaders.
We publicly announced it at Scalar 2024 and [on our website](https://www.scala-lang.org/blog/2024/03/28/ambassadors-initiative.html).

The ambassador program will strengthen the community, amplify the official story around Scala and increase activity in the local Scala communities.

### Google Summer of Code

Google Summer of Code has been a long-standing vehicle for the Scala Center to attract newcomers to the Scala OSS world.

This year, the Scala Center was accepted again as an organization.
We received 15 good proposals from students, supported by 11 mentors from across the Scala community.
We are in the process of submitting the proposals to Google for ranking.
After we find out how many projects Google will accept for the implementation stage, we will mentor students and support other mentors throughout the program.

### Scala.IO

We organized a Scala Spree co-located with the Scala.IO conference.
We also gave a talk there about the Scala 3 Compiler Academy, which covers how to bootstrap and develop similar projects.

### Scalar Conference

At Scalar, Warsaw, we presented a talk about how to use type class derivation "Mirrors for operations, not data".
The talk raises awareness about the new type-class derivation feature of Scala 3.
It proposes new directions to take it in, such as synthesizing web services from descriptions.

Our team also held a booth at Scalar.
At the booth, we answered questions from the community, collected feedback and worked to establish new corporate partnerships.

### Scala Website Scams

In February and March 2024, the Scala community was the target of an elaborate scam scheme.
We took immediate action to warn the community, shut down domain names used by the scammers, and support victims--to the extend possible.

Among the most effective measures we took, we added warning banners to the official Scala websites.
Since the fraudulent sites copied major sections of our websites, many links take potential victims to the real site, where they see our warning.
We have had reports that this actually helped to prevent more people become victims to this scam.

We extensively communicated about the scams and our response.
You can find more details in [an initial warning blog post](https://www.scala-lang.org/blog/2024/03/01/fake-scala-courses.html) and [an update on our response](https://www.scala-lang.org/blog/2024/03/18/scam-response.html).

We have not received further complaints in April, which we hope means the end of this particular attack.

### Scala in Embedded Systems programming

We have been consulting with the Embedded Systems Laboratory at EPFL on a project to create a framework for developing FPGA accelerators in Scala, based upon the Chisel DSL.
We aim to promote Scala's abstraction capabilities to make it easier for hardware engineers to do their work.

### Compiler Sprees

We maintained our involvement in the [Scala 3 Compiler Academy Issue Spree](https://www.scala-lang.org/blog/2022/11/02/compiler-academy.html).
We collaborated with both new and experienced contributors on issues such as [dotty#19464](https://github.com/lampepfl/dotty/pull/19464) and [dotty#19463](https://github.com/lampepfl/dotty/pull/19463).

Since its inception, the compiler spree has helped close [more then a hundred issues](https://github.com/lampepfl/dotty/issues?q=is%3Aissue+sort%3Aupdated-desc+label%3ASpree+is%3Aclosed) with the help of over 80 contributors.

[scala/improvement-proposals#67]: https://github.com/scala/improvement-proposals/pull/67
[scala/scala3#18880]: https://github.com/scala/scala3/pull/18880
[scala/scala-lang#1604]: https://github.com/scala/scala-lang/pull/1604
[scala/docs.scala-lang#2993]: https://github.com/scala/docs.scala-lang/pull/2993
[zed-industries/zed#7091]: https://github.com/zed-industries/zed/issues/7091
[scala/scala#10670]: https://github.com/scala/scala/pull/10670
[pipeline-thread]: https://contributors.scala-lang.org/t/try-out-pipelined-builds-in-scala-3-5-nightly/6627
[scala/scala3#19747]: https://github.com/scala/scala3/pull/19747
[scala/scala3#19589]: https://github.com/scala/scala3/pull/19589
[scala/scala3#20153]: https://github.com/scala/scala3/pull/20153
[scala/scala3#19838]: https://github.com/scala/scala3/pull/19838
