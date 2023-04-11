---
layout: contact
---

This page lists the projects that the Scala Center will work on during
the current quarter. We also post regular updates about our projects on the
[Scala Contributors forum](https://contributors.scala-lang.org/c/scala-center/25).

To have more information about our _completed_ projects, please see the
[quarterly activity reports]({% link records.md %}).

## Roadmap for 2023 Q2
{: .no_toc}

The following sections present our plan for the current quarter. Every
project description is followed by the concrete results we will deliver, and
their expected outcome on the Scala community.

* Table of Contents
{:toc}

### Language, Compiler, Standard Library

Our mission is to reduce the number of bugs in the compiler implementation,
to help the community to contribute to these tools, and to make sure they
evolve in a way that takes into account the needs of the community.

#### Evolve the Standard Library

The standard library has not changed (except for bug fixes or some performance
improvements) since Scala 2.13, which was released almost four years ago.
The compatibility policy of the standard library forbids the addition of new
features (new classes or methods). Furthermore, some bug fixes or performance
improvements can not be applied because those compatibility guarantees.

[Dropping
the forwards binary compatibility requirement](https://github.com/scala/improvement-proposals/pull/54)
would be a first step to allow the introduction of new classes or the addition of
new members to the existing classes. Then, we will create a process to validate
what should be in the standard library and what should stay outside of it.

#### Scala Improvement Process

The [Scala Improvement Process](https://docs.scala-lang.org/sips/index.html)
is a process for submitting changes to the Scala language. It aims to evolve
Scala openly and collaboratively. We have restarted the process in 2022, and
we now have regular committee meetings.

#### Generalized _Vararg_ Expansion

Currently, vararg methods can be passed either several arguments, or a single
collection of values. We believe it would be useful to also be able to pass
a mix of collections and individual argument values:

~~~ scala
List(1, 2, 3)         // several individual arguments
List((1 to 3)*)       // a single collection
List((1 to 3)*, 4, 5) // a collection and several individual arguments
~~~

We currently have a basic implementation of the feature, we now need to open
a PR and a SIP.

### Documentation and Education

Our mission is to simplify the structure and content of the website, to create
and maintain high-quality online educational content (including online courses),
and to help the community to contribute to the website.

#### Scala Website

We plan to modernize the Scala website, and to integrate better the Scala 2
and Scala 3 documentation.

Following up on [the work]({% link records/2022-Q1-activity-report.md %})
we did in the previous quarter, we plan to polish further the content of the
website.

The next main tasks are:

- Make the [landing page](https://scala-lang.org) more use-case oriented than
  language-feature oriented,
- Include testimonials from adopters of Scala,
- Polish and complete the integration of both Scala 2 and Scala 3 content
  (track our progress in [docs.scala-lang#2481](https://github.com/scala/docs.scala-lang/issues/2481)).

#### Tutorials Documenting the Toolkit

The Scala Toolkit is a collection of libraries that focus on simplicity over flexibility
or power. Our goal is to make it simpler to use Scala for scripting, to perform some very
common programming tasks such as reading and writing files, sending HTTP requests,
parsing JSON etc. We selected MUnit for testing, OS-Lib for working with files and
processes, UPickle for handling JSON and sttp for sending HTTP requests. We packaged and
published the Toolkit in the new [scala/toolkit](https://github.com/scala/toolkit)
repository.

In partnership with VirtusLab and Lightbend, we will contribute to the creation of
tutorials demonstrating how to solve typical programming tasks such as 'How to write
a file?', 'How to serialize an object to JSON?', 'How to send an HTTP request?'. You
can track our progress at [scalacenter/docs.scala-lang#7](https://github.com/scalacenter/docs.scala-lang/pull/7).

#### Language Specification

Currently, there is no proper language specification for Scala 3. A specification would be useful for
developers, when they want to quickly check something about a feature they are using. It would also
be useful to the [Scala Improvement Process](https://docs.scala-lang.org/sips), to provide a basis
for discussions and proposals.

Some pieces of specification
are available in the [Scala 3 Reference](https://docs.scala-lang.org/scala3/reference), but these
pieces are mostly about the differences compared to Scala 2. We will complete them, and publish a
proper language specification for Scala 3.

### Developer Experience

Our mission is to make sure the tools Scala developers use to edit, analyze, navigate
through, transform, compile, run, and debug Scala programs are as easy to use as
possible, that they work reliably for everyone, and deliver a great developer experience.

#### Streamline the Scala Installation Procedure

[Coursier](https://get-coursier.io) is the recommended tool to [set up and manage a Scala
development environment](https://docs.scala-lang.org/getting-started/).

However, currently the installation procedure is a bit complicated to follow: there
are many branches depending on your underlying operating system and computer architectures.

Instead, macOS and Linux users should be able to run a command like:

~~~
curl https://scala-lang.org/setup.sh | sh
~~~

That would automatically download the right binaries and invoke `cs setup`.

For Windows users, we would like to fix the following issues:
[dotty#12550](https://github.com/lampepfl/dotty/issues/12550),
[coursier#1855](https://github.com/coursier/coursier/issues/1855),
[coursier#1858](https://github.com/coursier/coursier/issues/1858).

You can track our progress [here](https://contributors.scala-lang.org/t/bugfixes-and-seamless-installation-process-for-coursier/6052).

#### Reduce the Number of Ways to Import Scala Projects in IDEs

Currently, when starting new projects in Metals the build server that is used by default is Bloop. Part of this is for historical reasons, but part of it is also due to the speed of Bloop and the integrations that exist for it. Bloop has been incredibly important in the Build Server arena. However, there is also BSP implementation in sbt and in Mill and even when a `.bsp/<build-tool>.json` entry exists, Metals will still force Bloop on the user unless they manually switch. This can cause confusion and also may add extra steps into choosing a build server that shouldn't be needed.

This problem also exists in a different way in IntelliJ when you open for example an sbt project that has an existing `.bsp/sbt.json` file you'll be prompted to import the project either as a BSP project or an sbt project. Arguably, newcomers have no idea what BSP is, and they shouldn't have to.

We'd like to minimize the number of ways to import projects and revisit the default choices
that Metals makes of using Bloop no matter the build tool. The aim is to make
the experience a newcomer has smoother, abstracting away things like Bloop and
BSP, while still allowing for a powerful user experience for advanced users. Read the full roadmap and progress
reports [here](https://contributors.scala-lang.org/t/revisiting-the-default-build-server-for-metals-roadmap/6054).

#### Bring the Compiler’s Suggestions into the IDEs

Currently, IDEs such as IntelliJ and Metals provide “Quick fix” actions able to
fix some types of errors in Scala programs. The way these actions are currently
implemented relies on parsing and analyzing the text output of the compiler.
This is not efficient because any new “Quick fix” requires additional work in both
IntelliJ and Metals.

Instead, we would like the compiler itself to produce structured information
that could be automatically processed by the IDEs. Thus, providing a “Quick
fix” would only require some little work in the compiler, and the result
would be available in both IntelliJ and Metals.

#### Scala Debugger

The [scala-debug-adapter](https://github.com/scalacenter/scala-debug-adapter)
is an implementation of the Debug Adapter Protocol for Scala. It allows users
of VSCode to debug their Scala programs, using features such as breakpoints,
conditional breakpoints, debug console, log-points and more.

We would like to improve the following points:

- Implement a faster expression evaluator for simple expressions (read a more
  detailed description [here](https://github.com/scalacenter/student-projects/issues/9)),
- Filter out synthetic method from the call-stack (read a more detailed description
  [here](https://github.com/scalacenter/student-projects/issues/11)),
- Add support for step-by-step execution of programs that contain inlined
  method calls (read a more detailed description
  [here](https://github.com/scalacenter/student-projects/issues/8)).

#### Create a Stable API for the Scala 3 Presentation Compiler

Currently, Metals works only for a limited subset of Scala 3 versions. Furthermore, we need to publish
a new release of Metals after every new release of the compiler to support it.

We would like to create a stable API for the Scala 3 presentation compiler to untie Metals to the compiler
release cycle and support a wider range of Scala 3 versions (including experimental versions of Scala 3).

You can track our progress [here](https://contributors.scala-lang.org/t/stable-presentation-compiler-api/6139).

#### Fix the “Maven Coordinates” of sbt Plugins

The Maven coordinates of sbt plugins do not conform to the Maven specification,
as described in [sbt#3410](https://github.com/sbt/sbt/issues/3410). This is
causing a number of issues:
- Maven cannot resolve sbt plugin artifacts.
- Other resolution tools, like Coursier, must implement some sbt-specific hack to resolve them.
- Some Maven proxies cannot check the validity of sbt plugins and they reject them.
- The number of downloads of sbt plugins are unavailable on [oss.sonatype.org](https://oss.sonatype.org/).
- [javadoc.io](https://javadoc.io/) cannot find the scaladoc of sbt plugins.
- And more

We implemented a solution that enables a smooth transition to valid Maven pattern of sbt plugins in [sbt#7096](https://github.com/sbt/sbt/pull/7096). This solution will be available in sbt 1.9.x, with bidirectional compatibility: sbt 1.9.x will publish the valid and legacy artifacts of sbt plugins, and will be able to resolve the valid or legacy artifacts of sbt plugins.

The next steps are to adapt sbt 2.x to publish sbt plugins with valid coordinates,
and to update Scaladex to correctly index sbt plugins published with the new format.

#### Twirl Support in Metals

[Twirl](https://www.playframework.com/documentation/2.8.x/ScalaTemplates) is a
template language and engine for Scala. The Twirl templates contain blocks of
Scala code, and they compile to Scala functions.

We will add support for Twirl files in Metals by using the Twirl engine.
Corresponding feature request: [metals-feature-requests#50](https://github.com/scalameta/metals-feature-requests/issues/50).

### Community and Contributor Experience

Our mission is to create the best environment for the emergence of a strong Scala
ecosystem made of high-quality, reliable, libraries that bring simple solutions to
complex problems.

#### Scastie

[Scastie](https://scastie.scala-lang.org) is an online Scala playground that allows
everyone to write, run, and share Scala programs from their web browser.

Currently, the dependencies and compiler options of a Scastie program are modeled
as an sbt build definition. This approach has some drawbacks: the configuration of
the program is separate from its code, and in order to run a Scastie program locally,
users have to download a zip file containing an sbt project definition and then
use `sbt`, and, last, the loading time of sbt creates a significant overhead.

As an alternative, we would like to allow the users to configure their programs
via [configuration directives embedded in comments](https://scala-cli.virtuslab.org/docs/guides/configuration#using-directives).

You can track the progress of this project [here](https://github.com/scalacenter/student-projects/issues/10).

Another current limitation of Scastie is that programs have to be contained in
a single file. This can be an issue when using macros, which require separate
compilation, or when working on a large program.

We would like to add support for multiple files to fix those issues. This has
impacts on many levels, including the UI design. You can track the progress of
this project [here](https://github.com/scalacenter/student-projects/issues/12).

#### Scala Contributors Academy

We have been organizing for almost two years now recurring Sprees to onboard
new contributors to the Scala 3 compiler. In a [blog post](https://www.scala-lang.org/blog/2022/11/02/compiler-academy.html)
in Fall, we explained how we were creating small teams of 2-3 contributors hacking
together, remotely, on the Scala 3 compiler. We also shared the YouTube channel of
the [Scala 3 Compiler Academy](https://www.youtube.com/channel/UCIH0OgqE54-KEvYDg4LRhKQ),
where we regularly post educational videos about how the compiler works.

We would like to expand the scope of the academy to projects outside the compiler,
and outside the Scala Center. We will train local Scala user groups to conduct their
own iterations of the Sprees in their city, offline.

#### Communication

We will conduct many actions aiming at communicating a positive image of Scala,
and making people excited about it.

- We will regularly share our achievements and engage the community on our
  projects _via_ our [LinkedIn](https://www.linkedin.com/company/scala-center/)
  page,
- We will create an online shop where individual will be able to give
  donations to the Scala Center in exchange for goodies,
- We will speak at tech conferences and local meetups to encourage people to contribute to the
  Scala ecosystem, and to let non-Scala programmers know about Scala,
- We will publish two new videos in the series [Let’s talk about Scala
  3](https://www.youtube.com/playlist?list=PLTx-VKTe8yLxYQfX_eGHCxaTuWvvG28Ml)
  to highlight the strengths of Scala 3.

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
