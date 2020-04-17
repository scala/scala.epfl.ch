---
label: bloop
name: Bloop
web: https://scalacenter.github.io/bloop/
github: https://github.com/scalacenter/bloop
origin:
contributors: [jorge, martinduhem]
status: Active
type: project
active: true
priority: 2
category: tooling
home: false
hide-from-homepage: true
description: Bloop is a command-line tool for fast edit/compile/test workflows. Its primary goal is to compile and test your project as fast as possible, offering a snappy developer experience.

---
Bloop is a command-line tool for fast edit/compile/test workflows. Its primary goal is to compile
and test your project as fast as possible, offering a snappy developer experience. Bloop does not
aim to replace your stock build tool, but rather complement it.

Build tools are complex applications that need to cover a wide range of use cases, from building and
testing your project to deploying it, integrating with external tools, resolving dependencies and
any build-related tasks.

Such a vast array of requirements make build tools like `sbt`, `Maven` and `Gradle` create their own
configuration models and DSLs to be customizable, whether that is programmatically or declaratively.
It is easy that in the process of creating a build tool, performance is sacrificed by ease of
customization, readability or maintenance.

On the other hand, there is also the problem that build tools move slowly and
have a hard time upgrading to new changes upstream (for example, in compiler
APIs). As a result, `Gradle`, `Maven`, `Leiningen`, and `CBT` have not yet been
migrated to Zinc 1.0, [which offers faster incremental compilations than its
predecessor](https://www.scala-lang.org/blog/2017/11/03/zinc-blog-1.0.html). As
a result, users of these tools are not benefiting from the latest state of the
art.

`bloop` aims to fix both problems:

1. It's specialized on only providing as fast as possible edit/compile/test
   workflows, rather than covering all of the needs of general build tool like
   sbt.
2. It allows other build tools to integrate with it.

You can think of `bloop` as a powered CLI for Zinc, rather than as a brand new
build tool -- `bloop` does not aim to replace your stock build tool, rather
complement it.

In practice, this means that when users are only going to compile and test their project, they can
use `bloop` instead of a full-blown resource-hungry build tool; and that generic build tools can
delegate to `bloop` to compile and test users' projects instead of creating their own Scala and Java
integrations, which are hard to maintain.
