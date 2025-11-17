---
layout: contact
title: Scala Center Activity Report for 2022 Q2
---

Scala Center team: Julien Richard-Foy, 80%; Jamie Thompson, 100%;
Adrien Piquerez, 100%; Valérie Pedroni, 60%; Sébastien Doeraene, 100%;
Darja Jovanovic, 100%.
VirtusLab team: Tomasz Godzik, 100%.

External contractors, part time: Adam Goodman, leadership and
governance expert.

## At a Glance
{: .no_toc}

* Table of Contents
{:toc}

## Tooling

### GitHub Security Alerts in sbt projects

For Scala 2 and Scala 3.

We are collaborating with the Dependabot team at GitHub to build support for their security alerts in sbt projects.
The main goal of this project is to harden the security of sbt projects hosted on GitHub by scanning their dependencies.

We built [scalacenter/sbt-github-dependency-graph](https://github.com/scalacenter/sbt-github-dependency-graph), an sbt plugin that can submit all the dependencies to GitHub, and [scalacenter/sbt-dependency-graph-action](https://github.com/scalacenter/sbt-dependency-graph-action), a GitHub action that can configure and run the sbt plugin in a GitHub workflow. Those projects are being validated and are therefore not ready to be used.

### Scala 3 Expression Evaluation in Metals' Debugger

For Scala 3.

We continued an effort started by VirtusLab to build a powerful expression evaluator for Scala 3.
We added support for private objects, private fields, mutable variables, mutable fields, nested classes, nested methods, macro definitions, lazy fields, enums and value classes.
We put a lot of effort on testing those features properly.
We identified some limitations: the evaluation of local lazy variables is not supported, neither is the evaluation of local methods and local classes in a member of a value class.

Relevant pull requests: [#210](https://github.com/scalacenter/scala-debug-adapter/pull/210),
[#211](https://github.com/scalacenter/scala-debug-adapter/pull/211),
[#214](https://github.com/scalacenter/scala-debug-adapter/pull/214),
[#215](https://github.com/scalacenter/scala-debug-adapter/pull/215),
[#217](https://github.com/scalacenter/scala-debug-adapter/pull/217),
[#219](https://github.com/scalacenter/scala-debug-adapter/pull/219),
[#220](https://github.com/scalacenter/scala-debug-adapter/pull/220),
[#221](https://github.com/scalacenter/scala-debug-adapter/pull/221),
[#222](https://github.com/scalacenter/scala-debug-adapter/pull/222),
[#223](https://github.com/scalacenter/scala-debug-adapter/pull/223),
[#224](https://github.com/scalacenter/scala-debug-adapter/pull/224),
[#226](https://github.com/scalacenter/scala-debug-adapter/pull/226),
[#227](https://github.com/scalacenter/scala-debug-adapter/pull/227),
[#228](https://github.com/scalacenter/scala-debug-adapter/pull/228),
[#229](https://github.com/scalacenter/scala-debug-adapter/pull/229),
[#230](https://github.com/scalacenter/scala-debug-adapter/pull/230).

It will soon be available in a milestone version of the
[scala-debug-adapter](https://github.com/scalacenter/scala-debug-adapter), to be
tested by the users of Metals.

### Scaladex “project page”

For Scala 2 and Scala 3.

We released a new version of the “project page” to improve its readability and usability for the user. As an example, you can go to [this page](https://index.scala-lang.org/typelevel/cats).
It now contains different tabs: the "Project" tab, the "Versions" tab, the "Badges" tab and the "Settings" tab.
The "Project" tab does not mix information from the repository and the artifacts anymore.
The "Versions" tab contain the information about the artifacts.
More information about an artifact is available than before: we now display the release date, the license and a link to the jar and pom files.
The filters in the "Versions" tab are more intuitive than the old dropdown lists: it should be easier to find the desired version of an artifact, given a set of Scala versions and platforms.
All those tabs have faster loading time than the previous project page.

### TASTy-query and TASTy-MiMa

For Scala 3.

TASTy-Query is a work-in-progress library to read TASTy files, Scala 2.13 pickles and Java class files.
It exposes its information as data structures with semantic information about trees, types and symbols.

We significantly expanded the [readme](https://github.com/scalacenter/tasty-query#readme)
of the library with rationale and use cases.

During this quarter, we added type information to most trees and symbols (some corner cases are still missing types).
This includes symbols read from Java class files and Scala 2 pickles.
We found that to be necessary, as any realistic Scala 3 code directly refers to Java and Scala 2 types coming from the standard libraries.

### Solidify Getting Started Experience with Coursier

For Scala 2 and Scala 3.

The `scalac` script installed by Coursier for Scala 3 behaves differently than the scripts
uploaded to GitHub releases (under `lampepfl/dotty`).
This meant that for certain guides on [docs.scala-lang.org](https://docs.scala-lang.org/scala3/guides/tasty-overview.html#what-is-tasty), a reader can not follow along correctly if they use the `scalac` installed by Coursier.

We improved the situation by porting the official `scalac` scripts from shell scripts to Scala in `3.1.3`.
This will make it possible for Coursier to install a feature equivalent `scalac` in the future.
(PR [lampepfl/dotty#15212](https://github.com/lampepfl/dotty/pull/15212), and PR [coursier/apps#157](https://github.com/coursier/apps/pull/157))

### Add Support for Binary Compatible Evolutions to Case Classes

For Scala 3.

Case classes are popular to achieve domain modeling. However, they
come with an important drawback: it is impossible to apply any evolution
(adding/removing fields on a case class) in a backward binary compatible way.
This forces library authors to manually re-implement the features of
case classes that they need (typically, structural equality) at the price of
more verbosity. Other solutions include tools generating code (e.g.
contraband), or experimental macro annotations (e.g. data-class, scalameta).

We started a [pre-SIP discussion](https://contributors.scala-lang.org/t/pre-sip-structural-data-structures-that-can-evolve-in-a-binary-compatible-way/5684) 
to assess the viability of several possible alternative solutions to support,
at the language level, the concept of “structural” data structures that can
evolve in a binary compatible way.

### “setup-scala” GitHub action

For Scala 2 and Scala 3.

We wanted to clarify the way to set up GitHub Actions for the CI of Scala projects.
There used to be [olafurpg/setup-scala](https://github.com/olafurpg/setup-scala)
but that project is not maintained anymore. There are other alternatives
such as [japgolly/setup-everything-scala](https://github.com/japgolly/setup-everything-scala)
or [coursier/setup-action](https://github.com/coursier/setup-action).

However, it turns out that the official
[actions/setup-java](https://github.com/actions/setup-java) does support sbt
projects out of the box. Furthermore, we noticed that open-source contributors
did implement
[caching for sbt projects](https://github.com/actions/setup-java/pull/302).

We have updated our example repository to take advantage of those features
([scalacenter/library-example#94](https://github.com/scalacenter/library-example/pull/94)).

We also updated the workflow starter to enable caching by default
([actions/starter-workflows#1609](https://github.com/actions/starter-workflows/pull/1609)).

### Metals and Bloop

For Scala 2 and Scala 3.

For the last few months, the Metals project focused on providing the remaining
lacking Scala 3 feature and also improve the overall stability of the language
server. This is mostly evidenced in two releases
[v0.11.6](https://scalameta.org/metals/blog/2022/06/03/aluminium) and
[v0.11.3](https://scalameta.org/metals/blog/2022/04/26/aluminium). Releases
`v0.11.4` and `v0.11.5` were bugfix releases and didn't include any significant
changes.

- Continuous work on improving the user feedback in case of issues
  including the improved `Metals Doctor` view, which now shows current
  compilation status, allows to see build target information and shows the
  current server and Java versions used. Contributed by
  [kpodsiad](https://github.com/kpodsiad)

- New “create companion object” code action, which can be invoked by a
  user to quickly create an object and write relevant code in it. Done by
  [zmerr](https://github.com/zmerr)

- Signature help for unapply method now shows properly the matched
  types instead of unapply method signature. Similar improvement will be
  available for Scala 3 from the 3.2.0 version, since the bulk of changes have
  been done by the compiler team.

- Users will now be able to set jvm settings for the Bloop server
  inside of Metals and it will be updated automatically. This was much harder
  previously, because it required finding the right place for the bloop.json
  file manually. As a follow up, Metals will now try to set the Java Home for
  Bloop to be the same as the one used in Metals to avoid mismatches between
  language support and build tool compilation. Done by
  [zmerr](https://github.com/zmerr).

- Metals should now show proper test cases for more complex Munit
  test setups including the ones that use helper methods to produce test cases.
  Contributed by [kpodsiad](https://github.com/kpodsiad)

- Memory usage has been reduced for large code bases thanks to
  [pvid's](https://github.com/pvid) work on the file watching.

- New override completions will now be suggested for the user when
  working in class inheriting from a parent with methods. This was contributed
  by [@tanishiking](https://github.com/tanishiking) and will also soon include
  the `Implement all` code action.

- A number of places were missing proper scaladocs in both Scala 2
  and Scala 3 projects. Now users should be able to see them even if the
  documentation was added only to parent methods.

## Education and Documentation

### Alternative online learning platform with more support for the learners

As part of our mission to produce high-quality education material, we maintain
a set of [online courses](https://docs.scala-lang.org/online-courses.html) that
are published on the platform Coursera. These courses can be used by
individuals to acquire new skills for a job, or by companies to train their
employees.

Our courses provide a cost-effective training (you can get a certificate
of completion for about $100). However, on Coursera they require a
lot of autonomy from the learners. The whole experience is self-paced, and
instructors can’t provide much feedback to the learners. We wanted to provide
an alternative way of learning, where learners could get 1-on-1 meetings
with Scala instructors to get more personalized feedback.

As a consequence, we ported our course [Effective Programming in Scala](https://www.youtube.com/watch?v=MSDJ7ehjrqo)
to publish it to the [Extension School platform](https://www.extensionschool.ch/learn/effective-programming-in-scala).

This platform is complementary with Coursera. We have documented the differences between the online
learning platforms [here](https://docs.scala-lang.org/online-courses.html#learning-platforms).

Last but not least, this platform allows us to propose trainings for companies
interested in teaching Scala to their employees (or new hires).

### Teach with Scala

We believe that Scala is a great language for teaching programming in academia.
Several professors already use it, but we would like to grow this community
of teachers.

We organized a teachers summit on Tuesday 29th of March. We had 13 participants,
and we discussed solutions to increase the number of Scala adopters for
teaching.

Following the summit, we created the forum [https://teachers.scala-lang.org](https://teachers.scala-lang.org/). Everyone who is teaching programming in Scala is
welcome to join!

### Scala Website

For Scala 2 and Scala 3.

This quarter we continued to work on our goal to improve the getting started experience for newcomers visiting
the main Scala website. As a reminder, the long-term goals are to:
- improve usability of the website
- solidify the getting-started experience for newcomers
- show the proven use-cases of the language (rather than only its features)
- communicate the strength of the tools surrounding the language
- reach out to new kinds of users.

To this effect, we achieved the following work:
- We have streamlined the home page to optimise the experience for newcomers. While we recognise that there is still
  more to do here, to date we have done the following:
  - remove from the home page all irrelevant sections
  - removed the distinction between beginning with Scala 2 or Scala 3. Now Newcomers will only see two options:
    "Get Started" (i.e. the first steps to take), and "Learn Scala" (which is where to go once you have set up your
    environment).
  - We added a new section to highlight the new Awesome Scala page on Scaladex. Newcomers will now see a taste of what
    practical tasks they can achieve with Scala right from the homepage, with links to the libraries that support these use-cases.
    (PR [scala/scala-lang#1366](https://github.com/scala/scala-lang/pull/1366), and PR [scala/scala-lang#1371](https://github.com/scala/scala-lang/pull/1371))
- We have updated the quick-links in the title bar to read more clearly (using simpler words), and to link to Scastie
  (PR [lampepfl/dotty#14819](https://github.com/lampepfl/dotty/pull/14819), PR [scala/docs.scala-lang#2363](https://github.com/scala/docs.scala-lang/pull/2363), and PR [scala/scala-lang#1360](https://github.com/scala/scala-lang/pull/1360))
- After listening to community feedback, we re-introduced explicit install instructions to the [install page](https://www.scala-lang.org/download/), with tabs that give specialised instructions for each operating system, also included is information to
  test that your set-up works correctly. We also included the same tabs on the [getting-started guide](https://docs.scala-lang.org/getting-started/install-scala.html) in the docs (PR [scala/scala-lang#1373](https://github.com/scala/scala-lang/pull/1373), and PR [scala/docs.scala-lang#2388](https://github.com/scala/docs.scala-lang/pull/2388))
- We realise that newcomers may have unique circumstances that mean following the getting-started guide does not always
  work. To help, we added a sticky notice to [the guide](https://docs.scala-lang.org/getting-started/install-scala.html) that
  suggests they ask for help in the `#scala-users` channel on Discord.
- At present the index of [docs.scala-lang.org](https://docs.scala-lang.org) is split between Scala 2 and Scala 3, and
  Scala 3 pages have a unique theme and navigation layout, when compared to Scala 2 pages. This has lead to much
  confusion and frustration from users. We are working on merging the two themes into one cohesive theme, and pointing
  out only when strictly necessary that pages are specific to one version of Scala. We are also working on converging
  the two editions of the "Scala Book" hosted on the website, so that a user may "toggle" their preferred version to
  see content optimised for either. (PR [scala/docs.scala-lang#2430](https://github.com/scala/docs.scala-lang/pull/2430))

### An integrated Scala.js ecosystem

For Scala 2 and Scala 3.

We designed content for getting started with Scala.js, Laminar, Vite and ScalablyTyped, as an integrated toolset.
We recorded the first video on the topic.
We are also producing a written tutorial with the same content.

The full project template can be seen [here](https://github.com/sjrd/scalajs-sbt-vite-laminar-chartjs-example).

## Communication

### Let's Talk about Scala 3 Videos

We published a new video [Getting Started with Scala.js + Vite](https://www.youtube.com/watch?v=dv7fPmgFTNA&list=PLTx-VKTe8yLxYQfX_eGHCxaTuWvvG28Ml&index=14&t=522s)
(as part of the “Integrated Scala.js ecosystem” project).

### Scala Center LinkedIn Page

Our [LinkedIn page](https://www.linkedin.com/company/scala-center) is growing in followers and content.

We published 12 posts (consistent with last Q1 posting rhythm) gathering 90 new followers and 50% augmentation in page views and unique visitors.

The Scala Enthusiasts page has now more than 33,912 members (542 new members since last quarter). We repost all of our LinkedIn content on this page and accept new members daily.

## Community, Sustainability, and Governance

### Scala 3 Compiler Academy

For Scala 3.

Scala 3 Compiler Issue Sprees is an OSS sustainability initiative. It has been running for the past 10 months, bringing together compiler enthusiasts from the entire world every three weeks for pair programming sessions to learn the compiler together.

In this quarter, some important changes to the initiative were implemented. We have rebranded it to become the Scala 3 Compiler Academy. We have also started a new project under the Compiler Academy umbrella: the [Compiler Academy YouTube Channel](https://www.youtube.com/channel/UCIH0OgqE54-KEvYDg4LRhKQ). The Channel aims to provide everyone interested with educational videos authored by the compiler's core team and collaborators who explain how different parts of the compiler work. We hope that these educational materials will be used by the people attending Issue Sprees to learn the compiler and increase their proficiency.

After the first month of uptime, the YouTube Channel has achieved the following:
- 4 videos published, totalling around 3.5 hours of content
- 4 videos scheduled for future publishing
- 900+ views on all the videos combined
- 34+ hours of watch time for all the videos combined
- 145 subscribers

The significance of the Compiler Academy project is to ensure long-term sustainability of Scala 3 by transferring knowledge from the core team to the community enthusiasts and fostering their curiosity and interest in compiler engineering.

### Google Summer of Code

The Scala Center [was accepted](https://summerofcode.withgoogle.com/programs/2022/organizations/scala-center) to the program, and we have successfully entered the coding phase with our students. We have:
- 4 projects in 3 areas:
  - Newcomer Experience and Inclusion: with Creative Scala's [Doodle](https://github.com/creativescala/doodle), the library for beginner-friendly graphics programming.
  - Tooling and Developer Experience: with [Scalafix](https://scalacenter.github.io/scalafix/), the library for keeping Scala codebases clean, and [Metals](https://scalameta.org/metals/), the Scala language server.
  - Availability on non-JVM Platforms: with [Scala Native](https://github.com/scala-native/scala-native), the project to compile Scala to the native code that is intended for execution in non-JVM environments, such as embedded systems.
- 4 students participating
- 5 mentors: 2 from VirtusLab, 1 Scala Center graduate and 2 external volunteers

### Community Expansion

We have done research on how to be more welcoming to different groups of newcomers. We have identified the most common backgrounds of the new people coming to Scala and developed a plan on how to better communicate with them. Furthermore, we have developed [two articles](https://github.com/scala/docs.scala-lang/pull/2414) that outline a possible path newcomers from Java and OSS contribution backgrounds could take to get started with Scala. Currently, they are in a draft form, waiting for the completion of a larger refactoring of the Scala 3 documentation portal before integrating with it.

We have also established a professional relationship with [PowerCoders](https://powercoders.org/), the Swiss organization that assists refugees from all over the world to integrate in Swiss economic life by providing them with high-quality trainings in programming and IT. We have pitched to them the idea of introducing Scala as part of their curriculum, researched their existing methodology of education, developed a plan of how Scala Center's existing educational resources can be integrated in that methodology. This work prepares Scala Center for the possible introduction of the Scala focus track in the next PowerCoders' iteration.

### Scala Improvement Process

The [Scala Improvement Process](https://docs.scala-lang.org/sips/index.html)
is a process for submitting changes to the Scala language. It aims to evolve
Scala openly and collaboratively. The process was paused in the
past couple of years. We overhauled the process to make it more
sustainable:

- Like with the previous process, the proposals will eventually be approved or
  rejected by the whole committee, but, before the vote, a small team of three
  committee members only will perform the review,
  - Reviewing a proposal will require less time from the whole committee,
- Proposal reviews will happen on GitHub instead of during the monthly SIP meetings,
  - The content of the reviews will be automatically public, we won’t have to publish
    meeting minutes,
  - The review process won’t be affected by the frequency of the SIP meetings.

This will ensure that proposals from the community always get feedback, and move
on throughout the process.

We have published the new
[specification of the process](https://docs.scala-lang.org/sips/process-specification.html),
and a [submission tutorial](https://docs.scala-lang.org/sips/sip-tutorial.html).

The proposals are now hosted on a dedicated GitHub repository:
[scala/improvement-proposals](https://github.com/scala/improvement-proposals).

We are currently creating the Committee, which is the last step before we can
restart the SIP meetings, and assign proposals to reviewers.

### ScalaCon 2022

[ScalaCon](https://web.archive.org/web/20250101143410/https://www.scalacon.org/) is a series of online conferences designed
to bring the Scala community closer together.

We are in charge of the program and the program committee of
ScalaCon 2022. We received about 50 proposals
of talks, which we reviewed with the other members of the program committee.

### Local Scala Meetups

We decided to help local Scala User Groups, in the radius of 3h train ride, to jumpstart their Scala Meetups, by visiting and giving an “opening” talk. This is great for the local groups and also for our team - to practice public speaking, promote Scala and the Scala Center, and more importantly - to get to meet Scala users, which they did not have the opportunity to do since 2020.

We gave a presentation in April in Lausanne (hosted by the company ZF), and in
June in Zurich (hosted by UBS Digital Factory).

## Compiler maintenance

### Better bytecode for pattern matching and tailrec methods

For Scala 2 and Scala 3.

We improved the bytecode generated for `@tailrec` methods in Scala 3 for the benefit of debuggers.
Previously, they would see a frozen version of the function parameters, as they were when entering the first recursion level.
Now, the parameters themselves are updated on each recursion, so that debuggers will show an accurate view of variables.

We also improved the overall bytecode generation of Scala 2.12, 2.13 and 3 regarding control structures: tests, pattern matches, loops, etc. all now have better bytecode, with less intermediate variables and jumps.
In some cases, the sheer smaller size of bytecode may result in better run-time performance.

These changes have been released in 2.12.16, and will be part of 2.13.9 and 3.2.0.

Relevant pull requests in Scala 3:

* [Reuse the param slots for the tailrec local mutable vars.](https://github.com/lampepfl/dotty/pull/14865)
* [Two more small improvements to the codegen of tailrec methods](https://github.com/lampepfl/dotty/pull/14878)
* [Use explicit destinations in codegen to avoid uselessly jumping around.](https://github.com/lampepfl/dotty/pull/14890)
* [Handle Block and If in BCodeBodyBuilder.genCond().](https://github.com/lampepfl/dotty/pull/15081)

Relevant pull requests in Scala 2:

* [Use explicit destinations in codegen to avoid uselessly jumping around.](https://github.com/scala/scala/pull/10022)
* [Handle Block and If in BCodeBodyBuilder.genCond().](https://github.com/scala/scala/pull/10025)

### Type-class Derivation Improvements

This quarter we have focussed on improving the experience of using the type-class derivation framework included in
Scala 3, more specifically - enhancements to the synthesis of `scala.deriving.Mirror`:
- We can now summon mirrors for generic tuple types, such as `Mirror.Of[Int *: EmptyTuple]` when the size is <= 22 (PR [lampepfl/dotty#15250](https://github.com/lampepfl/dotty/pull/15250))
- Mirror synthesis can now influence type inference, meaning that summoning a mirror can be constrained by type bounds,
  such as requesting a product mirror for types with at least one field. (PR [lampepfl/dotty#15014](https://github.com/lampepfl/dotty/pull/15014))
- We have added a number of improvements to synthesis of mirrors that lead to runtime crashes, or strange error messages.

### Scala.js

For Scala 2 and Scala 3.

We published [Scala.js 1.10.0](https://www.scala-js.org/news/2022/04/04/announcing-scalajs-1.10.0/).
This releases addressed a security vulnerability, registered as [CVE-2022-28355](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-28355), involving `java.util.UUID.randomUUID()`.
If you use Scala.js and have not upgraded to Scala.js 1.10.0 yet, please read [the related security advisory](https://github.com/scala-js/scala-js/security/advisories/GHSA-j2f9-w8wh-9ww4).

Scala.js 1.10.0 also features a new splitting mode, which is most efficient for iterative development, when combined with front-end live-reloading tools such as Vite.
