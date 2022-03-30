---
layout: contact
title: Scala Center Activity Report for 2022 Q1
---

Scala Center team: Julien Richard-Foy, 60%; Jamie Thompson, 100%;
Vincenzo Bazzucchi, 100%; Adrien Piquerez, 100%; Meriam Lachkar, 100%;
Vincent Derouand, 40%; Valérie Pedroni, intern; Sébastien Doeraene,
100%; Darja Jovanovic, 100%.
VirtusLab team: Tomasz Godzik, 100%.

External contractors, part time: Adam Goodman, leadership and
governance expert.

## At a Glance
{: .no_toc}

* Table of Contents
{:toc}

## Tooling

### Awesome Scala in Scaladex

for Scala 2 and Scala 3.

*The Scala ecosystem is vast. It contains many tools, libraries and frameworks built over many years by numerous organizations, companies and individuals to solve all sorts of problems.
It is also multi-dimensional.
Some libraries support all versions of the language and some are new in Scala 3.
Some libraries support all platforms (JVM, Javascript and Native) and some are specific to one platform.
This richness of the ecosystem makes it hard for newcomers to find the tools and libraries that are right for them.*

As a solution, we designed the [Awesome Scala page](https://index.scala-lang.org/awesome) in Scaladex.
It is updated automatically, loaded dynamically and managed by the library authors.
You can use it to discover the most popular libraries on a Scala version and platform to solve all sorts of problems.
For instance you can easily find a logging library that is available in Scala 3 and Scala.js, or a performance testing tool.

### Scaladex reliability and maintainability

for Scala 2 and Scala 3.

We performed maintenance work on Scaladex to reduce the cost 
of developing new features, to encourage new external contributions, and to 
reduce the number of bugs and downtimes. During Q1, we were able to improve 
the following:

- During the restart of Scaladex, all Sonatype requests are lost, which means that some releases can be missing in Scaladex. To tackle this issue, we have developed an asynchronous process that find missing releases and index them into scaladex ([link](https://github.com/scalacenter/scaladex/pull/908)).
- The process that indexes `pom` files was quite slow and blocking. We improved the performance on this particular process: going from 15s to index one release, to few milliseconds ([link](https://github.com/scalacenter/scaladex/pull/817))
- We have reworked the structure of the Scaladex project by reorganizing the modules folder and simplifying the startup process. We have updated the local projects being indexed to get recent projects and releases. The goal was to simplify the process to develop locally new features and attract new contributors. Finally we have updated the contributing guide of Scaladex. ([link](https://github.com/scalacenter/scaladex/pull/878))
- We have implemented a first admin task: the goal is to automate operations that would improve the maintenance of Scaladex like deleting old releases, or update github information for a particular project. The first one implemented will check for a particular project if any release is missing and then will index it ([link](https://github.com/scalacenter/scaladex/pull/948))

### Github security alerts in sbt projects

for Scala 2 and Scala 3.

*Keeping the software secure is critically important.
Some major threats like [Log4Shell](https://en.wikipedia.org/wiki/Log4Shell) can happen at any time and impact a large number of organizations and companies.
In June 2020 Github released Dependendabot to help developers keep their dependencies updated and secure.
It does not yet support scanning sbt dependencies.*

We collaborated with the Dependabot team at Github to create [sbt-github-dependency-graph](https://github.com/scalacenter/sbt-github-dependency-graph): an sbt plugin that can submit a report of all the dependencies to Github through the experimental Graph Dependency API.
This plugin will be released along with its associated Github action as soon as Github makes the API public.
Thanks to this tool, you will be able to view the [dependency graph](https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph) of your sbt projects in the Github UI and you will receive Dependabot alerts on vulnerable dependencies.

### Getting started with coursier ([SCP-026](https://github.com/scalacenter/advisoryboard/blob/main/proposals/026-solidify-getting-started-with-coursier.md))

for Scala 2 and Scala 3

Last quarter, we had made changes in the coursier CLI to improve the getting started experience.
In this quarter, we followed up on these changes by updating the defaults:

- coursier now installs the official `sbt` distribution, rather than a custom one
- it considers Scala 2 and Scala 3 to be the same application, with different versions (and installs Scala 3 by default)
- we have updated [the Getting Started page](https://docs.scala-lang.org/getting-started/index.html) on the scala-lang.org website, along with related pages (notably, the front page)

### TASTy-query

for Scala 3

[TASTy-query](https://github.com/scalacenter/tasty-query) is a work-in-progress library to read TASTy files, explore them, and ask semantic questions about them.
It is independent from the compiler, and can be used as a building block to implement tools performing static analyses of Scala programs.
An example is TASTY-MiMa, an upcoming tool "like [MiMa](https://github.com/lightbend/mima), but for TASTy".

Previously, TASTy-query could read symbol and tree information from Scala 3 TASTy files.
We added support to read symbol information from Java class files and Scala 2 pickles.
We then started assigning proper semantic types to all TASTy trees.
Many kinds of trees are already supported; applications (i.e., method calls) are in progress.

### Scala.js maintenance

for Scala 2 and Scala 3

We published [Scala.js 1.9.0](https://www.scala-js.org/news/2022/02/14/announcing-scalajs-1.9.0/).
In addition to some bug fixes, this release brings strict `Float` semantics by default.
`Float` values are now always guaranteed to fit in 32-bit floating point data, and all `Float` operations strictly follow IEEE-754 float32 semantics.

### Metals

Recent work within Metals can be best described by the two most recent major
releases:

- https://scalameta.org/metals/blog/2022/01/12/aluminium
- https://scalameta.org/metals/blog/2022/03/08/aluminium

The highlights of that were:

- Java support done together with one of the contributors
  [Arthurm1](https://github.com/Arthurm1), who was the main driving force behind
  the feature. It's now possible to navigate around Java code when using Metals and use such features as document highlighting or code folding.
- Type annotations on code selection for Scala 3 (already previously available
  for Scala 2), which allows users to peek the type of any expression they select.
- Extract value code action, that lets user extract any expression from function parameters into a separate value.
- Simplified way for users to run their current file by using the default Visual
  Studio Code shortcut, which creates a much better experience for new users.
- Test explorer API connected to the effort in Bloop by
  [kpodsiad](https://github.com/kpodsiad). This new feature allows you to 
  see all the tests within your workspace and run the selected ones.
- Add go to definition now works via links for synthetic decorations that show up when hover above such constructs as implicit parameters.
- Improvements to the Metals Doctor diagnostic tool, which help users to figure out what is wrong with their Metals instance.
- Multiple improvements to Scala 3 completions, which continue to improve user experience of typing code with Scala 3.

The main focus of the core contributor team was making sure that with each
release the Metals user experience is better and the server itself is more
stable, which work will continue throughout the year.

### Bloop

The efforts in Bloop focused on updating it's dependencies and reworking the
build structure to be more maintainable. This included:

- Migration effort to enable Bloop clients running on Scala 2.13 (done thanks to
  [kpodsiad](https://github.com/kpodsiad) from VirtusLab). Thanks to that Metals language server can run with Scala 2.13.8 and all the improvements it brings.
- Updating Bloop to use the newest Zinc instead of custom fork, which will be
  released under `1.5.0` after some more testing and will bring all the bugfixes and improvements that can also be enjoyed when using sbt.
- Adding a new testing support for single test cases, which will enable users to run single test cases when using Metals Test Explorer. Also contributed by
  [kpodsiad](https://github.com/kpodsiad)

We also released two bugfix releases:

- https://github.com/scalacenter/bloop/releases/tag/v1.4.13
- https://github.com/scalacenter/bloop/releases/tag/v1.4.12

## Education and Documentation

### Alternative online learning platform with more support for the learners

for Scala 3.

*As part of our mission to produce high-quality education material, we maintain
a set of [online courses](https://docs.scala-lang.org/online-courses.html) that
are published on the platform Coursera. These courses can be used by
individuals to acquire new skills for a job, or by companies to train their
employees.*

Our courses provide a cost-effective training (you can get a certificate
of completion for about $100). However, in the current format they require a
lot of autonomy from the learners. The whole experience is self-paced, and
instructors can’t provide much feedback to the learners. We started a 
collaboration with the [EPFL Extension School](https://extensionschool.ch)
to provide an alternative way of learning, where learners could get 1-on-1 
meetings with Scala instructors to get more personalized feedback. We 
completed all the technical part (integration with the learning platform). 
We will work on the remaining organizational aspect in the next quarter.

### Scala Website

for Scala 2 and Scala 3.

The [Scala Website](https://scala-lang.org) has not seen a major rework since 2013, except for minor maintenance such as: listing new events, community chat rooms and resources, etc.
As of Q4 2021, the website in many ways does not represent the full picture that we would like would-be Scala newcomers to see when visiting the website. As a consequence, new users are likely not to identify what Scala solves for them.
The goals of this project in the long term are to
- improve usability of the website
- to solidify the getting-started experience for newcomers
- to show the proven use-cases of the language (rather than only its features)
- to communicate the strength of the tools surrounding the language
- and to reach out to new kinds of users.

To this effect, we achieved the following work:
- We have removed the split of Scala 2 vs Scala 3 on the landing page, and the download page. This is due to our install steps now being unified between the two versions, so there is no choice for a typical new user to make (PR [scala/scala-lang#1344](https://github.com/scala/scala-lang/pull/1344)).
- We have consolidated the "getting started" steps across all pages into a single page that is now linked from the landing page and download page. It is now clear to a newcomer exactly which steps to follow (PR [scala/scala-lang#1344](https://github.com/scala/scala-lang/pull/1344)).
- Individual download pages have been reorganised into "release" pages. Each release page details the alternative ways to install that release from various package managers, and also for the first time, lists the API docs for that release. Verbose "getting started" steps are removed from the release pages, as they are aimed at more advanced users (PR [scala/scala-lang#1344](https://github.com/scala/scala-lang/pull/1344), PR [scala/scala-lang#1352](https://github.com/scala/scala-lang/pull/1352)).
- The `/download/all` page has been redesigned to list all releases in release order, and also details the most recent releases of each major Scala version. The number of clicks to return to this page has been reduced, and it is linked from more places, such as the landing page and the download page (PR [scala/scala-lang#1348](https://github.com/scala/scala-lang/pull/1348)).
- The link to see all API docs on the landing page previously exposed a raw file-system tree, but now links to a rich and structured document that lists the library, compiler and reflection API for each release (PR [scala/docs.scala-lang#2344](https://github.com/scala/docs.scala-lang/pull/2344), PR [scala/scala-lang#1353](https://github.com/scala/scala-lang/pull/1353)).
- We have opened a PR ([scala/docs.scala-lang#2350](https://github.com/scala/docs.scala-lang/pull/2350)) to migrate the contributing section from the main Scala website to the documentation website. We hope to make it more contemporary, readable, and visible, so that
more users visit it and find it rewarding.
- Internally, we have produced mockups for how we would like to redesign the front page. These will help us plan and schedule the next changes to make.

### Unified Scala.js ecosystem

for Scala 2 and Scala 3

The [Unified Scala.js ecosystem project](https://contributors.scala-lang.org/t/the-scala-centers-roadmap-for-a-unified-scala-js-ecosystem/5568) aims at consolidating the Scala.js ecosystem, so that users can more easily get started and make decisions regarding their choice of libraries.

During this quarter, we listed all the active libraries, tooling, templates and tutorials that we could find about Scala.js.
Armed with this knowledge, we organized a brainstorming meeting (summit) with major actors of the Scala.js ecosystem.
A total of 19 people participated in the meeting.

Among other things, three important conclusions were drawn from the discussions:

- several getting started paths need to be designed, based on a) whether the user knows and likes React.js and b) whether they would like to use pure functional programming,
- the task force that we had planned should be split in two: one focused on the library aspect, and one on the tooling aspect,
- ScalaFiddle is dearly missed, and should be brought back up.

## Community

### MOOCs promotion campaign

for Scala 2 and Scala 3.

To increase the number of Coursera learners, we launched on January 20th a 
promotion campaign on both [Twitter](https://twitter.com/scala_lang) and 
[LinkedIn](https://www.linkedin.com/company/scala-center/). As we are in the early stages of understanding the benefits, we are tracking the statistics and will launch a new campaign based on those indicators. 
A new promotion campaign will start on April 24th on [EPFL MOOCs Facebook page](https://www.facebook.com/cede.epfl).

The [Scala documentation website](https://docs.scala-lang.org/online-courses.html) was restructured to move the information about the MOOCs into a dedicated page, where we included a trailer presenting our online courses. We also published a blog article showing some stats for 2021, and sharing our plans for 2022 regarding online education.

### Scala for Ukrainians

The Scala Center team published a [blog post](https://www.scala-lang.org/blog-detail/2022/03/04/in-support-of-ukraine.html) condemning the war in Ukraine.

Furthermore, we wanted to take part in the global effort and help these refugees as much as we can. We are considering to offer Scala programming classes to Ukrainian (and other) refugees in Switzerland.

We are currently working on this project and hope to start it in the following months.

### Scala Center LinkedIn page

Our [LinkedIn page](https://www.linkedin.com/company/scala-center/) is growing in followers and content.

We published 13 posts ( +8 MOOCs-related posts) gathering 285 new followers, 725 reactions, 18 comments, 49 shares, 83,754 impressions.
The Scala Enthusiasts page has now more than 33,370 members. We repost all of our LinkedIn content on this page and accept new members daily.

### Dotty Project Health Monitoring

This project was to set up a system to reliably track the health status of 
Dotty, as defined by the number and type of new issues, new PRs, and the infrastructure status.

After repeated consultations with the Dotty team and other interested 
stakeholders, such system was set up. A set of rules for the new Issue 
Supervisor role was defined and pushed to the Dotty repository. The role has been successfully implemented for 9 weeks already.

We believe that the new system gives the Dotty team an early warning when there 
is an unexpectedly high amount of new issues from a certain area, as well as when the infrastructure is down. This means that performance regressions and important issues are caught fast, ensuring stability of the compiler.

### Scala Compiler Academy

This project is to evolve the ongoing Issue Spree to become a hub of compiler knowledge where newcomers motivated to learn the compiler can get a streamlined mentorship experience.

**Results**:
- Outreach for potential mentors is in progress. Outreach materials – presentations, videos – were created, and a meeting with the first butch of potential mentors (people with prior experience in Dotty) was conducted. At least 2 from that batch were motivated to come to the spree to help others.
- Technical roadmap to streamline the spree organisation is defined. This includes a website to automate spree registrations as well as a bot to send people reminders about the spree and report on the spree statistics (issues closed, PRs submitted etc)

**Impact**: such a community, in the long run, will ensure sustainability of the Scala 3 compiler project by the virtue of knowledge preservation and transfer from one generation of compiler engineers to the next.

### Scala in Science

This project is to promote Scala in the scientific circles.

**Results:** a project and a workshop is implemented to teach people Scala via programming a space exploration game. The workshop (in a short form) will be presented during EPFL Space Week; we are currently looking for more stakeholders who will be interested to host the workshop.

**Impact:** the project allows to increase the Scala community by attracting scientists to the language. It will also allow us to generate insights as to how scientists use programming languages which will serve as a foundation for improved further outreach to that community.

### Google Summer of Code 2022

The Google program allows newcomers to help out on open source projects 
while getting mentored.

**Results:** we have successfully organized the program up to the current GSoC milestone.

**Impact:** successful implementation of the project will attract new motivated people to Scala that will hopefully stay to contribute to their chosen OSS projects.

### Improving Newcomers Experience

This project consists in understanding better the types of newcomers and the 
roadmaps for improvement of their experience.

**Results:** internal consultations were conducted to define the categories of the newcomers and the vision of their ideal onboarding experience. 5 such categories were defined and the priority ones – Java programmers coming to Scala – were identified.

**Impact:** understanding the categories and what needs to be done to welcome each of them allows to implement those decisions in the future, facilitating the growth of the community in the long run.
